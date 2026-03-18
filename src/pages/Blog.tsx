import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    slug: "mukteshwar-mahadev-temple-guide",
    title: "Mukteshwar Mahadev Temple — Complete Visitor Guide & Where to Stay in Mukteshwar",
    excerpt:
      "Discover the ancient Mukteshwar Mahadev Temple, its history, timings, how to reach, and the best places to stay nearby for a memorable Himalayan pilgrimage.",
    date: "March 5, 2026",
    readTime: "8 min read",
    image: "/placeholder.svg",
    category: "Travel Guide",
  },
  {
    slug: "mukteshwar-weather-guide",
    title: "Weather in Mukteshwar — Month-by-Month Guide for Planning Your Trip",
    excerpt:
      "Everything you need to know about Mukteshwar's weather throughout the year — best months to visit, what to pack, and seasonal highlights for every traveler.",
    date: "March 2, 2026",
    readTime: "6 min read",
    image: "/placeholder.svg",
    category: "Planning",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
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
                <div className="sm:w-72 h-48 sm:h-auto bg-muted flex-shrink-0 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    width={288}
                    height={192}
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
