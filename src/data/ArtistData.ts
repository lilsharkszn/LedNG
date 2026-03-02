import SCOPEImg from "../assets/images/scope2.jpg";
import JayImg from "../assets/images/Jay2.jpg";
import WeirdImg from "../assets/images/Weird2.jpg";
import KosheraImg from "../assets/images/Koshera2.jpg";
import CalzImg from "../assets/images/Calz2.jpg";

export interface Artist {
  id: number;
  name: string;
  genre: string;
  image: string;
  slug: string;
}

export const ARTISTS: Artist[] = [
   {
    id: 1,
    name: "SCOPE",
    genre: "Afro-Pop",
    image: SCOPEImg,
    slug: "scope",
  },
 
    {
    id: 2,
    name: "Jaydreamz",
    genre: "Afro-Hop",
    image: JayImg,
    slug: "jaydreamz",
  },
  {
    id: 3,
    name: "Theweirdvibe",
    genre: "Afrobeat",
    image: WeirdImg,
    slug: "theweirdvibe",
  },
  {
    id: 4,
    name: "Koshera",
    genre: "Afro-Pop",
    image: KosheraImg,
    slug: "koshera",
  },
  {
    id: 5,
    name: "Calz",
    genre: "Afro-Pop",
    image: CalzImg,
    slug: "calz",
  },
];
