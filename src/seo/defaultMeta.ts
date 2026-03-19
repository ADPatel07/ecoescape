// Default SEO metadata configuration

export const defaultMeta = {
  title: "Ecoescape Mukteshwar | Best Boutique Homestay in Uttarakhand with Sunrise Views",
  description:
    "Book your stay at Ecoescape Mukteshwar - the best boutique homestay in Mukteshwar, Uttarakhand. Enjoy sunrise views, 100+ plant garden, in-house restaurant & terrace dining.",
  keywords:
    "Ecoescape Mukteshwar, Mukteshwar homestay, Mukteshwar bed and breakfast, sunrise view property Mukteshwar, garden homestay Uttarakhand, safe homestay Mukteshwar, terrace dining Mukteshwar, best place to stay Mukteshwar",
  ogImage: "https://ecoescapemukteshwar.com/LOGO.png",
  ogImageWidth: "1200",
  ogImageHeight: "630",
  ogImageAlt: "Ecoescape Mukteshwar - A boutique homestay with sunrise views and lush gardens in Uttarakhand",
  twitterCard: "summary_large_image",
  canonical: "https://ecoescapemukteshwar.com",
};

export const siteUrl = "https://ecoescapemukteshwar.com";

export const defaultSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Ecoescape Mukteshwar",
  "image": "https://ecoescapemukteshwar.com/LOGO.png",
  "description": defaultMeta.description,
  "url": siteUrl,
  "telephone": "+919667846787",
  "email": "reservations@ecoescapemukteshwar.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mukteshwar Village",
    "addressLocality": "Mukteshwar, Nainital District",
    "addressRegion": "Uttarakhand",
    "postalCode": "263132",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.4722,
    "longitude": 79.6472
  },
  "priceRange": "₹₹",
  "starRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "125",
    "bestRating": "5"
  },
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Free Wi-Fi", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "In-house Restaurant", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Sunrise Views", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "Mountain Views", "value": true },
    { "@type": "LocationFeatureSpecification", "name": "100+ Plant Garden", "value": true }
  ],
  "sameAs": [
    "https://www.instagram.com/ecoescape.mukteshwar/",
    "https://www.facebook.com/people/Ecoescape-Mukteshwar/61554610562549/"
  ]
};
