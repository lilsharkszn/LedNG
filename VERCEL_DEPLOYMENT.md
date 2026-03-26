# 🚀 Vercel Deployment Guide - TheLedNG

This guide covers deploying the TheLedNG React + Vite application to Vercel with the custom domain `https://theledng.com`.

## ✅ Pre-Deployment Checklist

All the following have been completed:

### Domain Configuration
- ✅ Base URL updated to `https://theledng.com`
- ✅ Removed GitHub Pages path `/LedNG/` 
- ✅ All canonical URLs point to new domain
- ✅ SEO configuration uses new domain

### Build & Deployment Config
- ✅ Vite `base` changed to `/` (root path for root domain)
- ✅ `package.json` updated (removed gh-pages dependency)
- ✅ `vercel.json` created with proper rewrites and headers
- ✅ `.vercelignore` created to exclude unnecessary files
- ✅ Build command: `npm run build` (produces `dist/` folder)

### SEO & Crawlers
- ✅ `robots.txt` updated with correct domain
- ✅ `sitemap.xml` generated with all routes
- ✅ Canonical URLs configured for all pages
- ✅ Security headers configured in Vercel

### Code Quality
- ✅ No hardcoded `/LedNG/` paths remain
- ✅ All video sources use relative paths (`/v7.mp4`)
- ✅ Image paths updated (removed `/LedNG/` prefixes)
- ✅ Production build successful (985 modules, 6.68s)

---

## 🔧 Setup Instructions

### 1. Connect to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from project directory
vercel
```

### 2. Configure Vercel Project

When prompted:
- **Project name**: `theledng` (or your choice)
- **Root directory**: `./` (current)
- **Build command**: `npm run build`
- **Output directory**: `dist`
- **Install command**: (default is fine)

### 3. Add Custom Domain

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to **Settings → Domains**
4. Add `theledng.com`
5. Follow DNS configuration instructions
6. Add SSL certificate (automated by Vercel)

### 4. Configure DNS Records

Point your domain registrar to Vercel nameservers or add CNAME record:
- **For nameservers**: Use Vercel's provided nameservers
- **For CNAME**: `alias.vercel.com`

Check domain status should show as verified within minutes.

---

## 📋 Environment Deployment

### Development
```bash
npm run dev          # Start local dev server (http://localhost:5173)
```

### Production Build
```bash
npm run build        # Creates optimized dist/ folder
npm run preview      # Preview production build locally
```

### Deploy to Vercel
```bash
# Using Vercel CLI
vercel

# Or just push to connected Git repo (auto-deploys)
git push origin main
```

---

## 🔍 Post-Deployment Verification

### 1. Verify Site is Live
```bash
# Check homepage loads
curl -I https://theledng.com

# Should return 200 OK and HTML
```

### 2. Verify SEO Configuration

- [ ] Visit `https://theledng.com/robots.txt` - should see crawler rules
- [ ] Visit `https://theledng.com/sitemap.xml` - should see all URLs
- [ ] Check canonical URLs: Open DevTools → search for `<link rel="canonical"`
- [ ] Verify Open Graph tags in HTML: `og:url` should be `https://theledng.com`

### 3. Test All Routes

- [ ] `/` - Homepage
- [ ] `/about` - About page
- [ ] `/services` - Services  
- [ ] `/beat-store` - Beat store with video
- [ ] `/contact` - Contact form
- [ ] `/artist/scope` - Artist profile (dynamic route)
- [ ] `/artist/theweirdvibe` - Another artist
- [ ] `/404-fake` - 404 page should load (not 404 error)

### 4. Check Performance

```bash
# Using Google's PageSpeed Insights
https://pagespeed.web.dev/?url=https://theledng.com

# Should aim for:
# - Largest Contentful Paint (LCP) < 2.5s
# - Cumulative Layout Shift (CLS) < 0.1
# - First Input Delay (FID) < 100ms
```

### 5. Security Headers

Open DevTools Network tab and check response headers:
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `X-Frame-Options: DENY`
- [ ] `X-XSS-Protection: 1; mode=block`
- [ ] `Referrer-Policy: strict-origin-when-cross-origin`

---

## 📊 Search Engine Submission

### Google Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://theledng.com`
3. Verify ownership (upload HTML file or DNS record)
4. Submit sitemap: Go to **Sitemaps** → Add `sitemap.xml`
5. Submit URLs for indexing
6. Monitor search performance, crawl errors, and indexing status

### Bing Webmaster Tools

1. Go to [Bing Webmaster Tools](https://www.bing.com/webmaster)
2. Add site: `https://theledng.com`
3. Verify ownership
4. Submit `sitemap.xml`

### Microsoft Clarity (Analytics)

1. Create account at [Clarity](https://clarity.microsoft.com)
2. Add `theledng.com` property
3. Add tracking code to website (or use Vercel Analytics)

---

## 🐛 Troubleshooting

### Issue: Routes returning 404

**Solution**: Vercel rewrites are configured in `vercel.json`. All SPA routes fall back to `index.html`.

Verify in `vercel.json`:
```json
"rewrites": [
  {
    "source": "/:path((?!sitemap\\.xml$|robots\\.txt$|.*\\..*)/.*)*",
    "destination": "/index.html"
  }
]
```

### Issue: CSS/JS not loading

**Solution**: Check that Vite `base` is `/` (not `/LedNG/`). Done ✅

### Issue: Videos not playing

**Solution**: Video paths should be relative `/v7.mp4`. Done ✅

### Issue: SEO tags not rendering

**Solution**: React Helmet should render meta tags server-side. Vite serves pre-built HTML.

Verify in page source (View Page Source):
- `<meta property="og:url" content="https://theledng.com...">`
- `<link rel="canonical" href="https://theledng.com...">`

---

## 📝 Files Modified for Migration

### Configuration Files
- ✅ `vite.config.ts` - Changed `base` from `/LedNG/` to `/`
- ✅ `package.json` - Removed gh-pages, updated scripts
- ✅ `vercel.json` - Created (Vercel deployment config)
- ✅ `.vercelignore` - Created (deployment ignore file)

### SEO & Meta
- ✅ `src/config/seoConfig.ts` - Updated all URLs to `theledng.com`
- ✅ `public/robots.txt` - Updated domain and added crawl rules
- ✅ `public/sitemap.xml` - Created with all routes

### Source Code
- ✅ `src/pages/BeatStore.tsx` - Fixed video path from `/LedNG/v7.mp4` to `/v7.mp4`
- ✅ `scripts/generateSitemap.ts` - Updated for new domain (can be used in future)

---

## 🚀 Future Improvements

### Optional Enhancements

1. **Prerendering for Static Pages**
   ```bash
   npm install prerender-spa-plugin
   ```
   Prerender `/`, `/about`, `/services`, `/beat-store` for faster initial load

2. **Image Optimization**
   - Use `next/image` equivalent or implement lazy loading
   - Compress PNG/JPG images
   - Consider WebP format

3. **Caching Strategy**
   - Set long-term caching for assets (1 year)
   - Short caching for HTML (1 day)

4. **Monitoring**
   - Enable Vercel Analytics
   - Set up Sentry for error tracking
   - Monitor Core Web Vitals

5. **CI/CD Pipeline**
   - Auto-deploy on Git push
   - Run tests before deployment
   - Preview deployments for PRs

---

## 📞 Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **React Router SPA**: https://reactrouter.com/
- **Vite Docs**: https://vitejs.dev/
- **React Helmet**: https://github.com/nfl/react-helmet-async
- **SEO Best Practices**: https://developers.google.com/search

---

**Last Updated**: March 26, 2026  
**Status**: ✅ Production Ready
