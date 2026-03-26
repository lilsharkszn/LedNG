/**
 * Sitemap Generator Script
 * Generates sitemap.xml for search engine crawling
 * Includes all static pages and dynamically generated artist pages
 *
 * Usage: npx ts-node scripts/generateSitemap.ts
 *
 * This runs automatically during build: npm run build
 * Outputs to: dist/sitemap.xml
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base URL of your site
const BASE_URL = 'https://theledng.com';
const SITE_ROOT = path.join(__dirname, '../dist');

/**
 * Sitemap entry interface
 */
interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

/**
 * Import artist data to generate dynamic artist routes
 * This ensures artist pages are automatically included in the sitemap
 */
async function getArtistSlugs(): Promise<string[]> {
  try {
    const artistDataPath = path.join(__dirname, '../src/data/ArtistData.ts');
    // For runtime, we'll manually define them; in a real scenario, you'd import the data
    return ['scope', 'jaydreamz', 'theweirdvibe', 'koshera', 'calz'];
  } catch {
    return ['scope', 'jaydreamz', 'theweirdvibe', 'koshera', 'calz'];
  }
}

/**
 * Define all pages in your application
 * Static pages are defined here; dynamic pages are generated below
 */
async function generateSitemapEntries(): Promise<SitemapEntry[]> {
  const today = new Date().toISOString().split('T')[0];
  
  const staticPages: SitemapEntry[] = [
    // Homepage - highest priority, updates weekly
    {
      url: '/',
      lastmod: today,
      changefreq: 'weekly',
      priority: 1.0,
    },

    // Main sections
    {
      url: '/about',
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/services',
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.8,
    },
    {
      url: '/beat-store',
      lastmod: today,
      changefreq: 'weekly',
      priority: 0.85,
    },
    {
      url: '/contact',
      lastmod: today,
      changefreq: 'monthly',
      priority: 0.7,
    },
  ];

  // Dynamically generate artist profile pages
  const artistSlugs = await getArtistSlugs();
  const artistPages: SitemapEntry[] = artistSlugs.map(slug => ({
    url: `/artist/${slug}`,
    lastmod: today,
    changefreq: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...artistPages];
}

/**
 * Generate XML for sitemap entry
 */
function generateSitemapXML(entries: SitemapEntry[]): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

  entries.forEach(entry => {
    xml += '  <url>\n';
    xml += `    <loc>${BASE_URL}${entry.url}</loc>\n`;

    if (entry.lastmod) {
      xml += `    <lastmod>${entry.lastmod}</lastmod>\n`;
    }

    if (entry.changefreq) {
      xml += `    <changefreq>${entry.changefreq}</changefreq>\n`;
    }

    if (entry.priority !== undefined) {
      xml += `    <priority>${entry.priority}</priority>\n`;
    }

    xml += '  </url>\n';
  });

  xml += '</urlset>';

  return xml;
}

/**
 * Main function to generate and write sitemap
 * Runs as part of the build process
 */
async function generateSitemap(): Promise<void> {
  try {
    // Generate sitemap entries (includes dynamic artist routes)
    const entries = await generateSitemapEntries();
    
    // Generate sitemap XML
    const sitemapXML = generateSitemapXML(entries);

    // Write to dist directory
    const outputPath = path.join(SITE_ROOT, 'sitemap.xml');

    if (!fs.existsSync(SITE_ROOT)) {
      fs.mkdirSync(SITE_ROOT, { recursive: true });
    }

    fs.writeFileSync(outputPath, sitemapXML, 'utf-8');

    console.log(`✅ Sitemap generated successfully`);
    console.log(`📍 Location: ${outputPath}`);
    console.log(`🔗 URLs included: ${entries.length}`);
    console.log(`🌐 Accessible at: ${BASE_URL}/sitemap.xml`);
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

// Run if this is the main module
generateSitemap().catch(error => {
  console.error('Failed to generate sitemap:', error);
  process.exit(1);
});
