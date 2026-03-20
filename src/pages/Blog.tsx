import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { PageMeta } from "@/seo/PageMeta";
import { Calendar, Clock, ArrowRight } from "lucide-react";
const heroSunriseImg = "/images/hero-sunrise.webp";
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
import kainchiDhamImg from "@/assets/blog/kainchi-dham/featured.png";
import nainitalDayTripImg from "@/assets/blog/nainital-day-trip/featured.png";
import bestResortsImg from "@/assets/blog/best-resorts/featured.png";
import spiritualKumaonImg from "@/assets/blog/spiritual-kumaon/featured.png";
import bhaluGaadImg from "@/assets/blog/bhalu-gaad/featured.png";
import backpackerImg from "@/assets/blog/backpacker-guide/featured.png";
import templeHistoryImg from "@/assets/blog/temple-history/featured.png";
import delhiRoadTripImg from "@/assets/blog/delhi-road-trip/featured.png";
import offbeatPlacesImg from "@/assets/blog/offbeat-places/featured.png";
import springGuideImg from "@/assets/blog/spring-guide/featured.png";

const blogPosts = [
  {
    slug: "kainchi-dham-to-mukteshwar-distance",
    title: "Kainchi Dham to Mukteshwar: Distance, Route & Travel Guide (2026)",
    excerpt: "Planning a spiritual journey from Kainchi Dham? Get the latest guide on Kainchi Dham to Mukteshwar distance, best routes via Bhowali, taxi fares, and expert travel tips for 2026.",
    date: "March 19, 2026",
    readTime: "5 min read",
    image: kainchiDhamImg,
    imageAlt: "Aerial view of the winding roads between Kainchi Dham and Mukteshwar",
    category: "Travel Guide",
  },
  {
    slug: "mukteshwar-to-nainital-day-trip",
    title: "Mukteshwar to Nainital Distance & Day Trip Guide (2026)",
    excerpt: "Everything you need for a perfect Mukteshwar to Nainital day trip. Nainital to Mukteshwar distance is ~50 km — get travel time, route options, and top attractions like Naini Lake.",
    date: "March 19, 2026",
    readTime: "6 min read",
    image: nainitalDayTripImg,
    imageAlt: "The scenic lake district of Nainital as seen from a height",
    category: "Travel Guide",
  },
  {
    slug: "best-resorts-in-mukteshwar",
    title: "10 Best Hotels & Resorts in Mukteshwar: Luxury to Budget (2026)",
    excerpt: "Looking for the best Mukteshwar hotel? Compare top resorts and homestays — from Lemon Tree and Justa to sustainable boutique stays like Ecoescape. Find your perfect Himalayan retreat.",
    date: "March 19, 2026",
    readTime: "8 min read",
    image: bestResortsImg,
    imageAlt: "Luxury resort terrace with panoramic Himalayan mountain views",
    category: "Stay Guide",
  },
  {
    slug: "spiritual-kumaon-guide",
    title: "Spiritual Kumaon: Mukteshwar Dham, Jageshwar & Kainchi Dham Guide (2026)",
    excerpt: "Explore the ancient spiritual circuit of Kumaon — from Mukteshwar Dham temple to Jageshwar Dham and Kainchi Dham. Complete pilgrimage guide with distances and timings.",
    date: "March 19, 2026",
    readTime: "7 min read",
    image: spiritualKumaonImg,
    imageAlt: "Ancient stone temple at Jageshwar Dham surrounded by deodar forests",
    category: "Spiritual Tourism",
  },
  {
    slug: "bhalu-gaad-waterfall-trek",
    title: "Bhalu Gaad Waterfall Trek: Mukteshwar's Hidden Gem (2026 Guide)",
    excerpt: "Trek to the hidden Bhalu Gaad waterfall in Mukteshwar. Find trail difficulty, timings, and the best time to visit this cascading wonder.",
    date: "March 19, 2026",
    readTime: "5 min read",
    image: bhaluGaadImg,
    imageAlt: "Cascading waterfall in the heart of the Mukteshwar forest",
    category: "Adventure",
  },
  {
    slug: "mukteshwar-backpacker-guide",
    title: "Backpacking Mukteshwar: Budget Stays, Cafes & Solo Travel Tips (2026)",
    excerpt: "The ultimate backpacker's guide to Mukteshwar Uttarakhand. Compare budget hotels in Mukteshwar, find solo-traveler cafes, and get cheap travel hacks.",
    date: "March 19, 2026",
    readTime: "6 min read",
    image: backpackerImg,
    imageAlt: "A solo backpacker trekking through the mountain trails of Mukteshwar",
    category: "Budget Travel",
  },
  {
    slug: "mukteshwar-mahadev-temple-history",
    title: "Mukteshwar Mahadev Mandir: History, Legend & Ancient Rituals (2026)",
    excerpt: "Deep dive into the 350-year-old history of Mukteshwar Dham temple. Learn about the legend of liberation, Chauli Ki Jali, and ancient Kumaoni rituals at the Mukteshwar Mandir.",
    date: "March 19, 2026",
    readTime: "7 min read",
    image: templeHistoryImg,
    imageAlt: "The ancient Mukteshwar Mahadev Temple against a golden sunrise",
    category: "History & Heritage",
  },
  {
    slug: "delhi-to-mukteshwar-road-trip",
    title: "Delhi to Mukteshwar Distance, Route & Road Trip Guide (2026)",
    excerpt: "Delhi to Mukteshwar distance is ~320 km (7-8 hours). Plan the perfect road trip with the best route via Moradabad, top dhabas, and essential hill driving tips.",
    date: "March 19, 2026",
    readTime: "8 min read",
    image: delhiRoadTripImg,
    imageAlt: "A car driving through the scenic mountain roads towards Mukteshwar",
    category: "Road Trip",
  },
  {
    slug: "offbeat-places-in-mukteshwar",
    title: "Offbeat Mukteshwar: 7 Hidden Places to Visit Beyond the Crowds (2026)",
    excerpt: "Discover offbeat places to visit in Mukteshwar. From silent village trails to secret waterfalls, here are 7 hidden gems in Mukteshwar Uttarakhand for 2026.",
    date: "March 19, 2026",
    readTime: "6 min read",
    image: offbeatPlacesImg,
    imageAlt: "A quiet, secluded viewpoint overlooking the Himalayan peaks",
    category: "Hidden Gems",
  },
  {
    slug: "spring-in-mukteshwar-guide",
    title: "Spring in Mukteshwar: Flowers, Fruit Blossoms & Best Weather (2026)",
    excerpt: "Experience the magic of spring. Guide to flower seasons, fruit blossoms, and perfect Mukteshwar temperature for a mountain getaway.",
    date: "March 19, 2026",
    readTime: "5 min read",
    image: springGuideImg,
    imageAlt: "Vibrant pink fruit blossoms in a Mukteshwar orchard during spring",
    category: "Seasonal Guide",
  },
  {
    slug: "monsoon-in-mukteshwar-guide",
    title: "Mukteshwar in Monsoon: Weather, Safety & Misty Mountain Guide (2026)",
    excerpt: "Experience Mukteshwar in monsoon — weather conditions, misty Himalayan views, lush green trails, and why the rainy season is the best time for a quiet retreat in Uttarakhand.",
    date: "March 19, 2026",
    readTime: "9 min read",
    image: monsoonImg,
    imageAlt: "Misty mountain landscape in Mukteshwar during the monsoon season",
    category: "Seasonal Guide",
  },
  {
    slug: "best-photography-spots-in-mukteshwar",
    title: "10 Best Photography Spots in Mukteshwar: Capturing the Himalayan Soul",
    excerpt: "Looking for the best photography spots in Mukteshwar? From the dramatic cliffs of Chauli Ki Jali to the sunrise views at Ecoescape, here is your 2026 photography guide.",
    date: "March 19, 2026",
    readTime: "8 min read",
    image: photographyImg,
    imageAlt: "A professional camera capturing the Himalayan peaks at sunset in Mukteshwar",
    category: "Photography Guide",
  },
  {
    slug: "local-festivals-and-culture-guide",
    title: "Local Festivals & Culture in Mukteshwar: A Kumaoni Heritage Guide",
    excerpt: "Discover the vibrant culture of Mukteshwar Uttarakhand. From Choliya dance to Phool Dei and Harela, experience authentic Kumaoni heritage at Ecoescape.",
    date: "March 19, 2026",
    readTime: "10 min read",
    image: festivalsImg,
    imageAlt: "Traditional Choliya dancers performing in a village square in Mukteshwar",
    category: "Cultural Guide",
  },
  {
    slug: "mukteshwar-ultimate-packing-list",
    title: "Ultimate Packing List for Mukteshwar: Essentials for Every Season (2026)",
    excerpt: "What to pack for Mukteshwar? Our comprehensive 2026 packing guide covers clothing for summer, monsoon, and winter, plus trekking gear and essential travel items.",
    date: "March 19, 2026",
    readTime: "7 min read",
    image: packingImg,
    imageAlt: "A neatly organized travel packing layout for a mountain trip to Mukteshwar",
    category: "Travel Checklist",
  },
  {
    slug: "workcation-guide",
    title: "Workcation in Mukteshwar: A Digital Nomad's Guide to Working from the Hills",
    excerpt: "Planning a workcation in Mukteshwar? Our guide covers high-speed WiFi, power backup, quiet workspaces, and why Ecoescape is the perfect mountain office.",
    date: "March 19, 2026",
    readTime: "7 min read",
    image: workcationImg,
    imageAlt: "A productive home office setup with Himalayan mountain views",
    category: "Digital Nomad",
  },
  {
    slug: "romantic-getaway-guide",
    title: "Romantic Getaway in Mukteshwar: Best Spots for Couples in 2026",
    excerpt: "Planning a romantic trip to Mukteshwar? Our couples guide covers candlelit terrace dinners, sunrise viewpoints, private bonfires, and the most romantic spots in the Kumaon hills.",
    date: "March 19, 2026",
    readTime: "8 min read",
    image: romanticImg,
    imageAlt: "A romantic candlelit dinner setup on a terrace with mountain views at night",
    category: "Couples Guide",
  },
  {
    slug: "solo-travel-guide",
    title: "Solo Travel in Mukteshwar: A Safe and Serene Guide for Adventurers",
    excerpt: "Planning a solo trip to Mukteshwar? Our solo travel guide covers safety tips, navigation, meeting locals, and the best ways to explore the Kumaon hills on your own.",
    date: "March 19, 2026",
    readTime: "7 min read",
    image: soloImg,
    imageAlt: "A solo traveler standing on a ridge with vast Himalayan views at golden hour",
    category: "Solo Travel",
  },
  {
    slug: "family-vacation-guide",
    title: "Mukteshwar Family Vacation: Best Activities for Kids and Seniors",
    excerpt: "Planning a family trip to Mukteshwar? Our guide covers activities for kids and seniors, family-friendly rooms, and why Ecoescape is the perfect multigenerational retreat.",
    date: "March 19, 2026",
    readTime: "8 min read",
    image: familyImg,
    imageAlt: "A multigenerational family enjoying a sunny day in a mountain garden",
    category: "Family Guide",
  },
  {
    slug: "how-to-reach-mukteshwar-guide",
    title: "How to Reach Mukteshwar from Delhi, Nainital & Kathgodam (2026)",
    excerpt: "How to reach Mukteshwar? Complete 2026 transport guide covering Delhi to Mukteshwar distance (~320 km), Kathgodam to Mukteshwar route, and local taxi tips.",
    date: "March 19, 2026",
    readTime: "8 min read",
    image: howToReachImg,
    imageAlt: "Scenic road winding through the Kumaon hills towards Mukteshwar",
    category: "Travel Guide",
  },
  {
    slug: "best-cafes-and-restaurants-in-mukteshwar",
    title: "Best Cafes & Restaurants in Mukteshwar: A Foodie's Guide (2026)",
    excerpt: "Discover the best cafes and restaurants in Mukteshwar. From the famous Choco-House and Nirvana Cafe to authentic Kumaoni dining at Ecoescape — your ultimate foodie guide.",
    date: "March 19, 2026",
    readTime: "10 min read",
    image: cafesImg,
    imageAlt: "Terrace dining at Ecoescape Mukteshwar with panoramic mountain views",
    category: "Food & Culture",
  },
  {
    slug: "mukteshwar-snowfall-guide",
    title: "Snowfall in Mukteshwar 2026: Best Months, Spots & Winter Travel Guide",
    excerpt: "When does it snow in Mukteshwar? Complete guide to Mukteshwar snowfall — best months (Dec–Feb), top snow viewing spots, winter packing essentials, and what to expect during a winter trip.",
    date: "March 19, 2026",
    readTime: "10 min read",
    image: snowfallImg,
    imageAlt: "Mukteshwar village covered in thick white snow with Himalayan peaks in the background",
    category: "Seasonal Guide",
  },
  {
    slug: "mukteshwar-weekend-itinerary",
    title: "Mukteshwar 2-Day Itinerary: The Perfect Weekend Getaway from Delhi",
    excerpt: "Planning a quick trip to Mukteshwar? Our 2-day itinerary covers the best places to visit, adventure activities, and local dining for a perfect weekend getaway from Delhi.",
    date: "March 19, 2026",
    readTime: "8 min read",
    image: itineraryImg,
    imageAlt: "A scenic montage of Mukteshwar trip with Himalayan views and cozy stay",
    category: "Travel Plan",
  },
  {
    slug: "mukteshwar-trekking-guide",
    title: "Mukteshwar Trekking Guide: 5 Best Trails for Adventure & Nature Lovers",
    excerpt: "Discover the best trekking trails in Mukteshwar. From the Bhalu Gaad waterfall to scenic forest walks, explore the top hiking paths near Ecoescape Mukteshwar.",
    date: "March 19, 2026",
    readTime: "8 min read",
    image: trekkingImg,
    imageAlt: "Beautiful trekking trail in Mukteshwar with Himalayan views and lush forests",
    category: "Adventure",
  },
  {
    slug: "fruit-orchards-of-mukteshwar-guide",
    title: "Fruit Orchards of Mukteshwar: Apple, Peach & Plum Season Guide",
    excerpt: "Explore the 'Fruit Bowl of Kumaon'. Guide to Mukteshwar's fruit orchards — apple, peach, and plum harvest seasons and how to enjoy the orchard experience.",
    date: "March 19, 2026",
    readTime: "7 min read",
    image: orchardsImg,
    imageAlt: "Lush fruit orchard in Mukteshwar with ripe fruits on trees and clear blue sky",
    category: "Nature & Culture",
  },
  {
    slug: "stargazing-in-mukteshwar",
    title: "Stargazing in Mukteshwar: A Complete Guide to the Night Sky at Ecoescape",
    excerpt: "Discover the magic of the Himalayan night sky. Guide to stargazing in Mukteshwar — best times, what to see, and why Ecoescape is the perfect dark-sky retreat.",
    date: "March 19, 2026",
    readTime: "8 min read",
    image: stargazingImg,
    imageAlt: "The Milky Way over the Himalayan mountains in Mukteshwar, as seen from Ecoescape terrace",
    category: "Activity",
  },
  {
    slug: "birdwatching-in-mukteshwar-guide",
    title: "Birdwatching in Mukteshwar: A Paradise for Nature Lovers & Birders",
    excerpt: "Explore the rich avian diversity of Mukteshwar. From the Himalayan Monal to the Laughingthrush, discover the best birding trails around Ecoescape.",
    date: "March 19, 2026",
    readTime: "10 min read",
    image: birdwatchingImg,
    imageAlt: "Himalayan Monal perched in a misty Mukteshwar forest",
    category: "Nature",
  },
  {
    slug: "kumaoni-food-guide",
    title: "Kumaoni Food Guide: Traditional Cuisine & Dining in Mukteshwar",
    excerpt: "Discover authentic Kumaoni food in Mukteshwar — 12 traditional dishes, local ingredients, best restaurants, terrace dining, and Uttarakhand cuisine guide.",
    date: "March 18, 2026",
    readTime: "10 min read",
    image: kumaoniFoodImg,
    imageAlt: "Traditional Kumaoni thali with bhat ki churkani, kafuli, baadi served at Ecoescape Mukteshwar",
    category: "Food & Culture",
  },
  {
    slug: "things-to-do-in-mukteshwar",
    title: "Places to Visit in Mukteshwar | 15 Must-See Attractions & Hidden Gems (2026)",
    excerpt: "Discover the best places to visit in Mukteshwar — ancient temples, adventure sports, scenic viewpoints, and cultural experiences. Complete guide with Mukteshwar distance from Nainital and tips.",
    date: "March 18, 2026",
    readTime: "12 min read",
    image: chauliKiJaliImg,
    imageAlt: "Dramatic Chauli Ki Jali cliff edge in Mukteshwar with Himalayan mountain backdrop",
    category: "Travel Guide",
  },
  {
    slug: "mukteshwar-mahadev-temple-guide",
    title: "Mukteshwar Mahadev Temple — Complete Visitor Guide & Where to Stay (2026)",
    excerpt: "Complete guide to Mukteshwar Mahadev Temple (Mukteshwar Dham) — history, timings, how to reach, and the best places to stay nearby for a memorable Himalayan pilgrimage.",
    date: "March 5, 2026",
    readTime: "8 min read",
    image: heroSunriseImg,
    imageAlt: "Mukteshwar Mahadev Temple with Himalayan mountain backdrop and traditional architecture",
    category: "Travel Guide",
  },
  {
    slug: "mukteshwar-weather-guide",
    title: "Mukteshwar Weather Today & Month-by-Month Temperature Guide (2026)",
    excerpt: "Check Mukteshwar weather today and plan your trip with our complete month-by-month temperature guide. Best time to visit for snowfall, pleasant weather, or Himalayan views.",
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
        title="Mukteshwar Travel Blog | Local Guides, Tips & Hidden Gems - Ecoescape"
        description="Plan your ultimate Himalayan escape with our Mukteshwar travel blog. Expert guides on weather, trekking trails, local Kumaoni food, and must-visit attractions in 2026."
        canonical="https://ecoescapemukteshwar.com/blog"
        keywords="Mukteshwar travel blog, Mukteshwar guide, Mukteshwar travel tips, trekking in Mukteshwar, Kumaoni food guide, best time to visit Mukteshwar"
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
