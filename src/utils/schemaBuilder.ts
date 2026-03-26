/**
 * JSON-LD Schema Builder
 * Generates structured data for search engines using Schema.org vocabulary.
 * Supports various types: Organization, BreadcrumbList, Article, Product, etc.
 */

import { SEO_CONFIG } from '../config/seoConfig';

/**
 * Organization schema - Base structured data for the website
 * Used on all pages to help search engines understand what the site is about
 */
export const getOrganizationSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SEO_CONFIG.organization.name,
    alternateName: SEO_CONFIG.organization.alternateName,
    url: SEO_CONFIG.site.url,
    logo: `${SEO_CONFIG.site.baseUrl}${SEO_CONFIG.organization.logo}`,
    description: SEO_CONFIG.organization.description,
    sameAs: SEO_CONFIG.organization.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: SEO_CONFIG.organization.contact.contactType,
      email: SEO_CONFIG.organization.contact.email,
      url: SEO_CONFIG.organization.contact.url,
    },
  };
};

/**
 * Website schema - Homepage specific
 * Helps search engines index different sections of the site
 */
export const getWebsiteSchema = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    url: SEO_CONFIG.site.url,
    name: SEO_CONFIG.site.title,
    description: SEO_CONFIG.site.description,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SEO_CONFIG.site.baseUrl}search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
};

/**
 * BreadcrumbList schema - Navigation trail
 * Improves SERP appearance and user navigation
 * @param breadcrumbs - Array of breadcrumb items
 */
export const getBreadcrumbSchema = (
  breadcrumbs: Array<{ name: string; url: string }>,
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
};

/**
 * Article schema - For blog posts, news, or editorial content
 * @param data - Article metadata
 */
export const getArticleSchema = (data: {
  headline: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  publisher?: string;
  url: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: data.headline,
    description: data.description,
    image: data.image ? `${SEO_CONFIG.site.baseUrl}${data.image}` : undefined,
    datePublished: data.datePublished || new Date().toISOString(),
    dateModified: data.dateModified || new Date().toISOString(),
    author: {
      '@type': 'Organization',
      name: data.author || SEO_CONFIG.organization.name,
    },
    publisher: {
      '@type': 'Organization',
      name: data.publisher || SEO_CONFIG.organization.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SEO_CONFIG.site.baseUrl}${SEO_CONFIG.organization.logo}`,
      },
    },
    mainEntityOfPage: data.url,
  };
};

/**
 * Product schema - For beat store or music products
 * @param data - Product information
 */
export const getProductSchema = (data: {
  name: string;
  description: string;
  image?: string;
  url: string;
  price?: string;
  priceCurrency?: string;
  ratingValue?: number;
  reviewCount?: number;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: data.name,
    description: data.description,
    image: data.image ? `${SEO_CONFIG.site.baseUrl}${data.image}` : undefined,
    url: data.url,
    ...(data.price && {
      offers: {
        '@type': 'Offer',
        price: data.price,
        priceCurrency: data.priceCurrency || 'USD',
        availability: 'https://schema.org/InStock',
      },
    }),
    ...(data.ratingValue && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: data.ratingValue,
        reviewCount: data.reviewCount || 1,
      },
    }),
  };
};

/**
 * Person schema - For artist profiles
 * @param data - Person/artist information
 */
export const getPersonSchema = (data: {
  name: string;
  description: string;
  image?: string;
  url: string;
  sameAs?: string[];
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.name,
    description: data.description,
    image: data.image ? `${SEO_CONFIG.site.baseUrl}${data.image}` : undefined,
    url: data.url,
    ...(data.sameAs && data.sameAs.length > 0 && {
      sameAs: data.sameAs,
    }),
  };
};

/**
 * MusicGroup schema - For music artist/group
 * @param data - Music group information
 */
export const getMusicGroupSchema = (data: {
  name: string;
  description: string;
  image?: string;
  url: string;
  genre?: string;
  memberOf?: Array<{ name: string; url: string }>;
  sameAs?: string[];
  albums?: Array<{
    name: string;
    url: string;
    datePublished?: string;
    image?: string;
  }>;
  videos?: Array<{
    name: string;
    url: string;
    thumbnailUrl?: string;
  }>;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'MusicGroup',
    name: data.name,
    description: data.description,
    image: data.image ? `${SEO_CONFIG.site.baseUrl}${data.image}` : undefined,
    url: data.url,
    ...(data.genre && { genre: data.genre }),
    ...(data.memberOf &&
      data.memberOf.length > 0 && {
        hasMember: data.memberOf.map(member => ({
          '@type': 'Person',
          name: member.name,
          url: member.url,
        })),
      }),
    ...(data.albums &&
      data.albums.length > 0 && {
        hasPart: data.albums.map(album => ({
          '@type': 'MusicAlbum',
          name: album.name,
          url: album.url,
          datePublished: album.datePublished,
          image: album.image ? `${SEO_CONFIG.site.baseUrl}${album.image}` : undefined,
        })),
      }),
    ...(data.videos &&
      data.videos.length > 0 && {
        associatedMedia: data.videos.map(video => ({
          '@type': 'VideoObject',
          name: video.name,
          url: video.url,
          thumbnailUrl: video.thumbnailUrl,
        })),
      }),
    ...(data.sameAs &&
      data.sameAs.length > 0 && {
        sameAs: data.sameAs,
      }),
  };
};

/**
 * Combine multiple schemas into a graph
 * Useful when you need multiple schemas on one page
 */
export const getSchemaGraph = (schemas: any[]) => {
  return {
    '@context': 'https://schema.org',
    '@graph': schemas,
  };
};

/**
 * Create a properly formatted script tag for JSON-LD
 * @param schema - The schema object
 */
export const createSchemaScript = (schema: any) => {
  return {
    __html: JSON.stringify(schema),
  };
};
