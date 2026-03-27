export interface Release {
  id?: string;
  title: string;
  artist: string;
  coverUrl: string;
  releaseDate: string;
  platforms: {
    spotify?: string;
    apple?: string;
    youtube?: string;
    audiomack?: string;
    boomplay?: string;
  };
}

export interface FeaturedArtist {
  id: string;
  name: string;
  releases: Release[];
}

export const featuredArtistsData: FeaturedArtist[] = [
  {
    id: "artist6",
    name: "FreshieBoi",
    releases: [
      {
        id: "release1",
        title: "Echoes Within",
        artist: "FreshieBoi",
        coverUrl:
          "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a6/a3/1e/a6a31e0e-e6d5-59a0-0c47-cae32dd0dffa/656465084101_cover.jpg/632x632bb.webp",
        releaseDate: "2026-03-26",
        platforms: {
          spotify: "https://open.spotify.com/album/0lSfQqSw20o1kUqgcIi82p",
          apple:
            "https://music.apple.com/ng/album/echoes-within-single/1885552414",
          youtube:
            "https://www.youtube.com/playlist?list=OLAK5uy_kLETtKqZWAL-pYaC9zqbOPmEwFnc7FM1U",
          audiomack: "https://audiomack.com/Freshieboi",
        },
      },
    ],
  },

  {
    id: "artist0",
    name: "Jaydreamz",
    releases: [
      {
        id: "release1",
        title: "Eyan Baking Soda",
        artist: "Jaydreamz",
        coverUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdzxuKRQe7YJp3KOJI_hrbobGJ-9H-CC6KzA&s",
        releaseDate: "2025-02-07",
        platforms: {
          spotify: "https://open.spotify.com/album/2WYN3DAfAzeFOEKgKVAYYg",
          apple: "https://music.apple.com/us/album/eyan-baking-soda/1793802974",
          youtube:
            "https://music.youtube.com/search?q=Jaydreamz+Eyan+Baking+Soda",
          audiomack: "https://audiomack.com/jaydreamz1/song/eyan-baking-soda",
        },
      },
      {
        id: "release2",
        title: "Zolo",
        artist: "Jaydreamz",
        coverUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnxmGXEsrvxdCoJiQUt7jEfozicjkwjj-hxg&s",
        releaseDate: "2024-04-04",
        platforms: {
          spotify: "https://open.spotify.com/album/28wkTyUllcLFrIPeUFyBhF",
          apple: "https://music.apple.com/ng/song/zolo/1737501988",
          youtube:
            "https://music.youtube.com/watch?v=6UKUh7h9ULY&si=fGBlui1j47-Bu4FA",
          audiomack: "https://audiomack.com/jaydreamz1/song/zolo",
        },
      },
      {
        id: "release3",
        title: "After 9",
        artist: "Jaydreamz",
        coverUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSVX-SoKRrt8xw4xB6ZKSDX9bvUl6A0aXKHQ&s",
        releaseDate: "2023-11-03",
        platforms: {
          spotify:
            "https://open.spotify.com/track/1UVAnpwoEYhABXopviNdBP?si=597b75e7641a4ada",
          apple: "https://music.apple.com/us/album/after-9/1721171790",
          youtube:
            "https://music.youtube.com/watch?v=X8n8zt6vUyc&si=PH-E9rC0OTZKr5Hl",
          audiomack: "https://audiomack.com/jaydreamz1/song/after-9",
        },
      },
      {
        id: "release4",
        title: "Unruly",
        artist: "Jaydreamz",
        coverUrl:
          "https://i.scdn.co/image/ab67616d00001e02c7b3e9f42f8418972328665b",
        releaseDate: "2023-11-03",
        platforms: {
          spotify:
            "https://open.spotify.com/track/07F58Y2TVlnmukJh2TWVtx?si=3f33c80785854fc8",
          apple: "https://music.apple.com/us/album/after-9/1721171790",
          youtube: "https://music.youtube.com/watch?v=X8n8zt6vUyc",
          audiomack: "https://audiomack.com/jaydreamz1/song/jaydreamz-unruly",
        },
      },
    ],
  },
  {
    id: "artist1",
    name: "Guccio",
    releases: [
      {
        id: "release1",
        title: "Papilo",
        artist: "Calz ft Bhadboi OML",
        coverUrl:
          "data:image/jpeg;base64,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",
        releaseDate: "2024-06-07",
        platforms: {
          spotify:
            "https://open.spotify.com/track/0mNfoV0C0YPrBHjvnkold0?autoplay=true",
          apple:
            "https://music.apple.com/ng/album/papilo-feat-bhadboi-oml/1748163092",
          youtube: "https://music.youtube.com/watch?v=-Ih7blkDsUo",
          audiomack: "https://audiomack.com/guccioo/song/papilo",
        },
      },
    ],
  },

  {
    id: "artist2",
    name: "THEWEIRDVIBE",
    releases: [
      {
        id: "release1",
        title: "Like A Million",
        artist: "THEWEIRDVIBE",
        coverUrl:
          "https://scontent-los4-1.xx.fbcdn.net/v/t39.30808-6/544873311_1347870250675769_177933687109283484_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=7b2446&_nc_ohc=MxXb9FHAH4YQ7kNvwHtsTng&_nc_oc=AdpR2poFFKRNagWG_e-PzSfE7s3cInmBcXFToPBSc1uFSZRSaBOxcJWTpq04K_Du-N0&_nc_zt=23&_nc_ht=scontent-los4-1.xx&_nc_gid=yk92ik4l5m2aiX6vYKg3sQ&_nc_ss=7a30f&oh=00_AfwYQUFq-eqQ0loeuoroXoQM0tYmAPyJoJH49g6EhvolTw&oe=69C63963",
        releaseDate: "2025-09-10",
        platforms: {
          spotify:
            "https://open.spotify.com/track/6cx1FfwH6nAznS4zjSPS8k?si=d40bce484a3c4fe2",
          apple:
            "https://music.apple.com/us/album/like-a-million-single/1836497316",
          youtube:
            "https://music.youtube.com/watch?v=7fVxq3KAnys&si=dPndEdzIsFQpdwBn",
          audiomack: "https://audiomack.com/Theweirdvibe/song/like-a-million",
        },
      },
      {
        id: "release2",
        title: "Fire Remix",
        artist: "THEWEIRDVIBE",
        coverUrl:
          "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/69/c0/cd/69c0cd88-f443-07c6-e81a-84d90ea2e282/5063616150229_cover.jpg/3880x3880bb.webp",
        releaseDate: "2024-10-24",
        platforms: {
          spotify:
            "https://open.spotify.com/track/3YZaNurcWFvZNjAvCyU1LS?si=82975c892c8b4640",
          apple: "https://music.apple.com/ng/song/fire-remix/1773105834",
          youtube:
            "https://music.youtube.com/watch?v=XYwgbGVrYjA&si=L3F4amIacUKmp-mO",
          audiomack: "https://audiomack.com/Theweirdvibe/song/fire-remix",
        },
      },
      {
        id: "release3",
        title: "All My Money",
        artist: "THEWEIRDVIBE",
        coverUrl:
          "https://i.scdn.co/image/ab67616d00001e02d642e40415a1f2610bd3b814",
        releaseDate: "2024-05-17",
        platforms: {
          spotify:
            "https://open.spotify.com/track/0iLtlaoAUBxPd2bu9igcEO?si=58d9affd85a94a0c",
          apple: "https://music.apple.com/ng/song/all-my-money/1741801895",
          youtube:
            "https://music.youtube.com/watch?v=32EdC2bNvK8&si=hhIfLxsx_lpVDMpI",
          audiomack: "https://audiomack.com/Theweirdvibe/song/fire-remix",
        },
      },
      {
        id: "release4",
        title: "Designers",
        artist: "THEWEIRDVIBE",
        coverUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTseKEJudDJxKcyAzGNoD_R3kbEugbsAY3dwQ&s",
        releaseDate: "2024-05-17",
        platforms: {
          spotify:
            "https://open.spotify.com/track/5uwwZQInwnmChWgmvCwJIo?si=d057e34de8304863",
          apple: "https://music.apple.com/ng/song/designers/1661841711",
          youtube:
            "https://music.youtube.com/watch?v=s3xxwBJQyn0&si=24zd8ol1WWIC10yL",
          audiomack: "https://audiomack.com/Theweirdvibe/song/designers",
        },
      },
    ],
  },

  {
    id: "artist3",
    name: "Koshera",
    releases: [
      {
        id: "release1",
        title: "Coming Home",
        artist: "Koshera",
        coverUrl:
          "https://i.scdn.co/image/ab67616d00001e02545b14e19539c93751b8f728",
        releaseDate: "2025-07-31",
        platforms: {
          spotify:
            "https://open.spotify.com/album/4PvJVOiuIJ6ObiQaL8PPJX?si=r_8PMiO-Te6jtLH5Crfb9g",
          apple:
            "https://music.apple.com/us/album/coming-home-single/1827247873",
          youtube: "https://music.youtube.com/search?q=Koshera+Coming+Home",
          audiomack: "https://audiomack.com/kosheraaa/song/jabo/",
        },
      },
      {
        id: "release2",
        title: "Jabo",
        artist: "Koshera",
        coverUrl:
          "data:image/jpeg;base64,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",
        releaseDate: "2025-02-28",
        platforms: {
          spotify:
            "https://open.spotify.com/album/7LjOhvd5pEsjrgvmHb7RPw?si=V-xzEljxQVylViRcAnmgMw",
          apple: "https://music.apple.com/ec/album/jabo-single/1846841270",
          youtube:
            "https://music.youtube.com/watch?v=d8PEGYUngtM&feature=gws_kp_track",
          audiomack: "https://audiomack.com/kosheraaa/song/jabo/",
        },
      },
    ],
  },
  {
    id: "artist4",
    name: "Calz",
    releases: [
      {
        id: "release1",
        title: "3am In Ogba",
        artist: "Calz",
        coverUrl:
          "https://i.scdn.co/image/ab67616d00001e0226511f436ab3dae86cb908a1",
        releaseDate: "2025-02-01",
        platforms: {
          spotify:
            "https://open.spotify.com/track/2vMjTVWTJ8Rf2kv4zAq0oL?si=aef869f4a5de4797",
          apple:
            "https://music.apple.com/gb/album/3am-in-ogba-single/1867241606",
          youtube:
            "https://music.youtube.com/watch?v=aez84qdc2xs&si=QiAj8DE80uN27buM",
          audiomack: "https://audiomack.com/calz_cc/song/3am-in-ogba",
        },
      },
      {
        id: "release2",
        title: "Get Loose",
        artist: "Calz",
        coverUrl:
          "https://i.scdn.co/image/ab67616d00001e022c301a6f099136dadeca9d84",
        releaseDate: "2025-01-15",
        platforms: {
          spotify: "https://open.spotify.com/track/7faO599GoF6XNrg91cI801",
          apple: "https://music.apple.com/ng/song/1818384124",
          youtube:
            "https://music.youtube.com/watch?v=OjwQgBBjI2Q&si=cPFO7QdYrseUal9N",
          audiomack: "https://audiomack.com/calz_cc/song/get-loose",
        },
      },
      {
        id: "release3",
        title: "Trees And Vibes",
        artist: "Calz",
        coverUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhdvj-7rwVnFqh7-Y8m-mYQqSwg6GuUNbXPg&s",
        releaseDate: "2023-09-01",
        platforms: {
          spotify: "https://open.spotify.com/album/2edMqRx4424hWX4rkK7mG9",
          apple:
            "https://music.apple.com/us/album/trees-and-vibes-ep/1797754860",
          youtube: "https://music.youtube.com/search?q=Calz+Trees+And+Vibes",
          audiomack: "https://audiomack.com/calz_cc/album/trees-and-vibes-1",
        },
      },
    ],
  },
  {
    id: "artist5",
    name: "Scope",
    releases: [
      {
        id: "release1",
        title: "MEOW",
        artist: "Scope",
        coverUrl:
          "data:image/jpeg;base64,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",
        releaseDate: "2025-10-27",
        platforms: {
          spotify:
            "https://open.spotify.com/track/1uEYYFzidfwGVGWwQt4W5T?si=5659d4ae584747ac",
          apple:
            "https://music.apple.com/ng/album/meow-feat-qdot/1726608530?i=1726608531",
          youtube:
            "https://music.youtube.com/watch?v=PsmiLxZKh3A&feature=gws_kp_track",
          audiomack: "https://audiomack.com/Scope/song/meow",
        },
      },
      {
        id: "release2",
        title: "Son Of The Light - EP",
        artist: "Scope",
        coverUrl:
          "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/bf/82/98/bf82984c-fe56-8919-b4fe-af7b9722e287/199479412800-copy-7f0ee77c.png/632x632bb.webp",
        releaseDate: "2025-06-31",
        platforms: {
          spotify: "https://open.spotify.com/album/2ZsAmxM3XXFJwCPm5UYD5G",
          apple:
            "https://music.apple.com/ng/album/son-of-the-light-ep/1825816830",
          youtube:
            "https://music.youtube.com/playlist?list=OLAK5uy_kcpaNeMjsJqE2DfJu6MTZVAgRfW3O3-rc",
          audiomack: "https://audiomack.com/Scope/album/son-of-the-light-1",
        },
      },
      {
        id: "release3",
        title: "Sunmomi",
        artist: "Scope",
        coverUrl:
          "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/a7/52/3d/a7523df6-3f13-ed1d-5662-94f2f1e895c0/199041795119-copy-bb92f278.png/600x600bf-60.jpg",
        releaseDate: "2025-02-06",
        platforms: {
          spotify: "https://open.spotify.com/album/0DKvn69i4V6HCkev3eEQu0",
          apple: "https://music.apple.com/ng/album/sunmomi-single/1794670460",
          youtube:
            "https://music.youtube.com/watch?v=g6PQgPkinnQ&feature=gws_kp_track",
          audiomack: "https://audiomack.com/Scope/song/sunmomi",
        },
      },
      {
        id: "release4",
        title: "E Sure 4 You",
        artist: "Scope",
        coverUrl:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGPJdGIkdiXiR_DfKoQcUzdl7FJW6eDhEKvg&s",
        releaseDate: "2024-10-10",
        platforms: {
          spotify: "https://open.spotify.com/album/5LWL2bTe3hGlu9G0yUSf7w",
          apple:
            "https://music.apple.com/ng/album/e-sure-for-you-single/1771710581",
          youtube: "https://music.youtube.com/watch?v=cJytAygqQUQ",
          audiomack: "https://audiomack.com/Scope/song/e-sure-for-you",
        },
      },
    ],
  },
];
