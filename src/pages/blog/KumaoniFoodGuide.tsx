import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { generateArticleSchema, generateBreadcrumbSchema, generateRestaurantSchema, formatDateForSchema } from "@/lib/schema";
import { ArrowLeft, Calendar, Clock, Phone, MessageCircle, Utensils, ChefHat, Leaf, Star, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import kumaoniThaliImg from "@/assets/blog/kumaoni-food-guide/kumaoni-thali.webp";
import terraceDiningImg from "@/assets/blog/kumaoni-food-guide/terrace-dining.webp";
import bonfireDiningImg from "@/assets/blog/kumaoni-food-guide/bonfire-dining.webp";
import traditionalFoodImg from "@/assets/blog/kumaoni-food-guide/traditional-food.webp";

export default function KumaoniFoodGuide() {
  // Article Schema
  const articleSchema = generateArticleSchema({
    headline: "Kumaoni Food Guide: Traditional Cuisine & Dining in Mukteshwar",
    image: "https://ecoescapemukteshwar.com/og-image.jpg",
    datePublished: formatDateForSchema("March 18, 2026"),
    author: {
      "@type": "Organization",
      name: "Ecoescape Mukteshwar",
    },
    publisher: {
      "@type": "Organization",
      name: "Ecoescape Mukteshwar",
      url: "https://ecoescapemukteshwar.com",
    },
    description: "Complete guide to Kumaoni cuisine in Mukteshwar - 12 traditional dishes, local ingredients, best places to eat, terrace dining experiences, and Uttarakhand food culture.",
    url: "https://ecoescapemukteshwar.com/blog/kumaoni-food-guide",
  });

  // Breadcrumb Schema
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", item: "https://ecoescapemukteshwar.com" },
    { name: "Blog", item: "https://ecoescapemukteshwar.com/blog" },
    { name: "Kumaoni Food Guide" },
  ]);

  // Restaurant Schema for Ecoescape dining
  const restaurantSchema = generateRestaurantSchema();

  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Kumaoni Food Guide: Traditional Cuisine & Dining in Mukteshwar | Ecoescape"
        description="Discover authentic Kumaoni food in Mukteshwar - 12 traditional dishes, local ingredients, best restaurants, terrace dining experiences, and Uttarakhand cuisine guide. Taste the Himalayas!"
        canonical="https://ecoescapemukteshwar.com/blog/kumaoni-food-guide"
        keywords="Kumaoni food, Mukteshwar restaurants, Uttarakhand cuisine, traditional Kumaoni dishes, Kumaoni thali, bhat ki churkani, bal mithai, kafuli, baadi, Kumaon food culture, authentic Kumaoni food, where to eat in Mukteshwar, Himalayan cuisine"
        jsonLd={[articleSchema, breadcrumbSchema, restaurantSchema]}
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
              Food & Culture
            </span>
            <h1 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mt-3 mb-4 leading-tight">
              Kumaoni Food Guide: Traditional Cuisine & Dining in Mukteshwar
            </h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> March 18, 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 10 min read
              </span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-10 rounded-2xl overflow-hidden shadow-lg">
            <img
              src={kumaoniThaliImg}
              alt="Traditional Kumaoni thali with bhat ki churkani, kafuli, baadi, and local delicacies served at Ecoescape Mukteshwar"
              className="w-full h-auto"
              loading="eager"
              width="1200"
              height="675"
            />
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-foreground">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Nestled in the <strong>Kumaon hills of Uttarakhand</strong>, Mukteshwar offers a culinary
              heritage rooted in mountain simplicity and authentic flavors. Kumaoni cuisine is known for
              its use of <strong>locally-sourced ingredients</strong>, minimal spices, and cooking techniques
              that have been passed down through generations. From fermented soybean curries to sun-dried
              lentil dumplings, every dish tells a story of the region's culture and connection to the land.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              When you stay at <strong>Ecoescape Mukteshwar</strong>, you're not just booking accommodation —
              you're embarking on a gastronomic journey. Our in-house restaurant serves authentic Kumaoni
              dishes prepared fresh on our terrace with stunning Himalayan views. This comprehensive guide
              covers 12+ traditional dishes, local ingredients, where to eat, and unique food experiences
              that will make your Mukteshwar trip unforgettable.
            </p>

            {/* Info Box */}
            <div className="bg-secondary rounded-xl p-6 my-6">
              <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Utensils className="h-5 w-5 text-primary" />
                Kumaoni Cuisine at a Glance
              </h3>
              <ul className="space-y-2 text-foreground text-sm">
                <li className="flex justify-between">
                  <span>Cooking Medium</span>
                  <span>Mustard oil, Ghee</span>
                </li>
                <li className="flex justify-between">
                  <span>Key Spices</span>
                  <span>Jakhiya, Bhangjeera</span>
                </li>
                <li className="flex justify-between">
                  <span>Flavor Profile</span>
                  <span>Mild, Earthy, Aromatic</span>
                </li>
                <li className="flex justify-between">
                  <span>Specialties</span>
                  <span>Fermented, Sun-dried dishes</span>
                </li>
                <li className="flex justify-between">
                  <span>Best Time to Try</span>
                  <span>Winter, Monsoon</span>
                </li>
              </ul>
            </div>

            {/* Section 1: Traditional Dishes */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2">
              <ChefHat className="h-6 w-6 text-primary" />
              12 Traditional Kumaoni Dishes You Must Try
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Kumaoni cuisine features unique dishes developed in the mountain regions, using preservation
              techniques for harsh winters and locally-grown ingredients. Here are the must-try dishes:
            </p>

            {/* Dish 1 */}
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                1. Bhat ki Churkani (भाट की चुरकणी)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                A <strong>fermented soybean curry</strong> that is a Kumaoni specialty. The soybeans are
                fermented naturally, giving the dish a distinctive tangy flavor and umami depth. Cooked
                with mustard oil, garlic, and traditional spices, it's rich in protein and has a unique
                taste that grows on you. This is <strong>Ecoescape's signature dish</strong> — try it with rice!
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Taste Profile:</strong> Tangy, Earthy, Savory • <strong>Best With:</strong> Steamed rice
              </p>
            </div>

            {/* Dish 2 */}
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                2. Kafuli (काफुली)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                A <strong>thick, gravy-like dish</strong> made from spinach (palak) or fenugreek leaves
                (methi). The leaves are cooked with rice flour, creating a creamy, thick texture without
                any cream. Seasoned with Jakhiya seeds (a local spice similar to mustard seeds), it's
                nutritious, comforting, and perfect with rice or roti.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Taste Profile:</strong> Mild, Creamy, Herbal • <strong>Best With:</strong> Rice or Roti
              </p>
            </div>

            {/* Dish 3 */}
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                3. Baadi (बाड़ी)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong>Sun-dried lentil dumplings</strong> made from a mixture of different lentils
                (urad, moong, chana). The batter is spread on cloth and sun-dried, then stored for months.
                When cooking, these crispy dumplings are added to curries, creating a unique texture and
                concentrated flavor. A winter delicacy that sustains during cold months.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Taste Profile:</strong> Nutty, Crunchy, Savory • <strong>Best With:</strong> Hot curry
              </p>
            </div>

            {/* Dish 4 */}
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                4. Bal Mithai (बाल मिठाई)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                The <strong>most famous Kumaoni sweet</strong>. Made from condensed milk (khoya) cooked
                until brown, then coated with tiny sugar balls (posta). It has a fudge-like texture with
                a caramel flavor and crunchy coating. Available in Mukteshwar market — the perfect
                souvenir to take home!
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Taste Profile:</strong> Sweet, Caramel, Crunchy • <strong>Best For:</strong> Dessert, Gifts
              </p>
            </div>

            {/* Dish 5 */}
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                5. Aloo Ke Gutke (आलू के गुटके)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong>Spiced potato dish</strong> that's a Kumaoni breakfast staple. Cubed potatoes are
                tempered with Jakhiya seeds, cooked with turmeric, red chili powder, and finished with
                fresh coriander. Simple yet flavorful, it's often served with <strong>Pua</strong> (sweet
                fried bread) or puri for a hearty morning meal.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Taste Profile:</strong> Spicy, Comforting • <strong>Best For:</strong> Breakfast
              </p>
            </div>

            {/* Dish 6 */}
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                6. Gahat Dal (गाहत दाल)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong>Horse gram lentil soup</strong> — a protein powerhouse. Horse gram (Gahat) is a
                local lentil known for its warming properties, making it perfect for cold winters. The
                dal is tempered with Jakhiya and garlic, creating a warming, nutritious soup that's
                believed to help with kidney stones and joint pain.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Taste Profile:</strong> Earthy, Warming • <strong>Best For:</strong> Winter meals
              </p>
            </div>

            {/* Dish 7 */}
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                7. Chainsoo (चैंसू)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                A <strong>black gram (urad dal) curry</strong> where the dal is roasted before grinding,
                giving it a distinctive smoky flavor. The roasted dal paste is cooked with onions,
                tomatoes, and traditional spices. Thick, creamy, and deeply satisfying, it's a comfort
                food that pairs perfectly with rice.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Taste Profile:</strong> Smoky, Creamy, Rich • <strong>Best With:</strong> Steamed rice
              </p>
            </div>

            {/* Dish 8 */}
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                8. Jholi (झोली)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                A <strong>tangy curry</strong> made with buttermilk or curd as the base. The buttermilk
                is mixed with rice flour or wheat flour and cooked with spices like turmeric, red chili,
                and Jakhiya. The result is a light, tangy, comforting dish perfect for summers. It's
                cooling and easy on digestion.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Taste Profile:</strong> Tangy, Light, Refreshing • <strong>Best For:</strong> Summer lunch
              </p>
            </div>

            {/* Dish 9 */}
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                9. Urad Dal Pakora
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong>Fritters made from black gram lentil batter</strong>. The soaked urad dal is
                ground into a thick batter, spiced with green chilies, ginger, and fresh coriander,
                then deep-fried until golden. Crispy outside, soft inside, these pakoras are a popular
                monsoon snack — perfect with tea on a rainy day!
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Taste Profile:</strong> Crispy, Savory • <strong>Best For:</strong> Snack with chai
              </p>
            </div>

            {/* Dish 10 */}
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                10. Kumaoni Raita
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Unlike regular raita, <strong>Kumaoni raita</strong> uses cucumber, roasted cumin powder,
                and a special tempering of Jakhiya seeds and dry red chili. The cucumber is grated and
                mixed with thick curd, then topped with the aromatic tempering. It's cooling, refreshing,
                and balances any spicy meal.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Taste Profile:</strong> Cool, Aromatic • <strong>Best With:</strong> Any meal
              </p>
            </div>

            {/* Dish 11 */}
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                11. Singori (सिंगोरी)
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                A <strong>unique leaf-wrapped sweet</strong> from Almora region. The sweet filling (made
                from khoya and sugar) is wrapped in <strong>Malu leaf</strong> (a local leaf), giving it
                a distinct aroma. The cone-shaped parcels are tied with string. A rare delicacy — if you
                find it in Mukteshwar market, don't miss it!
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Taste Profile:</strong> Sweet, Aromatic • <strong>Best For:</strong> Special occasions
              </p>
            </div>

            {/* Dish 12 */}
            <div className="bg-secondary/50 rounded-xl p-6 my-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                12. Kumaoni Kheer
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                <strong>Rice pudding</strong> made with local rice varieties, milk, and jaggery instead
                of sugar. The use of jaggery gives it a deeper, caramel-like flavor. Often garnished
                with dry fruits and sometimes flavored with cardamom or saffron. A simpler, more rustic
                version than typical kheer, but incredibly comforting.
              </p>
              <p className="text-sm text-muted-foreground">
                <strong>Taste Profile:</strong> Sweet, Creamy, Earthy • <strong>Best For:</strong> Dessert
              </p>
            </div>

            {/* Section 2: Cooking Essentials */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              Kumaoni Cooking Essentials
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              What makes Kumaoni cuisine unique? It's the ingredients and cooking techniques adapted to
              mountain life. Here's what you need to know:
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-secondary/50 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">Key Ingredients</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Mustard Oil</strong> — Primary cooking medium</li>
                  <li>• <strong>Jakhiya Seeds</strong> — Local tempering spice</li>
                  <li>• <strong>Bhangjeera</strong> — Hemp seeds for nutrition</li>
                  <li>• <strong>Local Rice</strong> — Red rice, white rice varieties</li>
                  <li>• <strong>Lentils</strong> — Gahat, Urad, Bhat, Moong</li>
                  <li>• <strong>Seasonal Vegetables</strong> — Farm-fresh</li>
                </ul>
              </div>

              <div className="bg-secondary/50 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">Cooking Techniques</h3>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• <strong>Slow-cooking</strong> over wood fire</li>
                  <li>• <strong>Sun-drying</strong> for preservation</li>
                  <li>• <strong>Fermentation</strong> (bhat ki churkani)</li>
                  <li>• <strong>Tempering</strong> with Jakhiya</li>
                  <li>• <strong>Roasting</strong> before grinding (chainsoo)</li>
                  <li>• <strong>Minimal spices</strong> — Let ingredients shine</li>
                </ul>
              </div>
            </div>

            {/* Section 3: Where to Eat */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2">
              <Star className="h-6 w-6 text-primary" />
              Where to Eat in Mukteshwar
            </h2>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 my-6">
              <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                Ecoescape Restaurant — Terrace Dining with Himalayan Views
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our <strong>in-house kitchen</strong> serves authentic Kumaoni cuisine prepared fresh
                for guests. Located on our terrace with panoramic mountain views, dining at Ecoescape is
                an experience in itself. Our specialties include <strong>Bhat ki Churkani</strong>,
                <strong>Kafuli</strong>, <strong>Baadi</strong>, and seasonal dishes based on availability.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  Kumaoni Specialties
                </span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  North Indian
                </span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  Continental
                </span>
                <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  Home-Cooked
                </span>
              </div>
              <div className="rounded-lg overflow-hidden mb-4">
                <img
                  src={terraceDiningImg}
                  alt="Ecoescape terrace dining setup with Himalayan mountain views, perfect for authentic Kumaoni meals"
                  className="w-full h-auto"
                  loading="lazy"
                  width="800"
                  height="450"
                />
              </div>
              <p className="text-sm text-foreground bg-secondary/50 rounded-lg p-3">
                <strong>Note:</strong> Meals require <strong>2-hour advance notice</strong> for preparation.
                Our kitchen uses fresh ingredients and traditional recipes — good food takes time!
              </p>
            </div>

            <div className="space-y-4 mt-6">
              <div className="bg-secondary/50 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">Local Dhabas & Eateries</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The <strong>Mukteshwar Market</strong> has several small dhabas offering local breakfast
                  (aloo ke gutke, pura), chai, and snacks. These are budget-friendly options for authentic
                  local flavors. Look for places frequented by locals — that's always a good sign!
                </p>
              </div>

              <div className="bg-secondary/50 rounded-xl p-5">
                <h3 className="font-semibold text-foreground mb-2">KMVN Hotel Restaurant</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The KMVN (Kumaon Mandal Vikas Nigam) hotel has a restaurant serving North Indian and
                  some Kumaoni dishes. It's a reliable option if you're out exploring and want a proper
                  meal. Prices are reasonable, and the views from the restaurant are lovely.
                </p>
              </div>
            </div>

            {/* Section 4: Unique Food Experiences */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4 flex items-center gap-2">
              <Flame className="h-6 w-6 text-primary" />
              Unique Food Experiences at Ecoescape
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              At Ecoescape, food isn't just about taste — it's about the experience. Here are unique dining
              experiences you can enjoy:
            </p>

            <div className="space-y-4 mt-6">
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-2xl">🌅</span> Sunrise Breakfast on the Terrace
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Start your day with a <strong>Himalayan sunrise breakfast</strong> on our terrace. Watch
                  the sun paint the peaks golden as you enjoy hot aloo paratha, curd, pickle, and tea.
                  Pure magic! <Link to="/rooms/suite-with-mountain-view" className="text-primary hover:underline">Book our Suite</Link> for the best sunrise views.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-2xl">🔥</span> Bonfire Dinners
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  End your day with a <strong>bonfire dinner</strong> under the stars. Enjoy a multi-course
                  Kumaoni meal by the fire, with clear night skies perfect for stargazing. Winter nights
                  are especially magical with hot food and warm fire!
                </p>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={bonfireDiningImg}
                    alt="Bonfire dining experience at Ecoescape Mukteshwar with traditional Kumaoni food under starry skies"
                    className="w-full h-auto"
                    loading="lazy"
                    width="800"
                    height="450"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-2xl">🍂</span> Seasonal Food Experiences
                </h3>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-2">
                  <p><strong>Spring:</strong> Fresh greens, wild mushrooms, nettle dishes</p>
                  <p><strong>Summer:</strong> Stone fruits, rhododendron juice (buransh), cooling curries</p>
                  <p><strong>Monsoon:</strong> Seasonal vegetables, fresh dal, fried snacks</p>
                  <p><strong>Autumn:</strong> Harvest festival foods, new rice, walnut delicacies</p>
                  <p><strong>Winter:</strong> Warm soups, gahat dal, sesame preparations, til laddoos</p>
                </div>
              </div>
            </div>

            {/* Section 5: Food Itinerary */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              Suggested Food Itinerary for Your Mukteshwar Trip
            </h2>

            <div className="bg-secondary rounded-xl p-6 my-6">
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Breakfast (8:00 AM)</h4>
                  <p className="text-sm text-muted-foreground">
                    Aloo ke gutke + pura at local dhaba OR paratha at Ecoescape with chai
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Lunch (1:00 PM)</h4>
                  <p className="text-sm text-muted-foreground">
                    Multi-course Kumaoni thali at Ecoescape (bhat ki churkani, kafuli, rice, dal, raita)
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Evening Snack (5:00 PM)</h4>
                  <p className="text-sm text-muted-foreground">
                    Bal mithai from market + chai OR pakoras with tea on Ecoescape terrace
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h4 className="font-semibold text-foreground">Dinner (8:00 PM)</h4>
                  <p className="text-sm text-muted-foreground">
                    Traditional Kumaoni dinner with bonfire (baadi curry, chainsoo, roti, kheer)
                  </p>
                </div>
              </div>
            </div>

            {/* Section 6: Food Culture */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-4">
              Kumaoni Food Culture & Traditions
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              In Kumaoni culture, food is more than sustenance — it's <strong>hospitality, community,
              and tradition</strong>. Guests are treated like gods (Atithi Devo Bhava), and offering food
              is a way of showing respect. During festivals, special dishes are prepared, and the entire
              community comes together to share meals. The farm-to-table philosophy isn't a trend here —
              it's a way of life. Most vegetables grow in family gardens, and preservation techniques
              (sun-drying, fermenting) ensure year-round food availability in harsh winters.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When you eat Kumaoni food at Ecoescape, you're not just tasting a dish — you're experiencing
              centuries of mountain wisdom, sustainable living, and culinary heritage passed down through
              generations of Kumaoni families.
            </p>

            <div className="rounded-lg overflow-hidden my-6">
              <img
                src={traditionalFoodImg}
                alt="Traditional Kumaoni food presentation showcasing authentic Uttarakhand cuisine at Ecoescape"
                className="w-full h-auto"
                loading="lazy"
                width="800"
                height="450"
              />
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6 md:p-8 my-10 text-center">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-3">
                Taste Authentic Kumaoni Cuisine at Ecoescape
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Experience traditional Kumaoni meals prepared fresh on our terrace with Himalayan views.
                Pre-order your authentic <strong>bhat ki churkani, kafuli, and baadi</strong> at least
                2 hours before. Our kitchen uses fresh, local ingredients and traditional recipes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="hero"
                  size="lg"
                  onClick={() => {
                    window.location.href = "/#booking";
                  }}
                >
                  Book Stay with Meals
                </Button>
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={() => {
                    const msg = encodeURIComponent(
                      "Hi! I'd like to pre-order authentic Kumaoni meals at Ecoescape. Could you share the menu and help me plan my food experience?"
                    );
                    window.open(`${siteConfig.whatsappUrl}?text=${msg}`, "_blank");
                  }}
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp - Pre-Order Meals
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() => {
                    window.location.href = `tel:${siteConfig.phone}`;
                  }}
                >
                  <Phone className="h-5 w-5" />
                  Call for Menu
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Planning a family trip? Our <Link to="/rooms/spacious-apartment" className="text-primary hover:underline">Spacious Apartment</Link> is perfect for family dining.
                Combine your food journey with <Link to="/blog/things-to-do-in-mukteshwar" className="text-primary hover:underline">local attractions</Link>.
              </p>
            </div>

            {/* FAQ Section */}
            <h2 className="text-2xl font-serif font-semibold text-foreground mt-10 mb-6">
              Frequently Asked Questions About Kumaoni Food
            </h2>

            <div className="space-y-4">
              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  What is Kumaoni food famous for?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  Kumaoni food is famous for its <strong>use of local ingredients</strong> like Jakhiya seeds,
                  mustard oil, and lentils (Gahat, Urad). It's known for <strong>mild, earthy flavors</strong>,
                  unique preservation techniques (sun-drying, fermentation), and dishes like <strong>Bhat ki
                  Churkani</strong>, <strong>Kafuli</strong>, <strong>Baadi</strong>, and sweets like <strong>Bal Mithai</strong>.
                  The cuisine is nutritious, simple, and deeply connected to mountain life.
                </p>
              </details>

              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  What is the most famous Kumaoni dish?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  The most famous Kumaoni dish is <strong>Bhat ki Churkani</strong> (fermented soybean curry).
                  Among sweets, <strong>Bal Mithai</strong> is the most iconic — a brown fudge-like sweet
                  coated with sugar balls, famous across Uttarakhand. Both are must-try dishes when visiting
                  Mukteshwar. At Ecoescape, Bhat ki Churkani is our signature dish!
                </p>
              </details>

              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Where can I try authentic Kumaoni food in Mukteshwar?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  The best place for authentic Kumaoni food in Mukteshwar is <strong>Ecoescape Restaurant</strong> —
                  our in-house kitchen serves traditional dishes like Bhat ki Churkani, Kafuli, and Baadi
                  prepared fresh with terrace dining. Local dhabas in Mukteshwar market also serve simple
                  Kumaoni dishes like aloo ke gutke. KMVN hotel restaurant is another option for some
                  Kumaoni dishes.
                </p>
              </details>

              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Is Kumaoni food very spicy?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  <strong>No, Kumaoni food is generally mild</strong>. The cuisine uses minimal spices and
                  relies on the natural flavors of ingredients. Jakhiya seeds (used for tempering) provide
                  a mild kick similar to mustard seeds, but it's not overwhelmingly spicy. The food is
                  aromatic, flavorful, and suitable for those who prefer milder flavors. You can always
                  request spice adjustments when ordering!
                </p>
              </details>

              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  Do I need to pre-order meals at Ecoescape?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  <strong>Yes, please pre-order at least 2 hours in advance</strong>. Our kitchen uses
                  fresh ingredients and prepares everything from scratch using traditional recipes — good
                  Kumaoni food takes time! You can pre-order via WhatsApp, phone call, or by informing
                  our team during check-in. This ensures we have everything ready for your authentic
                  Kumaoni dining experience.
                </p>
              </details>

              <details className="group bg-secondary rounded-xl p-5 cursor-pointer">
                <summary className="font-semibold text-foreground list-none flex justify-between items-center">
                  What is Bal Mithai and where can I buy it?
                  <span className="transition group-open:rotate-180">▼</span>
                </summary>
                <p className="text-muted-foreground text-sm mt-3 leading-relaxed">
                  <strong>Bal Mithai</strong> is a famous Kumaoni sweet made from condensed milk (khoya)
                  cooked until brown, then coated with tiny white sugar balls (posta). It has a fudge-like
                  texture with a caramel flavor. You can buy it in <strong>Mukteshwar market</strong> —
                  look for shops selling local sweets. It's also available in Almora and other Kumaon
                  towns. Great for gifting!
                </p>
              </details>
            </div>

            {/* Closing */}
            <div className="bg-primary/5 border-l-4 border-primary rounded-r-xl p-6 my-8">
              <p className="text-foreground font-medium mb-2">
                Ready to taste the flavors of Kumaon?
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Kumaoni cuisine is a journey into Uttarakhand's culinary soul — simple, nutritious, and
                deeply connected to the mountains. Book your stay at Ecoescape Mukteshwar and let us
                take you on this gastronomic adventure with authentic meals, terrace dining, and warm
                Kumaoni hospitality.
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
