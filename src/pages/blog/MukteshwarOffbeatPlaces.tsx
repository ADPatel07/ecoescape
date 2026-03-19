import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, Compass, MapPin, Trees } from "lucide-react";
import { Button } from "@/components/ui/button";
import featuredImg from "@/assets/blog/offbeat-places/featured.png";

export default function MukteshwarOffbeatPlaces() {
  const articleSchema = generateArticleSchema({
    headline: "Offbeat Mukteshwar: 7 Hidden Gems Away from the Crowds (2026)",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
    datePublished: formatDateForSchema("March 19, 2026"),
    author: { "@type": "Organization", name: "Ecoescape Mukteshwar" },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Discover the offbeat side of Mukteshwar. 7 hidden spots including remote village trails, secluded viewpoints, and secret waterfalls for 2026.",
    url: "https://ecoescapemukteshwar.com/blog/offbeat-places-in-mukteshwar",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Offbeat Mukteshwar Guide" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Offbeat Places in Mukteshwar | 7 Hidden Gems to Explore (2026)"
        description="Escape the tourist crowds! Our 2026 guide to offbeat Mukteshwar features secret trails, hidden waterfalls, and quiet Kumaoni villages."
        canonical="https://ecoescapemukteshwar.com/blog/offbeat-places-in-mukteshwar"
        keywords="offbeat mukteshwar, hidden places in mukteshwar, offbeat places in Uttarakhand, secret spots mukteshwar, mukteshwar hidden gems"
        jsonLd={[articleSchema, breadcrumbSchema]}
      />
      <Header />
      <main className="pt-28 pb-20">
        <article className="container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <header className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Hidden Gems</span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Offbeat Mukteshwar: 7 Hidden Gems Away from the Crowds (2026)
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> March 19, 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 6 min read</span>
            </div>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-10 shadow-elevated">
            <img 
              src={featuredImg} 
              alt="Offbeat and quiet village in Kumaon" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              The true charm of **Mukteshwar** lies in its quiet corners. Beyond the temple and the market, these 7 offbeat spots offer peace, nature, and a glimpse into the authentic Kumaon.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2"><Compass className="h-6 w-6 text-primary" /> 1. Sitla Village Trails</h2>
            <p className="text-muted-foreground">
              Sitla is a sleepy hamlet known for its high-altitude fruit orchards. The walking trails here are silent, offering zero crowds and 180-degree Himalayan views.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2"><MapPin className="h-6 w-6 text-primary" /> 2. Peora Village</h2>
            <p className="text-muted-foreground">
              Located about 10 km away, Peora is often called the 'Fruit Bowl of Kumaon'. It's a great place to stay if you want to be completely off-grid.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2"><Trees className="h-6 w-6 text-primary" /> 3. Sargakhet Pine Forest</h2>
            <p className="text-muted-foreground">
              A quiet stretch of pine forest that's perfect for a picnic or a mindful morning walk. Most tourists miss this section of the Bhowali-Mukteshwar road.
            </p>

            <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl my-10">
              <h3 className="font-semibold text-foreground mb-2">Want the full list?</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Stay at **Ecoescape Mukteshwar** and our local team will share the secret pins to the 4 other hidden spots only locals know about!
              </p>
              <Button onClick={() => window.location.href = "/#booking"}>Plan Your Journey</Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
