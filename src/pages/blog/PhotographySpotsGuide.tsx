import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, Camera, CameraIcon, Sun, MapPin, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import photographyFeaturedImg from "@/assets/blog/photography/featured.png";

export default function PhotographySpotsGuide() {
  // Article Schema
  const articleSchema = generateArticleSchema({
    headline: "10 Best Photography Spots in Mukteshwar: Capturing the Himalayan Soul",
    image: "https://ecoescapemukteshwar.com/src/assets/blog/photography/featured.png",
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
    description: "Looking for the best photography spots in Mukteshwar? From the dramatic cliffs of Chauli Ki Jali to the sunrise views at Ecoescape, here is your 2026 photography guide.",
    url: "https://ecoescapemukteshwar.com/blog/best-photography-spots-in-mukteshwar",
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Best Photography Spots" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="10 Best Photography Spots in Mukteshwar | Himalayan Landscape Guide"
        description="Capture the beauty of the Himalayas. Discover the top 10 locations in Mukteshwar for landscape, nature, and sunset photography. Including tips for stargazing shots."
        canonical="https://ecoescapemukteshwar.com/blog/best-photography-spots-in-mukteshwar"
        keywords="photography spots in Mukteshwar, best views in Mukteshwar, Himalayan landscape photography, Chauli Ki Jali photography, sunset spots Mukteshwar"
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
              Photography Guide
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              10 Best Photography Spots in Mukteshwar: Capturing the Himalayan Soul
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
              src={photographyFeaturedImg}
              alt="A professional camera capturing the Himalayan peaks at sunset in Mukteshwar"
              className="w-full h-auto"
              loading="eager"
              width="1200"
              height="675"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Mukteshwar is a visual symphony. From the jagged white peaks of the <strong>Great Himalayan Range</strong> to the deep green shadows of the Kumaon valleys, every corner presents a masterpiece waiting to be captured. Whether you're a professional landscape photographer or an enthusiast with a smartphone, here is your curated map to the <strong>best photography spots in Mukteshwar</strong>.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Camera className="h-6 w-6 text-primary" />
              1. The Terrace at Ecoescape (The Sunrise Spot)
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              You don't need to go far for the best view. Our terrace at Ecoescape Mukteshwar offers a <strong>180-degree unobstructed view</strong> of the Nanda Devi range.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
              <p className="text-sm font-medium mb-2 italic"><strong>Pro Tip:</strong> Reach the terrace 15 minutes before sunrise. The 'Alpenglow' on the peaks is brief but spectacular.</p>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              2. Chauli Ki Jali: Dramatic Silhouettes
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The overhanging rock formations here provide a perfect foreground for wide-angle landscape shots. The sunset here is legendary, casting long shadows across the valley below.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Sun className="h-6 w-6 text-primary" />
              3. Sitla: The Colonial Frame
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sitla is known for its old British-style bungalows and dense forest. The interplay of light and shadow through the deodar trees creates a dreamy, moody atmosphere perfect for portrait or macro photography.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <CameraIcon className="h-6 w-6 text-primary" />
              4. Sarkakhet: The Bird-Eye View
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A short walk up from the main road leads to an overlook that shows the entire range and the winding roads below. It's the best spot for <strong>panoramic stitching</strong>.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">
              Essential Tips for Mountain Photography
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Filters:</strong> Use a Circular Polarizer to cut glare and make the Himalayan blue sky pop.</li>
              <li><strong>Batteries:</strong> Cold weather drains batteries faster. Always carry spares in your pockets to keep them warm.</li>
              <li><strong>Timing:</strong> The "Golden Hour" in the hills is shorter than in the plains. Be ready early.</li>
            </ul>

            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6 my-10 text-center">
              <h3 className="font-semibold text-foreground mb-2">Share Your Story</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                We love seeing Ecoescape through your lens. Tag us in your Instagram posts!
              </p>
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open("https://instagram.com/ecoescape_mukteshwar", "_blank")}
              >
                Follow Us on Instagram
              </Button>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                Wake Up to the Perfect Shot
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Stay at Ecoescape for front-row seats to the Himalayan spectacle. Every window is a viewfinder.
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
                    const msg = encodeURIComponent("Hi! I'm a photographer planning a trip to Mukteshwar. Would love to stay at Ecoescape and see your recommended viewpoints.");
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
