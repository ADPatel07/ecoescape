import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, MapPin, Search, Binoculars, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import birdwatchingFeaturedImg from "@/assets/blog/birdwatching/featured.png";

export default function BirdwatchingGuide() {
  // Article Schema
  const articleSchema = generateArticleSchema({
    headline: "Birdwatching in Mukteshwar: A Complete Guide to Himalayan Avian Diversity",
    image: birdwatchingFeaturedImg,
    datePublished: formatDateForSchema("March 19, 2026"),
    author: {
      "@type": "Organization",
      name: "Ecoescape Mukteshwar",
    },
    publisher: {
      "@type": "Organization",
      name: "Ecoescape Mukteshwar",
      url: "https://ecoescapemukteshwar.com",
    },
    description: "Explore the rich avian diversity of Mukteshwar. From the colorful Himalayan Monal to the elusive Laughingthrush, discover the best birding trails and seasonal highlights around Ecoescape.",
    url: "https://ecoescapemukteshwar.com/blog/birdwatching-in-mukteshwar-guide",
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Birdwatching in Mukteshwar" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Birdwatching in Mukteshwar | 200+ Species & Best Forest Trails"
        description="Explore the avian wonders of the Himalayas. Our Mukteshwar birdwatching guide covers 200+ species, top forest trails, and unique sightings at Ecoescape's botanical garden."
        canonical="https://ecoescapemukteshwar.com/blog/birdwatching-in-mukteshwar-guide"
        keywords="birdwatching in Mukteshwar, Himalayan birds guide, Uttarakhand birding, Himalayan Monal Mukteshwar, birding trails Kumaon, eco-tourism Uttarakhand, birding near Nainital"
        jsonLd={[articleSchema, breadcrumbSchema]}
      />
      <Header />
      <main className="pt-28 pb-20">
        <article className="container max-w-3xl">
          {/* Breadcrumb */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Nature & Wildlife
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Birdwatching in Mukteshwar: A Paradise for Nature Lovers
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> March 19, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 10 min read
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={birdwatchingFeaturedImg}
              alt="Himalayan Monal, the state bird of Uttarakhand, perched in a misty Mukteshwar forest"
              className="w-full h-auto"
              loading="eager"
              width="1200"
              height="675"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Nestled at the edge of oak and deodar forests, Mukteshwar is more than just a scenic hill station 
              — it is a vibrant sanctuary for over <strong>200 species of Himalayan birds</strong>. The region's 
              varied altitude and lush vegetation create a perfect habitat for everything from iridescent 
              pheasants to delicate warblers.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              At <strong>Ecoescape Mukteshwar</strong>, our 100+ species botanical garden is a microcosm of this 
              biodiversity. Wake up to the soulful call of the <strong>Great Barbet</strong> or catch a 
              glimpse of the <strong>Veriter Flycatcher</strong> directly from your terrace. This guide 
              is your companion for exploring the avian wonders of the Kumaon hills.
            </p>

            {/* Info Box */}
            <div className="bg-secondary rounded-xl p-6 my-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Binoculars className="h-5 w-5 text-primary" />
                Birdwatching Quick Facts
              </h3>
              <ul className="space-y-2 text-foreground text-sm">
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Species Diversity</span>
                  <span>200+ Resident & Migratory</span>
                </li>
                <li className="flex justify-between border-b border-border py-2">
                  <span>Best Season</span>
                  <span>March – June & October – November</span>
                </li>
                <li className="flex justify-between border-b border-border py-2">
                  <span>Top Sighting</span>
                  <span>Himalayan Monal, Kalij Pheasant</span>
                </li>
                <li className="flex justify-between py-2">
                  <span>Difficulty</span>
                  <span>Easy (Garden) to Moderate (Forest Trails)</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Top Birds */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              Must-See Birds of Mukteshwar
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              While every season brings different visitors, these are the "celebrities" of the Mukteshwar forests:
            </p>

            <div className="space-y-4 my-6">
              <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-primary">
                <h3 className="text-lg font-semibold text-foreground">1. Himalayan Monal</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  The state bird of Uttarakhand. Known for the male's spectacular iridescent 
                  multi-colored feathers. They are often spotted in the higher reaches near Sitla.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-primary">
                <h3 className="text-lg font-semibold text-foreground">2. Kalij Pheasant</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  A striking bird with glossy black/blue feathers and a distinct red facial patch. 
                  They are common around the deodar forests and often cross the forest roads.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-primary">
                <h3 className="text-lg font-semibold text-foreground">3. Great Barbet</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  Large, green birds with colorful bills. Their loud, repetitive call is the 
                  signature sound of the Mukteshwar valley in spring and summer.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-5 border-l-4 border-primary">
                <h3 className="text-lg font-semibold text-foreground">4. Blue Whistling Thrush</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-1">
                  A beautiful dark blue bird that "whistles" at dawn and dusk. They are almost 
                  always seen near water sources or in the garden at Ecoescape.
                </p>
              </div>
            </div>

            {/* Section 2: Best Spots */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" /> Top Birdwatching Trails
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Explore these trails for the best sightings, all within easy reach of Ecoescape:
            </p>
            <ul className="space-y-4 my-6 text-muted-foreground">
              <li className="flex gap-3">
                <div className="font-bold text-primary min-w-[120px]">Sitla Forest Trail:</div>
                <div>A dense stretch of oak and pine forest perfect for spotting woodpeckers, nuthatches, and owls.</div>
              </li>
              <li className="flex gap-3">
                <div className="font-bold text-primary min-w-[120px]">Bhalu Gaad Path:</div>
                <div>The trail to the waterfall is excellent for water birds and flycatchers nearby the streams.</div>
              </li>
              <li className="flex gap-3">
                <div className="font-bold text-primary min-w-[120px]">Ecoescape Garden:</div>
                <div>Sometimes the best sightings are right at home! Our garden attracts sunbirds and laughingthrushes daily.</div>
              </li>
            </ul>

            {/* Section 3: Seasonal Highlights */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              Seasonal Birding Breakdown
            </h2>
            <div className="overflow-x-auto -mx-4 px-4 my-6">
              <table className="w-full text-sm border-collapse border border-border">
                <thead className="bg-secondary">
                  <tr>
                    <th className="p-3 text-left border border-border">Season</th>
                    <th className="p-3 text-left border border-border">Highlight</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 border border-border font-semibold">Spring (Mar-May)</td>
                    <td className="p-3 border border-border">Peak breeding season. Forests are loud with calls; high activity.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border font-semibold">Summer (Jun-Aug)</td>
                    <td className="p-3 border border-border">Ideal for high-altitude species; lush greenery provides cover.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border font-semibold">Autumn (Sep-Nov)</td>
                    <td className="p-3 border border-border">Clear skies and migratory birds beginning their winter descent.</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-border font-semibold">Winter (Dec-Feb)</td>
                    <td className="p-3 border border-border">Excellent for raptors and high-altitude birds coming lower for warmth.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Section 4: Tips */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2">
              <Search className="h-6 w-6 text-primary" />
              Birding Ethics & Tips
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To ensure a great experience for you and the birds, follow these principles:
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-2">
                   <span className="text-primary">✓</span>
                   <span><strong>Stay Quiet:</strong> Birds are easily startled. Move slowly and avoid loud conversations.</span>
                </li>
                <li className="flex items-start gap-2">
                   <span className="text-primary">✓</span>
                   <span><strong>No Playbacks:</strong> Avoid playing bird calls to attract them; it can stress the birds, especially during breeding season.</span>
                </li>
                <li className="flex items-start gap-2">
                   <span className="text-primary">✓</span>
                   <span><strong>Bring Binoculars:</strong> A pair of 8x42 or 10x42 binoculars will transform your experience.</span>
                </li>
                <li className="flex items-start gap-2">
                   <span className="text-primary">✓</span>
                   <span><strong>Camouflage:</strong> Wear earthy colors (greens, browns) to blend into the forest or garden.</span>
                </li>
              </ul>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                Plan Your Birding Retreat at Ecoescape
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Escape to our serene garden and surrounding forests. We offer a peaceful base for birding 
                enthusiasts with sunrise views and nature trails right at our doorstep.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    window.location.href = "/#booking";
                  }}
                >
                  Book Stay for Birdwatching
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => {
                    const msg = encodeURIComponent(
                      "Hi! I'm planning a birdwatching trip to Mukteshwar. Could you tell me more about the sightings at Ecoescape?"
                    );
                    window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank");
                  }}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </Button>
              </div>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  What is the best time of day for birdwatching?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  <strong>Early morning (6:00 AM – 9:00 AM)</strong> is by far the most active time 
                  for birds. Late afternoon (4:00 PM – 6:00 PM) is also excellent as they prepare 
                  for the evening.
                </p>
              </details>

              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Can I see a Monal near Ecoescape?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  While rare directly in the village, <strong>the Sitla forests (just 4km away)</strong> 
                  are a known habitat for them. We can help you arrange local guides who know their 
                  frequently visited spots.
                </p>
              </details>

              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Are there guided birding tours?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  Yes, there are several <strong>expert birding guides</strong> in the Mukteshwar-Dhari region. 
                  Our team at Ecoescape can help you connect with them for a professional birding tour.
                </p>
              </details>
            </div>

            {/* Closing */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 my-8">
              <p className="text-foreground font-medium mb-2">
                The mountains are calling.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Whether you're looking for the vibrant feathers of a Monal or the quiet company of a 
                sparrow, Mukteshwar offers a birding experience like no other. We look forward to 
                welcoming you at Ecoescape.
              </p>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
