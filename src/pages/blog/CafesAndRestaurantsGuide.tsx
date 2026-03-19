import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, generateRestaurantSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, Utensils, Coffee, Star, MapPin, Phone, MessageCircle, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import cafesFeaturedImg from "@/assets/blog/cafes/featured.png";

export default function CafesAndRestaurantsGuide() {
  // Article Schema
  const articleSchema = generateArticleSchema({
    headline: "Best Cafes in Mukteshwar: A Foodie's Guide to Mountain Dining",
    image: "https://ecoescapemukteshwar.com/src/assets/blog/cafes/featured.png",
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
    description: "Discover the best cafes and restaurants in Mukteshwar. From the famous Choco-House and Nirvana Cafe to authentic Kumaoni dining at Ecoescape, here is your ultimate foodie guide.",
    url: "https://ecoescapemukteshwar.com/blog/best-cafes-and-restaurants-in-mukteshwar",
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Best Cafes & Restaurants" },
  ]);

  // Restaurant Schema for Ecoescape
  const restaurantSchema = generateRestaurantSchema();

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Best Cafes in Mukteshwar 2026 | Top Restaurants & Local Dining Guide"
        description="Where to eat in Mukteshwar? Discover the best cafes for artisanal chocolates, wood-fired pizzas, and authentic Kumaoni thalis with breathtaking mountain views."
        canonical="https://ecoescapemukteshwar.com/blog/best-cafes-and-restaurants-in-mukteshwar"
        keywords="best cafes in Mukteshwar, restaurants in Mukteshwar, where to eat in Mukteshwar, Mukteshwar food guide, Nirvana Cafe Mukteshwar, Choco-House Mukteshwar, Kumaoni food"
        jsonLd={[articleSchema, breadcrumbSchema, restaurantSchema]}
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
              Food & Culture
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Best Cafes in Mukteshwar: A Foodie's Guide to Mountain Dining
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
              src={cafesFeaturedImg}
              alt="Terrace dining at Ecoescape Mukteshwar with panoramic mountain views"
              className="w-full h-auto"
              loading="eager"
              width="1200"
              height="675"
            />
          </div>

          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Beyond its stunning Himalayan views and peaceful trails, Mukteshwar has quietly transformed into a <strong>foodie destination</strong>. From charming colonial-style cafes serving artisanal chocolates to rustic spots offering authentic Kumaoni thalis, there is something for every palate. Whether you're a coffee connoisseur or a fan of home-cooked mountain meals, here is your curated guide to the <strong>best cafes and restaurants in Mukteshwar</strong>.
            </p>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Star className="h-6 w-6 text-primary" />
              1. Ecoescape Mukteshwar: Traditional Kumaoni Dining
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              If you're looking for an <strong>authentic, home-cooked experience</strong>, look no further than our own terrace at Ecoescape. We specialize in traditional Kumaoni cuisine made with locally sourced ingredients.
            </p>
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
              <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Why We Love It:
              </h3>
              <p className="text-sm text-muted-foreground mb-4">Unmatched sunrise views and genuine mountain hospitality. Our <strong>Bhat ki Churkani</strong> and <strong>Kafuli</strong> are guest favorites.</p>
              <ul className="text-xs text-muted-foreground space-y-1">
                <li>• <strong>Must-try:</strong> Kumaoni Thali, Pahadi Chai, Fresh Rose Squash</li>
                <li>• <strong>Vibe:</strong> Peaceful, Scenic, Authentic</li>
                <li>• <strong>Location:</strong> Mukteshwar Village</li>
              </ul>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Coffee className="h-6 w-6 text-primary" />
              2. Choco-House Chocolatiers
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              A visit to Mukteshwar isn't complete without a stop at <strong>Choco-House</strong>. This artisanal chocolate shop and cafe is famous for its handmade chocolates, brownies, and cozy mountaintop setting.
            </p>
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <p className="text-sm text-muted-foreground mb-2"><strong>Must-try:</strong> Hot Chocolate, Dark Chocolate Fudge, Walnut Brownies.</p>
              <p className="text-sm text-muted-foreground"><strong>Vibe:</strong> Cozy, Sweet-scented, Colonial charm.</p>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <Utensils className="h-6 w-6 text-primary" />
              3. Nirvana Organic Kitchen
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              For those who prefer <strong>organic and healthy options</strong>, Nirvana is a fantastic choice. They offer a range of pizzas, pastas, and traditional dishes served in a beautiful glasshouse setting with 180-degree Himalayan views.
            </p>
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <p className="text-sm text-muted-foreground mb-2"><strong>Must-try:</strong> Wood-fired Pizza, Herbal Teas, Organic Salads.</p>
              <p className="text-sm text-muted-foreground"><strong>Vibe:</strong> Modern, Bright, Serene.</p>
            </div>

            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-primary" />
              4. Local Market Dhabas
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Sometimes the best flavors are found in the simplest places. The <strong>local Mukteshwar market</strong> has several dhabas serving piping hot "Aloo Ke Gutke" and "Pahadi Dal" with "Bhatt Ki Churkani".
            </p>
            <p className="text-muted-foreground text-sm italic">Note: These spots are usually modest but serve very fresh and budget-friendly meals.</p>

            <div className="bg-accent/10 border-l-4 border-accent rounded-r-xl p-6 my-10">
              <h3 className="font-semibold text-foreground mb-2">Foodie Tip for Mukteshwar</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Most standalone cafes in Mukteshwar close by 8:00 PM. If you're planning a late dinner, it's always best to check with your host or pre-order at your homestay. At <strong>Ecoescape</strong>, we recommend ordering 2 hours in advance to ensure fresh preparation!
              </p>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                Experience the Best of Kumaon cuisine
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Stay at Ecoescape Mukteshwar for a true farm-to-table experience. Enjoy meals made with organic produce from our mountain farms, served right on our scenic terrace.
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
                    const msg = encodeURIComponent("Hi! I'm interested in booking a stay at Ecoescape and would love to know about your dining options.");
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
              Common Questions About Dining in Mukteshwar
            </h2>
            <div className="space-y-4">
              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Is alcohol served in Mukteshwar restaurants?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  Most independent cafes and restaurants in Mukteshwar do not have liquor licenses. However, some larger hotels or government guest houses may serve alcohol. It is always better to check beforehand.
                </p>
              </details>
              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Are there vegetarian/vegan options?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  Yes! Kumaoni cuisine is predominantly vegetarian. Most cafes also offer a variety of plant-based options, especially the organic-themed restaurants like Nirvana.
                </p>
              </details>
              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  What is the average cost of a meal?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  In local dhabas, a meal can cost between ₹150–₹250. In the cafes like Nirvana or Choco-House, expect to spend ₹400–₹800 per person for a full meal.
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
