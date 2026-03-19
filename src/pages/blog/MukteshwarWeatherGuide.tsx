import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import gardenTerraceImg from "@/assets/garden-terrace.webp";

const weatherData = [
  { month: "January", temp: "2°C – 15°C", weather: "Cold, clear skies, occasional frost", best: "Snow views, bonfire evenings", crowd: "Low" },
  { month: "February", temp: "4°C – 17°C", weather: "Cold but warming up, clear days", best: "Budget travel, peaceful stays", crowd: "Low" },
  { month: "March", temp: "8°C – 22°C", weather: "Pleasant spring, wildflowers bloom", best: "Holi trips, nature walks", crowd: "Medium" },
  { month: "April", temp: "12°C – 26°C", weather: "Warm days, cool nights", best: "Ideal weather, fruit blossoms", crowd: "High" },
  { month: "May", temp: "15°C – 30°C", weather: "Warm, perfect escape from plains heat", best: "Family vacations, outdoor activities", crowd: "High" },
  { month: "June", temp: "18°C – 30°C", weather: "Pre-monsoon showers begin late June", best: "Summer getaway, lush greenery", crowd: "High" },
  { month: "July", temp: "17°C – 25°C", weather: "Monsoon — heavy rainfall, misty clouds", best: "Waterfalls, monsoon beauty (for adventurers)", crowd: "Low" },
  { month: "August", temp: "17°C – 24°C", weather: "Peak monsoon, frequent rain", best: "Independence Day trips, greenest landscape", crowd: "Low" },
  { month: "September", temp: "14°C – 24°C", weather: "Monsoon recedes, clear views return", best: "Post-monsoon freshness, fewer crowds", crowd: "Medium" },
  { month: "October", temp: "10°C – 22°C", weather: "Clear skies, crisp autumn air", best: "Dussehra/Diwali trips, best visibility", crowd: "High" },
  { month: "November", temp: "5°C – 18°C", weather: "Cool and dry, stunning clarity", best: "Photography, star gazing", crowd: "Medium" },
  { month: "December", temp: "2°C – 14°C", weather: "Cold, possible snowfall, festive vibes", best: "Christmas/New Year celebrations", crowd: "High" },
];

export default function MukteshwarWeatherGuide() {
  // Article Schema
  const articleSchema = generateArticleSchema({
    headline: "Weather in Mukteshwar 10 Days: Month-by-Month Guide (2026)",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
    datePublished: formatDateForSchema("March 2, 2026"),
    author: {
      "@type": "Organization",
      name: "Ecoescape Mukteshwar",
    },
    publisher: {
      "@type": "Organization",
      name: "Ecoescape Mukteshwar",
      url: "https://ecoescapemukteshwar.com",
    },
    description: "Get the latest weather in Mukteshwar 10 days forecast, month-by-month temperature guides, and best time to visit for snow or pleasant sunshine in 2026.",
    url: "https://ecoescapemukteshwar.com/blog/mukteshwar-weather-guide",
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Weather in Mukteshwar" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Weather in Mukteshwar 10 Days | Temperature & Best Time to Visit (2026)"
        description="Plan your trip with our latest Mukteshwar weather guide. Includes 10-day forecast insights, month-by-month temperature charts, and the best time for snow in 2026."
        canonical="https://ecoescapemukteshwar.com/blog/mukteshwar-weather-guide"
        keywords="weather in mukteshwar 10 days, Mukteshwar weather, best time to visit Mukteshwar, Mukteshwar temperature, temperature in mukteshwar, Uttarakhand weather"
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
              Weather & Planning
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Weather in Mukteshwar 10 Days: Month-by-Month Guide for Planning Your Trip (2026)
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> March 19, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 6 min read
              </span>
            </div>
          </header>

          {/* Featured Snippet Section */}
          <div className="bg-primary/5 border-l-4 border-primary p-6 mb-10 rounded-r-xl">
            <h2 className="text-lg font-semibold text-foreground mb-2">Quick Answer: Best Time to Visit Mukteshwar</h2>
            <p className="text-muted-foreground leading-relaxed">
              The <strong>best time to visit Mukteshwar</strong> is from <strong>March to June</strong> for pleasant weather and fruit blossoms, or <strong>October to November</strong> for the clearest Himalayan views. If you enjoy cold weather and potential snowfall, <strong>January and February</strong> are ideal months with temperatures ranging from 0°C to 15°C.
            </p>
          </div>

          {/* Featured Image */}
          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={gardenTerraceImg}
              alt="Seasonal views of Mukteshwar showing the garden terrace"
              className="w-full h-auto"
              loading="eager"
              width="1200"
              height="675"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Mukteshwar sits at <strong>2,285 meters</strong> in the Kumaon hills of
              Uttarakhand. Its altitude means pleasant summers, crisp winters, and a
              monsoon that transforms the landscape into a lush green paradise. Here's
              your complete month-by-month weather breakdown to help you pick the perfect
              time to visit.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              Best Time to Visit Mukteshwar
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The <strong>best months to visit Mukteshwar</strong> are <strong>March to
              June</strong> (spring & summer) and <strong>October to November</strong>
              (autumn). These months offer clear skies, comfortable temperatures, and the
              best Himalayan visibility. December to February is ideal for those who enjoy
              cold weather and possible snowfall.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">
              Month-by-Month Weather Chart
            </h2>

            <div className="overflow-x-auto -mx-4 px-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-secondary">
                    <th className="text-left p-3 font-semibold text-foreground rounded-tl-lg">Month</th>
                    <th className="text-left p-3 font-semibold text-foreground">Temperature</th>
                    <th className="text-left p-3 font-semibold text-foreground hidden sm:table-cell">Weather</th>
                    <th className="text-left p-3 font-semibold text-foreground">Crowd</th>
                  </tr>
                </thead>
                <tbody>
                  {weatherData.map((row, i) => (
                    <tr
                      key={row.month}
                      className={i % 2 === 0 ? "bg-background" : "bg-secondary/50"}
                    >
                      <td className="p-3 font-medium text-foreground">{row.month}</td>
                      <td className="p-3 text-muted-foreground">{row.temp}</td>
                      <td className="p-3 text-muted-foreground hidden sm:table-cell">{row.weather}</td>
                      <td className="p-3">
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                            row.crowd === "High"
                              ? "bg-accent/20 text-accent-foreground"
                              : row.crowd === "Medium"
                              ? "bg-primary/10 text-primary"
                              : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {row.crowd}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              What to Pack for Mukteshwar
            </h2>
            <ul className="space-y-2 text-muted-foreground">
              <li>🧥 <strong>Winter (Nov–Feb):</strong> Heavy woolens, thermals, gloves, warm socks, a windproof jacket</li>
              <li>🧢 <strong>Summer (Mar–Jun):</strong> Light layers, a light jacket for evenings, sunscreen, sunglasses</li>
              <li>☔ <strong>Monsoon (Jul–Sep):</strong> Rain jacket or umbrella, waterproof shoes, quick-dry clothes</li>
              <li>📷 All seasons: Comfortable walking shoes, camera, power bank</li>
            </ul>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              Seasonal Highlights at Ecoescape Mukteshwar
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              No matter when you visit, <strong>Ecoescape Mukteshwar</strong> offers a
              unique experience each season:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>🌸 <strong>Spring (Mar–Apr):</strong> Our garden's 100+ plant varieties burst into bloom — especially the roses!</li>
              <li>☀️ <strong>Summer (May–Jun):</strong> Perfect terrace dining weather with clear sunrise views</li>
              <li>🌧️ <strong>Monsoon (Jul–Sep):</strong> Misty mornings, cozy indoor dining, and lush green surroundings</li>
              <li>🍂 <strong>Autumn (Oct–Nov):</strong> Crystal-clear Himalayan views, ideal for photography from our terrace</li>
              <li>❄️ <strong>Winter (Dec–Feb):</strong> Possible snow, warm room service meals, and peaceful solitude</li>
            </ul>

            {/* CTA */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-8 text-center">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                Ready to Experience Mukteshwar?
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                Book your stay at Ecoescape — east-facing sunrise views, garden walks, and
                home-cooked meals await you in every season.
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
                      "Hi! I'm planning a trip to Mukteshwar and would like to know about availability at Ecoescape. Could you help?"
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
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground">Does it snow in Mukteshwar?</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Yes! Mukteshwar receives light to moderate snowfall between December and
                  February, typically 2-4 times per winter season.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Is Mukteshwar safe during monsoon?</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Mukteshwar Village has good road connectivity. However, some remote areas
                  may be affected by landslides. Ecoescape Mukteshwar is located on a safe,
                  well-connected road.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">What is the coldest month in Mukteshwar?</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  January is typically the coldest month, with temperatures dropping to
                  around 2°C at night and frost on many mornings.
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
