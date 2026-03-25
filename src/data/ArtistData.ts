import SCOPEImg from "../assets/images/scope2.jpg";
import JayImg from "../assets/images/Jay2.jpg";
import WeirdImg from "../assets/images/Weird2.jpg";
import KosheraImg from "../assets/images/Koshera2.jpg";
import CalzImg from "../assets/images/Calz2.jpg";

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
    bio: "SCOPE is a talented Afro-Pop artist known for his innovative sound and dynamic performances. With hits like 'MEOW' and 'Son Of The Light', SCOPE has established himself as a rising force in the African music scene.",
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
    bio: "JAYDREAMZ is an innovative Afro-Hop artist bringing fresh energy to the genre. Known for collaborations and smooth delivery, JAYDREAMZ continues to push creative boundaries with each release.",
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
    bio: "THEWEIRDVIBE stands out with a unique blend of Afrobeat and experimental production. Known for versatility and genre-blending tracks, THEWEIRDVIBE continues to captivate listeners worldwide.",
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
    bio: "KOSHERA brings soulful melodies and emotional depth to Afro-Pop. With a commitment to authentic storytelling and top-tier production, KOSHERA is redefining contemporary African music.",
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
    bio: "CALZ is an emerging Afro-Pop talent bringing fresh perspectives and authentic sounds to the music scene. With a passion for creative expression, CALZ is carving out a unique space in contemporary music.",
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
      },
      {
        id: "calz2",
        title: "Get Loose",
        artists: ["CALZ"],
        link: "https://bridgemusic.lnk.to/GetLoose",
      },
    ],
    videos: [
      {
        id: "calz_v1",
        title: "Migraine (official music video)",
        youtubeId: "rlJg5hJYQ2c",
        releaseDate: "2025-09-15",
      },
    ],
  },
];
