import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, MapPin, Car, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import featuredImg from "@/assets/blog/kainchi-dham/featured.png";

export default function KainchiDhamToMukteshwar() {
  const articleSchema = generateArticleSchema({
    headline: "Kainchi Dham to Mukteshwar: Distance, Route & Travel Guide (2026)",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
    datePublished: formatDateForSchema("March 19, 2026"),
    author: { "@type": "Organization", name: "Ecoescape Mukteshwar" },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Plan your spiritual journey from Kainchi Dham to Mukteshwar. Get distance, best routes via Bhowali, taxi fares, and travel tips for 2026.",
    url: "https://ecoescapemukteshwar.com/blog/kainchi-dham-to-mukteshwar-distance",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Kainchi Dham to Mukteshwar Guide" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Kainchi Dham to Mukteshwar Distance | 2026 Travel Guide"
        description="Traveling from Kainchi Dham to Mukteshwar? Find the best route, distance (42 km), travel time, and taxi tips for your spiritual Kumaon trip."
        canonical="https://ecoescapemukteshwar.com/blog/kainchi-dham-to-mukteshwar-distance"
        keywords="kainchi dham to mukteshwar distance, kainchi dham, mukteshwar distance, bhowali to mukteshwar, neem karoli baba ashram to mukteshwar"
        jsonLd={[articleSchema, breadcrumbSchema]}
      />
      <Header />
      <main className="pt-28 pb-20">
        <article className="container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <header className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Travel Guide</span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Kainchi Dham to Mukteshwar: Distance, Route & Travel Guide (2026)
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> March 19, 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min read</span>
            </div>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-10 shadow-elevated">
            <img 
              src={featuredImg} 
              alt="Sacred Kainchi Dham Ashram in Kumaon hills" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Many pilgrims visiting the sacred <strong>Neem Karoli Baba Ashram (Kainchi Dham)</strong> often extend their spiritual journey to the serene hills of <strong>Mukteshwar</strong>. If you're planning this trip, here is everything you need to know about the distance, route, and transport options.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">Kainchi Dham to Mukteshwar Distance</h2>
            <div className="bg-secondary p-6 rounded-xl my-6">
              <p className="text-foreground leading-relaxed">
                The road distance from **Kainchi Dham to Mukteshwar is approximately 42 km**. The journey takes about **1.5 to 2 hours** depending on traffic and road conditions.
              </p>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">The Best Route</h2>
            <p className="text-muted-foreground">The most common and scenic route is:</p>
            <p className="font-medium text-foreground">Kainchi Dham → Bhowali → Ramgarh → Mukteshwar</p>
            
            <h3 className="text-xl font-serif font-semibold text-foreground mt-8 mb-4">Route Breakdown:</h3>
            <ul className="space-y-4 text-muted-foreground">
              <li><strong>Kainchi Dham to Bhowali (9 km):</strong> A quick drive uphill to the Bhowali intersection.</li>
              <li><strong>Bhowali to Ramgarh (15 km):</strong> Transitioning into the fruit bowl of Kumaon with winding roads and orchid views.</li>
              <li><strong>Ramgarh to Mukteshwar (18 km):</strong> The final stretch offering stunning valley views and a steady climb to Mukteshwar Village.</li>
            </ul>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">Transport Options</h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Car className="h-5 w-5" /> Private Taxi</h3>
                <p className="text-sm text-muted-foreground">Fare: ₹1,500 – ₹2,500. Best for families and comfort. Taxis are available at Kainchi Dham or Bhowali.</p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><MapPin className="h-5 w-5" /> Shared Taxi</h3>
                <p className="text-sm text-muted-foreground">Fare: ₹200 – ₹400 per seat. Usually requires changing taxis at Bhowali.</p>
              </div>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent p-6 my-10">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Info className="h-5 w-5" /> Travel Tip</h3>
              <p className="text-muted-foreground text-sm">
                If you are coming from Kathgodam/Haldwani to Kainchi Dham first, it is best to travel early morning to avoid the heavy pilgrim crowds at the Ashram, then proceed to Mukteshwar by afternoon.
              </p>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">Stay at Ecoescape Mukteshwar</h2>
            <p className="text-muted-foreground">
              Continue your peaceful retreat at <strong>Ecoescape Mukteshwar</strong>. Located in Mukteshwar Village, we offer the perfect post-pilgrimage relaxation with Himalayan views and organic meals.
            </p>
            <div className="mt-8">
              <Button size="lg" onClick={() => window.location.href = "/#booking"}>Check Availability</Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
