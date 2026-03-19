import { generateReviewSchema, formatDateForSchema } from "@/lib/schema";

export const testimonials = [
  {
    id: 1,
    name: "Priya S.",
    initials: "PS",
    location: "Delhi",
    rating: 5,
    text: "The sunrise views from our room were absolutely magical! The garden with blooming roses was a bonus. Food was home-cooked and delicious. Highly recommend!",
    date: "December 2024",
    source: "Google",
    verified: true,
  },
  {
    id: 2,
    name: "Rajesh & Family",
    initials: "RF",
    location: "Mumbai",
    rating: 5,
    text: "Felt completely safe with the fenced property and CCTV. The terrace dining experience was unforgettable. Kids loved the garden walks. Will definitely come back!",
    date: "January 2025",
    source: "Google",
    verified: true,
  },
  {
    id: 3,
    name: "Ananya K.",
    initials: "AK",
    location: "Bangalore",
    rating: 5,
    text: "Perfect for our workation! The WiFi was fast, the terrace was inspiring, and the authentic Kumaoni food was amazing. The hosts were so welcoming.",
    date: "November 2024",
    source: "TripAdvisor",
    verified: true,
  },
  {
    id: 4,
    name: "Vikram & Meera",
    initials: "VM",
    location: "Noida",
    rating: 5,
    text: "Such a peaceful retreat! Waking up to sunrise views over the Himalayas was surreal. The 100+ plant garden is a photographer's paradise. Highly recommended!",
    date: "October 2024",
    source: "Google",
    verified: true,
  },
];

export const reviewSchemas = testimonials.map((testimonial) =>
  generateReviewSchema({
    author: {
      "@type": "Person",
      name: testimonial.name,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: testimonial.rating,
      bestRating: 5,
    },
    reviewBody: testimonial.text,
    datePublished: formatDateForSchema(testimonial.date),
  })
);
