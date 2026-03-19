import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, Wallet, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import featuredImg from "@/assets/blog/backpacker-guide/featured.png";

export default function BackpackerMukteshwarGuide() {
  const articleSchema = generateArticleSchema({
    headline: "Backpacking Mukteshwar: Budget Stays & Solo Travel Guide (2026)",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
    datePublished: formatDateForSchema("March 19, 2026"),
    author: { "@type": "Organization", name: "Ecoescape Mukteshwar" },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "The ultimate backpacker's guide to Mukteshwar. Compare budget stays like GoStops, Hosteller, and Ecoescape. Solo travel tips, cafes, and cheap travel hacks for 2026.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-backpacker-guide",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Backpacker Guide" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Backpacking Mukteshwar | Budget Stays & Solo Travel (2026)"
        description="Escape the city on a budget! Our 2026 backpacker guide to Mukteshwar covers cheap transport, shared stays, and the best cafes for solo travelers."
        canonical="https://ecoescapemukteshwar.com/blog/mukteshwar-backpacker-guide"
        keywords="backpacker mukteshwar, gostops mukteshwar, hosteller mukteshwar, budget stays mukteshwar, solo travel mukteshwar, cheap travel hacks India"
        jsonLd={[articleSchema, breadcrumbSchema]}
      />
      <Header />
      <main className="pt-28 pb-20">
        <article className="container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <header className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Budget Travel</span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Backpacking Mukteshwar: Stays, Cafes & Solo Travel Tips (2026)
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> March 19, 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 6 min read</span>
            </div>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-10 shadow-elevated">
            <img 
              src={featuredImg} 
              alt="Backpacker exploring Mukteshwar" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Mukteshwar is becoming a favorite for **backpackers and solo travelers** escaping the city chaos. With its cool cafes, shared stays, and offbeat trails, it's the perfect place for a low-cost Himalayan break.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2"><Wallet className="h-6 w-6 text-primary" /> Budget Stays: Comparison</h2>
            <div className="bg-secondary p-6 rounded-xl my-6 text-sm">
              <ul className="space-y-4">
                <li>🏠 <strong>GoStops / Hosteller:</strong> Great for meetups, dorm rooms, and social events. Located closer to the main town.</li>
                <li>🌿 <strong>Ecoescape Mukteshwar:</strong> The sustainable choice. Perfect if you want peace, sunrise views, and high-quality organic meals at a fair price.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2"><Zap className="h-6 w-6 text-primary" /> Budget Hacks for Mukteshwar</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>🚌 <strong>Skip the Taxi:</strong> Take a shared taxi from Kathgodam (₹300) or Bhowali.</li>
              <li>🥙 <strong>Eat Like a Local:</strong> Try small local dhabas for authentic Kumaoni food at a fraction of cafe prices.</li>
              <li>🚶 <strong>Walk More:</strong> Most attractions in Mukteshwar Village are within walking distance if you enjoy trekking.</li>
            </ul>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">Top Cafes for Work & Chill</h2>
            <p className="text-muted-foreground">Check out the **Mukteshwar Market** for cozy cafes with stable Wi-Fi and great valley views. Perfect for digital nomads!</p>

            <div className="mt-8">
              <Button size="lg" onClick={() => window.location.href = "/#booking"}>Join the Ecoescape Community</Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
