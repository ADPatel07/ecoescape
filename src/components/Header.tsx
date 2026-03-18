import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { useThrottle } from "@/hooks/useThrottle";
import { trackWhatsAppClick, trackPhoneClick, trackEmailClick } from "@/lib/analytics";

const navLinks = [
  { name: "Rooms", href: "#rooms" },
  { name: "Dining", href: "#dining" },
  { name: "Garden", href: "#garden" },
  { name: "Gallery", href: "#gallery" },
  { name: "Things to Do", href: "#things-to-do" },
  { name: "Reviews", href: "#reviews" },
  { name: "Blog", href: "/blog", isRoute: true },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleScroll = useThrottle(() => {
    if (typeof window !== 'undefined') {
      setIsScrolled(window.scrollY > 50);
    }
  }, 100);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  const scrollToSection = (href: string) => {
    setIsOpen(false);

    if (!isHomePage) {
      // If not on home page, we need to navigate to home page first
      if (typeof window !== 'undefined') {
        window.location.href = `/${href}`;
      }
      return;
    }

    if (typeof document !== 'undefined') {
      const element = document.querySelector<HTMLElement>(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleWhatsApp = useCallback(() => {
    trackWhatsAppClick('header');
    const message = encodeURIComponent(
      "Hi! I'm interested in booking at Ecoescape Mukteshwar. Could you help me with availability?"
    );
    window.open(`${siteConfig.whatsappUrl}?text=${message}`, "_blank");
  }, []);

  const handleCall = useCallback(() => {
    trackPhoneClick('header');
    window.location.href = `tel:${siteConfig.phone}`;
  }, []);

  // Determine if we should show the scrolled (dark) style
  const showScrolledStyle = isScrolled || !isHomePage;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        showScrolledStyle
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-soft"
          : "bg-transparent"
      )}
    >
      {/* Top bar with contact info - only when scrolled or not on home page */}
      <div
        className={cn(
          "hidden md:block bg-primary text-primary-foreground py-2 transition-all",
          showScrolledStyle ? "opacity-100" : "opacity-0 h-0 py-0 overflow-hidden"
        )}
      >
        <div className="container flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 hover:text-accent transition-colors"
              onClick={() => trackPhoneClick('header-top-bar')}
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phoneDisplay}
            </a>
            <a
              href={`mailto:${siteConfig.email.reservations}`}
              className="hover:text-accent transition-colors"
              onClick={() => trackEmailClick(siteConfig.email.reservations)}
            >
              {siteConfig.email.reservations}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/80">
              Direct booking = Best price guaranteed
            </span>
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
              <span className="text-xs">@ecoescape.mukteshwar</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className={cn(
              "flex flex-col p-2 rounded-lg transition-all duration-300",
              !showScrolledStyle && "bg-white/10 backdrop-blur-sm"
            )}>
              <img src={showScrolledStyle ? "/LOGO2.webp" : "/LOGO.webp"} alt="Ecoescape Mukteshwar Logo" width={175} height={136} className="w-[100px] h-auto" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              'isRoute' in link && link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    "font-medium transition-colors text-sm",
                    showScrolledStyle
                      ? "text-foreground/80 hover:text-primary"
                      : "text-[hsl(40_20%_90%)] hover:text-[hsl(40_30%_98%)]"
                  )}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className={cn(
                    "font-medium transition-colors text-sm",
                    showScrolledStyle
                      ? "text-foreground/80 hover:text-primary"
                      : "text-[hsl(40_20%_90%)] hover:text-[hsl(40_30%_98%)]"
                  )}
                >
                  {link.name}
                </button>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCall}
              className={cn(
                "transition-colors",
                showScrolledStyle
                  ? "text-foreground hover:text-primary"
                  : "text-[hsl(40_30%_98%)] hover:bg-[hsl(40_30%_98%/0.1)]"
              )}
            >
              <Phone className="h-4 w-4 mr-2" />
              {siteConfig.phoneDisplay}
            </Button>
            <Button variant="whatsapp" size="sm" onClick={handleWhatsApp}>
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 rounded-lg transition-colors",
              showScrolledStyle
                ? "text-foreground hover:bg-secondary"
                : "text-[hsl(40_30%_98%)] hover:bg-[hsl(40_30%_98%/0.1)]"
            )}
            onClick={() => setIsOpen(!isOpen)}

            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden bg-background rounded-xl mt-4 shadow-card"
              id="mobile-menu"
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link) =>
                  'isRoute' in link && link.isRoute ? (
                    <Link
                      key={link.name}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-left text-foreground hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button
                      key={link.name}
                      onClick={() => scrollToSection(link.href)}
                      className="block w-full text-left text-foreground hover:text-primary font-medium py-3 px-4 rounded-lg hover:bg-secondary transition-colors"
                    >
                      {link.name}
                    </button>
                  )
                )}
                <div className="pt-4 border-t border-border space-y-2">
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full justify-start"
                    onClick={handleCall}
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    {siteConfig.phoneDisplay}
                  </Button>
                  <Button
                    variant="whatsapp"
                    size="lg"
                    className="w-full"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Us
                  </Button>
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    onClick={() => scrollToSection("#booking")}
                  >
                    Check Availability
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
