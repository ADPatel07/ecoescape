import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, Mountain, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import featuredImg from "@/assets/blog/bhalu-gaad/featured.png";

export default function BhaluGaadWaterfallTrek() {
  const articleSchema = generateArticleSchema({
    headline: "Bhalu Gaad Waterfall Trek: Mukteshwar's Hidden Gem (2026 Guide)",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
    datePublished: formatDateForSchema("March 19, 2026"),
    author: { "@type": "Organization", name: "Ecoescape Mukteshwar" },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Trek to the hidden Bhalu Gaad waterfall in Mukteshwar. Find trek difficulty, timings, best time to visit (monsoon), and how to reach the falls in 2026.",
    url: "https://ecoescapemukteshwar.com/blog/bhalu-gaad-waterfall-trek",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Bhalu Gaad Waterfall Trek" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Bhalu Gaad Waterfall Trek | Mukteshwar Sightseeing 2026"
        description="Plan your trek to Bhalu Gaad waterfall. Discover the best time for photography, trail difficulty, and why this Mukteshwar waterfall is a must-visit."
        canonical="https://ecoescapemukteshwar.com/blog/bhalu-gaad-waterfall-trek"
        keywords="bhalu gaad waterfall, mukteshwar waterfall, bhalu gaad trek, mukteshwar trek, things to do in mukteshwar, hidden gems mukteshwar"
        jsonLd={[articleSchema, breadcrumbSchema]}
      />
      <Header />
      <main className="pt-28 pb-20">
        <article className="container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <header className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Adventure & Nature</span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Bhalu Gaad Waterfall Trek: Mukteshwar's Hidden Gem (2026 Guide)
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> March 19, 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 5 min read</span>
            </div>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-10 shadow-elevated">
            <img 
              src={featuredImg} 
              alt="Cascading Bhalu Gaad Waterfall in Mukteshwar" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              One of the best-kept secrets of Mukteshwar is the **Bhalu Gaad Waterfall**. A short but scenic trek leads you to this 60-foot cascading wonder, surrounded by dense forests and natural pools.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2"><Mountain className="h-6 w-6 text-primary" /> Trek Overview</h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>📍 <strong>Distance from Ecoescape:</strong> 6 km (drive to entrance)</li>
              <li>🚶 <strong>Trek Distance:</strong> 1.5 - 2 km (each way)</li>
              <li>⛰️ <strong>Difficulty:</strong> Easy to Moderate</li>
              <li>⏰ <strong>Duration:</strong> 2-3 hours (including time at the falls)</li>
            </ul>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2"><Waves className="h-6 w-6 text-primary" /> Why visit Bhalu Gaad?</h2>
            <p className="text-muted-foreground">
              The name "Bhalu Gaad" comes from the local words for **Bear (Bhalu)** and **Waterfall (Gaad)**. Legends say bears once frequented this area to drink water. Today, it is a haven for nature lovers and bird watchers.
            </p>
            <div className="bg-secondary p-6 rounded-xl my-6 text-sm">
              <p className="font-semibold mb-2">Best Time to Visit:</p>
              <p className="text-muted-foreground">The waterfall is most magnificent during and just after the **monsoon (July - September)**. However, the trek remains open through most of the year except peak rains.</p>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">Photography & Tips</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Carry enough water and light snacks (no shops on the trail).</li>
              <li>Wear shoes with good grip — the path can be slippery near the falls.</li>
              <li>Visit early morning (9 AM) for soft natural light for photography.</li>
            </ul>

            <div className="mt-8">
              <Button size="lg" onClick={() => window.location.href = "/#booking"}>Stay Nearby at Ecoescape</Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
