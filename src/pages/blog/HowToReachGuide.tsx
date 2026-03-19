import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, MapPin, Train, Car, Bus, Info, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import howToReachFeaturedImg from "@/assets/blog/how-to-reach/featured.png";

export default function HowToReachGuide() {
  // Article Schema
  const articleSchema = generateArticleSchema({
    headline: "How to Reach Mukteshwar: The Ultimate Transport Guide (2026)",
    image: "https://ecoescapemukteshwar.com/src/assets/blog/how-to-reach/featured.png",
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
    description: "Planning a trip to Mukteshwar? Our comprehensive 2026 guide covers how to reach Mukteshwar by train, road, and bus. Includes Delhi to Kathgodam details and local taxi tips.",
    url: "https://ecoescapemukteshwar.com/blog/how-to-reach-mukteshwar-guide",
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "How to Reach Mukteshwar" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="How to Reach Mukteshwar | Delhi to Mukteshwar Transport Guide (2026)"
        description="Complete guide on how to reach Mukteshwar by train, road, and bus. Get details on Delhi to Kathgodam trains, taxi fares, and driving routes to Ecoescape Mukteshwar."
        canonical="https://ecoescapemukteshwar.com/blog/how-to-reach-mukteshwar-guide"
        keywords="how to reach Mukteshwar, Delhi to Mukteshwar, Kathgodam to Mukteshwar taxi, Delhi to Kathgodam train, Mukteshwar distance from Delhi, reaching Mukteshwar by road"
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
              Travel Guide
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              How to Reach Mukteshwar: The Ultimate Transport Guide (2026)
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

          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={howToReachFeaturedImg}
              alt="Scenic road winding through the Kumaon hills towards Mukteshwar"
              className="w-full h-auto"
              loading="eager"
              width="1200"
              height="675"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Mukteshwar, situated at an altitude of <strong>2,285 meters</strong> in the Kumaon region of Uttarakhand, is a peaceful escape from the hustle of city life. While it feels worlds away, reaching this Himalayan paradise is quite straightforward. Whether you prefer the rhythmic journey of a train, the freedom of a road trip, or the convenience of a bus, here is your complete guide to reaching <strong>Ecoescape Mukteshwar</strong>.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Train className="h-6 w-6 text-primary" />
              1. Reaching Mukteshwar by Train
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The nearest railway station to Mukteshwar is <strong>Kathgodam (KGM)</strong>, located about <strong>65 km</strong> away. Kathgodam is well-connected to Delhi, Lucknow, Kolkata, and Dehradun.
            </p>
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="text-lg font-semibold mb-3">Popular Trains from Delhi to Kathgodam:</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex justify-between border-b border-border pb-2">
                  <span><strong>Ranikhet Express (15013)</strong></span>
                  <span>Overnight (Delhi to Kathgodam)</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span><strong>NDLS-KGM Shatabdi (12040)</strong></span>
                  <span>Morning Express (Day journey)</span>
                </li>
                <li className="flex justify-between border-b border-border pb-2">
                  <span><strong>Uttaranchal Sampark Kranti (15035)</strong></span>
                  <span>Afternoon Departure</span>
                </li>
              </ul>
              <p className="text-xs mt-4 italic">*Pro-tip: Book Shatabdi for a comfortable day trip with scenic views of the plains transitioning into hills.*</p>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Car className="h-6 w-6 text-primary" />
              2. Reaching Mukteshwar by Road
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Driving to Mukteshwar is one of the most scenic ways to experience the Kumaon hills. The distance from <strong>Delhi is approximately 320 km</strong>, taking about 7-9 hours depending on traffic and breaks.
            </p>
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="text-lg font-semibold mb-2">The Standard Route from Delhi:</h3>
              <p className="text-sm text-muted-foreground mb-4">Delhi → Hapur → Moradabad → Rampur → Bilaspur → Rudrapur → Haldwani → Kathgodam → Bhimtal → Bhowali → Mukteshwar.</p>
              <h3 className="text-lg font-semibold mb-2">Road Conditions:</h3>
              <p className="text-sm text-muted-foreground">The road from Delhi to Haldwani is mostly a 4-lane highway. From Kathgodam onwards, the hill climb begins on well-maintained 2-lane mountain roads. The climb is gradual and very scenic.</p>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Bus className="h-6 w-6 text-primary" />
              3. Reaching Mukteshwar by Bus
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              While there are few direct buses to Mukteshwar from Delhi, you can easily take a bus to <strong>Haldwani or Kathgodam</strong>.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Government Buses:</strong> Uttarakhand Transport (UTC) operates regular Volvo and ordinary buses from ISBT Anand Vihar, Delhi.</li>
              <li><strong>Private Volvos:</strong> Many private operators run overnight Volvo buses from Delhi to Haldwani.</li>
              <li><strong>Onward Journey:</strong> From Haldwani/Kathgodam, you can take a local bus or a shared taxi to Mukteshwar (available at the station/bus stand).</li>
            </ul>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              Local Transport: Kathgodam to Mukteshwar
            </h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">Private Taxi</h3>
                <p className="text-sm text-muted-foreground">Fare: ₹2,500 – ₹3,500<br/>Duration: 2.5 – 3 hours<br/>Available directly at Kathgodam station.</p>
              </div>
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">Shared Taxi</h3>
                <p className="text-sm text-muted-foreground">Fare: ₹300 – ₹500 per seat<br/>Note: Usually involves a change at Bhowali.</p>
              </div>
            </div>

            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6 my-10">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Info className="h-5 w-5" />
                Special Note for Ecoescape Guests
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ecoescape Mukteshwar is located in <strong>Mukteshwar Village</strong>, which is about 7km before the main Mukteshwar Temple if you are coming from Bhowali. We can assist in arranging a direct pickup from Kathgodam or Haldwani for a hassle-free arrival.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                Need Help with Your Travel?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Reach out to us via WhatsApp or Phone. We can help you book a reliable taxi from Kathgodam or provide detailed driving directions to our property.
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
                    const msg = encodeURIComponent("Hi! I'm planning a trip to Mukteshwar and need help with transport arrangements to Ecoescape.");
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

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  What is the nearest airport to Mukteshwar?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  The nearest airport is <strong>Pantnagar Airport (PGH)</strong>, about 100 km away. However, flight connectivity is limited. Most travelers prefer flying into <strong>Delhi (DEL)</strong> and then taking a train or taxi.
                </p>
              </details>
              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Is it safe to drive to Mukteshwar at night?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  While the roads are well-maintained, we <strong>recommend avoiding night driving</strong> in the hills due to sharp turns, occasional fog, and lack of street lighting in some sections. It's best to reach Mukteshwar by sunset.
                </p>
              </details>
              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  How much does a taxi from Kathgodam to Mukteshwar cost?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  A private taxi (Sedan/SUV) usually costs between <strong>₹2,500 and ₹3,500</strong>. Shared taxis are cheaper (₹300 - ₹500 per seat) but may take longer.
                </p>
              </details>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
