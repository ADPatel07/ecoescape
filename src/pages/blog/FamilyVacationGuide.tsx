import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, Gift, Smile, Trees, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import familyFeaturedImg from "@/assets/blog/family/featured.png";

export default function FamilyVacationGuide() {
  // Article Schema
  const articleSchema = generateArticleSchema({
    headline: "Mukteshwar Family Vacation: Best Activities for Kids and Seniors",
    image: "https://ecoescapemukteshwar.com/src/assets/blog/family/featured.png",
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
    description: "Planning a family trip to Mukteshwar? Our guide covers activities for kids and seniors, family-friendly rooms, local picnics, and why Ecoescape is the perfect multigenerational retreat.",
    url: "https://ecoescapemukteshwar.com/blog/family-vacation-guide",
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Mukteshwar Family Vacation" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Mukteshwar Family Vacation Guide | Best Activities for Kids & Seniors"
        description="Plan the perfect multigenerational trip. Discover senior-friendly spots, garden activities for kids, and family-friendly stays at Ecoescape Mukteshwar."
        canonical="https://ecoescapemukteshwar.com/blog/family-vacation-guide"
        keywords="family trip Mukteshwar, kids activities Mukteshwar, senior-friendly travel Uttarakhand, family homestay Mukteshwar, vacations for multigenerational families"
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
              Family Guide
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Mukteshwar Family Vacation: Best Activities for Kids and Seniors
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
              src={familyFeaturedImg}
              alt="A multigenerational family enjoying a sunny day in a mountain garden"
              className="w-full h-auto"
              loading="eager"
              width="1200"
              height="675"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Families that travel together, stay together. But finding a destination that caters to the energy of a 6-year-old and the comfort of a 70-year-old is no small feat. <strong>Mukteshwar</strong>, with its gentle slopes and diverse experiences, bridges that gap beautifully. Here's how to plan a <strong>multigenerational family vacation</strong> in Mukteshwar that everyone will love.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Gift className="h-6 w-6 text-primary" />
              1. For the Kids: Nature's Playground
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Ditch the screens for the real world. Mukteshwar offers several <strong>engaging activities for children</strong>:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Fruit Picking:</strong> Depending on the season, kids can pick peaches, plums, and apples directly from the trees at Ecoescape.</li>
              <li><strong>Bird Watching:</strong> We have several colorful mountain birds that visit our gardens daily. A simple pair of binoculars can keep them busy for hours.</li>
              <li><strong>Adventure at Chauli Ki Jali:</strong> For the older kids, the rock formations at Chauli Ki Jali provide some safe, supervised climbing opportunities.</li>
            </ul>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Smile className="h-6 w-6 text-primary" />
              2. For Seniors: Comfort and Connection
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For the elders, the focus is on ease of access and tranquility.
            </p>
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="font-semibold mb-3">Senior-Friendly Experiences:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• <strong>Level Terrace:</strong> Our terrace is easily accessible and provides panoramic views without the need for trekking.</li>
                <li>• <strong>Spiritual Visits:</strong> A drive to the Mukteshwar Mahadev Temple involves only a short, paved walk.</li>
                <li>• <strong>Fresh Meals:</strong> Our home-cooked Kumaoni food is light, nutritious, and suited for elder palates.</li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Trees className="h-6 w-6 text-primary" />
              3. Family Bonding: Common Interests
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              The <strong>common garden area</strong> and the <strong>bonfire pit</strong> serve as the heart of Ecoescape. Spending an evening together with music, shared stories, and hot local snacks is what makes a family trip memorable.
            </p>

            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6 my-10">
              <h3 className="font-semibold text-foreground mb-2">Family-Friendly Stays</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Check our <Link to="/rooms/family-room" className="text-primary hover:underline">Family Room</Link> or the <Link to="/rooms/spacious-apartment" className="text-primary hover:underline">Spacious Apartment</Link>. These units offer ample space for everyone to stay together while maintaining individual comfort.
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                Make Lifelong Memories
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Ready to surprise the family with a mountain retreat? Contact us for multi-room group bookings and special family meal plans.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    window.location.href = "/#booking";
                  }}
                >
                  Book Family Stay
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => {
                    const msg = encodeURIComponent("Hi! I'm planning a family vacation in Mukteshwar and would like to know about suitable rooms for kids and seniors.");
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
