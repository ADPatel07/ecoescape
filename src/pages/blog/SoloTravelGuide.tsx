import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, Shield, Compass, Sunrise, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import soloFeaturedImg from "@/assets/blog/solo/featured.png";

export default function SoloTravelGuide() {
  // Article Schema
  const articleSchema = generateArticleSchema({
    headline: "Solo Travel in Mukteshwar: A Safe and Serene Guide for Adventurers",
    image: "https://ecoescapemukteshwar.com/src/assets/blog/solo/featured.png",
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
    description: "Planning a solo trip to Mukteshwar? Our solo travel guide covers safety tips, navigation, meeting locals, and the best ways to explore the Kumaon hills on your own.",
    url: "https://ecoescapemukteshwar.com/blog/solo-travel-guide",
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Solo Travel in Mukteshwar" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Solo Travel in Mukteshwar | 2026 Safe & Serene Solo Trip Guide"
        description="Rediscover yourself in the Himalayas. Learn why Mukteshwar is perfect for solo travelers, with safe trails, welcoming locals, and a peaceful retreat at Ecoescape."
        canonical="https://ecoescapemukteshwar.com/blog/solo-travel-guide"
        keywords="solo travel Mukteshwar, solo trip Uttarakhand, safe for solo female travelers, solo travel guide India, exploring Mukteshwar on your own"
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
              Solo Travel
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Solo Travel in Mukteshwar: A Safe and Serene Guide for Adventurers
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> March 19, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 7 min read
              </span>
            </div>
          </header>

          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={soloFeaturedImg}
              alt="A solo traveler standing on a ridge with vast Himalayan views at golden hour"
              className="w-full h-auto"
              loading="eager"
              width="1200"
              height="675"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Sometimes the best way to see the world is on your own. <strong>Solo travel</strong> isn't just about visiting a place; it's about reclaiming your time and silence. <strong>Mukteshwar</strong>, with its gentle hills, welcoming Kumaoni people, and high safety factor, is an ideal destination for those traveling alone. Here is your roadmap to a peaceful and safe solo experience in the Himalayas.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              1. Safety: Peace of Mind in the Hills
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Mukteshwar is consistently rated as one of the <strong>safest hill stations in Uttarakhand</strong>. The village community is tight-knit and very respectful of travelers.
            </p>
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="font-semibold mb-3">Solo Safety Tips:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Inform your host:</strong> Always let our team know if you're taking a long trek.</li>
                <li>• <strong>Stick to day trekking:</strong> Avoid trails after sunset due to the lack of light and occasional wildlife.</li>
                <li>• <strong>Reliable transport:</strong> We can connect you with trusted local taxi drivers.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Compass className="h-6 w-6 text-primary" />
              2. Navigation: Finding Your Way
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              While Google Maps works well in most areas, the best way to navigate Mukteshwar is by <strong>asking locals</strong>. Paths through the village are interconnected, and a quick "Namaste" will often lead to a detailed (and very friendly) set of directions.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Sunrise className="h-6 w-6 text-primary" />
              3. Solo Soul-Searching: The Ecoescape Experience
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At <strong>Ecoescape Mukteshwar</strong>, we cater to several solo travelers and long-term stay guests. Our property is designed with multiple quiet nooks where you can read, write, or simply sit in contemplation. Our common terrace is a great place to meet other like-minded travelers over a cup of Pahadi chai.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6 my-10">
              <h3 className="font-semibold text-foreground mb-2">Why Solo Travelers Love Us</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                24/7 on-site staff, secure premises, and a friendly, communal vibe make Ecoescape the perfect home base for solo adventurers. Whether you need a local guide recommendation or just a companion for breakfast, we're here for you.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                Start Your Solo Journey
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Ready for some quality time with yourself? Book your stay and let the Himalayas do the rest.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    window.location.href = "/#booking";
                  }}
                >
                  Check Solo Rates
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => {
                    const msg = encodeURIComponent("Hi! I'm planning a solo trip to Mukteshwar and would like to know about single occupancy rates and safety at Ecoescape.");
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
