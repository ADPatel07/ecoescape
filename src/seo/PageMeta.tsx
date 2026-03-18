import { Helmet } from "react-helmet-async";
import { siteUrl } from "./defaultMeta";

/**
 * PageMeta Component
 *
 * Reusable component for setting page-specific meta tags.
 * Wraps react-helmet-async for dynamic head tag management.
 *
 * @example
 * ```tsx
 * <PageMeta
 *   title="Mukteshwar Travel Blog | Guides & Tips"
 *   description="Discover Mukteshwar through local guides..."
 *   canonical="https://ecoescapemukteshwar.com/blog"
 * />
 * ```
 */
interface PageMetaProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  keywords?: string;
  noindex?: boolean;
  ogTitle?: string;
  ogDescription?: string;
}

export function PageMeta({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  keywords,
  noindex = false,
  ogTitle,
  ogDescription,
}: PageMetaProps) {
  // Use the canonical URL or fallback to site URL
  const fullCanonical = canonical ? (canonical.startsWith("http") ? canonical : `${siteUrl}${canonical}`) : siteUrl;

  // Default OG title to page title if not provided
  const finalOgTitle = ogTitle || title;
  const finalOgDescription = ogDescription || description;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:locale" content="en_IN" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="Ecoescape Mukteshwar" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
    </Helmet>
  );
}

export default PageMeta;
