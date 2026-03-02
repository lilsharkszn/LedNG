export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon?: string;
}

export const SERVICES: Service[] = [
    {
        id: 1,
        title: "Music Promotion",
        slug: "music-promotion",
        description: "Amplify your music's reach with our strategic promotion services, designed to connect your sound with the right audience and elevate your presence in the music industry.",
        icon: "🎵"
    },
    {
        id: 2,
        title: "Artist Development",
        slug: "artist-development",
        description: "Our artist development services are designed to nurture and grow your talent, providing the guidance and resources needed to reach your full potential in the music industry.",
        icon: "🎤"
    },
    {
        id: 3,
        title: "Music Production",
        slug: "music-production",
        description: "Our music production services help you create high-quality tracks that resonate with your audience and showcase your unique sound.",
        icon: "🎧"
    },
    {
        id: 4,
        title: "Music Distribution",
        slug: "music-distribution",
        description: "Our music distribution services ensure your tracks reach the right platforms and audiences, maximizing your music's impact and visibility.",
        icon: "📀"
    },
    {
        id: 5,
        title: "Branding & Marketing",
        slug: "branding-marketing",
        description: "Our branding and marketing services help you create a strong, memorable identity that resonates with your audience and sets you apart in the music industry.",
        icon: "📈"
    },
];