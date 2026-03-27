import SCOPEImg from "../assets/images/scope2.jpg";
import JayImg from "../assets/images/jay2.jpg";
import WeirdImg from "../assets/images/Weird2.jpg";
import KosheraImg from "../assets/images/koshera2.jpg";
import CalzImg from "../assets/images/calz2.jpg";

export interface Track {
  id: string;
  title: string;
  artists: string[];
  link: string;
  coverUrl?: string;
  releaseDate?: string; // Format: YYYY-MM-DD
}

export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  thumbnailUrl?: string;
  releaseDate?: string; // Format: YYYY-MM-DD
}

export interface Artist {
  id: number;
  name: string;
  genre: string;
  image: string;
  slug: string;
  bio: string;
  hasBeatStore?: boolean;
  socialLinks: {
    instagram?: string;
    twitter?: string;
    tiktok?: string;
    facebook?: string;
    youtube?: string;
  };
  music: Track[];
  videos: Video[];
}

export const ARTISTS: Artist[] = [
  {
    id: 1,
    name: "SCOPE",
    genre: "Afro-Pop",
    image: SCOPEImg,
    slug: "scope",
    bio: "Scope the Entertainer, real name Babalola Babatunde, also listed as Babalola Kareem Babatunde, is a Nigerian singer songwriter actor and entrepreneur who presents himself as a full spectrum performer and blends afro fusion, fuji, afrobeats, and afro pop into a flexible street rooted sound. He first drew wider attention with the 2020 single Zombie, and he has continued building his profile with projects that reflect everyday stories, performance energy, and crossover appeal, including the 2023 EP Sound From the New Street.\n\nHis most recent releases, based on Apple Music, include Meow Speed Up Mix released November 27, 2025, and Meow featuring Qdot released in January 2024. Apple Music also lists a 2025 EP titled Son Of The Light alongside singles like Sunmomi, showing his recent run has focused on both short form singles and tighter project drops.",
    socialLinks: {
      instagram: "https://www.instagram.com/iamscope_official",
      twitter: "https://x.com/iamscope_Scope",
      tiktok: "https://www.tiktok.com/iamscope_official",
      facebook: "https://www.facebook.com/share/18UT44swDj",
      youtube: "https://youtube.com/@scopetheentertainer",
    },
    music: [
      {
        id: "scope1",
        title: "MEOW",
        artists: ["SCOPE"],
        link: "https://music.apple.com/ng/album/meow-single/1825816829",
        releaseDate: "2026-03-15",
      },
      {
        id: "scope2",
        title: "Son Of The Light - EP",
        artists: ["SCOPE"],
        link: "https://music.apple.com/ng/album/son-of-the-light-ep/1825816830",
        releaseDate: "2025-10-20",
      },
      {
        id: "scope3",
        title: "Sunmomi",
        artists: ["SCOPE"],
        link: "https://music.apple.com/ng/album/sunmomi-single/1794670460",
        releaseDate: "2025-04-10",
      },
    ],
    videos: [
      {
        id: "scope_v1",
        title: "MEOW (Official Video)",
        youtubeId: "AXjYBdTAgWs",
        releaseDate: "2026-03-10",
      },
      {
        id: "scope_v2",
        title: "Dorime",
        youtubeId: "rts7Y2AKXnU",
        releaseDate: "2025-08-20",
      },
    ],
  },
  {
    id: 2,
    name: "JAYDREAMZ",
    genre: "Afro-Hop",
    image: JayImg,
    slug: "jaydreamz",
    bio: "Jaydreamz is a Nigerian recording artist whose music sits at the intersection of Hip Hop, alternative rap, and Afrobeats, driven by expressive writing and a street grounded but melodic sound. His public footprint is strongest through streaming platform releases and collaborations, where he is steadily building recognition with a growing catalog of singles and a 2025 project that broadened his audience.\n\nIn his recent run, he has been active across both solo releases and features. Apple Music lists his latest release as Halle, released September 19, 2025, a collaboration with imlsingsong and Dj Spark Fire. His 2025 work also includes Indianapolis featuring Seyi Vibez, with THEWEIRDVIBE credited as producer, and Eyan Baking Soda, which appears as both a song and a 2025 album release. Earlier releases that help define his developing identity include Unruly from 2023, Zolo from 2024, and songs like Kosoro, which show his blend of lyrical focus and Afro influenced rhythms.",
    socialLinks: {
      instagram: "https://www.instagram.com/official_jaydreamz",
      twitter: "https://x.com/official_jaydreamz",
      tiktok: "https://x.com/jaydreamzmakana",
      facebook: "https://www.facebook.com/share/1agwB8eURH/",
      youtube: "https://youtube.com/jaydreamzmusic4716",
    },
    music: [
      {
        id: "jay1",
        title: "Eyan Baking Soda",
        artists: ["JAYDREAMZ"],
        link: "https://music.apple.com/ng/album/eyan-baking-soda/1793802974",
        releaseDate: "2026-02-05",
      },
      {
        id: "jay2",
        title: "After 9",
        artists: ["JAYDREAMZ"],
        link: "https://music.apple.com/ng/artist/jaydreamz/1514839050",
        releaseDate: "2024-06-15",
      },
    ],
    videos: [
      {
        id: "jay_v1",
        title: "Indianapolis (Visualizer)",
        youtubeId: "RQefxdFSXcw",
        releaseDate: "2026-02-01",
      },
      {
        id: "jay_v2",
        title: "After 9",
        youtubeId: "EEdLM6-Wthk",
        releaseDate: "2025-06-10",
      },
    ],
  },
  {
    id: 3,
    name: "THEWEIRDVIBE",
    genre: "Afrobeat",
    image: WeirdImg,
    slug: "theweirdvibe",
    bio: "THEWEIRDVIBE, Adejare Hassan, is an emerging Nigerian artist and producer, known for blending Afrobeats, Hip Hop, and R&B with a bold, street-leaning global sound. His music stands out for its rhythmic drive, melodic richness, and clean modern production, whether he is performing or building records behind the scenes.\n\nAs an artist, he has released singles like Like A Million and All My Money, highlighting his versatility and hook writing instinct. As a producer, he is developing a strong catalog with notable credits including Papilo by Guccio featuring BhadBoi OML, Indianapolis by Jaydreamz featuring Seyi Vibez, and Life by Otega and Jaido P. Overall, he is positioning himself as a next-gen Nigerian sonic innovator focused on originality, genre exploration, and global reach.",
    hasBeatStore: true,
    socialLinks: {
      instagram: "https://www.instagram.com/theweirdvibe",
      twitter: "https://x.com/Theweirdvibe",
      tiktok: "https://www.tiktok.com/_theweirdvibe",
      facebook: "https://www.facebook.com/share/18YDet8ccd/",
      youtube: "https://youtube.com/adejare_szn",
    },
    music: [
      {
        id: "weird1",
        title: "Like A Million",
        artists: ["THEWEIRDVIBE"],
        link: "https://bridgemusic.lnk.to/Likeamillion",
        releaseDate: "2026-01-30",
      },
      {
        id: "weird2",
        title: "Fire Remix",
        artists: ["THEWEIRDVIBE"],
        link: "https://music.apple.com/ng/album/fire-remix-single/1773105829",
        releaseDate: "2025-11-12",
      },
      {
        id: "weird3",
        title: "All My Money",
        artists: ["THEWEIRDVIBE"],
        link: "https://music.apple.com/ng/song/all-my-money/1741801895",
        releaseDate: "2024-03-20",
      },
    ],
    videos: [
      {
        id: "weird_v1",
        title: "Fire (Official Video)",
        youtubeId: "fBOQJHtBKrk",
        releaseDate: "2025-11-05",
      },
    ],
  },
  {
    id: 4,
    name: "KOSHERA",
    genre: "Afro-Pop",
    image: KosheraImg,
    slug: "koshera",
    bio: "Koshera is an Afrobeats and Afropop artist whose name is presented as meaning priceless, and his sound leans into a mix of upbeat Afro rhythms and Afro soul style melodies. His writing is centered on love, life, and personal experiences, and his releases aim for emotional connection while still fitting modern dance ready Afrobeats.\n\nIn his most recent run of music, his 2025 output includes singles such as Soso, Coming Home, Sweet Tea, Jabo, and collaborations like Veronica with D£JAVU and Samkul, showing steady momentum and a growing catalog across streaming platforms. Alongside releases, he is also building his live profile, including performances in Canada and headlining his own shows, positioning him as a rising act with an expanding audience.",
    socialLinks: {
      instagram: "https://www.instagram.com/kosheraaa",
      twitter: "https://x.com/Kosheraaa",
      tiktok: "https://www.tiktok.com/kosheraaa",
      facebook: "https://www.facebook.com/share/1GGrNQ3PzM/",
      youtube: "https://youtube.com/channel/UCBSlhUiB4s8AGGF9uMkao3A",
    },
    music: [
      {
        id: "kosh1",
        title: "Coming Home",
        artists: ["KOSHERA"],
        link: "https://ffm.to/cominghomebykoshera",
        releaseDate: "2026-02-14",
      },
            {
        id: "kosh2",
        title: "Jabo",
        artists: ["KOSHERA"],
        link: "https://music.apple.com/ng/album/jabo/1846841270?i=1846841272",
        releaseDate: "2025-12-08",
      },
    ],
    videos: [
      {
        id: "kosh_v1",
        title: "KOSHERA - Coming Home",
        youtubeId: "8T1kAjx8iTo",
        releaseDate: "2026-02-14",
      },
      {
        id: "kosh_v2",
        title: "KOSHERA - Jabo",
        youtubeId: "M8hpzUx1DgQ",
        releaseDate: "2025-12-08",
      },
    ],
  },
  {
    id: 5,
    name: "CALZ",
    genre: "Afro-Pop",
    image: CalzImg,
    slug: "calz",
    bio: "Calz_cc is a Nigerian music artist whose sound sits in Afrobeats with a wider global influence, balancing rhythmic, dance ready production with contemporary songwriting. His catalog includes singles like Get Loose, Migraine, Believer, Bad Days, JO, and Tule, plus a broader body of work that appears on projects such as Trees and Vibes.\\n\\nIn terms of recent activity, his latest releases include the single 3Am in Ogba released January 30, 2026, following 2025 output like Get Loose and tracks connected to the Trees and Vibes era such as JO and Believer. Overall, he is building a steady release run that blends Nigerian roots with modern, worldwide leaning sound choices.",
    socialLinks: {
      instagram: "https://www.instagram.com/calz_cc",
      twitter: "https://x.com/calz_cc",
      tiktok: "https://www.tiktok.com/@calz_cc",
      facebook: "https://www.facebook.com/share/17vMhthnSE/",
      youtube: "https://www.youtube.com/channel/UCQpfI1yrpT5Xej8gZF67uJg",
    },
    music: [
      {
        id: "calz1",
        title: "3am In Ogba",
        artists: ["CALZ"],
        link: "https://bridgemusic.lnk.to/3aminOgba",
        releaseDate: "2026-01-30"
      },
      {
        id: "calz2",
        title: "Get Loose",
        artists: ["CALZ"],
        link: "https://bridgemusic.lnk.to/GetLoose",
        releaseDate: "2025-06-13"
      },
    ],
    videos: [
      {
        id: "calz_v1",
        title: "Migraine (official music video)",
        youtubeId: "rlJg5hJYQ2c",
        releaseDate: "2023-09-01",
      },
    ],
  },
];
