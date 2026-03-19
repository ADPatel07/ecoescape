import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, Car, MapPin, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import featuredImg from "@/assets/blog/delhi-road-trip/featured.png";

export default function DelhiToMukteshwarRoadTrip() {
  const articleSchema = generateArticleSchema({
    headline: "Delhi to Mukteshwar Road Trip Guide: Best Route, Stops & Tips (2026)",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
    datePublished: formatDateForSchema("March 19, 2026"),
    author: { "@type": "Organization", name: "Ecoescape Mukteshwar" },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Plan the perfect Delhi to Mukteshwar road trip. Best route via Hapur & Moradabad, top dhabas for breakfast, road conditions, and must-know driving tips for 2026.",
    url: "https://ecoescapemukteshwar.com/blog/delhi-to-mukteshwar-road-trip",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Delhi to Mukteshwar Road Trip" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Delhi to Mukteshwar Road Trip | 2026 Route & Stops Guide"
        description="Escape the city! Detailed Delhi to Mukteshwar road trip guide. Find the best route, distance (340 km), breakfast stops, and local travel hacks for 2026."
        canonical="https://ecoescapemukteshwar.com/blog/delhi-to-mukteshwar-road-trip"
        keywords="delhi to mukteshwar road trip, delhi to mukteshwar best route, mukteshwar distance from delhi, driving to mukteshwar, delhi to mukteshwar stops"
        jsonLd={[articleSchema, breadcrumbSchema]}
      />
      <Header />
      <main className="pt-28 pb-20">
        <article className="container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <header className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Road Trip</span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Delhi to Mukteshwar Road Trip Guide: Route, Stops & Tips (2026)
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> March 19, 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 8 min read</span>
            </div>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-10 shadow-elevated">
            <img 
              src={featuredImg} 
              alt="Driving through the Himalayas towards Mukteshwar" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              There is nothing quite like hitting the road from the dusty plains of Delhi and reaching the crisp, oxygen-rich air of the Kumaon hills. Here is your ultimate **Delhi to Mukteshwar road trip guide** for 2026.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2"><Car className="h-6 w-6 text-primary" /> Distance & Time</h2>
            <p className="text-muted-foreground">
              The distance is approximately **340 km**. Typically, it takes **8-9 hours** including stops. Road conditions are excellent till Kathgodam and well-maintained in the hills.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">The Standard Route</h2>
            <p className="font-medium text-foreground">Delhi → Hapur → Moradabad (Bypass) → Rampur → Bilaspur → Rudrapur → Haldwani → Kathgodam → Bhimtal → Bhowali → Mukteshwar</p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2"><Coffee className="h-6 w-6 text-primary" /> Recommended Stops</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>📍 <strong>Shiva Dhaba (Hapur):</strong> The iconic breakfast stop for parathas and chai.</li>
              <li>📍 <strong>Gajraula:</strong> Multiple chains like Domino’s and Subway if you prefer quick fast food.</li>
              <li>📍 <strong>Bhimtal:</strong> A great spot for a coffee break with a lake view before the final uphill climb.</li>
            </ul>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2"><MapPin className="h-6 w-6 text-primary" /> Quick Tips for the Drive</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Start early (4:00 AM - 5:00 AM) to cross Delhi/NCR traffic before it settles.</li>
              <li>Ensure your vehicle has a valid Hill Entry Permit if required (check latest local rules).</li>
              <li>Fill up fuel at Haldwani/Kathgodam as petrol pumps in the hills are fewer and might have queues.</li>
            </ul>

            <div className="mt-8">
              <Button size="lg" onClick={() => window.location.href = "/#booking"}>Book Your Safe Stay at Ecoescape</Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
