/**
 * useSEO Hook
 * Modern React hook for managing SEO metadata programmatically
 *
 * Usage:
 * const { updateSEO } = useSEO();
 * updateSEO({ title: 'Page Title', description: 'Page description' });
 *
 * Note: For component-based SEO management, use the SEO component instead.
 */

import {
  SEO_CONFIG,
  generatePageTitle,
  generateCanonicalUrl,
} from '../config/seoConfig';

/**
 * SEO Data Interface
 * Define all possible SEO properties for a page
 */
export interface ISEOData {
  // Basic metadata
  title?: string;
  description?: string;
  keywords?: string[];
  canonical?: string;

  // Open Graph (social sharing)
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogUrl?: string;
  ogType?: string;

  // Twitter Card
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterImageAlt?: string;
  twitterCard?: string;
  twitterCreator?: string;

  // Additional meta tags
  robots?: string;
  author?: string;
  viewport?: string;
  charset?: string;
  language?: string;
  locale?: string;

  // Structured data (JSON-LD)
  schema?: any;
}

/**
 * Note: For JSX-based SEO, use the SEO component (src/components/SEO.tsx) instead
 * This hook is provided for programmatic access to SEO utilities and metadata injection
 */
export const useSEO = () => {
  /**
   * Update SEO metadata programmatically
   * Useful when you need full control over when updates happen
   * @param data - SEO data object
   */
  const updateSEO = (data: ISEOData) => {
    // Generate full title with site name
    const fullTitle = data.title
      ? generatePageTitle(data.title)
      : SEO_CONFIG.site.title;

    // Update document title
    document.title = fullTitle;

    // Use provided canonical or generate from current path
    const canonical =
      data.canonical || generateCanonicalUrl(window.location.pathname);

    // Update or create canonical link
    let canonicalLink = document.querySelector(
      "link[rel='canonical']",
    ) as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    // Generate Open Graph tags
    const ogTitle = data.ogTitle || data.title || SEO_CONFIG.site.title;
    const ogDescription =
      data.ogDescription || data.description || SEO_CONFIG.site.description;
    const ogImage = data.ogImage
      ? `${SEO_CONFIG.site.baseUrl}${data.ogImage.replace(/^\//, '')}`
      : `${SEO_CONFIG.site.baseUrl}${SEO_CONFIG.site.image.replace(/^\//, '')}`;
    const ogUrl = data.ogUrl || window.location.href;

    // Generate Twitter Card tags
    const twitterTitle = data.twitterTitle || ogTitle;
    const twitterDescription = data.twitterDescription || ogDescription;
    const twitterImage = data.twitterImage || ogImage;
    const twitterCard = data.twitterCard || SEO_CONFIG.twitterCard.cardType;
    const twitterCreator =
      data.twitterCreator || SEO_CONFIG.twitterCard.creator;

    // Helper function to update meta tag
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let meta = document.querySelector(
        `meta[${attr}="${name}"]`,
      ) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update meta tags
    updateMetaTag('description', ogDescription);
    updateMetaTag('keywords', [...(data.keywords || []), ...SEO_CONFIG.keywords.site].slice(0, 10).join(', '));
    updateMetaTag('robots', data.robots || 'index, follow, max-image-preview:large');
    updateMetaTag('author', data.author || SEO_CONFIG.site.title);
    updateMetaTag('language', data.language || 'en');

    // Update Open Graph tags
    updateMetaTag('og:title', ogTitle, true);
    updateMetaTag('og:description', ogDescription, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:image:alt', data.ogImageAlt || ogTitle, true);
    updateMetaTag('og:url', ogUrl, true);
    updateMetaTag('og:type', data.ogType || SEO_CONFIG.openGraph.type, true);
    updateMetaTag('og:locale', data.locale || SEO_CONFIG.openGraph.locale, true);
    updateMetaTag('og:site_name', SEO_CONFIG.openGraph.siteName, true);

    // Update Twitter Card tags
    updateMetaTag('twitter:card', twitterCard);
    updateMetaTag('twitter:title', twitterTitle);
    updateMetaTag('twitter:description', twitterDescription);
    updateMetaTag('twitter:image', twitterImage);
    updateMetaTag('twitter:image:alt', data.twitterImageAlt || twitterTitle);
    updateMetaTag('twitter:creator', twitterCreator);
  };

  return {
    updateSEO,
    generatePageTitle,
    generateCanonicalUrl,
  };
};

/**
 * Hook for managing meta tags without using Helmet component directly
 * Returns an object with methods to set individual meta tags
 * Useful when you need more control over specific tags
 */
export const useSEOMetaTags = () => {
  return {
    /**
     * Set a meta tag value
     * @param name - Meta tag name
     * @param content - Meta tag content
     */
    setMetaTag: (name: string, content: string) => {
      const element =
        document.querySelector(`meta[name="${name}"]`) ||
        document.createElement('meta');

      element.setAttribute('name', name);
      element.setAttribute('content', content);

      if (!element.parentElement) {
        document.head.appendChild(element);
      }
    },

    /**
     * Set Open Graph tag
     * @param property - OG property name
     * @param content - OG tag content
     */
    setOGTag: (property: string, content: string) => {
      const element =
        document.querySelector(`meta[property="${property}"]`) ||
        document.createElement('meta');

      element.setAttribute('property', property);
      element.setAttribute('content', content);

      if (!element.parentElement) {
        document.head.appendChild(element);
      }
    },

    /**
     * Set page title
     * @param title - Page title
     */
    setPageTitle: (title: string) => {
      document.title = generatePageTitle(title);
    },
  };
};

/**
 * Utility function to update SEO for dynamic pages
 * Use this outside of React components if needed
 * @param seoData - SEO configuration
 */
export const updatePageSEO = (seoData: ISEOData) => {
  const { setMetaTag, setOGTag, setPageTitle } = useSEOMetaTags();

  if (seoData.title) {
    setPageTitle(seoData.title);
  }

  if (seoData.description) {
    setMetaTag('description', seoData.description);
  }

  if (seoData.ogTitle) {
    setOGTag('og:title', seoData.ogTitle);
  }

  if (seoData.ogDescription) {
    setOGTag('og:description', seoData.ogDescription);
  }

  if (seoData.ogImage) {
    setOGTag('og:image', seoData.ogImage);
  }
};
