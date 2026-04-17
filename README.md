# LedNG – Official Website

[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://theledng.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

**Live Site**: [https://theledng.com](https://theledng.com)

## 📖 About the Project

**LedNG** is the official digital home for **The LedNG**, a forward-thinking Nigerian music platform and creative collective. The website showcases:

- Emerging Afrobeat, Amapiano, Hip-Hop, and R&B artists
- Exclusive beats available for purchase/streaming
- Professional music production and artist development services
- Distribution partnerships (Bridge Music, Scoop Universal, etc.)

The platform highlights the vibrant energy of new Nigerian music while providing a sleek, fast, and highly optimized online experience for fans, artists, and industry partners.

### Key Features

- **Modern Single Page Application (SPA)** built with React + TypeScript
- **Excellent SEO** with comprehensive meta tags, Open Graph, Twitter Cards, and rich JSON-LD structured data (Organization, Person, MusicGroup, Product)
- **Responsive design** with mobile-first approach and touch-friendly carousel
- **Fast performance** powered by Vite
- **Hash-based routing** (compatible with static hosting and Vercel)
- **Static mock data** for artists, recent releases, services, and videos
- **Production-ready** deployment configuration for Vercel (with security headers, SPA fallback, and caching)

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM v6 (HashRouter)
- **Styling**: CSS Modules + vanilla CSS + Material-UI (@mui/material) for icons
- **SEO**: react-helmet-async + custom schema builder
- **Deployment**: Vercel (with `vercel.json` for SPA routing)
- **Linting**: ESLint

## 📁 Project Structure

```bash
LedNG/
├── public/                  # Static assets (favicons, images, etc.)
├── src/
│   ├── assets/              # Images, videos, fonts
│   ├── components/          # Reusable UI components (Header, Footer, Carousel, Cards, etc.)
│   ├── config/              # seoConfig.ts, constants
│   ├── data/                # Static data (artists, releases, services, videos)
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Route-based pages (Home, About, BeatStore, ArtistProfile, etc.)
│   ├── styles/              # Global and page-specific CSS
│   ├── utils/               # scrollUtils.ts, schemaBuilder.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── AppRoutes.tsx
├── scripts/                 # Build & sitemap scripts
├── .vercelignore
├── vercel.json
├── vite.config.ts
├── package.json
├── tsconfig*.json
└── Multiple .md documentation files (SEO, Deployment, Migration, etc.)


🛠️ Installation & Local Development

Prerequisites

• Node.js (v18 or higher recommended)
• npm or yarn

Steps

1. Clone the repository
git clone https://github.com/lilsharkszn/LedNG.git
cd LedNG


2. Install dependencies
npm install

3. Run the development server
npm run dev

The app will be available at http://localhost:5173 (or the port shown in terminal).

4. Build for production
npm run build

5. Preview the production build
npm run preview

📦 Available Scripts

"scripts": {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
}

🚀 Deployment

The project is fully optimized for Vercel:

• Automatic deployments on git push
• SPA routing configured in vercel.json
• Security headers and caching rules included
• Custom domain support (theledng.com)

See VERCEL_DEPLOYMENT.md and DEPLOYMENT_READY.md for detailed instructions.

Previous hosting: Originally deployed on GitHub Pages (subpath) and fully migrated to Vercel on March 26, 2026 for better performance and root-domain support.

🔍 SEO Implementation
This project features one of the most comprehensive SEO setups for a React SPA:

• Centralized seoConfig.ts
• Page-specific meta titles, descriptions, keywords, and images
• Open Graph + Twitter Card support
• JSON-LD structured data (via schemaBuilder.ts)
• Canonical URLs, robots meta, and sitemap readiness

Detailed guides are available in:

• SEO_IMPLEMENTATION_GUIDE.md
• SEO_SETUP_COMPLETE.md
• SEO_EXAMPLES.md

🎨 Design & Branding
The website reflects the vibrant, energetic, and professional vibe of contemporary Nigerian music culture. It uses:

• Bold typography
• High-quality studio and artist photography
• Smooth animations and swipeable hero carousel
• Clean card-based layouts for artists, services, and beats

📄 Documentation

Additional documentation files included in the repo:

• MIGRATION_SUMMARY.md – Details of the • • • GitHub Pages → Vercel migration
• QUICK_REFERENCE.md – Quick commands and config reference
• DEPLOYMENT_READY.md, VERCEL_DEPLOYMENT.md
• Multiple SEO-focused guides


📬 Contact
Website: https://theledng.com
Instagram: @theled.ng
Email: jare@theledng.com

Built with ❤️ for the culture.
Made for The LedNG – Keeping the attention up.

