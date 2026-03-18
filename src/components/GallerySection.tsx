import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

// Suite
import suite1 from "@/assets/suite/IMG_4065.webp";
import suite2 from "@/assets/suite/IMG_2630.webp";
import suite3 from "@/assets/suite/IMG_3599.webp";
import suite4 from "@/assets/suite/img4.webp";

// Two Bed Room Apartment
import apt1 from "@/assets/two_bed_room_apartment/75ee0385-397b-46a6-99c4-ad1227814379.webp";
import apt2 from "@/assets/two_bed_room_apartment/IMG_1597.webp";
import apt3 from "@/assets/two_bed_room_apartment/IMG_1603.webp";
import apt4 from "@/assets/two_bed_room_apartment/IMG_2901.webp";

// Terrace
import terrace1 from "@/assets/terrace/6fc849e5-c31a-42b3-954c-0a943f6c9f21.webp";
import terrace2 from "@/assets/terrace/IMG_1459.webp";
import terrace3 from "@/assets/terrace/IMG_2495.webp";
import terrace4 from "@/assets/terrace/IMG_2926.webp";

// Views
import view1 from "@/assets/view/F4E15BBC-891E-40CB-84F4-77E47B25C194_1_105_c.webp";
import view2 from "@/assets/view/IMG_0754.webp";
import view3 from "@/assets/view/IMG_0774.webp";
import view4 from "@/assets/view/image00004.webp";

// Activities
import act1 from "@/assets/activites/img1.webp";
import act2 from "@/assets/activites/img2.webp";
import act3 from "@/assets/activites/IMG_3113_2.webp";
import act4 from "@/assets/activites/IMG_3736.webp";

// Food
import food1 from "@/assets/food/IMG_5696.webp";
import food2 from "@/assets/food/IMG_5767.webp";
import food3 from "@/assets/food/IMG_9928.webp";
import food4 from "@/assets/food/IMG_9939.webp";

const gallerySections = [
  {
    title: "Suite",
    description:
      "Our premium suite features panoramic Himalayan views, hand-crafted wooden interiors, and all modern comforts for an indulgent mountain retreat.",
    images: [suite2, suite1, suite3, suite4],
    altTexts: [
      "Premium suite bedroom with Himalayan mountain views from window at Ecoescape Mukteshwar",
      "Luxury suite interior with wooden furniture and mountain vistas",
      "Suite room with comfortable seating area overlooking Kumaon hills",
      "Premium suite bathroom with modern amenities and mountain views"
    ],
  },
  {
    title: "Two Bedroom Apartment",
    description:
      "Perfect for families or groups, our two-bedroom apartment offers generous living space, a fully equipped kitchen, and stunning mountain vistas from every room.",
    images: [apt1, apt2, apt3, apt4],
    altTexts: [
      "Spacious two bedroom apartment living room with mountain views at Ecoescape Mukteshwar",
      "Family apartment bedroom with Himalayan sunrise views",
      "Two bedroom apartment kitchen fully equipped for home cooking",
      "Apartment dining area with valley views perfect for family meals"
    ],
  },
  {
    title: "Terrace",
    description:
      "Step onto our sun-drenched terrace and lose yourself in an unbroken 180° panorama of the Himalayas — the perfect spot for morning chai or stargazing at night.",
    images: [terrace1, terrace2, terrace3, terrace4],
    altTexts: [
      "Sun-drenched terrace with panoramic Himalayan views at Ecoescape Mukteshwar",
      "Terrace dining setup with mountain sunrise views",
      "Evening terrace stargazing spot with Himalayan peaks",
      "Open terrace space for yoga and relaxation with valley views"
    ],
  },
  {
    title: "Views",
    description:
      "Waking up to the Himalayan skyline is an experience that never grows old. Every angle of Ecoescape frames a postcard-worthy scene of peaks, valleys and clouds.",
    images: [view1, view2, view3, view4],
    altTexts: [
      "Stunning Himalayan sunrise view from Ecoescape Mukteshwar terrace",
      "Panoramic view of Kumaon Himalayan peaks from Mukteshwar",
      "Misty mountain valley views from Ecoescape property",
      "Golden hour mountain views from Ecoescape Mukteshwar homestay"
    ],
  },
  {
    title: "Activities",
    description:
      "From guided nature walks and birdwatching to bonfire evenings and local village tours — there is always something to explore around Mukteshwar.",
    images: [act1, act4, act3, act2],
    altTexts: [
      "Nature walk trail through deodar forests near Mukteshwar",
      "Bonfire evening setup at Ecoescape Mukteshwar terrace",
      "Bird watching experience in Kumaon Himalayan forests",
      "Village tour activity exploring local Kumaoni culture"
    ],
  },
  {
    title: "Food & Dining",
    description:
      "Savour freshly prepared Kumaoni dishes and continental favourites using locally sourced ingredients. Every meal is cooked with love and served with a view.",
    images: [food1, food2, food3, food4],
    altTexts: [
      "Fresh Kumaoni thali meal served at Ecoescape Mukteshwar restaurant",
      "Continental breakfast with mountain view dining at Ecoescape",
      "Home-cooked Kumaoni cuisine prepared with local ingredients",
      "Terrace dining experience with Himalayan views at Ecoescape Mukteshwar"
    ],
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-foreground mb-4">
            Glimpse Into Your Ecoescape
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A visual journey through our spaces, surroundings, and the
            experiences that await you in Mukteshwar.
          </p>
        </motion.div>

        {/* Category rows */}
        <div className="flex flex-col gap-20">
          {gallerySections.map((section, sectionIndex) => {
            const isEven = sectionIndex % 2 === 0;

            const textBlock = (
              <motion.div
                key="text"
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col justify-center"
              >
                <span className="text-accent text-sm font-medium uppercase tracking-widest mb-3">
                  {String(sectionIndex + 1).padStart(2, "0")}
                </span>
                <h3 className="text-2xl md:text-3xl font-serif font-semibold text-foreground mb-4">
                  {section.title}
                </h3>
                <div className="w-12 h-[2px] bg-accent mb-5" />
                <p className="text-muted-foreground leading-relaxed">
                  {section.description}
                </p>
              </motion.div>
            );

            const imageGrid = (
              <motion.div
                key="images"
                initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-3"
              >
                {section.images.map((src, imgIndex) => (
                  <motion.div
                    key={imgIndex}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-xl cursor-pointer group aspect-square"
                    onClick={() => setSelectedImage({
                      src,
                      alt: section.altTexts?.[imgIndex] || `${section.title} photo ${imgIndex + 1} at Ecoescape Mukteshwar`
                    })}
                  >
                    <img
                      src={src}
                      alt={section.altTexts?.[imgIndex] || `${section.title} photo ${imgIndex + 1} at Ecoescape Mukteshwar`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                      width={400}
                      height={400}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>
                ))}
              </motion.div>
            );

            return (
              <div
                key={section.title}
                className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center"
              >
                {/* Text is always first in DOM → mobile always shows text on top.
                    On desktop, odd rows swap order via md:order-* */}
                <div className={isEven ? "" : "md:order-2"}>
                  {textBlock}
                </div>
                <div className={isEven ? "" : "md:order-1"}>
                  {imageGrid}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery"
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setSelectedImage(null);
          }}
        >
          <button
            className="absolute top-6 right-6 text-background hover:text-accent transition-colors z-10"
            onClick={() => setSelectedImage(null)}
            aria-label="Close gallery"
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
