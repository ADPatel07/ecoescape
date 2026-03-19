import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, Wifi, Zap, Coffee, Shield, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import workcationFeaturedImg from "@/assets/blog/workcation/featured.png";

export default function WorkcationGuide() {
  // Article Schema
  const articleSchema = generateArticleSchema({
    headline: "Workcation in Mukteshwar: A Digital Nomad's Guide to Working from the Hills",
    image: "https://ecoescapemukteshwar.com/src/assets/blog/workcation/featured.png",
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
    description: "Planning a workcation in Mukteshwar? Our guide for digital nomads covers high-speed WiFi, power backup, quiet workspaces, and why Ecoescape is the perfect mountain office.",
    url: "https://ecoescapemukteshwar.com/blog/workcation-guide",
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Workcation in Mukteshwar" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Workcation in Mukteshwar | 2026 Digital Nomad & Remote Work Guide"
        description="Ditch the concrete office for the Himalayas. Discover why Mukteshwar is India's top workcation spot, with fiber-optic WiFi and power backup at Ecoescape."
        canonical="https://ecoescapemukteshwar.com/blog/workcation-guide"
        keywords="workcation in Mukteshwar, digital nomad Mukteshwar, remote work Uttarakhand, best places for workcation India, mountain office Mukteshwar"
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
              Digital Nomad
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Workcation in Mukteshwar: A Digital Nomad's Guide to Working from the Hills
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
              src={workcationFeaturedImg}
              alt="A productive home office setup with Himalayan mountain views"
              className="w-full h-auto"
              loading="eager"
              width="1200"
              height="675"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              The concept of "office" has changed forever. Why stare at a concrete wall when you can draft your next proposal while looking at <strong>Nanda Devi</strong>? Mukteshwar has emerged as a premier destination for <strong>workcations in India</strong>, offering the perfect balance of modern connectivity and mountain tranquility. Here's everything you need to know about setting up your Himalayan office at <strong>Ecoescape Mukteshwar</strong>.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Wifi className="h-6 w-6 text-primary" />
              Connectivity: Staying Online in the Hills
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The biggest concern for any digital nomad is connectivity. Mukteshwar Village is remarkably well-connected. At Ecoescape, we provide <strong>high-speed fiber-optic WiFi</strong> that handles video calls and large file transfers with ease.
            </p>
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-center gap-2 font-medium text-foreground italic underline">
                  <Wifi className="h-4 w-4 text-primary" /> High-speed Fiber Internet (up to 100 Mbps)
                </li>
                <li className="flex items-center gap-2 font-medium text-foreground italic underline">
                  <Zap className="h-4 w-4 text-primary" /> Dedicated Power Backup for uninterrupted work
                </li>
                <li className="flex items-center gap-2 font-medium text-foreground italic underline">
                  <Shield className="h-4 w-4 text-primary" /> 4G connectivity (Jio, Airtel, BSNL) as backup
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Coffee className="h-6 w-6 text-primary" />
              Your Workspace: Choice of Ambiance
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Monotony is the enemy of creativity. At Ecoescape, you can switch your workspace throughout the day:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>The Terrace:</strong> Ideal for morning emails with the sun rising over the Himalayas.</li>
              <li><strong>In-Room Desks:</strong> Our rooms feature dedicated work desks for deep-focus sessions.</li>
              <li><strong>The Garden:</strong> Perfect for brainstorming sessions surrounded by 100+ varieties of plants.</li>
            </ul>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">
              Why Mukteshwar is Perfect for Remote Work
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Unlike the crowded streets of Manali or Rishikesh, Mukteshwar offers <strong>uninterrupted silence</strong>. The only "distractions" you'll find here are the songs of Himalayan birds or the changing colors of the sky. This tranquility is proven to boost productivity and reduce work-related stress.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6 my-10">
              <h3 className="font-semibold text-foreground mb-2">After-Work Exploration</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                When the laptop closes, the adventure begins. Take a short walk to the local market, go for a quick sunset trek, or simply enjoy a bonfire dinner under the stars. The "work-life balance" here is naturally skewed towards "life."
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                Ready for a Change of Scenery?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Book your long-term stay at Ecoescape Mukteshwar. We offer special rates for workcations (1 week+ stays).
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    window.location.href = "/#booking";
                  }}
                >
                  Join Our Nomad Community
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => {
                    const msg = encodeURIComponent("Hi! I'm planning a workcation in Mukteshwar and would like to know about your weekly/monthly rates.");
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
