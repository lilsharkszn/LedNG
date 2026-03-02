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
    image: "/src/assets/images/SCOPE.png",
    slug: "scope",
  },
 
    {
    id: 2,
    name: "Jaydreamz",
    genre: "Afro-Hop",
    image: "/src/assets/images/Jay.jpg",
    slug: "jaydreamz",
  },
  {
    id: 3,
    name: "Theweirdvibe",
    genre: "Afrobeat",
    image: "/src/assets/images/Weird2.jpg",
    slug: "theweirdvibe",
  },
  {
    id: 4,
    name: "Koshera",
    genre: "Afro-Pop",
    image: "/src/assets/images/Koshera.jpg",
    slug: "koshera",
  },
  {
    id: 5,
    name: "Calz",
    genre: "Afro-Pop",
    image: "/src/assets/images/Calz.png",
    slug: "calz",
  },
];
