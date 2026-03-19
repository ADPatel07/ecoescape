import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, MapPin, Camera, Sunrise, Utensils, MessageCircle, Info, Tent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import itineraryFeaturedImg from "@/assets/blog/itinerary/featured.png";

export default function WeekendItinerary() {

  // Article Schema
  const articleSchema = generateArticleSchema({
    headline: "Mukteshwar 2-Day Itinerary: The Perfect Weekend Getaway from Delhi",
    image: itineraryFeaturedImg,
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
    description: "Planning a quick trip to Mukteshwar? Our 2-day itinerary covers the best sights, adventure activities, and local dining for a perfect weekend getaway from Delhi/NCR.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-weekend-itinerary",
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Mukteshwar 2-Day Itinerary" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Mukteshwar 2-Day Itinerary | Perfect Weekend Getaway Guide"
        description="The ultimate 2-day itinerary for Mukteshwar. Plan your weekend trip with top things to do, where to eat, and scenic spots for a memorable Himalayan escape."
        canonical="https://ecoescapemukteshwar.com/blog/mukteshwar-weekend-itinerary"
        keywords="Mukteshwar itinerary, 2 days in Mukteshwar, Mukteshwar weekend trip, Delhi to Mukteshwar getaway, things to do in Mukteshwar, Mukteshwar travel guide"
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
              Travel Plan
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Mukteshwar 2-Day Itinerary: The Ultimate Weekend Getaway Guide
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
              src={itineraryFeaturedImg}
              alt="A scenic montage of Mukteshwar trip with Himalayan views and cozy stay"
              className="w-full h-auto"
              loading="eager"
              width="1200"
              height="675"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Looking for a quick escape from the heat and chaos of Delhi or NCR? Mukteshwar, a serene hill 
              station at 7,500 feet, is the perfect answer. With its lush orchards, deodar forests, and 
              uninterrupted views of the Nanda Devi peaks, it's a breath of fresh air — literally.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              At <strong>Ecoescape Mukteshwar</strong>, we often host weekend travelers who want to maximize 
              their 48 hours in the hills. This itinerary is designed to give you a perfect blend of 
              adventure, spirituality, and relaxation.
            </p>

            {/* Travel Summary */}
            <div className="bg-secondary rounded-xl p-6 my-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Info className="h-5 w-5 text-primary" />
                Trip Overview
              </h3>
              <ul className="space-y-2 text-foreground text-sm">
                <li className="flex justify-between border-b border-border pb-2">
                  <span>Duration</span>
                  <span>2 Days / 1 Night</span>
                </li>
                <li className="flex justify-between border-b border-border py-2">
                  <span>Start/End Point</span>
                  <span>Kathgodam or Delhi</span>
                </li>
                <li className="flex justify-between border-b border-border py-2">
                  <span>Ideal For</span>
                  <span>Couples, Families, Solo Travelers</span>
                </li>
                <li className="flex justify-between py-2">
                  <span>Vibe</span>
                  <span>Serene, Adventurous, Scenic</span>
                </li>
              </ul>
            </div>

            {/* Day 1 Section */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              Day 1: Arrival & Local Exploration
            </h2>
            
            <div className="space-y-8 my-6 border-l-2 border-primary/20 pl-6 ml-4">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary" />
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Sunrise className="h-5 w-5 text-primary" />
                  Morning: Arrival & Sunrise Check-in
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Reach Ecoescape by 10:00 AM. If you're coming by train, the drive from Kathgodam 
                  takes about 2.5 to 3 hours through winding mountain roads. Freshen up and enjoy a 
                  traditional breakfast on our terrace with the Himalayas for company.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary" />
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Afternoon: Mukteshwar Temple & Chauli Ki Jali
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Head to the 350-year-old Mukteshwar Mahadev Temple. It's a short hike through a 
                  pine-scented path. Right behind the temple is <strong>Chauli Ki Jali</strong>, 
                  known for its dramatic cliffs and sunset views. You can try rock climbing or 
                  simply sit on the rocks and soak in the 180-degree valley view.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary" />
                <h3 className="text-xl font-semibold text-foreground">Evening: Sunset Tea & Stargazing</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Return to Ecoescape for high tea. Watch the golden hour paint the snow peaks orange. 
                  After dinner, step onto the terrace for an incredible stargazing session. Mukteshwar's 
                  unpolluted skies offer clear views of the Milky Way.
                </p>
              </div>
            </div>

            {/* Day 2 Section */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <span className="bg-primary text-primary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              Day 2: Adventure & Departure
            </h2>

            <div className="space-y-8 my-6 border-l-2 border-primary/20 pl-6 ml-4">
              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary" />
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Tent className="h-5 w-5 text-primary" />
                  Morning: Bhalu Gaad Waterfall Trek
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Start early (8:00 AM) for a trek to the <strong>Bhalu Gaad waterfall</strong>. 
                  It's a moderate 3km trek through dense forests. The waterfall is hidden in a 
                  gorge and is perfect for a morning dip and some great <Camera className="inline h-4 w-4" /> photographs.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary" />
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  Afternoon: Orchard Visit & Lunch
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Visit the fruit orchards near the village. Depending on the season, you'll see 
                  apples, peaches, pears, or plums. Enjoy an authentic <strong>Kumaoni lunch</strong> 
                  at a local eatery or at Ecoescape before starting your journey back.
                </p>
              </div>

              <div className="relative">
                <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary" />
                <h3 className="text-xl font-semibold text-foreground">Late Afternoon: Departure</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Carry some local rhododendron juice (Buransh) or Himalayan honey as souvenirs. 
                  Head back to Kathgodam for your evening train or drive back home.
                </p>
              </div>
            </div>

            {/* Pro Tips Section */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2">
              <Info className="h-6 w-6 text-primary" />
              Pro Tips for Your Getaway
            </h2>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
              <ul className="space-y-3 text-sm text-foreground">
                <li className="flex items-start gap-2">
                   <span className="text-primary font-bold">✓</span>
                   <span><strong>Best Way to Reach:</strong> Take the Shatabdi from New Delhi to Kathgodam and hire a taxi for the onward 60km journey.</span>
                </li>
                <li className="flex items-start gap-2">
                   <span className="text-primary font-bold">✓</span>
                   <span><strong>What to Pack:</strong> Comfortable walking shoes for treks and a light jacket even in summer (evenings can be cool).</span>
                </li>
                <li className="flex items-start gap-2">
                   <span className="text-primary font-bold">✓</span>
                   <span><strong>Cash is King:</strong> While digital payments are growing, keep some cash handy for local stalls and forest entry fees.</span>
                </li>
              </ul>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                Ready for Your Mukteshwar Escape?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Make your 2-day trip extraordinary by staying at Ecoescape. We offer the best 
                views, local experiences, and a peaceful atmosphere.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    window.location.href = "/#booking";
                  }}
                >
                  Book Your Weekend Stay
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => {
                    const msg = encodeURIComponent(
                      "Hi! I'm planning a 2-day weekend getaway to Mukteshwar. Could you help me with room availability?"
                    );
                    window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank");
                  }}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
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
