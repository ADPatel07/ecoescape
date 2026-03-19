import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, Phone, Sun, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import orchardsFeaturedImg from "@/assets/blog/fruit-orchards/featured.png";

const harvestSeasons = [
  {
    fruit: "Plums",
    months: "May – June",
    description: "The first fruits of the season. Mukteshwar's juicy red and black plums are a delight for early summer visitors.",
    variety: "Centrosa, Santa Rosa"
  },
  {
    fruit: "Peaches & Apricots",
    months: "June – July",
    description: "The orchards turn golden and pink. This is the best time for those who love sweet, sun-ripened stone fruits.",
    variety: "July Elberta (Peach), New Castle (Apricot)"
  },
  {
    fruit: "Apples",
    months: "August – September",
    description: "The iconic harvest of Mukteshwar. Walking through orchards with low-hanging, red-ripe apples is a quintessential Kumaoni experience.",
    variety: "Royal Delicious, Red Delicious, Golden Delicious"
  },
  {
    fruit: "Pears",
    months: "September – October",
    description: "As the monsoon recedes, the crisp and sweet hill pears (Nakh) are ready for harvest.",
    variety: "Victoria, William, Baggugosha"
  }
];

export default function FruitOrchardsGuide() {
  const articleSchema = generateArticleSchema({
    headline: "Fruit Orchards of Mukteshwar: A Guide to Apple, Peach & Plum Seasons",
    image: "https://ecoescapemukteshwar.com/assets/blog/fruit-orchards/featured.png",
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
    description: "Explore the 'Fruit Bowl of Kumaon'. Our guide to Mukteshwar's fruit orchards covers the best seasons for apple, peach, and plum harvests and how to enjoy the experience.",
    url: "https://ecoescapemukteshwar.com/blog/fruit-orchards-of-mukteshwar-guide",
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Fruit Orchards Guide" },
  ]);

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Mukteshwar Fruit Orchards Guide | Apple, Peach & Plum Seasons"
        description="Discover why Mukteshwar is called the fruit bowl of Uttarakhand. Plan your visit during the apple, peach, or plum harvest seasons with our local guide."
        canonical="https://ecoescapemukteshwar.com/blog/fruit-orchards-of-mukteshwar-guide"
        keywords="Mukteshwar fruit orchards, apple season Mukteshwar, Mukteshwar apples, peach orchards Uttarakhand, Mukteshwar tourism, Kumaon fruit harvest"
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
              Nature & Culture
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Fruit Orchards of Mukteshwar: A Guide to Apple, Peach & Plum Seasons
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> March 19, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 7 min read
              </span>
            </div>
          </header>

          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg aspect-video bg-muted">
            <img
              src={orchardsFeaturedImg}
              alt="Lush fruit orchard in Mukteshwar with ripe fruits on trees"
              className="w-full h-full object-cover"
              loading="eager"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Known as the <strong>"Fruit Bowl of Kumaon"</strong>, Mukteshwar is famous for its vast, sprawling fruit orchards. Depending on when you visit, you might find trees laden with snowy white blossoms or dripping with ripe, colorful fruits.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">
              Seasonal Harvest Calendar
            </h2>

            <div className="grid gap-6">
              {harvestSeasons.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
                  <div className="md:w-1/3">
                    <div className="flex items-center gap-2 text-primary font-bold mb-1">
                      <Sun className="h-5 w-5" /> {item.months}
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground">
                      {item.fruit}
                    </h3>
                  </div>
                  <div className="md:w-2/3 border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6">
                    <p className="text-muted-foreground text-sm leading-relaxed mb-2">
                      {item.description}
                    </p>
                    <p className="text-xs font-semibold text-primary uppercase tracking-wider">
                      Varieties: {item.variety}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-12 mb-4">
              The Orchard Experience in Mukteshwar
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Visiting an orchard isn't just about the fruit; it's about the atmosphere. Here's what you can look forward to:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li>📸 <strong>Photography:</strong> Capture the stunning contrast of red apples against the deep blue Himalayan sky.</li>
              <li>🍯 <strong>Local Delicacies:</strong> Taste homemade jams, chutneys, and juices made from the freshest harvest.</li>
              <li>🌸 <strong>Blossom Season (Feb-Mar):</strong> If you visit in early spring, the orchards are covered in white and pink blossoms, making for a fairytale setting.</li>
              <li>🚶 <strong>Quiet Walks:</strong> Walking through the orchards is therapeutic, with only the sound of birds and the rustle of leaves.</li>
            </ul>

            <div className="my-10 p-6 bg-primary/5 rounded-2xl border-l-4 border-primary italic text-muted-foreground">
              <div className="flex gap-4">
                <Info className="h-6 w-6 text-primary shrink-0" />
                <p>
                  <strong>Visitor Tip:</strong> While many orchards are privately owned, most owners are happy to let you walk through if you ask politely or are staying at a nearby homestay like Ecoescape.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              Stay Amidst the Orchards at Ecoescape
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong>Ecoescape Mukteshwar</strong> is located in the heart of the fruit-growing belt. Our property features its own garden with various fruit trees and flowering plants. We frequently serve fresh, seasonal fruits and preserves as part of our home-cooked meals, giving you a literal taste of the region.
            </p>

            {/* CTA */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                Experience the Harvest
              </h3>
              <p className="text-muted-foreground text-sm mb-6 max-w-md mx-auto">
                Plan your visit according to your favorite fruit's season. Book your stay at Ecoescape for an authentic Kumaoni farm-to-table experience.
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
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    window.location.href = `tel:${siteConfig.phone}`;
                  }}
                >
                  <Phone className="h-5 w-5" />
                  Inquire Now
                </Button>
              </div>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground">Can we pick fruits from the trees?</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Many commercial orchards allow fruit picking for a small fee during the peak harvest season. We can help arrange these activities for our guests.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">What is the best time to see the blossoms?</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Late February to mid-March is the peak blossom season for peaches, apricots, and plums. Apples bloom slightly later in late March and April.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Are organic fruits available?</h3>
                <p className="text-muted-foreground text-sm mt-1">
                  Yes, many small-scale farmers in Mukteshwar follow organic or traditional farming practices. Several local cooperatives sell certified organic jams and preserves.
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
