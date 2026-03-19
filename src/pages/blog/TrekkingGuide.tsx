import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, MessageCircle, Mountain, Timer, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import trekkingFeaturedImg from "@/assets/blog/trekking/featured.png";

const trekkingTrails = [
  {
    name: "Bhalu Gaad Waterfall",
    difficulty: "Moderate",
    duration: "2-3 Hours",
    description: "A beautiful trek through dense forests leading to a 60-foot waterfall. The trail involves crossing small streams and is perfect for nature lovers.",
    highlight: "The 'Rainbow' waterfall view during sunny days."
  },
  {
    name: "Chauli Ki Jali & Cliffside Walk",
    difficulty: "Easy",
    duration: "1 Hour",
    description: "Located right behind the Mukteshwar Mahadev Temple, this trail offers breathtaking views of the Kumaon valley and the Himalayan range.",
    highlight: "Stunning sunset views and dramatic rock formations."
  },
  {
    name: "Kapileshwar Temple Trek",
    difficulty: "Moderate",
    duration: "4-5 Hours",
    description: "An ancient 9th-century Shiva temple located in a valley. The trek takes you through terraced fields and traditional Kumaoni villages.",
    highlight: "Cultural immersion and ancient architecture."
  },
  {
    name: "Sargakhet – Sitla Trail",
    difficulty: "Easy",
    duration: "2 Hours",
    description: "A peaceful forest walk connecting Sargakhet to the scenic Sitla ridge. Ideal for birdwatching and enjoying the silence of the woods.",
    highlight: "Panoramic Himalayan views from the Sitla ridge."
  },
  {
    name: "Ecoescape Local Forest Walk",
    difficulty: "Easy",
    duration: "45 Mins",
    description: "Starting right from our doorstep, this walk takes you through oak and rhododendron forests. Perfect for a morning stretch.",
    highlight: "Fresh air and immediate proximity to our homestay."
  }
];

export default function TrekkingGuide() {
  const articleSchema = generateArticleSchema({
    headline: "Mukteshwar Trekking Guide: 5 Best Trails for Adventure & Nature Lovers",
    image: "https://ecoescapemukteshwar.com/assets/blog/trekking/featured.png",
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
    description: "Discover the best trekking trails in Mukteshwar. From the Bhalu Gaad waterfall to scenic forest walks, explore the top hiking paths near Ecoescape Mukteshwar.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-trekking-guide",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Mukteshwar Trekking Guide" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Mukteshwar Trekking Guide | 5 Best Hiking Trails & 2026 Forest Walks"
        description="Plan your Himalayan adventure. Explore the top trekking trails in Mukteshwar, from the Bhalu Gaad waterfall to hidden forest paths starting at Ecoescape."
        canonical="https://ecoescapemukteshwar.com/blog/mukteshwar-trekking-guide"
        keywords="Mukteshwar trekking, hiking in Mukteshwar, Bhalu Gaad waterfall trek, Mukteshwar trails, Uttarakhand trekking, trekking near Ecoescape"
        jsonLd={[articleSchema, breadcrumbSchema]}
      />
      <Header />
      <main className="pt-28 pb-20">
        <article className="container max-w-3xl">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          <header className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Adventure
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Mukteshwar Trekking Guide: 5 Best Trails for Adventure & Nature Lovers
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> March 19, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 8 min read
              </span>
            </div>
          </header>

          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg aspect-video bg-muted">
            <img
              src={trekkingFeaturedImg}
              alt="Beautiful trekking trail in Mukteshwar with Himalayan views"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground italic">
              "In every walk with nature, one receives far more than he seeks." — John Muir
            </p>
            <p className="mt-6">
              Mukteshwar, nestled in the Kumaon hills at an altitude of 2,285 meters, is a hiker's paradise. Unlike the crowded trails of popular hill stations, trekking in Mukteshwar offers a sense of solitude, dense oak forests, and unparalleled views of the Nanda Devi range.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">
              Top 5 Trekking Trails in Mukteshwar
            </h2>

            <div className="space-y-8">
              {trekkingTrails.map((trail, index) => (
                <div key={index} className="bg-secondary/30 p-6 rounded-2xl border border-border/50">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Mountain className="h-5 w-5 text-primary" /> {trail.name}
                  </h3>
                  <div className="flex flex-wrap gap-4 text-sm mb-4">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 text-primary" /> Difficulty: <strong>{trail.difficulty}</strong>
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Timer className="h-4 w-4 text-primary" /> Duration: <strong>{trail.duration}</strong>
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {trail.description}
                  </p>
                  <p className="text-sm font-medium text-primary bg-primary/5 p-3 rounded-lg border border-primary/10">
                    <strong>Highlight:</strong> {trail.highlight}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">
              Essential Trekking Tips for Mukteshwar
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>👟 <strong>Footwear:</strong> Wear sturdy hiking boots or shoes with good grip. The trails can be slippery, especially during monsoon.</li>
              <li>💧 <strong>Hydration:</strong> Carry a reusable water bottle. There are few shops along the interior forest trails.</li>
              <li>🌤️ <strong>Timing:</strong> Start early in the morning to catch the best Himalayan views and avoid the midday sun.</li>
              <li>🧭 <strong>Guides:</strong> For longer treks like Kapileshwar, we recommend taking a local guide. At Ecoescape, we can arrange experienced local companions for your walks.</li>
              <li>🧥 <strong>Layers:</strong> Even in summer, forest shadows can be cool. Carry a light windcheater.</li>
            </ul>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              Why Stay at Ecoescape for Your Trekking Trip?
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At <strong>Ecoescape Mukteshwar</strong>, our location is our biggest advantage for trekkers. Our property is surrounded by reserved forest areas, meaning several beautiful trails start literally from our main gate. After a long day of hiking, you can return to a warm, home-cooked Kumaoni meal and a comfortable bed with views of the mountains you just explored.
            </p>

            {/* CTA */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                Ready to Hit the Trails?
              </h3>
              <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
                Book your stay at Ecoescape and let us help you plan the perfect trekking itinerary based on your fitness level and interests.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    window.location.href = "/#booking";
                  }}
                >
                  Book Your Adventure
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => {
                    const msg = encodeURIComponent(
                      "Hi! I'm interested in a trekking trip to Mukteshwar. Can you help me with a stay at Ecoescape?"
                    );
                    window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank");
                  }}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </Button>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground">Is it safe to trek solo in Mukteshwar?</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  While popular routes like Chauli Ki Jali are safe for solo travelers, we recommend having a partner or guide for interior forest trails like Bhalu Gaad to avoid getting lost.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">What is the best month for trekking?</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  March to June and October to December offer the best weather and visibility. Monsoons (July-Sept) make the trails lush but can be leach-prone and slippery.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Are there any easy treks for families?</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Yes! The Chauli Ki Jali walk and our local Ecoescape forest walk are very easy and suitable for children and seniors.
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
