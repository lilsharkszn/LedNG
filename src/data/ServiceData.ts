export interface Service {
  id: number;
  title: string;
  slug: string;
  description: string;
  iconName?: string;
  fullDescription?: string;
  features?: string[];
  benefits?: string[];
  process?: string[];
  expertise?: string[];
}

export const SERVICES: Service[] = [
    {
        id: 1,
        title: "Music Promotion",
        slug: "music-promotion",
        description: "Amplify your music's reach with our strategic promotion services, designed to connect your sound with the right audience and elevate your presence in the music industry.",
        iconName: "MusicNoteIcon",
        fullDescription: "Our music promotion services leverage data-driven strategies and industry connections to amplify your music's reach across multiple platforms. We create tailored promotion campaigns that align with your artistic vision and target your ideal audience.",
        features: [
          "Strategic playlist pitching to major DSPs",
          "Social media marketing campaigns",
          "Influencer collaborations and partnerships",
          "Press release distribution",
          "Radio promotion support",
          "Content optimization for maximum reach"
        ],
        benefits: [
          "Increased streaming numbers",
          "Expanded audience reach",
          "Enhanced brand visibility",
          "Stronger social media presence",
          "Industry connections and opportunities",
          "Measurable growth metrics"
        ],
        process: [
          "Initial consultation and strategy planning",
          "Audience analysis and targeting",
          "Campaign development and timeline",
          "Promotional execution across channels",
          "Performance monitoring and reporting",
          "Strategy optimization based on results"
        ],
        expertise: [
          "Playlist curation specialists",
          "Social media strategists",
          "Music industry analysts",
          "Digital marketing experts",
          "Partnership coordinators"
        ]
    },
    {
        id: 2,
        title: "Artist Development",
        slug: "artist-development",
        description: "Our artist development services are designed to nurture and grow your talent, providing the guidance and resources needed to reach your full potential in the music industry.",
        iconName: "PersonIcon",
        fullDescription: "We provide comprehensive artist development programs designed to grow your career from the ground up. Our team works closely with you to identify your strengths, refine your craft, and build a sustainable career in the music industry.",
        features: [
          "One-on-one mentorship and coaching",
          "Career roadmap planning",
          "Skill development workshops",
          "Performance training",
          "Personal branding strategy",
          "Industry navigation guidance"
        ],
        benefits: [
          "Personalized career direction",
          "Accelerated growth pathway",
          "Enhanced artistic skills",
          "Professional network access",
          "Industry opportunities",
          "Long-term career sustainability"
        ],
        process: [
          "Comprehensive artist assessment",
          "Goal setting and planning",
          "Skill evaluation and training",
          "Brand identity development",
          "Ongoing mentorship and support",
          "Regular progress reviews"
        ],
        expertise: [
          "Career coaches",
          "Music industry veterans",
          "Performance specialists",
          "Business advisors",
          "Brand strategists"
        ]
    },
    {
        id: 3,
        title: "Music Production",
        slug: "music-production",
        description: "Our music production services help you create high-quality tracks that resonate with your audience and showcase your unique sound.",
        iconName: "MicIcon",
        fullDescription: "From pre-production to final mastering, our production team delivers studio-quality tracks that bring your artistic vision to life. We combine technical expertise with creative insight to produce commercially viable music.",
        features: [
          "Beat production and instrumentals",
          "Recording and overdubs",
          "Mixing and mastering",
          "Production consultation",
          "Sound design and arrangement",
          "Vocal production and editing"
        ],
        benefits: [
          "Professional sound quality",
          "Unique sonic identity",
          "Quick turnaround times",
          "Collaboration opportunities",
          "Commercial viability",
          "Technical excellence"
        ],
        process: [
          "Creative briefing and concept development",
          "Pre-production planning",
          "Recording sessions",
          "Arrangement and composition",
          "Mixing process",
          "Final mastering and delivery"
        ],
        expertise: [
          "Music producers",
          "Sound engineers",
          "Mixing specialists",
          "Mastering engineers",
          "Arrangement specialists"
        ]
    },
    {
        id: 4,
        title: "Music Distribution",
        slug: "music-distribution",
        description: "Our music distribution services ensure your tracks reach the right platforms and audiences, maximizing your music's impact and visibility.",
        iconName: "PublicIcon",
        fullDescription: "We handle all aspects of music distribution, ensuring your tracks are available on every major streaming and selling platform worldwide. Our distribution network guarantees maximum reach and proper royalty collection.",
        features: [
          "Global DSP distribution",
          "Multi-platform availability",
          "Royalty management",
          "Real-time analytics and reporting",
          "Metadata optimization",
          "Rights management support"
        ],
        benefits: [
          "Worldwide availability",
          "Revenue optimization",
          "Simplified management",
          "Detailed performance insights",
          "Professional branding",
          "Timely royalty payments"
        ],
        process: [
          "Submission preparation",
          "Metadata and artwork optimization",
          "Platform submission and approval",
          "Release scheduling",
          "Performance monitoring",
          "Ongoing support and updates"
        ],
        expertise: [
          "Distribution specialists",
          "Rights administrators",
          "Data analysts",
          "Digital marketing experts",
          "Platform managers"
        ]
    },
    {
        id: 5,
        title: "Branding & Marketing",
        slug: "branding-marketing",
        description: "Our branding and marketing services help you create a strong, memorable identity that resonates with your audience and sets you apart in the music industry.",
        iconName: "CampaignIcon",
        fullDescription: "Build a compelling brand identity and reach your target audience with our comprehensive branding and marketing solutions. We create strategies that tell your story and connect you with fans across all platforms.",
        features: [
          "Brand identity development",
          "Visual design and assets",
          "Social media strategy",
          "Content creation and management",
          "Community engagement",
          "Campaign management"
        ],
        benefits: [
          "Strong brand recognition",
          "Audience loyalty building",
          "Consistent online presence",
          "Authentic fan connections",
          "Market differentiation",
          "Sustainable growth"
        ],
        process: [
          "Brand discovery and research",
          "Visual identity creation",
          "Social strategy development",
          "Content calendar planning",
          "Campaign execution",
          "Performance analysis and optimization"
        ],
        expertise: [
          "Brand strategists",
          "Graphic designers",
          "Social media managers",
          "Content creators",
          "Community managers"
        ]
    },
];