import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, Backpack, ShoppingBag, Thermometer, Footprints, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import packingFeaturedImg from "@/assets/blog/packing-list/featured.png";

export default function PackingListGuide() {
  // Article Schema
  const articleSchema = generateArticleSchema({
    headline: "Ultimate Packing List for Mukteshwar: Essentials for Every Season (2026)",
    image: "https://ecoescapemukteshwar.com/src/assets/blog/packing-list/featured.png",
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
    description: "What to pack for Mukteshwar? Our comprehensive 2026 packing guide covers clothing for summer, monsoon, and winter, plus trekking gear and essential travel items.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-ultimate-packing-list",
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Ultimate Packing List" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Ultimate Packing List for Mukteshwar | Seasonal Travel Essentials"
        description="Don't leave without the essentials. Discover what to pack for Mukteshwar, including layer-by-layer clothing advice and trekking gear for the Kumaon hills."
        canonical="https://ecoescapemukteshwar.com/blog/mukteshwar-ultimate-packing-list"
        keywords="packing list for Mukteshwar, travel essentials Uttarakhand, what to wear in Mukteshwar, trekking gear for Himalayas, packing for mountain trip India"
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
              Travel Checklist
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Ultimate Packing List for Mukteshwar: Essentials for Every Season (2026)
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
              src={packingFeaturedImg}
              alt="A neatly organized travel packing layout for a mountain trip to Mukteshwar"
              className="w-full h-auto"
              loading="eager"
              width="1200"
              height="675"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              One of the most frequent questions we receive at <strong>Ecoescape Mukteshwar</strong> is: <em>"What should I pack?"</em> Packing for the mountains is an art — you need to be prepared for sudden weather changes, cold nights, and active days. Whether you're visiting in the blooming spring or the snowy winter, this <strong>ultimate packing list</strong> will ensure you're ready for everything Mukteshwar has to offer.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Thermometer className="h-6 w-6 text-primary" />
              1. The Golden Rule: Layering
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              In the mountains, the temperature can drop quickly once the sun goes down. <strong>Layering</strong> is the key to staying comfortable.
            </p>
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="font-semibold mb-3">The Layering System:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Base Layer:</strong> Lightweight, breathable cotton or moisture-wicking synthetic T-shirts.</li>
                <li>• <strong>Mid Layer:</strong> A warm fleece or a light sweater, perfect for early mornings.</li>
                <li>• <strong>Outer Layer:</strong> A windproof and waterproof jacket (for monsoon/winter).</li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Footprints className="h-6 w-6 text-primary" />
              2. Footwear: Walk the Talk
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you plan on exploring <strong>Chauli Ki Jali</strong> or our surrounding pine forests, your footwear choices are critical.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Hiking Boots:</strong> Sturdy shoes with good grip and ankle support are best for trails.</li>
              <li><strong>Comfortable Sneakers:</strong> For walking around the property and the local market.</li>
              <li><strong>Warm Socks:</strong> Woolen socks are a must for winter nights.</li>
            </ul>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Backpack className="h-6 w-6 text-primary" />
              3. Practical Essentials
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Sun Protection:</strong> High-altitude sun can be intense. Carry a sun hat, sunglasses, and high-SPF sunscreen.</li>
              <li><strong>Reusable Water Bottle:</strong> Help us keep Mukteshwar clean by avoiding single-use plastics. You can refill for free at Ecoescape.</li>
              <li><strong>Personal Med-Kit:</strong> Include basic painkillers, antiseptic, and any personal medication as pharmacies might be a short drive away.</li>
            </ul>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <ShoppingBag className="h-6 w-6 text-primary" />
              4. Seasonal Add-ons
            </h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Winter & Snow</h3>
                <p className="text-sm text-muted-foreground">A heavy down jacket, gloves, and a woolen cap (Ooni Topa). Thermal inners are highly recommended for January/February.</p>
              </div>
              <div className="bg-primary/5 p-5 rounded-xl border border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Monsoon</h3>
                <p className="text-sm text-muted-foreground">A compact, sturdy umbrella and a lightweight, breathable raincoat. Waterproof covers for your electronics and bags.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                Ready for Your Mountain Escape?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Now that you know what to pack, it's time to book your stay. At Ecoescape, we provide room heaters and extra warm blankets for a cozy stay.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    window.location.href = "/#booking";
                  }}
                >
                  Book Your Cozy Stay
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => {
                    const msg = encodeURIComponent("Hi! I'm planning a trip to Mukteshwar and have some questions about what to carry for the current weather.");
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
