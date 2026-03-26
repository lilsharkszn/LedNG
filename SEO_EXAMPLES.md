# SEO Copy-Paste Examples

Quick examples for implementing SEO on different page types. Just copy and modify!

## 1. Static Page (About, Contact, Services)

```tsx
import type { FC } from 'react';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../config/seoConfig';

const About: FC = () => {
  return (
    <>
      <SEO
        title={SEO_CONFIG.pages.about.title}
        description={SEO_CONFIG.pages.about.description}
        image={SEO_CONFIG.pages.about.image}
        imageAlt="About TheLedNG"
        keywords={SEO_CONFIG.keywords.about}
        ogType="website"
      />

      {/* Page content */}
    </>
  );
};

export default About;
```

## 2. Homepage (With Multiple Schemas)

```tsx
import type { FC } from 'react';
import SEO from '../components/SEO';
import {
  getOrganizationSchema,
  getWebsiteSchema,
} from '../utils/schemaBuilder';
import { SEO_CONFIG } from '../config/seoConfig';

const Home: FC = () => {
  const schemas = [getOrganizationSchema(), getWebsiteSchema()];

  return (
    <>
      <SEO
        title={SEO_CONFIG.pages.home.title}
        description={SEO_CONFIG.pages.home.description}
        image={SEO_CONFIG.pages.home.image}
        imageAlt="TheLedNG - Music Platform"
        keywords={SEO_CONFIG.keywords.home}
        ogType="website"
        schemaList={schemas}
      />

      {/* Page content */}
    </>
  );
};

export default Home;
```

## 3. Product/Service Page (With Product Schema)

```tsx
import type { FC } from 'react';
import SEO from '../components/SEO';
import { getProductSchema } from '../utils/schemaBuilder';
import { SEO_CONFIG } from '../config/seoConfig';

const BeatStore: FC = () => {
  const schema = getProductSchema({
    name: 'TheLedNG Beat Store',
    description: 'Exclusive production credits and beats from THEWEIRDVIBE',
    image: SEO_CONFIG.pages.beatstore.image,
    url: SEO_CONFIG.canonicalBase + SEO_CONFIG.pages.beatstore.path,
    price: '0',  // Free or set price
    ratingValue: 4.5,
    reviewCount: 50,
  });

  return (
    <>
      <SEO
        title={SEO_CONFIG.pages.beatstore.title}
        description={SEO_CONFIG.pages.beatstore.description}
        image={SEO_CONFIG.pages.beatstore.image}
        imageAlt="Beat Store"
        schema={schema}
      />

      {/* Page content */}
    </>
  );
};

export default BeatStore;
```

## 4. Dynamic Page - Artist Profile

```tsx
import type { FC } from 'react';
import { useParams } from 'react-router-dom';
import SEO from '../components/SEO';
import { getMusicGroupSchema } from '../utils/schemaBuilder';
import { generateCanonicalUrl } from '../config/seoConfig';
import { ARTISTS, type Artist } from '../data/ArtistData';

const ArtistProfile: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const artist: Artist | undefined = ARTISTS.find((a) => a.slug === slug);

  if (!artist) return <div>Artist not found</div>;

  const schema = getMusicGroupSchema({
    name: artist.name,
    description: artist.bio || `Discover ${artist.name} on TheLedNG`,
    image: artist.image,
    url: generateCanonicalUrl(`/artist/${artist.slug}`),
    genre: artist.genre,
    sameAs: artist.socialLinks
      ? Object.values(artist.socialLinks).filter(
          link => typeof link === 'string' && link.startsWith('http'),
        ) as string[]
      : undefined,
  });

  return (
    <>
      <SEO
        title={artist.name}
        description={artist.bio || `Discover ${artist.name}`}
        image={artist.image}
        imageAlt={artist.name}
        keywords={[artist.name, artist.genre, 'artist', 'music']}
        schema={schema}
      />

      {/* Page content */}
    </>
  );
};

export default ArtistProfile;
```

## 5. Blog Article/News

```tsx
import type { FC } from 'react';
import SEO from '../components/SEO';
import { getArticleSchema } from '../utils/schemaBuilder';

const BlogPost: FC = () => {
  const article = {
    title: 'The Future of African Music',
    description: 'Exploring how African artists are changing global music...',
    image: '/blog-header.jpg',
    url: 'https://example.com/blog/african-music-future',
    datePublished: '2026-03-01',
    dateModified: '2026-03-26',
    author: 'TheLedNG Editorial',
  };

  const schema = getArticleSchema({
    headline: article.title,
    description: article.description,
    image: article.image,
    url: article.url,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: article.author,
  });

  return (
    <>
      <SEO
        title={article.title}
        description={article.description}
        image={article.image}
        imageAlt="Article cover"
        keywords={['African music', 'music industry', 'artists', 'global']}
        ogType="article"
        schema={schema}
      />

      <article>
        <h1>{article.title}</h1>
        {/* Article content */}
      </article>
    </>
  );
};

export default BlogPost;
```

## 6. Team Member / Person

```tsx
import type { FC } from 'react';
import SEO from '../components/SEO';
import { getPersonSchema } from '../utils/schemaBuilder';

const TeamMember: FC = () => {
  const member = {
    name: 'John Doe',
    title: 'Music Producer',
    bio: 'Experienced music producer specializing in Afrobeat...',
    image: '/john-doe.jpg',
    url: 'https://example.com/team/john-doe',
    social: [
      'https://instagram.com/johndoe',
      'https://twitter.com/johndoe',
    ],
  };

  const schema = getPersonSchema({
    name: member.name,
    description: member.bio,
    image: member.image,
    url: member.url,
    sameAs: member.social,
  });

  return (
    <>
      <SEO
        title={`${member.name} - ${member.title}`}
        description={member.bio}
        image={member.image}
        imageAlt={member.name}
        schema={schema}
      />

      <div className="team-member">
        <img src={member.image} alt={member.name} />
        <h1>{member.name}</h1>
        <p>{member.title}</p>
        <p>{member.bio}</p>
      </div>
    </>
  );
};

export default TeamMember;
```

## 7. Event / Concert Page

```tsx
import type { FC } from 'react';
import SEO from '../components/SEO';

const Event: FC = () => {
  const event = {
    title: 'TheLedNG Music Festival 2026',
    description: 'A celebration of African music and culture',
    image: '/festival-banner.jpg',
    url: 'https://example.com/events/festival-2026',
    startDate: '2026-06-15',
    endDate: '2026-06-17',
  };

  // JSON-LD Event schema
  const eventSchema = {
    '@context': 'https://schema.org',
    '@type': 'Event',
    name: event.title,
    description: event.description,
    image: event.image,
    startDate: event.startDate,
    endDate: event.endDate,
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    location: {
      '@type': 'Place',
      name: 'Lagos, Nigeria',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'NG',
        addressLocality: 'Lagos',
      },
    },
  };

  return (
    <>
      <SEO
        title={event.title}
        description={event.description}
        image={event.image}
        imageAlt="Event banner"
        keywords={['music festival', 'concert', 'African music', 'event']}
        ogType="website"
        schema={eventSchema}
      />

      <div className="event">
        <h1>{event.title}</h1>
        <p>{event.description}</p>
        <p>🗓️ {event.startDate} - {event.endDate}</p>
      </div>
    </>
  );
};

export default Event;
```

## 8. Multi-Schema Page (Homepage + Breadcrumb)

```tsx
import type { FC } from 'react';
import SEO from '../components/SEO';
import {
  getOrganizationSchema,
  getWebsiteSchema,
  getBreadcrumbSchema,
  getSchemaGraph,
} from '../utils/schemaBuilder';

const Home: FC = () => {
  const schemas = [
    getOrganizationSchema(),
    getWebsiteSchema(),
    getBreadcrumbSchema([
      { name: 'Home', url: 'https://example.com/' },
    ]),
  ];

  // Or use schema graph for complex multi-schema pages
  const graph = getSchemaGraph(schemas);

  return (
    <>
      <SEO
        title="TheLedNG - Music Platform"
        description="Discover African artists and access music production services"
        image="/logo.jpg"
        schemaList={schemas}
      />

      {/* Page content */}
    </>
  );
};

export default Home;
```

## 9. Custom/Advanced Page

```tsx
import type { FC } from 'react';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../config/seoConfig';

const CustomPage: FC = () => {
  // Custom schema if needed
  const customSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Music Video Title',
    description: 'Video description...',
    thumbnailUrl: '/thumbnail.jpg',
    uploadDate: '2026-03-26',
    duration: 'PT4M15S',
    contentUrl: 'https://example.com/video.mp4',
  };

  return (
    <>
      <SEO
        title="Custom Page Title"
        description="Custom page description for search results"
        image="/custom-image.jpg"
        imageAlt="Custom image alt text"
        keywords={['keyword1', 'keyword2', 'keyword3']}
        robots="index, follow"
        canonical={SEO_CONFIG.canonicalBase + '/custom-page'}
        ogType="website"
        schema={customSchema}
      />

      {/* Page content */}
    </>
  );
};

export default CustomPage;
```

## 🔑 Key Takeaways

1. **Always place `<SEO>` first** in your return statement
2. **Use config for static pages** to keep settings centralized
3. **Build schemas dynamically** for content from databases
4. **Test with validators** before deploying
5. **Update meta when content changes** (use to refetch in useEffect for dynamic pages)

## 📚 For More Examples

See these actual implementations in your codebase:
- Home: `src/pages/Home.tsx`
- About: `src/pages/About.tsx`
- Services: `src/pages/Services.tsx`
- ArtistProfile: `src/pages/ArtistProfile.tsx` (dynamic)
- BeatStore: `src/pages/BeatStore.tsx` (product)

Happy optimizing! 🚀
