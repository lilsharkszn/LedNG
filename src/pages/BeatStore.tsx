import type { FC } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import { getProductSchema } from "../utils/schemaBuilder";
import { SEO_CONFIG } from "../config/seoConfig";
// @ts-ignore
import HomeIcon from "@mui/icons-material/Home";
// @ts-ignore
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Box, Typography } from "@mui/material";
import "./BeatStore.css";

const BeatStore: FC = () => {
  const navigate = useNavigate();

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    console.error("Video error:", video.error?.message);
  };

  const handleVideoCanPlay = () => {
    // Video successfully loaded
  };

  // Prepare schema for beat store (product collection)
  const beatStoreSchema = getProductSchema({
    name: 'TheLedNG Beat Store',
    description: 'Exclusive production credits and beats from THEWEIRDVIBE',
    image: SEO_CONFIG.pages.beatstore.image,
    url: SEO_CONFIG.canonicalBase + SEO_CONFIG.pages.beatstore.path,
  });

  return (
    <div className="beat-store-container">
      {/* SEO Meta Tags & Structured Data */}
      <SEO
        title={SEO_CONFIG.pages.beatstore.title}
        description={SEO_CONFIG.pages.beatstore.description}
        image={SEO_CONFIG.pages.beatstore.image}
        imageAlt="Beat Store"
        schema={beatStoreSchema}
      />

      {/* Video Background */}
      <video 
        className="beat-store-video" 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
        onError={handleVideoError}
        onCanPlay={handleVideoCanPlay}
      >
        <source src="/v7.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Background Overlay */}
      <div className="beat-store-overlay"></div>

      <div className="beat-store-content">
        <h1 className="beat-store-title">Beat Store</h1>
        <Box
          className="beat-store-icon"
          sx={{
            fontSize: "2rem",
            color: "#757575",
            animation: "rotateFloat 4s ease-in-out infinite",
          }}
        >
          <MusicNoteIcon sx={{ fontSize: "inherit" }} />
        </Box>
        <Typography
          className="beat-store-message"
          sx={{
            fontSize: "1.1rem",
            background: "linear-gradient(135deg, #c41e3a 0%, #ff6b6b 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontWeight: 600,
            margin: "0.75rem 0 1rem",
            letterSpacing: "0.5px",
            fontFamily: "'Montserrat', 'Manrope', sans-serif",
            textTransform: "uppercase",
          }}
        >
          Check Back Later, Beat Library Updating
        </Typography>
        <p className="beat-store-description">
          Exclusive beats and production services from THEWEIRDVIBE
        </p>
      </div>

      {/* Spotify Playlist Embed */}
      <div className="spotify-embed-container">
        <h2 className="spotify-embed-title">Credits</h2>
        <iframe
          title="Featured Spotify Playlist"
          style={{
            borderRadius: "12px",
            width: "100%",
            height: "352px",
          }}
          src="https://open.spotify.com/embed/playlist/3FqsXmcjADfEF0yNcp6fDJ?utm_source=generator&theme=0"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </div>

      {/* Back Button */}
      <div className="beat-store-footer">
        <button onClick={() => navigate("/")} className="back-button" title="Back to Home">
          <HomeIcon style={{ fontSize: "1.5rem" }} />
        </button>
      </div>
    </div>
  );
};

export default BeatStore;
