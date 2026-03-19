import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, Sparkles, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import featuredImg from "@/assets/blog/spiritual-kumaon/featured.png";

export default function SpiritualKumaonGuide() {
  const articleSchema = generateArticleSchema({
    headline: "Spiritual Kumaon: Mukteshwar Dham & Jageshwar Dham Guide (2026)",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
    datePublished: formatDateForSchema("March 19, 2026"),
    author: { "@type": "Organization", name: "Ecoescape Mukteshwar" },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Explore the ancient spiritual circuit of Kumaon. Guide to Mukteshwar Dham, Jageshwar Dham (cluster of 124 temples), and the holy Kainchi Dham.",
    url: "https://ecoescapemukteshwar.com/blog/spiritual-kumaon-guide",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Spiritual Kumaon Guide" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Spiritual Kumaon Guide | Mukteshwar & Jageshwar Dham (2026)"
        description="A complete spiritual travel guide to Kumaon. Visit Mukteshwar Dham and Jageshwar Dham. Discover temple history, timings, and travel routes in Uttarakhand."
        canonical="https://ecoescapemukteshwar.com/blog/spiritual-kumaon-guide"
        keywords="mukteshwar dham, jageshwar dham, spiritual Kumaon, Uttarakhand temples, jageshwar mahadev mandir, Kainchi Dham travel"
        jsonLd={[articleSchema, breadcrumbSchema]}
      />
      <Header />
      <main className="pt-28 pb-20">
        <article className="container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <header className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Spiritual Tourism</span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Spiritual Kumaon: A Guide to Mukteshwar & Jageshwar Dham (2026)
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> March 19, 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 7 min read</span>
            </div>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-10 shadow-elevated">
            <img 
              src={featuredImg} 
              alt="Ancient stone temples of Jageshwar Dham" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Kumaon is often called **Devbhoomi (Land of the Gods)**. For those seeking peace and spiritual liberation, the circuit encompassing **Mukteshwar Dham** and **Jageshwar Dham** is an unparalleled experience.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2"><Sparkles className="h-6 w-6 text-primary" /> Mukteshwar Dham</h2>
            <p className="text-muted-foreground">
              Located at the highest point of the town, this 350-year-old temple is dedicated to Lord Shiva. It is believed to be the site where Lord Shiva granted *Moksha* (liberation) to a demon, giving the town its name.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2"><Send className="h-6 w-6 text-primary" /> Jageshwar Dham (The Temple Cluster)</h2>
            <p className="text-muted-foreground">
              Located about 75 km from Mukteshwar, Jageshwar Dham is a cluster of **124 ancient stone temples** dating back to the 9th–13th centuries. It is one of the most significant Shaivite pilgrimage sites in India.
            </p>
            <div className="bg-secondary p-6 rounded-xl my-6">
              <h3 className="text-lg font-semibold mb-2">How to travel from Mukteshwar to Jageshwar:</h3>
              <p className="text-sm text-muted-foreground">The drive takes about 2.5 to 3 hours via Almora. We recommend a full-day trip to explore the complex and the nearby Dandeshwar Temple.</p>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">Planning Your Pilgrimage</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li>🕉️ <strong>Kainchi Dham:</strong> Start your journey at the Neem Karoli Baba Ashram.</li>
              <li>🕉️ <strong>Mukteshwar Dham:</strong> Spend 1-2 days in Mukteshwar for meditation and peace.</li>
              <li>🕉️ <strong>Jageshwar Dham:</strong> Conclude with a visit to the historic stone temple cluster.</li>
            </ul>

            <div className="mt-10 bg-primary/5 border border-primary/20 p-8 rounded-2xl text-center">
              <h3 className="text-xl font-serif font-semibold mb-4 text-foreground">Retreat at Ecoescape Mukteshwar</h3>
              <p className="text-muted-foreground mb-6">
                After your spiritual exploration, find sanctuary in our east-facing rooms. We can help arrange guides and taxis for your Jageshwar trip.
              </p>
              <Button size="lg" onClick={() => window.location.href = "/#booking"}>Book Your Spiritual Retreat</Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
