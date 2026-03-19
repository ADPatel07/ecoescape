import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateLodgingReservationSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { getRoomBySlug, getAllRooms } from "@/config/rooms";
import { ArrowLeft, Users, Maximize, Eye, BedDouble, Coffee, Wifi, Droplets, Shield, Phone, MessageCircle, MapPin, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { getCurrentPrice, formatPrice } from "@/services/pricing";

export default function SpaciousApartment() {
  const room = getRoomBySlug("spacious-apartment");
  const allRooms = getAllRooms();
  const relatedRooms = allRooms.filter((r) => r.slug !== "spacious-apartment").slice(0, 2);

  if (!room) return null;

  const currentPrice = formatPrice(getCurrentPrice(room.roomType));

  // LodgingReservation Schema
  const lodgingSchema = generateLodgingReservationSchema({
    name: room.name,
    description: room.longDescription,
    url: `https://ecoescapemukteshwar.com/rooms/${room.slug}`,
    image: room.images[0],
    price: currentPrice,
    priceCurrency: "INR",
    capacity: room.capacity,
    size: room.size,
    bedConfig: room.bedConfig,
    amenities: room.amenities,
    bookingUrl: "https://ecoescapemukteshwar.com/#booking",
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Rooms", item: "https://ecoescapemukteshwar.com/#rooms" },
    { name: room.name },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title={room.metaTitle}
        description={room.metaDescription}
        canonical={`https://ecoescapemukteshwar.com/rooms/${room.slug}`}
        keywords={room.keywords}
        ogImage={room.images[0]}
        jsonLd={[lodgingSchema, breadcrumbSchema]}
      />
      <Header />

      <main className="pt-28 pb-20">
        {/* Breadcrumb */}
        <div className="container max-w-6xl">
          <Link
            to="/#rooms"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Rooms
          </Link>

          {/* Room Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="md:col-span-2">
              <img
                src={room.images[0]}
                alt={room.name}
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
                loading="eager"
              />
            </div>
            <div className="grid grid-rows-2 gap-4">
              <img
                src={room.images[1]}
                alt={`${room.name} - Living Area`}
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
              <img
                src={room.images[2]}
                alt={`${room.name} - Bedroom`}
                className="w-full h-full object-cover rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                Mountain View
              </span>
              <div className="flex items-center gap-1 text-sm text-amber-600">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-medium">4.9</span>
                <span className="text-muted-foreground">(98 reviews)</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-semibold text-foreground mb-4">
              {room.name}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {room.longDescription}
            </p>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-6 text-sm">
              <span className="flex items-center gap-2 text-foreground">
                <Users className="h-5 w-5 text-primary" />
                {room.capacity}
              </span>
              <span className="flex items-center gap-2 text-foreground">
                <Maximize className="h-5 w-5 text-primary" />
                {room.size}
              </span>
              <span className="flex items-center gap-2 text-foreground">
                <Eye className="h-5 w-5 text-primary" />
                {room.view}
              </span>
              <span className="flex items-center gap-2 text-foreground">
                <BedDouble className="h-5 w-5 text-primary" />
                {room.bedConfig}
              </span>
            </div>
          </div>

          {/* Pricing & Booking CTA */}
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6 md:p-8 mb-12 border border-primary/20">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                <p className="text-3xl font-serif font-semibold text-primary">{currentPrice}</p>
                <p className="text-sm text-muted-foreground">per night + taxes</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    window.location.href = "/#booking";
                  }}
                >
                  Check Availability
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => {
                    const msg = encodeURIComponent(
                      `Hi! I'm interested in booking the ${room.name}. Could you provide more details?`
                    );
                    window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank");
                  }}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    window.location.href = `tel:${siteConfig.phone}`;
                  }}
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Features & Amenities */}
            <div className="md:col-span-2 space-y-8">
              {/* Room Features */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Apartment Features
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {room.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                  Amenities Included
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {room.amenities.map((amenity) => (
                    <div key={amenity} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Property Amenities */}
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4">All Rooms Include</h3>
                <div className="grid sm:grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Private entrance for each unit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Coffee className="h-5 w-5 text-primary" />
                    <span>Complimentary tea & coffee</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Droplets className="h-5 w-5 text-primary" />
                    <span>1L bottled water daily</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wifi className="h-5 w-5 text-primary" />
                    <span>High-speed WiFi (5G)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Attractions */}
            <div>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Nearby Attractions
              </h2>
              <div className="space-y-4">
                {room.nearbyAttractions.map((attraction) => (
                  <div
                    key={attraction.name}
                    className="bg-card rounded-xl p-4 border border-border"
                  >
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-foreground text-sm mb-1">
                          {attraction.name}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-1">
                          {attraction.distance}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {attraction.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {room.faqs.map((faq) => (
                <div key={faq.question} className="bg-secondary rounded-xl p-6">
                  <h3 className="font-semibold text-foreground text-sm mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Rooms */}
          {relatedRooms.length > 0 && (
            <div>
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-6">
                Other Accommodation Options
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedRooms.map((relatedRoom) => {
                  const relatedPrice = formatPrice(getCurrentPrice(relatedRoom.roomType));
                  return (
                    <Link
                      key={relatedRoom.slug}
                      to={`/rooms/${relatedRoom.slug}`}
                      className="group bg-card rounded-xl overflow-hidden border border-border hover:border-primary/50 transition-all"
                    >
                      <img
                        src={relatedRoom.images[0]}
                        alt={relatedRoom.name}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold text-foreground mb-2">
                          {relatedRoom.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                          {relatedRoom.shortDescription}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-primary font-semibold">{relatedPrice}</span>
                          <span className="text-xs text-muted-foreground">per night</span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
}
