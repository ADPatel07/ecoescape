import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Star } from "lucide-react";
import heroImage from "@/assets/hero-sunrise.webp";

export function HeroSection() {
  const scrollToBooking = () => {
    const booking = document.getElementById("booking");
    if (booking) {
      booking.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in booking at Ecoescape Mukteshwar. Could you help me with availability?"
    );
    window.open(`https://wa.me/919667846787?text=${message}`, "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sunrise view over the Himalayan mountains from the terrace of Ecoescape Mukteshwar boutique homestay"
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          width={1920}
          height={1080}
          sizes="100vw"
          srcSet={`
            ${heroImage} 1920w,
            ${heroImage} 1280w,
            ${heroImage} 640w
          `}
        />
        <div className="absolute inset-0 bg-hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 container pt-[180px] pb-20">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-sm font-medium text-foreground">
              4.9 · 100+ Happy Guests
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-semibold text-[hsl(40_30%_98%)] leading-tight mb-4 animate-fade-in-up"
          >
            Wake up to Himalayan Sunrises
            <br />
            <span className="text-accent">at Ecoescape Mukteshwar</span>
          </h1>

          {/* Subtext */}
          <p
            className="text-lg md:text-xl text-[hsl(40_20%_90%)] mb-8 max-w-xl animate-fade-in-up"
          >
            Your boutique eco-homestay in the Kumaon Himalayas
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          >
            <Button
              variant="hero"
              size="xl"
              onClick={scrollToBooking}
              className="group"
            >
              <Calendar className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Check Availability
            </Button>
            <Button
              variant="whatsapp"
              size="xl"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Us
            </Button>
          </div>

          {/* Quick Stats */}
          <div
            className="flex flex-wrap gap-8 mt-10 pt-10 border-t border-[hsl(40_20%_90%/0.2)] animate-fade-in"
          >
            <div>
              <div className="text-2xl font-serif font-semibold text-[hsl(40_30%_98%)]">4.9 ★</div>
              <div className="text-sm text-[hsl(40_20%_85%)]">200+ reviews</div>
            </div>
            <div>
              <div className="text-2xl font-serif font-semibold text-[hsl(40_30%_98%)]">100+</div>
              <div className="text-sm text-[hsl(40_20%_85%)]">Plant varieties</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"
      >
        <div className="w-6 h-10 border-2 border-[hsl(40_30%_98%/0.5)] rounded-full flex items-start justify-center p-1">
          <div
            className="w-1.5 h-3 bg-[hsl(40_30%_98%)] rounded-full animate-float"
          />
        </div>
      </div>
    </section>
  );
}
