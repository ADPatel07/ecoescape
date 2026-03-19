import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import heroSunriseImg from "@/assets/hero-sunrise.webp";

export default function MukteshwarTempleGuide() {
  // Article Schema
  const articleSchema = generateArticleSchema({
    headline: "Mukteshwar Mahadev Temple — Complete Visitor Guide & Where to Stay in Mukteshwar",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
    datePublished: formatDateForSchema("March 5, 2026"),
    author: {
      "@type": "Organization",
      name: "Ecoescape Mukteshwar",
    },
    publisher: {
      "@type": "Organization",
      name: "Ecoescape Mukteshwar",
      url: "https://ecoescapemukteshwar.com",
    },
    description: "Discover the ancient Mukteshwar Mahadev Temple, its history, timings, how to reach, and the best places to stay nearby for a memorable Himalayan pilgrimage.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-mahadev-temple-guide",
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Mukteshwar Mahadev Temple Guide" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Mukteshwar Mahadev Temple Guide | Complete Visitor Info & Where to Stay"
        description="Plan your visit to Mukteshwar Mahadev Temple (7 km from Ecoescape). Discover temple timings, history, how to reach, and best places to stay in Mukteshwar. Includes travel tips for Uttarakhand pilgrims."
        canonical="https://ecoescapemukteshwar.com/blog/mukteshwar-mahadev-temple-guide"
        keywords="Mukteshwar Mahadev Temple, Mukteshwar Dham, Mukteshwar temple guide, Uttarakhand temples, places to visit Mukteshwar, stay near Mukteshwar temple"
        jsonLd={[articleSchema, breadcrumbSchema]}
      />
      <Header />
      <main className="pt-28 pb-20">
        <article className="container max-w-3xl">
          {/* Breadcrumb */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Travel Guide
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Mukteshwar Mahadev Temple — Complete Visitor Guide & Where to Stay in Mukteshwar
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> March 5, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 8 min read
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={heroSunriseImg}
              alt="Mukteshwar Mahadev Temple with Himalayan sunrise views"
              className="w-full h-auto"
              loading="eager"
              width="1200"
              height="675"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Perched at an altitude of 2,285 meters in the Kumaon hills of Uttarakhand,
              <strong> Mukteshwar Mahadev Temple</strong> is one of the most revered and
              scenic pilgrim destinations in North India. Dedicated to Lord Shiva, the temple
              is believed to be over 350 years old and is surrounded by dense deodar forests,
              dramatic cliff edges, and sweeping Himalayan panoramas.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              History & Significance
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The name "Mukteshwar" translates to "Lord of Freedom" — derived from the
              Sanskrit words <em>Mukti</em> (liberation) and <em>Ishwar</em> (God). Legend
              says that Lord Shiva killed a demon here and granted him moksha (liberation),
              hence the name. The temple houses an ancient Shiva Lingam and is a site of
              deep spiritual importance for devotees across India.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              Temple Timings & Entry
            </h2>
            <div className="bg-secondary rounded-xl p-6 my-6">
              <ul className="space-y-2 text-foreground text-sm">
                <li className="flex justify-between">
                  <span className="font-medium">Opening Hours</span>
                  <span>6:00 AM – 7:00 PM (daily)</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Entry Fee</span>
                  <span>Free</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Best Time to Visit</span>
                  <span>Early morning for sunrise views</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-medium">Time Required</span>
                  <span>1 – 2 hours</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              How to Reach Mukteshwar Dham Temple
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Mukteshwar is well-connected by road from major cities in North India.
              The nearest railway station is Kathgodam (~80 km), and the nearest airport
              is Pantnagar (~100 km).
            </p>
            <div className="bg-secondary rounded-xl p-6 my-6">
              <ul className="space-y-2 text-foreground text-sm">
                <li className="flex justify-between">
                  <span>From Delhi</span>
                  <span>~320 km (7–8 hrs by road)</span>
                </li>
                <li className="flex justify-between">
                  <span>From Nainital</span>
                  <span>~50 km (1.5 hrs)</span>
                </li>
                <li className="flex justify-between">
                  <span>From Haldwani</span>
                  <span>~70 km (2 hrs)</span>
                </li>
                <li className="flex justify-between">
                  <span>From Kathgodam Railway Station</span>
                  <span>~80 km (2.5 hrs)</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              What to See Near the Temple
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              The temple area itself offers stunning views of the Himalayan range. Nearby,
              you'll find <strong>Chauli Ki Jali</strong> — a natural rock formation with
              a mesh-like cliff edge, popular for rock climbing and rappelling. The
              surrounding deodar forests are ideal for nature walks and bird watching.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Chauli Ki Jali</strong> — ~2 km from temple, adventure & views</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Mukteshwar Inspection Bungalow</strong> — ~5 km, heritage site</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Bhalu Gaad Waterfalls</strong> — seasonal waterfall, nature trek</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span><strong>Sitla Village</strong> — panoramic sunrise point, fruit orchards</span>
              </li>
            </ul>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              Where to Stay in Mukteshwar
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              For the best temple visit experience, stay somewhere close to Mukteshwar
              Village with sunrise views and peaceful surroundings. <strong>Ecoescape
              Mukteshwar</strong> is located right in Mukteshwar Village — approximately
              7 km from the temple — offering east-facing rooms with Himalayan sunrise
              views, a botanical garden with 100+ plant varieties, an in-house restaurant,
              and 24/7 secure premises.
            </p>

            {/* CTA */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-8 text-center">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                Plan Your Mukteshwar Temple Trip
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Stay at Ecoescape Mukteshwar — just 7 km from the temple, with sunrise
                views, home-cooked meals, and garden tranquility.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
                      "Hi! I'm planning a trip to Mukteshwar Mahadev Temple and would like to book a stay at Ecoescape. Could you help?"
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

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              Tips for Visitors
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>🕕 Visit early morning for the best sunrise views and fewer crowds</li>
              <li>👟 Wear comfortable walking shoes — the path to the temple includes steps</li>
              <li>📷 Carry a camera — the views from the temple complex are spectacular</li>
              <li>🧥 Carry a jacket even in summer — mornings and evenings are cool at 2,285m</li>
              <li>🚗 Roads are well-maintained — accessible by car, taxi, or two-wheeler</li>
              <li>🙏 The temple is an active place of worship — dress modestly</li>
            </ul>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
