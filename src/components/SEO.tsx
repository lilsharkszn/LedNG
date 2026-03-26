/**
 * SEO Component
 * Reusable component for easy SEO management across pages
 *
 * Usage:
 * <SEO
 *   title="Page Title"
 *   description="Page description"
 *   image="/image.jpg"
 *   schema={getOrganizationSchema()}
 * />
 */

import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import {
  SEO_CONFIG,
  generatePageTitle,
  generateCanonicalUrl,
} from '../config/seoConfig';

export interface SEOProps {
  // Basic metadata
  title: string;
  description?: string;
  keywords?: string[];
  canonical?: string;
  author?: string;

  // Open Graph (social media sharing)
  image?: string;
  imageAlt?: string;
  ogType?: string;
  ogUrl?: string;

  // Twitter Card
  twitterCard?: string;
  twitterCreator?: string;

  // Robots
  robots?: string;

  // Structured data (JSON-LD)
  schema?: any;
  schemaList?: any[];

  // Language and locale
  language?: string;
  locale?: string;
}

/**
 * SEO Component
 * Manages page-level SEO metadata including meta tags, Open Graph, Twitter Cards, and JSON-LD
 * Wraps react-helmet-async for safe, async-safe meta tag injection
 *
 * @component
 * @example
 * // Basic usage
 * <SEO
 *   title="Home Page"
 *   description="Welcome to TheLedNG"
 * />
 *
 * @example
 * // With social sharing and schema
 * <SEO
 *   title="Artist Profile"
 *   description="Meet SCOPE"
 *   image="/scope.jpg"
 *   imageAlt="Artist SCOPE"
 *   schema={getMusicGroupSchema({ name: 'SCOPE', ... })}
 * />
 */
const SEO: FC<SEOProps> = ({
  title,
  description,
  keywords = [],
  canonical,
  author,
  image,
  imageAlt,
  ogType = SEO_CONFIG.openGraph.type,
  ogUrl,
  twitterCard = SEO_CONFIG.twitterCard.cardType,
  twitterCreator = SEO_CONFIG.twitterCard.creator,
  robots = 'index, follow, max-image-preview:large',
  schema,
  schemaList,
  language = 'en',
  locale = SEO_CONFIG.openGraph.locale,
}) => {
  // Generate full title with site name appended
  const fullTitle = generatePageTitle(title);

  // Use provided description or default site description
  const seoDescription = description || SEO_CONFIG.site.description;

  // Generate canonical URL
  const canonicalUrl = canonical || generateCanonicalUrl(window.location.pathname);

  // Generate full image URL
  const fullImageUrl = image
    ? `${SEO_CONFIG.site.baseUrl}${image.replace(/^\//, '')}`
    : `${SEO_CONFIG.site.baseUrl}${SEO_CONFIG.site.image.replace(/^\//, '')}`;

  // Generate OG image alt text
  const ogImageAlt = imageAlt || title;

  // URL for Open Graph (current page or provided)
  const pageUrl = ogUrl || window.location.href;

  // Merge keywords: page-specific + site defaults
  const allKeywords = Array.from(
    new Set([...keywords, ...SEO_CONFIG.keywords.site]),
  ).slice(0, 10);

  // Prepare schemas - can be single or multiple
  const schemas = schemaList ? schemaList : schema ? [schema] : [];

  return (
    <Helmet prioritizeSeoTags>
      {/* ==================== BASIC META TAGS ==================== */}
      <title>{fullTitle}</title>

      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="language" content={language} />
      <meta name="robots" content={robots} />
      {author && <meta name="author" content={author} />}

      {/* Viewport and charset */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />

      {/* ==================== CANONICAL URL ==================== */}
      <link rel="canonical" href={canonicalUrl} />

      {/* ==================== OPEN GRAPH (Social Media Sharing) ==================== */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={SEO_CONFIG.openGraph.siteName} />

      {/* ==================== TWITTER CARD ==================== */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={ogImageAlt} />
      <meta name="twitter:creator" content={twitterCreator} />

      {/* ==================== ICONS & THEME ==================== */}
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="theme-color" content="#c41e3a" />

      {/* ==================== JSON-LD STRUCTURED DATA ==================== */}
      {schemas.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(
            schemas.length === 1
              ? schemas[0]
              : {
                  '@context': 'https://schema.org',
                  '@graph': schemas,
                },
          )}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
