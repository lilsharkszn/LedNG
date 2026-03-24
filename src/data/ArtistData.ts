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
}

export interface Video {
  id: string;
  title: string;
  youtubeId: string;
  thumbnailUrl?: string;
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
        link: "https://open.spotify.com/track/placeholder",
      },
      {
        id: "scope2",
        title: "Son Of The Light - EP",
        artists: ["SCOPE"],
        link: "https://open.spotify.com/album/placeholder",
      },
      {
        id: "scope3",
        title: "Sunmomi",
        artists: ["SCOPE"],
        link: "https://open.spotify.com/track/placeholder",
      },
    ],
    videos: [
      {
        id: "scope_v1",
        title: "MEOW (Official Video)",
        youtubeId: "AXjYBdTAgWs",
      },
      {
        id: "scope_v2",
        title: "Dorime",
        youtubeId: "rts7Y2AKXnU",
      },
    ],
  },
  {
    id: 2,
    name: "Jaydreamz",
    genre: "Afro-Hop",
    image: JayImg,
    slug: "jaydreamz",
    bio: "Jaydreamz is an innovative Afro-Hop artist bringing fresh energy to the genre. Known for collaborations and smooth delivery, Jaydreamz continues to push creative boundaries with each release.",
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
        artists: ["Jaydreamz"],
        link: "https://open.spotify.com/track/placeholder",
      },
      {
        id: "jay2",
        title: "After 9",
        artists: ["Jaydreamz"],
        link: "https://open.spotify.com/track/placeholder",
      },
    ],
    videos: [
      {
        id: "jay_v1",
        title: "Indianapolis (Visualizer)",
        youtubeId: "RQefxdFSXcw",
      },
      {
        id: "jay_v2",
        title: "After 9",
        youtubeId: "EEdLM6-Wthk",
      },
    ],
  },
  {
    id: 3,
    name: "THEWEIRDVIBE",
    genre: "Afrobeat",
    image: WeirdImg,
    slug: "theweirdvibe",
    bio: "THEWEIRDVIBE stands out with a unique blend of Afrobeat and experimental production. Known for versatility and genre-blending tracks, the artist continues to captivate listeners worldwide.",
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
      },
      {
        id: "weird2",
        title: "Fire Remix",
        artists: ["THEWEIRDVIBE"],
        link: "https://open.spotify.com/track/placeholder",
      },
      {
        id: "weird3",
        title: "All My Money",
        artists: ["THEWEIRDVIBE"],
        link: "https://open.spotify.com/track/placeholder",
      },
    ],
    videos: [
      {
        id: "weird_v1",
        title: "Fire (Official Video)",
        youtubeId: "fBOQJHtBKrk",
      },
    ],
  },
  {
    id: 4,
    name: "Koshera",
    genre: "Afro-Pop",
    image: KosheraImg,
    slug: "koshera",
    bio: "Koshera brings soulful melodies and emotional depth to Afro-Pop. With a commitment to authentic storytelling and top-tier production, Koshera is redefining contemporary African music.",
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
        artists: ["Koshera"],
        link: "https://ffm.to/cominghomebykoshera",
      },
            {
        id: "kosh1",
        title: "Jabo",
        artists: ["Koshera"],
        link: "https://ffm.to/cominghomebykoshera",
      },
    ],
    videos: [
      {
        id: "kosh_v1",
        title: "Koshera - Coming Home",
        youtubeId: "8T1kAjx8iTo",
      },
      {
        id: "kosh_v2",
        title: "Koshera - Jabo",
        youtubeId: "M8hpzUx1DgQ",
      },
    ],
  },
  {
    id: 5,
    name: "Calz",
    genre: "Afro-Pop",
    image: CalzImg,
    slug: "calz",
    bio: "Calz is an emerging Afro-Pop talent bringing fresh perspectives and authentic sounds to the music scene. With a passion for creative expression, Calz is carving out a unique space in contemporary music.",
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
        artists: ["Calz"],
        link: "https://bridgemusic.lnk.to/3aminOgba",
      },
      {
        id: "calz2",
        title: "Get Loose",
        artists: ["Calz"],
        link: "https://bridgemusic.lnk.to/GetLoose",
      },
    ],
    videos: [
      {
        id: "calz_v1",
        title: "Migraine (official music video)",
        youtubeId: "rlJg5hJYQ2c",
      },
    ],
  },
];
