import type { FC } from "react";
import { useNavigate } from "react-router-dom";
// @ts-ignore
import HomeIcon from "@mui/icons-material/Home";
// @ts-ignore
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Box, Typography } from "@mui/material";
import "./BeatStore.css";

const BeatStore: FC = () => {
  const navigate = useNavigate();

  const handleVideoError = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    console.error("Video error:", video.error?.message);
    console.log("Video source:", video.querySelector('source')?.src);
  };

  const handleVideoCanPlay = () => {
    console.log("Video loaded successfully");
  };

  return (
    <div className="beat-store-container">
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
        <source src="/LedNG/v7.mp4" type="video/mp4" />
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
