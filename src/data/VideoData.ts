export interface VideoData {
  id: string;
  title: string;
  artist: string;
  youtubeId: string;
  thumbnailUrl: string;
  description?: string;
  releaseDate?: string;
}

export interface ArtistVideos {
  id: string;
  name: string;
  videos: VideoData[];
}

export const artistVideosData: ArtistVideos[] = [
  {
    id: "artist1",
    name: "SCOPE",
    videos: [
      {
        id: "scope_video1",
        title: "MEOW (Official Video)",
        artist: "SCOPE",
        youtubeId: "AXjYBdTAgWs",
        thumbnailUrl: "https://img.youtube.com/vi/AXjYBdTAgWs/maxresdefault.jpg",
        description: "Official music video for MEOW by SCOPE",
        releaseDate: "2025-01-20",
      },
      {
        id: "scope_video2",
        title: "Dorime",
        artist: "SCOPE",
        youtubeId: "rts7Y2AKXnU",
        thumbnailUrl: "https://img.youtube.com/vi/rts7Y2AKXnU/maxresdefault.jpg",
        description: "Viral music video for Dorime by SCOPE",
        releaseDate: "2024-11-10",
      },
    ],
  },
  {
    id: "artist2",
    name: "Jaydreamz",
    videos: [
      {
        id: "jay_video1",
        title: "Indianapolis (Visualizer)",
        artist: "Jaydreamz",
        youtubeId: "RQefxdFSXcw",
        thumbnailUrl: "https://img.youtube.com/vi/RQefxdFSXcw/hqdefault.jpg",
        description: "Official music video for Indianapolis",
        releaseDate: "2024-08-05",
      },
      {
        id: "jay_video2",
        title: "After 9",
        artist: "Jaydreamz",
        youtubeId: "EEdLM6-Wthk",
        thumbnailUrl: "https://img.youtube.com/vi/EEdLM6-Wthk/maxresdefault.jpg",
        description: "Music visualizer for After 9",
        releaseDate: "2025-06-10",
      },
    ],
  },
  {
    id: "artist3",
    name: "THEWEIRDVIBE",
    videos: [
      {
        id: "weird_video1",
        title: "Fire (Official Video)",
        artist: "THEWEIRDVIBE",
        youtubeId: "fBOQJHtBKrk",
        thumbnailUrl: "https://img.youtube.com/vi/fBOQJHtBKrk/maxresdefault.jpg",
        description: "Official music video for Fire",
        releaseDate: "2024-07-22",
      }
    ],
  },
  {
    id: "artist4",
    name: "Koshera",
    videos: [
      {
        id: "koshera_video1",
        title: "Koshera - Coming Home",
        artist: "Koshera",
        youtubeId: "8T1kAjx8iTo",
        thumbnailUrl: "https://img.youtube.com/vi/8T1kAjx8iTo/maxresdefault.jpg",
        description: "Music visualizer for Coming Home",
        releaseDate: "2025-09-18",
      },
      {
        id: "koshera_video2",
        title: "Koshera - Jabo",
        artist: "Koshera",
        youtubeId: "M8hpzUx1DgQ",
        thumbnailUrl: "https://img.youtube.com/vi/M8hpzUx1DgQ/maxresdefault.jpg",
        description: "Official music video for Jabo",
        releaseDate: "2025-12-08",
      },
    ],
  },
  {
    id: "artist5",
    name: "Calz",
    videos: [
      {
        id: "calz_video1",
        title: "Migraine (official music video)",
        artist: "Calz",
        youtubeId: "rlJg5hJYQ2c",
        thumbnailUrl: "https://img.youtube.com/vi/rlJg5hJYQ2c/maxresdefault.jpg",
        description: "Official music video for Migraine",
        releaseDate: "2024-04-12",
      }
    ],
  },
];
