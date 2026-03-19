import { motion } from "framer-motion";
import { Flower2, Camera, Bird, BookOpen, Sparkles } from "lucide-react";
import gardenTerrace from "@/assets/garden-terrace.webp";

const activities = [
  { icon: Flower2, text: "Morning garden walks" },
  { icon: Camera, text: "Photography paradise" },
  { icon: Bird, text: "Bird watching" },
  { icon: BookOpen, text: "Peaceful reading nooks" },
  { icon: Sparkles, text: "Meditation spots" },
];

export function GardenSection() {
  return (
    <section id="garden" className="py-20 bg-background overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
              <Flower2 className="h-4 w-4" />
              <span className="text-sm font-medium">Botanical Garden</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-6">
              🌱 A Living Garden of 100+ Plant Varieties
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Step into our green sanctuary - a carefully curated botanical garden home to 
              over 100 varieties of plants. Currently, our roses 🌹 are in full bloom, 
              adding splashes of color and sweet fragrance to your mountain escape.
            </p>

            {/* Activities Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
              {activities.map((activity, index) => (
                <motion.div
                  key={activity.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-2 text-foreground"
                >
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <activity.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">{activity.text}</span>
                </motion.div>
              ))}
            </div>

            {/* Seasonal Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-accent/10 border border-accent/20 rounded-xl p-4"
            >
              <p className="text-foreground flex items-center gap-2">
                <span className="text-2xl">🌹</span>
                <span>
                  <strong>Currently in bloom:</strong> Roses are at their peak! 
                  Perfect time to visit our garden.
                </span>
              </p>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={gardenTerrace}
                alt="Ecoescape Mukteshwar garden with blooming roses and mountain views"
                className="w-full h-[400px] lg:h-[500px] object-cover"
                loading="lazy"
                width={800}
                height={500}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/95 backdrop-blur-sm rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <span className="text-2xl">🌿</span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">100+ Plant Varieties</div>
                      <div className="text-sm text-muted-foreground">
                        Curated botanical collection
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
