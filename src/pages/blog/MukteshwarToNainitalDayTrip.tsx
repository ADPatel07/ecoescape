import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, MapPin, Car, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import featuredImg from "@/assets/blog/nainital-day-trip/featured.png";

export default function MukteshwarToNainitalDayTrip() {
  const articleSchema = generateArticleSchema({
    headline: "Mukteshwar to Nainital Day Trip: Distance, Places to Visit & Tips (2026)",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
    datePublished: formatDateForSchema("March 19, 2026"),
    author: { "@type": "Organization", name: "Ecoescape Mukteshwar" },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Planning a day trip to Nainital from Mukteshwar? Get the distance (50 km), travel time, must-visit spots like Naini Lake and Mall Road, and expert travel tips.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-to-nainital-day-trip",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Mukteshwar to Nainital Day Trip" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Mukteshwar to Nainital Day Trip Guide | 2026 Sightseeing"
        description="Everything you need for a Mukteshwar to Nainital day trip. Distance, time, transport rates, and top attractions like Naini Lake and Tiffin Top."
        canonical="https://ecoescapemukteshwar.com/blog/mukteshwar-to-nainital-day-trip"
        keywords="mukteshwar to nainital distance, mukteshwar to nainital travel, nainital day trip from mukteshwar, mukteshwar nainital tourism, nainital sightseeing"
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
              Mukteshwar to Nainital Day Trip: The Ultimate 2026 Guide
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> March 19, 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 6 min read</span>
            </div>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-10 shadow-elevated">
            <img 
              src={featuredImg} 
              alt="Panoramic view of Naini Lake in Nainital" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              While <strong>Mukteshwar</strong> offers a peaceful retreat, no Kumaon holiday is complete without a visit to the famous <strong>Lake District of India — Nainital</strong>. Located just a short drive away, it makes for the perfect day trip.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">Mukteshwar to Nainital Distance & Time</h2>
            <p className="text-muted-foreground leading-relaxed">
              The distance between **Mukteshwar and Nainital is approximately 50 km**. The drive takes about **1.5 to 2 hours** via the Bhowali-Ramgarh road. The route is highly scenic, passing through dense oak forests and fruit orchards.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">Top Places to Visit in Nainital</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>📍 <strong>Naini Lake:</strong> Enjoy boating on the iconic pear-shaped lake.</li>
              <li>📍 <strong>Nainital Mall Road:</strong> Best for shopping and trying local Kumaoni snacks.</li>
              <li>📍 <strong>Naina Devi Temple:</strong> A sacred Shakti Peeth on the northern shore of the lake.</li>
              <li>📍 <strong>Snow View Point:</strong> Take the ropeway for panoramic views of the Himalayas.</li>
              <li>📍 <strong>Tiffin Top:</strong> A short trek for the best views of the lake and the city.</li>
            </ul>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">Travel Tips for the Day Trip</h2>
            <div className="bg-secondary p-6 rounded-xl my-6">
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" /> Start early (by 8:00 AM) to beat the Nainital traffic.</li>
                <li className="flex items-center gap-2"><Car className="h-4 w-4 text-primary" /> Parking in Nainital can be difficult; it's better to hire a taxi from Mukteshwar.</li>
                <li className="flex items-center gap-2"><Camera className="h-4 w-4 text-primary" /> Carry extra layers, even if it's warm in Mukteshwar.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">Back to Peace: Returning to Mukteshwar</h2>
            <p className="text-muted-foreground">
              After the bustle of Nainital, return to the tranquility of **Ecoescape Mukteshwar**. Enjoy a warm dinner on our terrace as you watch the city lights of the valley below.
            </p>
            <div className="mt-8">
              <Button size="lg" onClick={() => window.location.href = "/#booking"}>Plan Your Stay</Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
