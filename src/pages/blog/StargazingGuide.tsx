import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, Star, Moon, Telescope, Camera, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import stargazingFeaturedImg from "@/assets/blog/stargazing/featured.png";

export default function StargazingGuide() {
  // Article Schema
  const articleSchema = generateArticleSchema({
    headline: "Stargazing in Mukteshwar: A Complete Guide to the Night Sky at Ecoescape",
    image: stargazingFeaturedImg,
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
    description: "Discover the magic of the Himalayan night sky. Our guide to stargazing in Mukteshwar covers the best times to visit, what to see (planets, Milky Way, constellations), and why Ecoescape is the perfect dark-sky retreat.",
    url: "https://ecoescapemukteshwar.com/blog/stargazing-in-mukteshwar",
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Stargazing in Mukteshwar" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Stargazing in Mukteshwar | 2026 Guide to Night Sky & Astro-Tourism"
        description="Witness the magic of the Milky Way. Your complete guide to stargazing in Mukteshwar, best viewing months, and dark-sky experiences at Ecoescape Mukteshwar."
        canonical="https://ecoescapemukteshwar.com/blog/stargazing-in-mukteshwar"
        keywords="stargazing in Mukteshwar, astro-tourism India, night sky Mukteshwar, Milky Way photography Uttarakhand, dark sky retreat, Himalayan astronomy, things to do in Mukteshwar at night"
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
              Activity & Experience
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Stargazing in Mukteshwar: A Complete Guide to the Night Sky at Ecoescape
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

          {/* Featured Image */}
          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={stargazingFeaturedImg}
              alt="The Milky Way over the Himalayan mountains in Mukteshwar, as seen from Ecoescape terrace"
              className="w-full h-auto"
              loading="eager"
              width="1200"
              height="675"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              When the sun dips below the Himalayan peaks, a second world awakens in Mukteshwar. At an altitude of 
              <strong> 2,285 meters</strong>, far from the light pollution of metropolitan cities, the night sky 
              becomes a breathtaking canvas of celestial wonders. Whether you're a seasoned astronomer or a 
              curious dreamer, stargazing in Mukteshwar is an experience that stays with you forever.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              At <strong>Ecoescape Mukteshwar</strong>, we've designed our property to honor this natural gift. 
              Our east-facing terrace offers an unobstructed view of the horizon, making it one of the best spots 
              in the region for astro-tourism. From the silver glow of the Milky Way to the sharp rings of Saturn, 
              here is everything you need to know about the night sky over Mukteshwar.
            </p>

            {/* Info Box */}
            <div className="bg-secondary rounded-xl p-6 my-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                Why Mukteshwar is Great for Stargazing
              </h3>
              <ul className="space-y-2 text-foreground text-sm">
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Elevation</span>
                  <span>7,500 ft (High altitude = Thinner air)</span>
                </li>
                <li className="flex justify-between border-b border-border py-2">
                  <span>Light Pollution</span>
                  <span>Very Low (Bortle Class 3/4)</span>
                </li>
                <li className="flex justify-between border-b border-border py-2">
                  <span>Atmospheric Clarity</span>
                  <span>Excellent (especially in Winter)</span>
                </li>
                <li className="flex justify-between py-2">
                  <span>Key Attractions</span>
                  <span>Milky Way, Planets, Meteor Showers</span>
                </li>
              </ul>
            </div>

            {/* Section 1: What to See */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              What You Can See in the Mukteshwar Sky
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The mountain sky is far more detailed than what you might see from a city balcony. On a clear night 
              at Ecoescape, you can witness:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-secondary/50 rounded-xl p-5 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Moon className="h-5 w-5 text-primary" /> The Milky Way
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Visible as a faint, glowing band across the sky from April to October. In peak summer months, 
                  the Galactic Center rises with incredible detail.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-5 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Star className="h-5 w-5 text-primary" /> Planets
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Jupiter's moons and Saturn's rings are often visible through even basic binoculars. Venus 
                  shines brilliantly as the morning or evening star.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-5 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Telescope className="h-5 w-5 text-primary" /> Deep Sky Objects
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Andromeda Galaxy, Orion Nebula, and Pleiades star cluster are easy to spot. The clarity 
                  here reveals colors city lights usually wash out.
                </p>
              </div>
              <div className="bg-secondary/50 rounded-xl p-5 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Camera className="h-5 w-5 text-primary" /> Meteor Showers
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The Perseids (August) and Geminids (December) are spectacular here. With no city glare, 
                  you can count dozens of "shooting stars" per hour.
                </p>
              </div>
            </div>

            {/* Section 2: Best Time */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              Best Time for Stargazing
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              While every clear night is a good night, certain seasons offer unique advantages:
            </p>
            <ul className="space-y-4 my-6 text-muted-foreground">
              <li className="flex gap-3">
                <div className="font-bold text-primary min-w-[100px]">October – March:</div>
                <div><strong>Peak Clarity.</strong> Winter air is dry and stable, providing the sharpest views of the stars. This is the best time for deep-sky observation.</div>
              </li>
              <li className="flex gap-3">
                <div className="font-bold text-primary min-w-[100px]">April – June:</div>
                <div><strong>Milky Way Season.</strong> The core of our galaxy is most visible during these months, though occasional dust can affect transparency.</div>
              </li>
              <li className="flex gap-3">
                <div className="font-bold text-primary min-w-[100px]">New Moon:</div>
                <div><strong>The Golden Rule.</strong> Always plan your trip around the New Moon (when the moon is not visible) for the darkest skies and best views of distant stars.</div>
              </li>
            </ul>

            {/* Section 3: Astrophotography */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2">
              <Camera className="h-6 w-6 text-primary" />
              Astrophotography Tips for Beginners
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our terrace at Ecoescape is a favorite for photographers. If you want to capture the stars, 
              keep these basic tips in mind:
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-2">
                   <span className="text-primary">•</span>
                   <span><strong>Use a Tripod:</strong> Essential for long exposures (15-30 seconds).</span>
                </li>
                <li className="flex items-start gap-2">
                   <span className="text-primary">•</span>
                   <span><strong>Manual Mode:</strong> Set your ISO between 1600-3200 and open your aperture as wide as possible (f/2.8 or lower).</span>
                </li>
                <li className="flex items-start gap-2">
                   <span className="text-primary">•</span>
                   <span><strong>Focus:</strong> Use manual focus and set it to infinity. Small adjustments might be needed to get pin-sharp stars.</span>
                </li>
                <li className="flex items-start gap-2">
                   <span className="text-primary">•</span>
                   <span><strong>Remote Shutter:</strong> Use a remote or a 2-second timer to avoid camera shake when pressing the button.</span>
                </li>
              </ul>
            </div>

            {/* Section 4: Ecoescape Experience */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              The Ecoescape Stargazing Experience
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe stargazing should be a relaxing, communal experience. On clear nights, our guests 
              gather on the terrace with a <strong>bonfire</strong> and <strong>hot Kumaoni tea</strong>. 
              The silence of the mountain, combined with the vastness of the cosmos, creates a profound sense of peace.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-4">
              For those staying in our <Link to="/rooms/suite-with-mountain-view" className="text-primary hover:underline">Suite with Mountain View</Link>, 
              you can even enjoy the celestial display directly from your private terrace.
            </p>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                Experience the Magic of the Night Sky
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Book your stay at <strong>Ecoescape Mukteshwar</strong> and reconnect with the universe. 
                Enjoy bonfire nights, terrace stargazing, and the ultimate dark-sky Himalayan retreat.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    window.location.href = "/#booking";
                  }}
                >
                  Book Your Stay
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => {
                    const msg = encodeURIComponent(
                      "Hi! I'm interested in the stargazing experience at Ecoescape. Could you let me know about the best dates to visit for clear skies?"
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
                  Do I need a telescope to see the stars in Mukteshwar?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  <strong>No!</strong> The sky is so dark and clear that many wonders, including the Milky Way 
                  and several constellations, are visible to the naked eye. However, a pair of binoculars or 
                  a telescope will reveal even more detail, such as the moons of Jupiter.
                </p>
              </details>

              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  What should I wear for stargazing?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  Since Mukteshwar is at a high altitude, nights are always cool, even in summer. In winter, 
                  temperatures can drop near freezing. <strong>Warm layers, thermals, and insulated jackets</strong> 
                  are essential for a comfortable outdoor experience.
                </p>
              </details>

              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Can I see the Milky Way year-round?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  The Milky Way is most visible from <strong>March to October</strong>. In winter, we see a 
                  different part of our galaxy with many bright stars like Sirius and the constellation Orion.
                </p>
              </details>
            </div>

            {/* Closing */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 my-8">
              <p className="text-foreground font-medium mb-2">
                The stars are waiting for you.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Step away from the city lights and rediscover the wonder of the universe. At Ecoescape Mukteshwar, 
                every night is an invitation to look up and be amazed.
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
