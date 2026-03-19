import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, Heart, Flame, Star, Sparkles, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import romanticFeaturedImg from "@/assets/blog/romantic/featured.png";

export default function RomanticGetawayGuide() {
  // Article Schema
  const articleSchema = generateArticleSchema({
    headline: "Romantic Getaway in Mukteshwar: Best Spots for Couples in 2026",
    image: "https://ecoescapemukteshwar.com/src/assets/blog/romantic/featured.png",
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
    description: "Planning a romantic trip to Mukteshwar? Our couples guide covers candlelit terrace dinners, sunrise viewpoints, private bonfires, and the most romantic spots in the Kumaon hills.",
    url: "https://ecoescapemukteshwar.com/blog/romantic-getaway-guide",
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Romantic Getaway in Mukteshwar" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Romantic Getaway in Mukteshwar | Best 2026 Honeymoon & Couples Guide"
        description="Escape to the mountains for a romantic retreat. Discover the most intimate spots in Mukteshwar, from private bonfires at Ecoescape to candlelit terrace dinners."
        canonical="https://ecoescapemukteshwar.com/blog/romantic-getaway-guide"
        keywords="romantic getaway Mukteshwar, honeymoon in Mukteshwar, best places for couples Uttarakhand, romantic restaurants Mukteshwar, private bonfire Mukteshwar"
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
              Couples Guide
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Romantic Getaway in Mukteshwar: Best Spots for Couples in 2026
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> March 19, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 8 min read
              </span>
            </div>
          </header>

          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={romanticFeaturedImg}
              alt="A romantic candlelit dinner setup on a terrace with mountain views at night"
              className="w-full h-auto"
              loading="eager"
              width="1200"
              height="675"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              There's something inherently romantic about the mountains — the crisp air, the vast vistas, and the quiet intimacy of a secluded cabin. <strong>Mukteshwar</strong>, with its undisturbed beauty and colonial-era charm, is becoming the preferred choice for <strong>couples seeking a romantic retreat</strong>. Whether you're planning a honeymoon or a long-overdue weekend getaway, here is your guide to romance in the Kumaon hills.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              1. Intimate Dining: Dinner Under the Stars
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Nothing says romance like a private <strong>candlelit dinner</strong> with the Himalayas as your backdrop. At Ecoescape, we specialize in creating intimate dining experiences on our terrace.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Flame className="h-5 w-5 text-primary" />
                The Night to Remember:
              </h3>
              <p className="text-sm text-muted-foreground">Imagine a private bonfire, warm blankets, soft outdoor lighting, and a multi-course local feast. Above you, the <strong>Milky Way</strong> stretches across the sky, undisturbed by city lights. It's an experience that stays with you long after the trip is over.</p>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              2. Shared Moments: Sunrise Viewpoints
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Witnessing a Himalayan sunrise together is a spiritual experience. The first light hitting the peaks of <strong>Trishul and Nanda Devi</strong>, painting them in shades of gold and orange, is a sight best shared. Our <strong>Suite with Mountain View</strong> offers this spectacle right from your balcony.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Star className="h-6 w-6 text-primary" />
              3. Romantic Walks: Fruit Orchards and Pine Forests
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Mukteshwar offers several <strong>peaceful trails</strong> that are perfect for couples. A walk through the blooming fruit orchards of Sitla or a quiet trek through the deodar forests of Sargakhet provides the perfect setting for deep conversations and quiet connection.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6 my-10">
              <h3 className="font-semibold text-foreground mb-2">Our Recommendation for Couples</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Book our <Link to="/rooms/suite-with-mountain-view" className="text-primary hover:underline">Suite with Mountain View</Link>. It features a private balcony, panoramic windows, and is designed for maximum privacy and comfort.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                Plan Your Romantic Escape
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Celebrating an anniversary or honeymoon? Let our team handle the details — from flower arrangements to specific menu requests.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    window.location.href = "/#booking";
                  }}
                >
                  Book Romantic Suite
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => {
                    const msg = encodeURIComponent("Hi! I'm planning a romantic trip to Mukteshwar and would like to know about special arrangements for couples.");
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
