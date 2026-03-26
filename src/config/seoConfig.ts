/**
 * SEO Configuration for TheLedNG
 * Centralized SEO settings including:
 * - Site metadata (title, description, URL)
 * - Social media profiles
 * - Structured data (Schema.org/JSON-LD)
 * - Default Open Graph and Twitter Card settings
 */

export const SEO_CONFIG = {
  // Base site information
  site: {
    title: 'TheLedNG - Music Platform & Artist Network',
    shortTitle: 'TheLedNG',
    description:
      'Discover emerging Afrobeat artists, stream exclusive beats, and access music production services. TheLedNG connects artists with audiences globally.',
    url: 'https://theledng.com',
    baseUrl: 'https://theledng.com/',
    language: 'en',
    locale: 'en_US',
    charset: 'utf-8',
    image: '/logopng1-DYncLqgO.png', // Default OG image
    imageAlt: 'TheLedNG - Music Platform Logo',
  },

  // Social media profiles
  social: {
    instagram: 'https://www.instagram.com/theled.ng/',
    twitter: 'https://twitter.com/theled_ng',
    facebook: 'https://www.facebook.com/theled.ng',
    youtube: 'https://youtube.com/@theled.ng',
    tiktok: 'https://www.tiktok.com/@theled.ng',
  },

  // Organization structured data (JSON-LD)
  organization: {
    name: 'TheLedNG',
    alternateName: 'The Led NG',
    description:
      'Music platform connecting Afrobeat artists, producers, and music enthusiasts across Africa.',
    url: 'https://theledng.com/',
    logo: '/logopng1-DYncLqgO.png',
    image: '/logopng1-DYncLqgO.png',
    sameAs: [
      'https://www.instagram.com/theled.ng/',
      'https://twitter.com/theled_ng',
      'https://www.facebook.com/theled.ng',
      'https://youtube.com/@theled.ng',
    ],
    contact: {
      contactType: 'Customer Service',
      email: 'info@theled.ng',
      url: 'https://theledng.com/contact',
    },
  },

  // Page-specific SEO defaults
  pages: {
    home: {
      title: 'TheLedNG - Discover African Music Artists & Production Services',
      description:
        'Stream exclusive beats, discover emerging artists, and access professional music production services on TheLedNG.',
      path: '/',
      image: '/logopng1-DYncLqgO.png',
    },
    about: {
      title: 'About TheLedNG - Music Platform Mission & Vision',
      description:
        'Learn about TheLedNG mission to elevate African music globally through strategic artist partnerships and innovative digital solutions.',
      path: '/about',
      image: '/Studio-DrRwKn9x.jpg',
    },
    services: {
      title: 'Music Production Services - TheLedNG',
      description:
        'Professional music production, marketing, and artist development services. Work with experienced producers to take your music to the next level.',
      path: '/services',
      image: '/Studio-DrRwKn9x.jpg',
    },
    beatstore: {
      title: 'Beat Store - Exclusive Beats & Production Credits - TheLedNG',
      description:
        'Explore our curated collection of beats and production credits from THEWEIRDVIBE. Find the perfect sound for your next afrobeat, amapiano, hip-hop, pop, rnb project.',
      path: '/beat-store',
      image: '/logopng1-DYncLqgO.png',
    },
    contact: {
      title: 'Contact TheLedNG - Get in Touch',
      description:
        'Have questions about our services or want to collaborate? Contact TheLedNG directly through our contact form.',
      path: '/contact',
      image: '/Studio-DrRwKn9x.jpg',
    },
    artists: {
      title: 'Featured Artists - TheLedNG',
      description:
        'Discover our roster of talented African music artists including SCOPE, JAYDREAMZ, Calz, Koshera, and THEWEIRDVIBE.',
      path: '/artist/:slug',
      image: '/logopng1-DYncLqgO.png',
    },
  },

  // Keywords for SEO
  keywords: {
    site: [
      'African music',
      'music platform',
      'artist discovery',
      'music production',
      'beats',
      'music services',
      'emerging artists',
    ],
    home: [
      'music platform',
      'artist discovery',
      'streaming',
      'music production',
      'beats',
      'Nigerian music',
    ],
    about: ['about us', 'mission', 'vision', 'music platform', 'artist support'],
    services: ['music production', 'artist development', 'marketing', 'beats'],
  },

  // Open Graph defaults
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'TheLedNG',
  },

  // Twitter Card defaults
  twitterCard: {
    cardType: 'summary_large_image',
    creator: '@theled_ng',
  },

  // Canonical URL base
  canonicalBase: 'https://theledng.com',

  // Robots meta settings
  robots: {
    index: true,
    follow: true,
    maxSnippet: -1,
    maxImagePreview: 'large',
    maxVideoPreview: -1,
  },
};

/**
 * Generate full page title with site name
 * @param pageTitle - The page-specific title
 * @returns Full title with site name
 */
export const generatePageTitle = (pageTitle: string): string => {
  if (pageTitle.includes(SEO_CONFIG.site.shortTitle)) {
    return pageTitle;
  }
  return `${pageTitle} | ${SEO_CONFIG.site.shortTitle}`;
};

/**
 * Generate full canonical URL
 * @param path - The page path
 * @returns Full canonical URL
 */
export const generateCanonicalUrl = (path: string): string => {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${SEO_CONFIG.canonicalBase}${cleanPath}`;
};

/**
 * Get page-specific SEO data
 * @param pageKey - Key from pages object
 * @returns Page SEO configuration
 */
export const getPageSEO = (
  pageKey: keyof typeof SEO_CONFIG.pages,
) => {
  return SEO_CONFIG.pages[pageKey];
};
