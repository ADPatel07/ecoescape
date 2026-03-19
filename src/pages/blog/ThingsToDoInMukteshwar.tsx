import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, MapPin, Phone, MessageCircle, Mountain, Trees, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import mukteshwarOverviewImg from "@/assets/blog/things-to-do/mukteshwar-overview.webp";
import chauliKiJaliImg from "@/assets/blog/things-to-do/chauli-ki-jali.webp";
import inspectionBungalowImg from "@/assets/blog/things-to-do/inspection-bungalow.webp";
import bhaluGaadWaterfallImg from "@/assets/blog/things-to-do/bhalu-gaad-waterfall.webp";
import sitlaVillageImg from "@/assets/blog/things-to-do/sitla-village.webp";
import deodarForestImg from "@/assets/blog/things-to-do/deodar-forest.webp";
import fruitOrchardImg from "@/assets/blog/things-to-do/fruit-orchard.webp";

export default function ThingsToDoInMukteshwar() {
  // Article Schema
  const articleSchema = generateArticleSchema({
    headline: "15 Best Places to Visit in Mukteshwar: Tourism & Sightseeing Guide (2026)",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
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
    description: "Looking for the best places to visit in Mukteshwar? Explore our 2026 guide to Mukteshwar Dham, Bhalu Gaad Waterfall, and more attractions for a perfect trip.",
    url: "https://ecoescapemukteshwar.com/blog/things-to-do-in-mukteshwar",
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Places to Visit in Mukteshwar" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="15 Best Places to Visit in Mukteshwar | 2026 Sightseeing Guide"
        description="Discover the top places to visit in Mukteshwar - from the ancient Mukteshwar Dham to the hidden Bhalu Gaad Waterfall. Your complete 2026 tourist guide."
        canonical="https://ecoescapemukteshwar.com/blog/things-to-do-in-mukteshwar"
        keywords="places to visit in mukteshwar, mukteshwar waterfall, bhalu gaad waterfall, things to do in mukteshwar, mukteshwar sightseeing, mukteshwar attractions"
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
              Travel & Sightseeing
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              15 Best Places to Visit in Mukteshwar: Tourism & Sightseeing Guide (2026)
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> March 19, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 12 min read
              </span>
            </div>
          </header>

          {/* Featured Snippet Section */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 mb-10 rounded-r-xl">
            <h2 className="text-lg font-semibold text-foreground mb-2">Top 5 Places to Visit in Mukteshwar</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>🕉️ <strong>Mukteshwar Dham:</strong> Ancient Shiva temple with Himalayan views.</li>
              <li>🧗 <strong>Chauli Ki Jali:</strong> Dramatic cliffs for adventure and photography.</li>
              <li>🌊 <strong>Bhalu Gaad Waterfall:</strong> A hidden gem for nature treks.</li>
              <li>🏡 <strong>Inspection Bungalow:</strong> Colonial heritage site linked to Jim Corbett.</li>
              <li>🍑 <strong>Fruit Orchards:</strong> Experience the lush apple and apricot farms of Sitla.</li>
            </ul>
          </div>

          {/* Featured Image */}
          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={mukteshwarOverviewImg}
              alt="Scenic panoramic view of Mukteshwar with Himalayan peaks and lush green valley"
              className="w-full h-auto"
              loading="eager"
              width="1200"
              height="675"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Nestled in the <strong>Kumaon hills of Uttarakhand</strong> at 2,285 meters,
              Mukteshwar is a hidden gem that offers the perfect blend of adventure,
              spirituality, and natural beauty. Unlike crowded hill stations, Mukteshwar
              retains its serene charm while offering plenty of activities for every type
              of traveler — from families and couples to adventure seekers and nature lovers.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              <strong>Ecoescape Mukteshwar</strong> is strategically located in Mukteshwar Village,
              making it the perfect base to explore all these attractions. Whether you're
              planning a weekend getaway from Delhi or a week-long Himalayan retreat, this
              comprehensive guide covers everything you need to know about the best things
              to do in Mukteshwar.
            </p>

            {/* Info Box */}
            <div className="bg-secondary rounded-xl p-6 my-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Quick Facts About Mukteshwar
              </h3>
              <ul className="space-y-2 text-foreground text-sm">
                <li className="flex justify-between">
                  <span>Altitude</span>
                  <span>2,285 meters (7,500 feet)</span>
                </li>
                <li className="flex justify-between">
                  <span>Distance from Delhi</span>
                  <span>~320 km (7-8 hours)</span>
                </li>
                <li className="flex justify-between">
                  <span>Distance from Nainital</span>
                  <span>~50 km (1.5 hours)</span>
                </li>
                <li className="flex justify-between">
                  <span>Best Time to Visit</span>
                  <span>March - June, September - November</span>
                </li>
                <li className="flex justify-between">
                  <span>Ideal Stay Duration</span>
                  <span>2-4 days</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Top Attractions */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2">
              <Mountain className="h-6 w-6 text-primary" />
              Top Attractions in Mukteshwar
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Mukteshwar offers diverse attractions ranging from ancient temples to colonial
              heritage sites. Here are the must-visit places, all easily accessible from
              Ecoescape Mukteshwar:
            </p>

            {/* Attraction 1 */}
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                1. Mukteshwar Mahadev Temple
              </h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> 7 km from Ecoescape
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> 1-2 hours
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                This 350+ year-old Shiva temple is the spiritual heart of Mukteshwar.
                Perched on a cliff edge, it offers panoramic views of the Himalayan range
                including <strong>Nanda Devi, Trishul, and Panchachuli peaks</strong>.
                The temple's name translates to "Lord of Freedom," and it's believed that
                Lord Shiva granted moksha (liberation) to a demon at this sacred site.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Best Time:</strong> Early morning for sunrise views • <strong>Entry:</strong> Free
              </p>
              <Link
                to="/blog/mukteshwar-mahadev-temple-guide"
                className="text-primary text-sm font-medium hover:underline inline-block mt-2"
              >
                Read complete temple guide →
              </Link>
            </div>

            {/* Attraction 2 */}
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                2. Chauli Ki Jali
              </h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> 8 km from Ecoescape
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> 2-3 hours
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                A dramatic rock formation with a mesh-like cliff edge, Chauli Ki Jali is
                Mukteshwar's most famous adventure spot. The site offers <strong>thrilling
                rock climbing and rappelling opportunities</strong> against the backdrop
                of sheer cliffs and sweeping valley views. Legend says it was used for
                judicial trials in ancient times — the innocent would emerge unharmed!
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Best For:</strong> Adventure, Photography • <strong>Difficulty:</strong> Moderate
              </p>
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src={chauliKiJaliImg}
                  alt="Chauli Ki Jali cliff edge with dramatic rock formations and valley views"
                  className="w-full h-auto"
                  loading="lazy"
                  width="800"
                  height="450"
                />
              </div>
            </div>

            {/* Attraction 3 */}
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                3. Mukteshwar Inspection Bungalow
              </h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> 5 km from Ecoescape
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> 1 hour
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                This colonial-era bungalow, built in the 1890s, is famous for its connection
                to <strong>Jim Corbett</strong>, who wrote "Man-Eaters of Kumaon" here.
                The heritage property offers stunning Himalayan views and a glimpse into
                the British colonial era. The surrounding deodar forests are perfect for
                peaceful nature walks.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> Entry restricted • <strong>Best For:</strong> Heritage, Views
              </p>
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src={inspectionBungalowImg}
                  alt="Mukteshwar Inspection Bungalow colonial-era heritage building with mountain views"
                  className="w-full h-auto"
                  loading="lazy"
                  width="800"
                  height="450"
                />
              </div>
            </div>

            {/* Attraction 4 */}
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                4. Bhalu Gaad Waterfalls
              </h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> 6 km from Ecoescape
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> 2-3 hours
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                A <strong>seasonal waterfall</strong> that comes alive during the monsoon
                (July - September). The trek to the falls takes you through dense forests
                and offers a refreshing dip in natural pools. Even in dry months, the
                trail itself is scenic, with opportunities for bird watching and nature
                photography.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Best Season:</strong> Monsoon • <strong>Trail:</strong> Easy to Moderate
              </p>
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src={bhaluGaadWaterfallImg}
                  alt="Bhalu Gaad Waterfalls flowing through lush green forest in monsoon"
                  className="w-full h-auto"
                  loading="lazy"
                  width="800"
                  height="450"
                />
              </div>
            </div>

            {/* Attraction 5 */}
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                5. Sitla Village
              </h3>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3.5 w-3.5" /> 4 km from Ecoescape
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" /> 2-3 hours
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-3">
                A quiet, offbeat village known for its <strong>fruit orchards</strong>
                and stunning sunrise viewpoints. Sitla offers an authentic Kumaoni village
                experience with traditional houses, terraced farms, and warm hospitality.
                The early morning views of the sun rising over the Himalayas are magical.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Best For:</strong> Village Tourism, Photography • <strong>Best Time:</strong> Sunrise
              </p>
              <div className="mt-4 rounded-lg overflow-hidden">
                <img
                  src={sitlaVillageImg}
                  alt="Sitla Village traditional Kumaoni houses with fruit orchards and mountain views"
                  className="w-full h-auto"
                  loading="lazy"
                  width="800"
                  height="450"
                />
              </div>
            </div>

            {/* Section 2: Nature & Outdoor Experiences */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2">
              <Trees className="h-6 w-6 text-primary" />
              Nature & Outdoor Experiences
            </h2>

            <div className="space-y-4">
              <div className="bg-secondary/50 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">6. Himalayan Viewpoints</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Mukteshwar offers some of the clearest views of the <strong>Greater Himalayas</strong>.
                  On a clear day, you can see Nanda Devi (7,816m), Trishul (7,120m), and
                  Panchachuli peaks. Best viewing spots are near the temple and Chauli Ki Jali.
                  <strong>Sunrise (5:30-6:30 AM)</strong> and <strong>sunset (5:00-6:00 PM)</strong> are magical.
                </p>
              </div>

              <div className="bg-secondary/50 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">7. Deodar Forest Walks</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The dense deodar (cedar) forests around Mukteshwar are perfect for
                  <strong> nature walks and bird watching</strong>. Look for Himalayan birds
                  like kalij pheasant, laughing thrush, and various flycatchers.
                  Ecoescape's botanical garden is a great starting point with 100+ plant varieties.
                </p>
                <div className="mt-3 rounded-lg overflow-hidden">
                  <img
                    src={deodarForestImg}
                    alt="Dense deodar forest trail with tall cedar trees and dappled sunlight"
                    className="w-full h-auto"
                    loading="lazy"
                    width="800"
                    height="450"
                  />
                </div>
              </div>

              <div className="bg-secondary/50 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">8. Fruit Orchard Tours</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Mukteshwar is famous for its fruit orchards. Visit local farms to see
                  <strong> apples, apricots, plums, and peaches</strong> (seasonal: April-June).
                  Many farms offer tours and fresh fruit tasting. It's a wonderful experience
                  for families and children.
                </p>
                <div className="mt-3 rounded-lg overflow-hidden">
                  <img
                    src={fruitOrchardImg}
                    alt="Mukteshwar fruit orchard with apple and apricot trees against mountain backdrop"
                    className="w-full h-auto"
                    loading="lazy"
                    width="800"
                    height="450"
                  />
                </div>
              </div>
            </div>

            {/* Section 3: Cultural & Spiritual */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2">
              <Sparkles className="h-6 w-6 text-primary" />
              Cultural & Spiritual Experiences
            </h2>

            <div className="space-y-4">
              <div className="bg-secondary/50 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">9. Market Exploration</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The <strong>Mukteshwar market</strong> offers local Kumaoni handicrafts,
                  handmade woolens, and organic products. Look for rhododendron squash,
                  honey, and traditional <strong>bal mithai</strong> (a local sweet).
                  Great for souvenirs and supporting local artisans.
                </p>
              </div>

              <div className="bg-secondary/50 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">10. Village Experiences</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Experience authentic <strong>Kumaoni village life</strong> by visiting nearby
                  settlements. Many locals welcome visitors for tea, showing their traditional
                  architecture, farming practices, and way of life. A great cultural immersion
                  experience off the tourist trail.
                </p>
              </div>
            </div>

            {/* Section 4: On-Property Activities at Ecoescape */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2">
              <Zap className="h-6 w-6 text-primary" />
              On-Property Activities at Ecoescape
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              When you stay at <strong>Ecoescape Mukteshwar</strong>, you don't even need to
              leave the property to have memorable experiences:
            </p>

            <div className="space-y-4">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">11. Botanical Garden Walk</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Explore our <strong>100+ plant varieties</strong> including seasonal roses,
                  indigenous Himalayan flora, and organic vegetables. A peaceful retreat for
                  nature lovers and photography enthusiasts.
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">12. Terrace Dining</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Enjoy <strong>home-cooked Kumaoni meals</strong> on our terrace with panoramic
                  mountain views. Try local specialties like <strong>bhat ki churkani</strong>,
                  <strong>kafuli</strong>, and <strong>baadi</strong>. Sunrise breakfasts are
                  especially magical!
                </p>
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">13. Bonfire Evenings</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  End your day with a <strong>bonfire under the stars</strong>. Perfect for
                  storytelling, music, or simply soaking in the peaceful mountain ambiance.
                  Clear winter nights offer spectacular stargazing opportunities.
                </p>
              </div>
            </div>

            {/* Section 5: Nearby Day Trips */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              Nearby Day Trips from Mukteshwar
            </h2>

            <div className="space-y-4">
              <div className="bg-secondary/50 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">14. Nainital (50 km | 1.5 hours)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The famous <strong>Lake District of India</strong>. Perfect for a full-day trip
                  to enjoy boating on Naini Lake, mall road shopping, Naina Devi Temple,
                  and viewpoints like Snow View Point and Tiffin Top.
                </p>
              </div>

              <div className="bg-secondary/50 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">15. Bhimtal (30 km | 1 hour)</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A quieter alternative to Nainital with a <strong>beautiful lake</strong> featuring
                  an island with an aquarium. Perfect for a half-day trip with boating,
                  lakeside dining, and less crowded surroundings.
                </p>
              </div>
            </div>

            {/* Section 6: Seasonal Activities */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              Best Time for Each Activity
            </h2>

            <div className="bg-secondary rounded-xl p-6 my-6">
              <table className="w-full text-sm text-foreground">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 font-semibold">Season</th>
                    <th className="text-left py-2 font-semibold">Best Activities</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="py-2 font-medium">Spring (Mar-Apr)</td>
                    <td className="py-2">Wildflowers, garden walks, pleasant trekking</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 font-medium">Summer (May-Jun)</td>
                    <td className="py-2">Rock climbing, rappelling, nature walks, orchard tours</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 font-medium">Monsoon (Jul-Sep)</td>
                    <td className="py-2">Waterfalls, lush greenery, indoor relaxation</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-2 font-medium">Autumn (Oct-Nov)</td>
                    <td className="py-2">Clear Himalayan views, photography, festivals</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Winter (Dec-Feb)</td>
                    <td className="py-2">Snow (occasional), bonfires, stargazing, cozy stays</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                Plan Your Mukteshwar Adventure
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Stay at <strong>Ecoescape Mukteshwar</strong> — centrally located to all attractions,
                with sunrise views, home-cooked Kumaoni meals, and local activity planning assistance.
                Our team can help you organize trekking guides, temple visits, and village tours.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    window.location.href = "/#booking";
                  }}
                >
                  Check Availability
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => {
                    const msg = encodeURIComponent(
                      "Hi! I'm planning a Mukteshwar trip and would love help planning activities around Ecoescape. Could you suggest an itinerary?"
                    );
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
              <p className="text-xs text-muted-foreground mt-4">
                Prefer a specific room? Check out our{" "}
                <Link to="/rooms/suite-with-mountain-view" className="text-primary hover:underline">
                  Suite with Mountain View
                </Link>
                {" "}for sunrise views or{" "}
                <Link to="/rooms/spacious-apartment" className="text-primary hover:underline">
                  Spacious Apartment
                </Link>
                {" "}for families.
              </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  How many days are enough for Mukteshwar?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  We recommend <strong>2-3 days for a relaxed trip</strong> covering the main
                  attractions. Add 1-2 days if you want to include nearby destinations like
                  Nainital or Bhimtal. A 4-day itinerary allows for temple visits, adventure
                  activities, nature walks, and cultural experiences without rushing.
                </p>
              </details>

              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Is Mukteshwar worth visiting?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  Absolutely! Mukteshwar offers a <strong>perfect mix of spirituality,
                  adventure, and natural beauty</strong> without the crowds of Nainital.
                  It's ideal for families, couples, solo travelers, and adventure enthusiasts.
                  The stunning Himalayan views, ancient temple, and peaceful ambiance make it
                  a memorable destination.
                </p>
              </details>

              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  What is Mukteshwar famous for?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  Mukteshwar is famous for the <strong>ancient Mukteshwar Mahadev Temple</strong>,
                  <strong> Chauli Ki Jali</strong> (adventure spot), <strong>Himalayan viewpoints</strong>,
                  and its connection to Jim Corbett. It's also known for fruit orchards,
                  deodar forests, and as a peaceful alternative to crowded hill stations.
                </p>
              </details>

              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Is Mukteshwar safe for families?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  Yes, Mukteshwar is <strong>very safe for families</strong>. It's a peaceful
                  village with low crime rates and welcoming locals. The roads are well-maintained,
                  and most attractions are easily accessible. Ecoescape offers 24/7 secure premises
                  and family-friendly accommodations including <Link to="/rooms/family-room" className="text-primary hover:underline">Family Rooms</Link>.
                </p>
              </details>

              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Can we see snow in Mukteshwar?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  <strong>Yes, but occasionally!</strong> Mukteshwar receives snow in peak winter
                  (December - January), though it's not guaranteed every year. Even without snow,
                  winter offers crisp mountain air, clear sunny days, and spectacular views.
                  For guaranteed snow, you might need to visit higher reaches like Munsiyari.
                </p>
              </details>

              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  How far is Mukteshwar from Delhi?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  Mukteshwar is <strong>~320 km from Delhi</strong>, a journey of 7-8 hours by road.
                  The route goes via Hapur, Moradabad, Rampur, Rudrapur, Haldwani, and
                  Bhimtal. It's a popular weekend getaway from Delhi-NCR. We recommend
                  starting early morning to avoid traffic and reach by afternoon.
                  Check our <Link to="/blog/mukteshwar-weather-guide" className="text-primary hover:underline">weather guide</Link> for the best time to visit.
                </p>
              </details>
            </div>

            {/* Closing */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 my-8">
              <p className="text-foreground font-medium mb-2">
                Ready to explore Mukteshwar?
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Whether you're seeking adventure, spiritual peace, or simply a break from
                city life, Mukteshwar has something for everyone. Book your stay at
                Ecoescape Mukteshwar and let us help you create unforgettable Himalayan memories.
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
