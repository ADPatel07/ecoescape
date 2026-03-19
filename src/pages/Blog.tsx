import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import heroSunriseImg from "@/assets/hero-sunrise.webp";
import gardenTerraceImg from "@/assets/garden-terrace.webp";
import chauliKiJaliImg from "@/assets/blog/things-to-do/chauli-ki-jali.webp";
import kumaoniFoodImg from "@/assets/blog/kumaoni-food-guide/kumaoni-thali.webp";
import stargazingImg from "@/assets/blog/stargazing/featured.png";
import birdwatchingImg from "@/assets/blog/birdwatching/featured.png";
import trekkingImg from "@/assets/blog/trekking/featured.png";
import orchardsImg from "@/assets/blog/fruit-orchards/featured.png";
import snowfallImg from "@/assets/blog/snowfall/featured.png";
import itineraryImg from "@/assets/blog/itinerary/featured.png";
import howToReachImg from "@/assets/blog/how-to-reach/featured.png";
import cafesImg from "@/assets/blog/cafes/featured.png";
import workcationImg from "@/assets/blog/workcation/featured.png";
import romanticImg from "@/assets/blog/romantic/featured.png";
import soloImg from "@/assets/blog/solo/featured.png";
import familyImg from "@/assets/blog/family/featured.png";
import monsoonImg from "@/assets/blog/monsoon/featured.png";
import photographyImg from "@/assets/blog/photography/featured.png";
import festivalsImg from "@/assets/blog/festivals/featured.png";
import packingImg from "@/assets/blog/packing-list/featured.png";

const blogPosts = [
  {
    slug: "monsoon-in-mukteshwar-guide",
    title: "Mukteshwar in Monsoon: A Comprehensive Guide to the Misty Mountains",
    excerpt:
      "Experience the magic of Mukteshwar in monsoon. Our 2026 guide covers weather, misty Himalayan views, lush green trails, and why the rainy season is the best time for a quiet retreat.",
    date: "March 19, 2026",
    readTime: "9 min read",
    image: monsoonImg,
    imageAlt: "Misty mountain landscape in Mukteshwar during the monsoon season",
    category: "Seasonal Guide",
  },
  {
    slug: "best-photography-spots-in-mukteshwar",
    title: "10 Best Photography Spots in Mukteshwar: Capturing the Himalayan Soul",
    excerpt:
      "Looking for the best photography spots in Mukteshwar? From the dramatic cliffs of Chauli Ki Jali to the sunrise views at Ecoescape, here is your 2026 photography guide.",
    date: "March 19, 2026",
    readTime: "8 min read",
    image: photographyImg,
    imageAlt: "A professional camera capturing the Himalayan peaks at sunset in Mukteshwar",
    category: "Photography Guide",
  },
  {
    slug: "local-festivals-and-culture-guide",
    title: "Local Festivals & Culture in Mukteshwar: A Kumaoni Heritage Guide",
    excerpt:
      "Discover the vibrant culture of Mukteshwar. From the traditional Choliya dance to festivals like Phool Dei and Harela, learn how to experience authentic Kumaoni heritage at Ecoescape.",
    date: "March 19, 2026",
    readTime: "10 min read",
    image: festivalsImg,
    imageAlt: "Traditional Choliya dancers performing in a village square in Mukteshwar",
    category: "Cultural Guide",
  },
  {
    slug: "mukteshwar-ultimate-packing-list",
    title: "Ultimate Packing List for Mukteshwar: Essentials for Every Season (2026)",
    excerpt:
      "What to pack for Mukteshwar? Our comprehensive 2026 packing guide covers clothing for summer, monsoon, and winter, plus trekking gear and essential travel items.",
    date: "March 19, 2026",
    readTime: "7 min read",
    image: packingImg,
    imageAlt: "A neatly organized travel packing layout for a mountain trip to Mukteshwar",
    category: "Travel Checklist",
  },
  {
    slug: "workcation-guide",
    title: "Workcation in Mukteshwar: A Digital Nomad's Guide to Working from the Hills",
    excerpt:
      "Planning a workcation in Mukteshwar? Our guide for digital nomads covers high-speed WiFi, power backup, quiet workspaces, and why Ecoescape is the perfect mountain office.",
    date: "March 19, 2026",
    readTime: "7 min read",
    image: workcationImg,
    imageAlt: "A productive home office setup with Himalayan mountain views",
    category: "Digital Nomad",
  },
  {
    slug: "romantic-getaway-guide",
    title: "Romantic Getaway in Mukteshwar: Best Spots for Couples in 2026",
    excerpt:
      "Planning a romantic trip to Mukteshwar? Our couples guide covers candlelit terrace dinners, sunrise viewpoints, private bonfires, and the most romantic spots in the Kumaon hills.",
    date: "March 19, 2026",
    readTime: "8 min read",
    image: romanticImg,
    imageAlt: "A romantic candlelit dinner setup on a terrace with mountain views at night",
    category: "Couples Guide",
  },
  {
    slug: "solo-travel-guide",
    title: "Solo Travel in Mukteshwar: A Safe and Serene Guide for Adventurers",
    excerpt:
      "Planning a solo trip to Mukteshwar? Our solo travel guide covers safety tips, navigation, meeting locals, and the best ways to explore the Kumaon hills on your own.",
    date: "March 19, 2026",
    readTime: "7 min read",
    image: soloImg,
    imageAlt: "A solo traveler standing on a ridge with vast Himalayan views at golden hour",
    category: "Solo Travel",
  },
  {
    slug: "family-vacation-guide",
    title: "Mukteshwar Family Vacation: Best Activities for Kids and Seniors",
    excerpt:
      "Planning a family trip to Mukteshwar? Our guide covers activities for kids and seniors, family-friendly rooms, local picnics, and why Ecoescape is the perfect multigenerational retreat.",
    date: "March 19, 2026",
    readTime: "8 min read",
    image: familyImg,
    imageAlt: "A multigenerational family enjoying a sunny day in a mountain garden",
    category: "Family Guide",
  },
  {
    slug: "how-to-reach-mukteshwar-guide",
    title: "How to Reach Mukteshwar: The Ultimate Transport Guide (2026)",
    excerpt:
      "Planning a trip to Mukteshwar? Our comprehensive 2026 guide covers how to reach Mukteshwar by train, road, and bus. Includes Delhi to Kathgodam details and local taxi tips.",
    date: "March 19, 2026",
    readTime: "8 min read",
    image: howToReachImg,
    imageAlt: "Scenic road winding through the Kumaon hills towards Mukteshwar",
    category: "Travel Guide",
  },
  {
    slug: "best-cafes-and-restaurants-in-mukteshwar",
    title: "Best Cafes in Mukteshwar: A Foodie's Guide to Mountain Dining",
    excerpt:
      "Discover the best cafes and restaurants in Mukteshwar. From the famous Choco-House and Nirvana Cafe to authentic Kumaoni dining at Ecoescape, here is your ultimate foodie guide.",
    date: "March 19, 2026",
    readTime: "10 min read",
    image: cafesImg,
    imageAlt: "Terrace dining at Ecoescape Mukteshwar with panoramic mountain views",
    category: "Food & Culture",
  },
  {
    slug: "mukteshwar-snowfall-guide",
    title: "Snowfall in Mukteshwar: Your Ultimate Guide to a Winter Wonderland Experience",
    excerpt:
      "Experience the magic of snowfall in Mukteshwar. Our guide covers the best months for snow, top viewing spots, winter packing essentials, and what to expect during a winter trip.",
    date: "March 19, 2026",
    readTime: "10 min read",
    image: snowfallImg,
    imageAlt: "Mukteshwar village covered in thick white snow with Himalayan peaks in the background",
    category: "Seasonal Guide",
  },
  {
    slug: "mukteshwar-weekend-itinerary",
    title: "Mukteshwar 2-Day Itinerary: The Perfect Weekend Getaway from Delhi",
    excerpt:
      "Planning a quick trip to Mukteshwar? Our 2-day itinerary covers the best sights, adventure activities, and local dining for a perfect weekend getaway from Delhi/NCR.",
    date: "March 19, 2026",
    readTime: "8 min read",
    image: itineraryImg,
    imageAlt: "A scenic montage of Mukteshwar trip with Himalayan views and cozy stay",
    category: "Travel Plan",
  },
  {
    slug: "mukteshwar-trekking-guide",
    title: "Mukteshwar Trekking Guide: 5 Best Trails for Adventure & Nature Lovers",
    excerpt:
      "Discover the best trekking trails in Mukteshwar. From the Bhalu Gaad waterfall to scenic forest walks, explore the top hiking paths near Ecoescape Mukteshwar.",
    date: "March 19, 2026",
    readTime: "8 min read",
    image: trekkingImg,
    imageAlt: "Beautiful trekking trail in Mukteshwar with Himalayan views and lush forests",
    category: "Adventure",
  },
  {
    slug: "fruit-orchards-of-mukteshwar-guide",
    title: "Fruit Orchards of Mukteshwar: A Guide to Apple, Peach & Plum Seasons",
    excerpt:
      "Explore the 'Fruit Bowl of Kumaon'. Our guide to Mukteshwar's fruit orchards covers the best seasons for apple, peach, and plum harvests and how to enjoy the experience.",
    date: "March 19, 2026",
    readTime: "7 min read",
    image: orchardsImg,
    imageAlt: "Lush fruit orchard in Mukteshwar with ripe fruits on trees and clear blue sky",
    category: "Nature & Culture",
  },
  {
    slug: "stargazing-in-mukteshwar",
    title: "Stargazing in Mukteshwar: A Complete Guide to the Night Sky at Ecoescape",
    excerpt:
      "Discover the magic of the Himalayan night sky. Our guide to stargazing in Mukteshwar covers the best times to visit, what to see, and why Ecoescape is the perfect dark-sky retreat.",
    date: "March 19, 2026",
    readTime: "8 min read",
    image: stargazingImg,
    imageAlt: "The Milky Way over the Himalayan mountains in Mukteshwar, as seen from Ecoescape terrace",
    category: "Activity",
  },
  {
    slug: "birdwatching-in-mukteshwar-guide",
    title: "Birdwatching in Mukteshwar: A Paradise for Nature Lovers & Birders",
    excerpt:
      "Explore the rich avian diversity of Mukteshwar. From the colorful Himalayan Monal to the elusive Laughingthrush, discover the best birding trails around Ecoescape.",
    date: "March 19, 2026",
    readTime: "10 min read",
    image: birdwatchingImg,
    imageAlt: "Himalayan Monal perched in a misty Mukteshwar forest",
    category: "Nature",
  },
  {
    slug: "kumaoni-food-guide",
    title: "Kumaoni Food Guide: Traditional Cuisine & Dining in Mukteshwar | Ecoescape",
    excerpt:
      "Discover authentic Kumaoni food in Mukteshwar - 12 traditional dishes, local ingredients, best restaurants, terrace dining experiences, and Uttarakhand cuisine guide. Taste the Himalayas!",
    date: "March 18, 2026",
    readTime: "10 min read",
    image: kumaoniFoodImg,
    imageAlt: "Traditional Kumaoni thali with bhat ki churkani, kafuli, baadi served at Ecoescape Mukteshwar with Himalayan views",
    category: "Food & Culture",
  },
  {
    slug: "things-to-do-in-mukteshwar",
    title: "Things to Do in Mukteshwar | 15 Must-Visit Attractions & Hidden Gems (2026)",
    excerpt:
      "Discover the best things to do in Mukteshwar - from ancient temples and adventure sports to scenic viewpoints and cultural experiences. Complete guide with distances and tips.",
    date: "March 18, 2026",
    readTime: "12 min read",
    image: chauliKiJaliImg,
    imageAlt: "Dramatic Chauli Ki Jali cliff edge in Mukteshwar with Himalayan mountain backdrop",
    category: "Travel Guide",
  },
  {
    slug: "mukteshwar-mahadev-temple-guide",
    title: "Mukteshwar Mahadev Temple — Complete Visitor Guide & Where to Stay in Mukteshwar",
    excerpt:
      "Discover the ancient Mukteshwar Mahadev Temple, its history, timings, how to reach, and the best places to stay nearby for a memorable Himalayan pilgrimage.",
    date: "March 5, 2026",
    readTime: "8 min read",
    image: heroSunriseImg,
    imageAlt: "Mukteshwar Mahadev Temple with Himalayan mountain backdrop and traditional architecture",
    category: "Travel Guide",
  },
  {
    slug: "mukteshwar-weather-guide",
    title: "Weather in Mukteshwar — Month-by-Month Guide for Planning Your Trip",
    excerpt:
      "Everything you need to know about Mukteshwar's weather throughout the year — best months to visit, what to pack, and seasonal highlights for every traveler.",
    date: "March 2, 2026",
    readTime: "6 min read",
    image: gardenTerraceImg,
    imageAlt: "Seasonal weather views of Mukteshwar showing Himalayan peaks through different seasons",
    category: "Planning",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <PageMeta
        title="Mukteshwar Travel Blog | Guides, Tips & Things to Do - Ecoescape"
        description="Discover Mukteshwar through local guides - weather tips, temple guides, trekking routes, and Kumaon travel advice. Plan your Uttarakhand trip with expert insights."
        canonical="https://ecoescapemukteshwar.com/blog"
        keywords="Mukteshwar travel blog, Mukteshwar guide, Mukteshwar weather, Mukteshwar temple, Uttarakhand travel, Kumaon tourism"
      />
      <Header />
      <main className="pt-40 pb-20">
        <div className="container max-w-4xl">
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4">
              Mukteshwar Travel Blog
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Local guides, travel tips, and everything you need to plan the perfect Mukteshwar getaway.
            </p>
          </div>

          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 flex flex-col sm:flex-row"
              >
                <div className="sm:w-72 aspect-video bg-muted flex-shrink-0 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={288}
                    height={162}
                    sizes="(max-width: 640px) 100vw, 288px"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-serif font-semibold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>
                    <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Read <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
