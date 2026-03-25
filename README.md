# TheLedNG - Music Platform

A modern web application for discovering and connecting with artists, exploring music releases, and accessing music production services. Built with React, TypeScript, and Vite for a fast, responsive experience.

## Features

- **Artist Showcase**: Browse and discover featured artists with detailed profiles
- **Recent Releases**: Stay updated with the latest music releases
- **Beat Store**: Browse and purchase high-quality music beats
- **Services**: Explore music production and artist development services
- **Artist Profiles**: View detailed information about individual artists
- **Spotify Integration**: Connect with Spotify for enhanced music discovery
- **Responsive Design**: Fully optimized for desktop and mobile devices
- **Dynamic Styling**: Color-adaptive UI based on album artwork and images

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd TheLedNG
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/       # Reusable React components
│   ├── ArtistCards.tsx
│   ├── Carousel.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   └── ...
├── pages/           # Main application pages
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── BeatStore.tsx
│   ├── Contact.tsx
│   └── ArtistProfile.tsx
├── data/            # Static data files
│   ├── ArtistData.ts
│   ├── RecentReleasesData.ts
│   ├── ServiceData.ts
│   └── VideoData.ts
├── hooks/           # Custom React hooks
│   └── useDominantColor.ts
├── utils/           # Utility functions
└── styles/          # Global styles
```

## Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the application for production
- `npm run preview` - Preview the built application locally
- `npm run lint` - Run ESLint to check code quality

## Technology Stack

- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **CSS3** - Styling with responsive design
- **Spotify API** - Music data integration (see SPOTIFY_INTEGRATION_GUIDE.md)

## Configuration

### Spotify Integration

For Spotify API integration setup, refer to [SPOTIFY_INTEGRATION_GUIDE.md](./SPOTIFY_INTEGRATION_GUIDE.md).

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
