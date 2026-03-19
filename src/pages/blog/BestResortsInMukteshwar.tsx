import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import featuredImg from "@/assets/blog/best-resorts/featured.png";

export default function BestResortsInMukteshwar() {
  const articleSchema = generateArticleSchema({
    headline: "10 Best Resorts in Mukteshwar: Luxury to Budget Stays (2026)",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
    datePublished: formatDateForSchema("March 19, 2026"),
    author: { "@type": "Organization", name: "Ecoescape Mukteshwar" },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Compare the top resorts in Mukteshwar! From Lemon Tree and Justa to sustainable boutique stays like Ecoescape, find your perfect Himalayan holiday home.",
    url: "https://ecoescapemukteshwar.com/blog/best-resorts-in-mukteshwar",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Best Resorts in Mukteshwar" },
  ]);

  const resorts = [
    { name: "Lemon Tree Mukteshwar", type: "Luxury", feature: "Modern amenities & Spa", dist: "10km from Temple" },
    { name: "Justa Mukteshwar Retreat", type: "Premium", feature: "Himalayan views & Luxury", dist: "8km from Temple" },
    { name: "Ecoescape Mukteshwar", type: "Boutique", feature: "Sustainable, Home-cooked meals, Sunrise views", dist: "7km from Temple" },
    { name: "Digantaa Resort", type: "Deluxe", feature: "Spacious rooms & Garden", dist: "12km from Temple" },
    { name: "GoStops Mukteshwar", type: "Budget", feature: "Social vibe, Dorms available", dist: "2km from Temple" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="10 Best Resorts in Mukteshwar | 2026 Comparison Guide"
        description="Looking for resorts in Mukteshwar? Read our 2026 stay guide comparing luxury, boutique, and budget options including Lemon Tree, Justa, and Ecoescape."
        canonical="https://ecoescapemukteshwar.com/blog/best-resorts-in-mukteshwar"
        keywords="mukteshwar resorts, mukteshwar hotels, lemon tree mukteshwar, justa mukteshwar, best stay in mukteshwar, budget hotels in mukteshwar"
        jsonLd={[articleSchema, breadcrumbSchema]}
      />
      <Header />
      <main className="pt-28 pb-20">
        <article className="container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <header className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">Stay Guide</span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              10 Best Resorts in Mukteshwar: Luxury to Budget Comparison (2026)
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> March 19, 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 8 min read</span>
            </div>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-10 shadow-elevated">
            <img 
              src={featuredImg} 
              alt="Luxury resort in Mukteshwar with Himalayan views" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Choosing **where to stay in Mukteshwar** can transform your Himalayan experience. Whether you want the pampering of a luxury resort or the warmth of a sustainable boutique stay, here is our curated list for 2026.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">Comparison of Top Stays</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse border border-border">
                <thead className="bg-secondary">
                  <tr>
                    <th className="p-3 border border-border text-left">Resort Name</th>
                    <th className="p-3 border border-border text-left">Style</th>
                    <th className="p-3 border border-border text-left">Key Highlight</th>
                  </tr>
                </thead>
                <tbody>
                  {resorts.map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-secondary/20"}>
                      <td className="p-3 border border-border font-medium">{r.name}</td>
                      <td className="p-3 border border-border">{r.type}</td>
                      <td className="p-3 border border-border">{r.feature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">Why Choose Boutique Stays?</h2>
            <p className="text-muted-foreground">
              While large luxury chains offer consistency, boutique stays like **Ecoescape Mukteshwar** offer a more authentic connection to Kumaon. Enjoy:
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li>🏡 <strong>Sustainable Living:</strong> Eco-friendly construction and waste management.</li>
              <li>🥗 <strong>Farm-to-Table:</strong> Home-cooked meals using local organic produce.</li>
              <li>🌅 <strong>Unmatched Views:</strong> East-facing rooms for the perfect Himalayan sunrise.</li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-6 my-10 rounded-r-xl">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2"><Sparkles className="h-5 w-5" /> Editor's Choice</h3>
              <p className="text-muted-foreground text-sm">
                For the best balance of tranquility, nature, and comfort, <strong>Ecoescape Mukteshwar</strong> in Mukteshwar Village is the top-rated boutique choice for 2026.
              </p>
            </div>

            <div className="mt-8 flex gap-4">
              <Button size="lg" onClick={() => window.location.href = "/#booking"}>Check Availability</Button>
              <Button variant="outline" size="lg" onClick={() => window.location.href = "/blog/family-vacation-guide"}>Family Guide</Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
