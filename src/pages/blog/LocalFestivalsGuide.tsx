import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, Music, Star, Landmark, Heart, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import festivalsFeaturedImg from "@/assets/blog/festivals/featured.png";

export default function LocalFestivalsGuide() {
  // Article Schema
  const articleSchema = generateArticleSchema({
    headline: "Local Festivals & Culture in Mukteshwar: A Kumaoni Heritage Guide",
    image: "https://ecoescapemukteshwar.com/src/assets/blog/festivals/featured.png",
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
    description: "Discover the vibrant culture of Mukteshwar. From the traditional Choliya dance to festivals like Phool Dei and Harela, learn how to experience authentic Kumaoni heritage at Ecoescape.",
    url: "https://ecoescapemukteshwar.com/blog/local-festivals-and-culture-guide",
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Local Festivals & Culture" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Local Festivals & Culture in Mukteshwar | Kumaoni Heritage Guide"
        description="Experience the soul of the Kumaon hills. Discover the traditional festivals, folk music, and unique customs of Mukteshwar. A guide to authentic cultural travel."
        canonical="https://ecoescapemukteshwar.com/blog/local-festivals-and-culture-guide"
        keywords="festivals in Mukteshwar, Kumaoni culture, Phool Dei festival, Harela festival Uttarakhand, Choliya dance, local traditions Mukteshwar"
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
              Cultural Guide
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Local Festivals & Culture in Mukteshwar: A Kumaoni Heritage Guide
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

          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={festivalsFeaturedImg}
              alt="Traditional Choliya dancers performing in a village square in Mukteshwar"
              className="w-full h-auto"
              loading="eager"
              width="1200"
              height="675"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Beyond its landscapes, the heart of Mukteshwar beats in its <strong>traditions</strong>. The Kumaoni culture is a rich tapestry of music, dance, and festivals that celebrate nature and divinity. For a traveler, experiencing these local festivities is the best way to understand the soul of the mountains. Here is your roadmap to the <strong>cultural heritage of Mukteshwar</strong>.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Landmark className="h-6 w-6 text-primary" />
              1. Phool Dei: The Festival of Flowers
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Celebrated in March (the first day of the Hindu month of Chaitra), <strong>Phool Dei</strong> is perhaps the most charming festival of Uttarakhand. Young children visit houses, placing fresh flowers on the threshold and singing traditional songs. In return, they receive snacks and blessings.
            </p>
            <p className="text-sm italic underline text-muted-foreground">"It's a beautiful way to welcome the spring and celebrate the blossoming of the rhododendrons."</p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              2. Harela: Celebrating the Harvest
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Occurring in July (during the monsoon), <strong>Harela</strong> marks the arrival of the rains and the sowing of new crops. Families plant seven types of seeds in a basket, which are then distributed on the festival day as symbols of prosperity and well-being.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Music className="h-6 w-6 text-primary" />
              3. Choliya Dance: The Warrior's Soul
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The <strong>Choliya dance</strong> is a mesmerizing folk dance performed with swords and shields. Originally a ritual to ward off evil spirits, it is now an integral part of weddings and special festivals. The energy, the rhythmic drums (Dhol-Damau), and the vibrant costumes are a treat for any visitor.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Star className="h-6 w-6 text-primary" />
              4. Aipan Art: The Sacred Geometry
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You'll notice intricate white patterns on red backgrounds on the doorsteps and courtyards of Kumaoni homes. This is <strong>Aipan</strong>, a traditional folk art made using rice paste. Each pattern has a specific meaning and is created by the women of the family during auspicious occasions.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6 my-10">
              <h3 className="font-semibold text-foreground mb-2">Experience Culture at Ecoescape</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                At Ecoescape Mukteshwar, we are committed to <strong>preserving and promoting Kumaoni heritage</strong>. We often organize local folk music sessions and serve traditional meals using age-old recipes. Our staff can also help you witness local village festivals first-hand.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                Experience the Spirit of Kumaon
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Ready to immerse yourself in the culture of the hills? Stay at Ecoescape and live the Mukteshwar story.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    window.location.href = "/#booking";
                  }}
                >
                  Book Your Cultural Stay
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => {
                    const msg = encodeURIComponent("Hi! I'm interested in experiencing Kumaoni culture and festivals while staying at Ecoescape Mukteshwar. Would love more details.");
                    window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank");
                  }}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    window.location.href = `tel:${siteConfig.phone}`;
                  }}
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </Button>
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
