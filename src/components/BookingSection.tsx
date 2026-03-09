import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar, MessageCircle, Phone, Mail, Send, CheckCircle, Users, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { siteConfig } from "@/config/site";
import { sanitizeName, sanitizePhone, sanitizeEmail } from "@/lib/sanitizer";
import { createWhatsAppMessage, openWhatsAppWithMessage } from "@/services/whatsapp";
import { trackBookingSubmit, trackWhatsAppClick, trackPhoneClick, trackEmailClick } from "@/lib/analytics";
import { getCurrentPrice, formatPrice, getBookingPrice, mapRoomTypeToPricingType } from "@/services/pricing";

const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().min(10, "Please enter a valid phone number").max(15),
  roomType: z.string().min(1, "Please select a room type"),
  checkIn: z.string().min(1, "Please select check-in date"),
  checkOut: z.string().min(1, "Please select check-out date"),
  guests: z.string().min(1, "Please select number of guests"),
  message: z.string().max(1000).optional(),
});

export function BookingSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    message: "",
    needYogaMat: false,
    extraBed: false,
    specialOccasion: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Price summary state for live calculator
  const [priceSummary, setPriceSummary] = useState<{
    pricePerNight: number;
    nights: number;
    totalPrice: number;
    isPeak: boolean;
  } | null>(null);

  // Dynamic room options with current pricing
  const roomOptions = useMemo(() => [
    { value: "suite-mountain-view", label: `Suite with Mountain View (${formatPrice(getCurrentPrice('suite'))}/night)` },
    { value: "spacious-apartment", label: `Spacious Apartment (${formatPrice(getCurrentPrice('apartment'))}/night)` },
    { value: "family-room", label: `Family Room (${formatPrice(getCurrentPrice('familyRoom'))}/night)` },
    { value: "family-room-2", label: `Family Room 2 (${formatPrice(getCurrentPrice('familyRoom2'))}/night)` },
  ], []);

  // Calculate price summary when dates and room type change
  useEffect(() => {
    if (formData.checkIn && formData.checkOut && formData.roomType) {
      const checkIn = new Date(formData.checkIn);
      const checkOut = new Date(formData.checkOut);
      const roomType = mapRoomTypeToPricingType(formData.roomType);

      if (roomType && checkOut > checkIn) {
        const pricing = getBookingPrice(roomType, checkIn, checkOut);
        setPriceSummary({
          pricePerNight: pricing.basePrice,
          nights: pricing.nights,
          totalPrice: pricing.totalPrice,
          isPeak: pricing.isPeakSeason,
        });
      } else {
        setPriceSummary(null);
      }
    } else {
      setPriceSummary(null);
    }
  }, [formData.checkIn, formData.checkOut, formData.roomType]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Step 1: Validate form data with Zod
      bookingSchema.parse(formData);

      // Prepare sanitized booking data
      const formDataObj = {
        name: sanitizeName(formData.name),
        email: sanitizeEmail(formData.email),
        phone: sanitizePhone(formData.phone),
        roomType: formData.roomType,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        guests: formData.guests,
        message: formData.message,
        needYogaMat: formData.needYogaMat,
        extraBed: formData.extraBed,
        specialOccasion: formData.specialOccasion,
      };

      // Step 2: Send WhatsApp message FIRST (primary method - immediate & reliable)
      sendToWhatsApp(formDataObj);

      // Track booking submission
      trackBookingSubmit({
        roomType: formDataObj.roomType,
        guests: formDataObj.guests,
      });
      trackWhatsAppClick('booking-form');

      // Step 3: Show success immediately (after WhatsApp)
      setIsSubmitted(true);
      toast({
        title: "Inquiry Sent via WhatsApp!",
        description: "Please send the message in WhatsApp. We'll respond within 2 hours!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        roomType: "",
        checkIn: "",
        checkOut: "",
        guests: "2",
        message: "",
        needYogaMat: false,
        extraBed: false,
        specialOccasion: false,
      });

      // Step 4: Attempt Formspree in background (fire & forget - non-blocking)
      // This doesn't affect user experience if it fails
      const extraOptions = [
        formDataObj.needYogaMat ? "Yoga mat needed" : "",
        formDataObj.extraBed ? "Extra bed required (Rs. 600/night)" : "",
        formDataObj.specialOccasion ? "Special occasion" : "",
      ].filter(Boolean).join(", ");

      const formspreeData = {
        name: formDataObj.name,
        email: formDataObj.email,
        phone: formDataObj.phone,
        roomType: formDataObj.roomType,
        checkIn: formDataObj.checkIn,
        checkOut: formDataObj.checkOut,
        guests: formDataObj.guests,
        extraOptions: extraOptions || "None",
        message: formDataObj.message || "No additional message",
        subject: `New Booking Inquiry from ${formDataObj.name} - Ecoescape Mukteshwar`,
      };

      // Fire and forget - don't await, don't block
      fetch(siteConfig.formspreeEndpoint, {
        method: "POST",
        body: JSON.stringify(formspreeData),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            console.log("Formspree submission successful");
          } else {
            console.error("Formspree submission failed:", response.status, response.statusText);
          }
        })
        .catch((error) => {
          // Silent error logging for debugging - doesn't affect user
          console.error("Formspree background submission failed:", error);
        });

    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        toast({
          title: "Submission Failed",
          description: "Please try again or contact us directly via WhatsApp.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    trackWhatsAppClick('booking-section');
    const message = createWhatsAppMessage({
      name: formData.name || "Guest",
      email: "",
      phone: "",
      roomType: formData.roomType || "Not selected",
      checkIn: formData.checkIn || "Not selected",
      checkOut: formData.checkOut || "Not selected",
      guests: formData.guests,
      message: formData.message,
      needYogaMat: formData.needYogaMat,
      extraBed: formData.extraBed,
      specialOccasion: formData.specialOccasion,
    });
    openWhatsAppWithMessage(message);
  };

  const sendToWhatsApp = (data: typeof formData) => {
    const message = createWhatsAppMessage({
      name: data.name,
      email: data.email,
      phone: data.phone,
      roomType: data.roomType,
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      guests: data.guests,
      message: data.message,
      needYogaMat: data.needYogaMat,
      extraBed: data.extraBed,
      specialOccasion: data.specialOccasion,
      pricePerNight: priceSummary?.pricePerNight,
      totalPrice: priceSummary?.totalPrice,
      nights: priceSummary?.nights,
      isPeakSeason: priceSummary?.isPeak,
    });
    openWhatsAppWithMessage(message);
  };

  const handleCall = () => {
    trackPhoneClick('booking-section');
    window.location.href = `tel:${siteConfig.phone}`;
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 bg-gradient-forest text-primary-foreground">
        <div className="container max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-12"
          >
            <CheckCircle className="h-16 w-16 mx-auto mb-6 text-accent" />
            <h2 className="text-3xl font-serif font-semibold mb-4">
              Inquiry Sent via WhatsApp!
            </h2>
            <p className="text-lg opacity-90 mb-4">
              WhatsApp should have opened with your pre-filled inquiry message.
            </p>
            <p className="text-base opacity-80 mb-8">
              Please click send in WhatsApp. We'll respond within 2 hours!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="whatsapp" size="lg" onClick={handleWhatsApp}>
                <MessageCircle className="h-5 w-5" />
                Open WhatsApp Again
              </Button>
              <Button variant="heroSecondary" size="lg" onClick={handleCall}>
                <Phone className="h-5 w-5" />
                Call Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="py-20 bg-gradient-forest text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
            Ready for Your Mountain Escape?
          </h2>
          <p className="opacity-90 max-w-2xl mx-auto">
            Book your stay at Ecoescape Mukteshwar and experience the perfect blend of
            nature, comfort, and hospitality.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 md:p-8"
            >
              <h3 className="font-serif text-xl font-semibold mb-6">
                Quick Inquiry Form
              </h3>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="name" className="text-primary-foreground/90">
                    Name *
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  {errors.name && (
                    <p className="text-accent text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="email" className="text-primary-foreground/90">
                    Email *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  {errors.email && (
                    <p className="text-accent text-sm mt-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="phone" className="text-primary-foreground/90">
                    Phone *
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                      placeholder="+91 96678 46787"
                      required
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-accent text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="guests" className="text-primary-foreground/90">
                    Number of Guests
                  </Label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
                    <select
                      id="guests"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full h-10 pl-10 pr-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5+">5+ Guests</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <Label htmlFor="roomType" className="text-primary-foreground/90">
                  Room Type *
                </Label>
                <select
                  id="roomType"
                  name="roomType"
                  value={formData.roomType}
                  onChange={handleChange}
                  className="w-full h-10 px-3 rounded-md bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground"
                  required
                >
                  <option value="">Select a room type</option>
                  {roomOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.roomType && (
                  <p className="text-accent text-sm mt-1">{errors.roomType}</p>
                )}
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="checkIn" className="text-primary-foreground/90">
                    Check-in Date *
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
                    <Input
                      id="checkIn"
                      name="checkIn"
                      type="date"
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
                      min={new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
                  {errors.checkIn && (
                    <p className="text-accent text-sm mt-1">{errors.checkIn}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="checkOut" className="text-primary-foreground/90">
                    Check-out Date *
                  </Label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-primary-foreground/50" />
                    <Input
                      id="checkOut"
                      name="checkOut"
                      type="date"
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="pl-10 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground"
                      min={formData.checkIn || new Date().toISOString().split("T")[0]}
                      required
                    />
                  </div>
                  {errors.checkOut && (
                    <p className="text-accent text-sm mt-1">{errors.checkOut}</p>
                  )}
                </div>
              </div>

              {/* Price Summary - Live Calculator */}
              {priceSummary && (
                <div className="bg-primary-foreground/20 rounded-lg p-4 mb-4 border border-primary-foreground/20">
                  <p className="font-semibold text-primary-foreground">Price Summary</p>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-primary-foreground/90">₹{priceSummary.pricePerNight.toLocaleString("en-IN")} × {priceSummary.nights} night{priceSummary.nights > 1 ? 's' : ''}</span>
                  </div>
                  {priceSummary.isPeak && (
                    <p className="text-accent text-sm mt-1">June Peak Season rates apply</p>
                  )}
                  <p className="text-xl font-bold mt-2 text-primary-foreground">Total: ₹{priceSummary.totalPrice.toLocaleString("en-IN")}</p>
                </div>
              )}

              <div className="mb-4">
                <Label htmlFor="message" className="text-primary-foreground/90">
                  Special Requests (Optional)
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  placeholder="Any special requirements or questions?"
                  rows={3}
                />
              </div>

              {/* Add-on Options */}
              <div className="mb-6 space-y-3">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="needYogaMat"
                    checked={formData.needYogaMat}
                    onCheckedChange={(checked) => handleCheckboxChange("needYogaMat", !!checked)}
                    className="border-primary-foreground/50 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                  />
                  <Label htmlFor="needYogaMat" className="text-primary-foreground/90 cursor-pointer">
                    Need yoga mat for terrace practice?
                  </Label>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="extraBed"
                    checked={formData.extraBed}
                    onCheckedChange={(checked) => handleCheckboxChange("extraBed", !!checked)}
                    className="border-primary-foreground/50 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                  />
                  <div className="flex-1">
                    <Label htmlFor="extraBed" className="text-primary-foreground/90 cursor-pointer">
                      Extra bed required? <span className="text-xs opacity-75">(Rs. 600/night - proper foldable bedding with mattress, linen, blanket & pillow)</span>
                    </Label>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="specialOccasion"
                    checked={formData.specialOccasion}
                    onCheckedChange={(checked) => handleCheckboxChange("specialOccasion", !!checked)}
                    className="border-primary-foreground/50 data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                  />
                  <Label htmlFor="specialOccasion" className="text-primary-foreground/90 cursor-pointer">
                    Celebrating a special occasion?
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                variant="hero"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Inquiry
                  </>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-serif text-xl font-semibold mb-4">
                Prefer to Contact Directly?
              </h3>

              <div className="space-y-4">
                <Button
                  variant="whatsapp"
                  size="xl"
                  className="w-full"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us Now
                </Button>

                <Button
                  variant="heroSecondary"
                  size="xl"
                  className="w-full"
                  onClick={handleCall}
                >
                  <Phone className="h-5 w-5" />
                  Call {siteConfig.phoneDisplay}
                </Button>
              </div>
            </div>

            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="font-semibold mb-4">Email Us</h4>
              <div className="space-y-3 text-sm">
                <a
                  href={`mailto:${siteConfig.email.reservations}`}
                  className="flex items-center gap-3 hover:text-accent transition-colors"
                  onClick={() => trackEmailClick(siteConfig.email.reservations)}
                >
                  <Mail className="h-5 w-5" />
                  <span className="break-all">{siteConfig.email.reservations}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email.general}`}
                  className="flex items-center gap-3 hover:text-accent transition-colors"
                  onClick={() => trackEmailClick(siteConfig.email.general)}
                >
                  <Mail className="h-5 w-5" />
                  <span className="break-all">{siteConfig.email.general}</span>
                </a>
              </div>
            </div>

            {/* Trust Message */}
            <div className="text-center text-sm opacity-80">
              <p className="mb-2">💬 Quick Response Guaranteed</p>
              <p className="mb-2">✅ Secure Booking</p>
              <p>🔒 Your Privacy Protected</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
