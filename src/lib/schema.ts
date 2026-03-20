// SEO Schema Generation Utilities
// Provides TypeScript interfaces and generator functions for structured data

export interface PersonSchema {
  "@type": "Person" | "Organization";
  name: string;
  location?: string;
}

export interface OrganizationSchema {
  "@type": "Organization";
  name: string;
  url: string;
  logo?: string;
}

export interface RatingSchema {
  "@type": "Rating";
  ratingValue: number | string;
  bestRating?: number | string;
  worstRating?: number | string;
}

export interface LodgingBusinessSchema {
  "@context": string;
  "@type": "LodgingBusiness";
  name: string;
  url: string;
  address?: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone?: string;
  email?: string;
}

export interface ArticleData {
  headline: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: PersonSchema | OrganizationSchema;
  publisher: OrganizationSchema;
  description: string;
  url?: string;
}

export interface ArticleSchema {
  "@context": string;
  "@type": "Article" | "BlogPosting";
  headline: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: PersonSchema | OrganizationSchema;
  publisher: OrganizationSchema;
  description: string;
  url?: string;
  mainEntityOfPage?: {
    "@type": "WebPage";
    "@id": string;
  };
}

export interface ReviewData {
  author: PersonSchema;
  reviewRating: RatingSchema;
  reviewBody: string;
  datePublished?: string;
  itemReviewed?: LodgingBusinessSchema;
}

export interface ReviewSchema {
  "@context": string;
  "@type": "Review";
  itemReviewed: LodgingBusinessSchema;
  reviewRating: RatingSchema;
  author: PersonSchema;
  reviewBody: string;
  datePublished?: string;
}

export interface BreadcrumbItem {
  name: string;
  item?: string;
}

export interface BreadcrumbSchema {
  "@context": string;
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item?: string;
  }>;
}

// Base URL for the website
const SITE_URL = "https://ecoescapemukteshwar.com";

// Default organization (Ecoescape Mukteshwar)
const DEFAULT_PUBLISHER: OrganizationSchema = {
  "@type": "Organization",
  name: "Ecoescape Mukteshwar",
  url: SITE_URL,
};

// Default lodging business info
const DEFAULT_LODGING_BUSINESS: LodgingBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Ecoescape Mukteshwar",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Mukteshwar Village",
    addressLocality: "Mukteshwar",
    addressRegion: "Uttarakhand",
    postalCode: "263138",
    addressCountry: "IN",
  },
  telephone: "+919667846787",
  email: "reservations@ecoescapemukteshwar.com",
};

/**
 * Generate Article Schema for blog posts
 */
export function generateArticleSchema(data: ArticleData): ArticleSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.headline,
    image: data.image,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: data.author,
    publisher: data.publisher || DEFAULT_PUBLISHER,
    description: data.description,
    ...(data.url && {
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": data.url,
      },
    }),
  };
}

/**
 * Generate Review Schema for testimonials
 */
export function generateReviewSchema(data: ReviewData): ReviewSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: data.itemReviewed || DEFAULT_LODGING_BUSINESS,
    reviewRating: {
      "@type": "Rating",
      ratingValue: data.reviewRating.ratingValue,
      bestRating: data.reviewRating.bestRating || 5,
      worstRating: data.reviewRating.worstRating || 1,
    },
    author: {
      "@type": "Person",
      name: data.author.name,
    },
    reviewBody: data.reviewBody,
    ...(data.datePublished && { datePublished: data.datePublished }),
  };
}

/**
 * Generate Breadcrumb Schema for navigation hierarchy
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]): BreadcrumbSchema {
  const itemListElement: { "@type": "ListItem"; position: number; name: string; item?: string }[] = items.map((item, index) => ({
    "@type": "ListItem" as const,
    position: index + 1,
    name: item.name,
    ...(item.item && { item: item.item }),
  }));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement,
  };
}

/**
 * Generate Restaurant Schema
 */
export interface RestaurantSchema {
  "@context": string;
  "@type": "Restaurant";
  name: string;
  servesCuisine: string;
  parentOrganization: {
    "@type": "LodgingBusiness";
    name: string;
  };
  address?: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone?: string;
}

export function generateRestaurantSchema(): RestaurantSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Ecoescape Mukteshwar Restaurant",
    servesCuisine: "Kumaoni, North Indian, Home-cooked",
    parentOrganization: {
      "@type": "LodgingBusiness",
      name: "Ecoescape Mukteshwar",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mukteshwar Village",
      addressLocality: "Mukteshwar",
      addressRegion: "Uttarakhand",
      postalCode: "263138",
      addressCountry: "IN",
    },
    telephone: "+919667846787",
  };
}

/**
 * Helper function to parse and format date from string (e.g., "March 5, 2026" to "2026-03-05")
 */
export function formatDateForSchema(dateString: string): string {
  const months: { [key: string]: string } = {
    January: "01",
    February: "02",
    March: "03",
    April: "04",
    May: "05",
    June: "06",
    July: "07",
    August: "08",
    September: "09",
    October: "10",
    November: "11",
    December: "12",
  };

  // Parse format like "March 5, 2026"
  const match = dateString.match(/(\w+) (\d+), (\d{4})/);
  if (match) {
    const [, month, day, year] = match;
    const monthNum = months[month];
    return `${year}-${monthNum}-${day.padStart(2, "0")}`;
  }

  // If already in ISO format or other format, return as is (you can extend this)
  return dateString;
}

/**
 * LodgingReservation Schema Interface
 */
export interface LodgingReservationData {
  name: string;
  description: string;
  url: string;
  image: string;
  price: string;
  priceCurrency: string;
  capacity: string;
  size: string;
  bedConfig: string;
  amenities: string[];
  bookingUrl: string;
}

/**
 * LodgingReservation Schema Interface
 */
export interface LodgingReservationSchema {
  "@context": string;
  "@type": "LodgingReservation";
  reservationFor: {
    "@type": "LodgingBusiness";
    name: string;
    description: string;
    url: string;
    image: string[];
    address: {
      "@type": "PostalAddress";
      streetAddress: string;
      addressLocality: string;
      addressRegion: string;
      postalCode: string;
      addressCountry: string;
    };
    telephone: string;
    email: string;
    amenities: string[];
    priceRange: string;
    aggregateRating?: {
      "@type": "AggregateRating";
      ratingValue: string;
      reviewCount: string;
      bestRating: string;
    };
  };
  reservationStatus: {
    "@type": "ReservationStatusType";
  };
  priceCurrency: string;
}

/**
 * Generate LodgingReservation Schema for individual room pages
 * This schema type is used by Google to display rich information about accommodations
 */
export function generateLodgingReservationSchema(data: LodgingReservationData): LodgingReservationSchema {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingReservation",
    reservationFor: {
      "@type": "LodgingBusiness",
      name: data.name,
      description: data.description,
      url: data.url,
      image: [data.image],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Mukteshwar Village",
        addressLocality: "Mukteshwar",
        addressRegion: "Uttarakhand",
        postalCode: "263138",
        addressCountry: "IN",
      },
      telephone: "+919667846787",
      email: "reservations@ecoescapemukteshwar.com",
      amenities: data.amenities,
      priceRange: data.price,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "125",
        bestRating: "5",
      },
    },
    reservationStatus: {
      "@type": "ReservationStatusType",
    },
    priceCurrency: data.priceCurrency,
  };
}
