import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, BookOpen, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import featuredImg from "@/assets/blog/temple-history/featured.png";

export default function MukteshwarMahadevHistory() {
  const articleSchema = generateArticleSchema({
    headline: "History & Myth: The Legend of Mukteshwar Mahadev Mandir (2026)",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
    datePublished: formatDateForSchema("March 19, 2026"),
    author: { "@type": "Organization", name: "Ecoescape Mukteshwar" },
    publisher: { "@type": "Organization", name: "Ecoescape Mukteshwar", url: "https://ecoescapemukteshwar.com" },
    description: "Deep dive into the 350-year-old history of Mukteshwar Mahadev Mandir. Learn about the legend of liberation (Moksha), Chauli Ki Jali, and ancient rituals.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-mahadev-temple-history",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Temple History & Myth" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="History of Mukteshwar Mahadev Mandir | Legends & Stories (2026)"
        description="Discover the sacred history of Mukteshwar Dham. Read the legend of the Mukti-Ishwar, the story of Chauli Ki Jali, and the 350-year heritage of the Kumaon hills."
        canonical="https://ecoescapemukteshwar.com/blog/mukteshwar-mahadev-temple-history"
        keywords="mukteshwar mahadev history, mukteshwar temple legends, mukteshwar dham temple, chauli ki jali myth, Uttarakhand temple history"
        jsonLd={[articleSchema, breadcrumbSchema]}
      />
      <Header />
      <main className="pt-28 pb-20">
        <article className="container max-w-3xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <header className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">History & Heritage</span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              History & Myth: The Legend of Mukteshwar Mahadev Mandir (2026)
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> March 19, 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 7 min read</span>
            </div>
          </header>

          <div className="aspect-video rounded-2xl overflow-hidden mb-10 shadow-elevated">
            <img 
              src={featuredImg} 
              alt="Ancient Mukteshwar Mahadev Temple" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              The ancient **Mukteshwar Mahadev Mandir** is not just a place of worship; it is the soul of the town. With a history spanning over 350 years, the temple is steeped in legends and spiritual significance.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2"><Sparkles className="h-6 w-6 text-primary" /> The Legend of Liberation (Moksha)</h2>
            <p className="text-muted-foreground">
              The name "Mukteshwar" is derived from two Sanskrit words: **Mukti** (Liberation) and **Ishwar** (Lord). According to Hindu mythology, Lord Shiva killed a fierce demon here and granted him liberation (*Moksha*), thus becoming the "Lord of Freedom". This makes the temple a highly auspicious site for pilgrims seeking spiritual peace.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2"><BookOpen className="h-6 w-6 text-primary" /> Chauli Ki Jali: The Mystical Cliff</h2>
            <p className="text-muted-foreground">
              Adjacent to the temple lies **Chauli Ki Jali**, a natural rock cliff with a mesh-like hole. Local folklore suggests that passing through this hole granted supernatural powers to kings or fertility to the childless. Today, it remains a site of wonder and a top photography spot.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2"><MapPin className="h-6 w-6 text-primary" /> Architectual Heritage</h2>
            <p className="text-muted-foreground leading-relaxed">
              The temple is built in the traditional Kumaoni style using mountain stone and intricate carving. While the temple was renovated over time, the core sanctum houses an ancient Shiva Lingam that has been worshipped for centuries.
            </p>

            <div className="bg-secondary p-8 rounded-2xl my-10 border border-border">
              <h3 className="text-xl font-serif font-semibold mb-4 text-foreground text-center">A Sacred Space</h3>
              <p className="text-sm text-muted-foreground text-center italic">
                "When you stand at the temple edge, with the cold mountain wind and the bells echoing against the Himalayas, you truly understand why it's called Devbhoomi."
              </p>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">Plan Your Visit</h2>
            <p className="text-muted-foreground">Stay at <strong>Ecoescape Mukteshwar</strong>, just 7 km from the temple, and experience the same spiritual peace from our sunrise terrace.</p>
            <div className="mt-8">
              <Button size="lg" onClick={() => window.location.href = "/#booking"}>Experience Divine Peace</Button>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
