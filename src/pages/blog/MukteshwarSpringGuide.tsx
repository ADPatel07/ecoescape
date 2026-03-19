import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, Smile, Sun, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import featuredImg from "@/assets/blog/spring-guide/featured.png";

export default function MukteshwarSpringGuide() {
  const articleSchema = generateArticleSchema({
    headline: "Spring in Mukteshwar: Flowers, Fruit Blossoms & Best Weather (2026)",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
    datePublished: formatDateForSchema("March 19, 2026"),
    author: { "@type": "Organization", name: "Ecoescape Mukteshwar" },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Experience the magic of spring in Mukteshwar. April to June guide featuring fruit blossoms, pleasant temperatures, and the best time for garden lovers in 2026.",
    url: "https://ecoescapemukteshwar.com/blog/spring-in-mukteshwar-guide",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Spring in Mukteshwar" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Spring in Mukteshwar | 2026 Fruit Blossom & Flower Guide"
        description="Escape to a floral paradise. Guide to spring in Mukteshwar (March-June). See apple blossoms, apricot flowers, and the botanical garden at Ecoescape."
        canonical="https://ecoescapemukteshwar.com/blog/spring-in-mukteshwar-guide"
        keywords="spring in mukteshwar, mukteshwar fruit blossoms, best time to visit mukteshwar, mukteshwar weather april, flower guide mukteshwar"
        jsonLd={[articleSchema, breadcrumbSchema]}
      />
      <Header />
      <main className="pt-28 pb-20">
        <article className="container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <header className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Seasonal Guide</span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Spring in Mukteshwar: Flowers, Fruit Blossoms & Best Weather (2026)
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> March 19, 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min read</span>
            </div>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-10 shadow-elevated">
            <img 
              src={featuredImg} 
              alt="Fruit blossoms in Mukteshwar during spring" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Spring (March to June) is arguably the most beautiful season in **Mukteshwar**. The hills come alive with the pink of peach blossoms, the white of apricot flowers, and the vibrant red of rhododendrons.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2"><Sun className="h-6 w-6 text-primary" /> Weather & Temperature</h2>
            <p className="text-muted-foreground">
              Expect pleasant days (**15°C - 25°C**) and cool nights (**10°C - 15°C**). It's the perfect escape from the heat of Delhi and the plains.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2"><Smile className="h-6 w-6 text-primary" /> The Fruit Blossom Season</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>🌸 <strong>March:</strong> Apricot and Plum blossoms (White/Pink).</li>
              <li>🌸 <strong>April:</strong> Apple and Peach blossoms.</li>
              <li>🌸 <strong>May-June:</strong> Harvesting season begins — taste fresh fruits right from the trees!</li>
            </ul>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2"><Sparkles className="h-6 w-6 text-primary" /> Botanical Garden at Ecoescape</h2>
            <p className="text-muted-foreground">
              At **Ecoescape Mukteshwar**, our garden features over 100 plant varieties. Spring is when our rose collection and indigenous Himalayan flowers are in full bloom. It's a paradise for nature photographers.
            </p>

            <div className="mt-8">
              <Button size="lg" onClick={() => window.location.href = "/#booking"}>Book Your Spring Escape</Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
