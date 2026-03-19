import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, CloudRain, Wind, Coffee, Info, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import monsoonFeaturedImg from "@/assets/blog/monsoon/featured.png";

export default function MonsoonGuide() {
  // Article Schema
  const articleSchema = generateArticleSchema({
    headline: "Mukteshwar in Monsoon: A Comprehensive Guide to the Misty Mountains",
    image: "https://ecoescapemukteshwar.com/src/assets/blog/monsoon/featured.png",
    datePublished: formatDateForSchema("March 19, 2026"),
    author: {
      "@type": "Organization",
      name: "Ecoescape Mukteshwar",
    },
    publisher: {
      "@type": "Organization",
      name: "Ecoescape Mukteshwar",
      url: "https://ecoescapemukteshwar.com",
    },
    description: "Experience the magic of Mukteshwar in monsoon. Our 2026 guide covers weather, misty Himalayan views, lush green trails, and why the rainy season is the best time for a quiet retreat.",
    url: "https://ecoescapemukteshwar.com/blog/monsoon-in-mukteshwar-guide",
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Monsoon in Mukteshwar" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Mukteshwar in Monsoon | 2026 Misty Mountains Travel Guide"
        description="Experience the emerald beauty of the Kumaon hills. Discover why monsoon is the best time for a quiet retreat in Mukteshwar. Includes road safety and packing tips."
        canonical="https://ecoescapemukteshwar.com/blog/monsoon-in-mukteshwar-guide"
        keywords="Mukteshwar in monsoon, rainy season in Mukteshwar, Mukteshwar weather July August, misty mountains Uttarakhand, monsoon travel guide India"
        jsonLd={[articleSchema, breadcrumbSchema]}
      />
      <Header />
      <main className="pt-28 pb-20">
        <article className="container max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Seasonal Guide
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Mukteshwar in Monsoon: A Comprehensive Guide to the Misty Mountains
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> March 19, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 9 min read
              </span>
            </div>
          </header>

          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={monsoonFeaturedImg}
              alt="Misty mountain landscape in Mukteshwar during the monsoon season"
              className="w-full h-auto"
              loading="eager"
              width="1200"
              height="675"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              While most travelers visit the Himalayas in summer or winter, those in the know wait for the <strong>monsoon</strong>. From July to September, Mukteshwar undergoes a breathtaking transformation. The parched earth turns a deep, vibrant emerald, and the mountains play hide-and-seek with thick, rolling clouds. If you've ever dreamt of <strong>living inside a cloud</strong>, monsoon in Mukteshwar is your chance.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <CloudRain className="h-6 w-6 text-primary" />
              The Weather: What to Expect
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Monsoon in Mukteshwar isn't about constant torrential rain. Instead, it's characterized by <strong>intermittent showers</strong>, heavy mist, and suddenly clearing skies that reveal the most magnificent sunsets you'll ever see. The temperature remains cool and pleasant, ranging between <strong>15°C and 22°C</strong>.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Wind className="h-6 w-6 text-primary" />
              Why Visit During the Rainy Season?
            </h2>
            <ul className="list-disc pl-6 space-y-4 text-muted-foreground">
              <li><strong>Emerald Landscapes:</strong> Every inch of the Kumaon hills is covered in lush greenery. The moss-covered stone walls and dripping pine needles create a fairytale atmosphere.</li>
              <li><strong>Misty Vistas:</strong> The way the clouds drift through the valleys and over the ridges is a sight unique to the monsoon. It's a photographer's and writer's paradise.</li>
              <li><strong>Peace and Privacy:</strong> Since it's considered the "off-season," you'll find fewer crowds at popular spots like Chauli Ki Jali or the Mahadev Temple.</li>
              <li><strong>Waterfall Magic:</strong> Small, seasonal waterfalls spring up all along the Bhowali-Mukteshwar road, making the drive incredibly scenic.</li>
            </ul>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Coffee className="h-6 w-6 text-primary" />
              The Ecoescape Monsoon Experience
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At <strong>Ecoescape Mukteshwar</strong>, monsoon is one of our favorite times. Our stone architecture is designed to stay cozy during the rains.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
              <h3 className="font-semibold mb-3">Monsoon Essentials at Ecoescape:</h3>
              <p className="text-sm text-muted-foreground mb-4">Unlimited pots of <strong>hot Adrak (Ginger) Chai</strong>, steaming plates of Kumaoni pakoras, and a collection of books to enjoy as you watch the rain from your panoramic windows.</p>
              <p className="text-xs italic underline">"There is nothing quite like sleeping to the sound of rain on the mountain slopes and waking up to find your balcony literally inside a cloud."</p>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">
              Travel Tips for Monsoon
            </h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-secondary p-5 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Road Safety</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Avoid driving late at night. Hill roads are well-maintained but can have patches of heavy fog. It's best to reach Mukteshwar by afternoon.</p>
              </div>
              <div className="bg-secondary p-5 rounded-xl border border-border">
                <h3 className="font-semibold text-foreground mb-2">Packing</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">Carry a sturdy umbrella, a lightweight raincoat, and waterproof shoes with good grip. A light jacket is enough for the evenings.</p>
              </div>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6 my-10">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Info className="h-5 w-5" />
                Note for Travelers
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                While the main highways are safe, internal village trails can be slippery. We recommend sticking to paved paths or taking a local guide from Ecoescape if you plan to explore the deeper forests.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                Experience the Magic of Monsoon
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Ready to trade the city humidity for the cool Himalayan mist? Book your stay for the upcoming monsoon season.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    window.location.href = "/#booking";
                  }}
                >
                  Book Your Rainy Retreat
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => {
                    const msg = encodeURIComponent("Hi! I'm interested in visiting Mukteshwar during the monsoon and would like to know about road safety and stay options.");
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
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
