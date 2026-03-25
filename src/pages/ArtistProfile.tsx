import type { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ARTISTS, type Artist } from "../data/ArtistData";
import { featuredArtistsData } from "../data/RecentReleasesData";
import { artistVideosData } from "../data/VideoData";
import { useDominantColor } from "../hooks/useDominantColor";
// @ts-ignore
import HomeIcon from "@mui/icons-material/Home";
// @ts-ignore
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Button, Box, Typography, Card, Fab, Chip } from "@mui/material";
import "./ArtistProfile.css";

const ArtistProfile: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const artist: Artist | undefined = ARTISTS.find((a) => a.slug === slug);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Function to get cover image from RecentReleasesData
  const getCoverImage = (artistName: string, trackTitle: string): string | undefined => {
    const featuredArtist = featuredArtistsData.find(
      (fa) => fa.name.toLowerCase() === artistName.toLowerCase()
    );
    
    if (featuredArtist) {
      const release = featuredArtist.releases.find(
        (r) => r.title.toLowerCase().includes(trackTitle.toLowerCase()) || 
               trackTitle.toLowerCase().includes(r.title.toLowerCase())
      );
      return release?.coverUrl;
    }
    return undefined;
  };

  // Function to get video thumbnail from VideoData
  const getVideoThumbnail = (artistName: string, videoTitle: string): string | undefined => {
    const artistVideos = artistVideosData.find(
      (av) => av.name.toLowerCase() === artistName.toLowerCase()
    );
    
    if (artistVideos) {
      const video = artistVideos.videos.find(
        (v) => v.title.toLowerCase().includes(videoTitle.toLowerCase()) || 
               videoTitle.toLowerCase().includes(v.title.toLowerCase())
      );
      return video?.thumbnailUrl;
    }
    return undefined;
  };

  // Function to check if a release is within the last 6 months
  const isRecentRelease = (releaseDate?: string): boolean => {
    if (!releaseDate) return false;
    
    const release = new Date(releaseDate);
    const today = new Date();
    const sixMonthsAgo = new Date(today.getFullYear(), today.getMonth() - 6, today.getDate());
    
    return release >= sixMonthsAgo && release <= today;
  };

  if (!artist) {
    return (
      <Box className="artist-profile-not-found">
        <Typography variant="h3" component="h2" sx={{ marginBottom: "2rem", fontWeight: 700 }}>
          Artist not found
        </Typography>
        <Button
          onClick={() => navigate("/")}
          className="back-button"
          title="Back to Home"
          sx={{
            padding: "0.4rem",
            minWidth: "2.5rem",
            height: "2.5rem",
            backgroundColor: "#5DADE2",
            color: "#ffffff",
            border: "1px solid #5DADE2",
            borderRadius: "4px",
            "&:hover": {
              backgroundColor: "#3498DB",
              borderColor: "#3498DB",
              color: "white",
            },
          }}
        >
          <HomeIcon style={{ fontSize: "1.5rem" }} />
        </Button>
      </Box>
    );
  }

  return (
    <div className="artist-profile">
      <section className="artist-reel-profile">
        <div className="reel-container">
          <img
            src={artist.image}
            alt={artist.name}
            className="reel-image"
          />
          <Typography
            variant="h1"
            component="h1"
            className="artist-name-reel"
            sx={{
              fontSize: { xs: "1.5rem", sm: "1.8rem", md: "2.2rem", lg: "3rem", xl: "3.5rem" },
              fontWeight: 700,
              color: "white",
              textAlign: "center",
              margin: 0,
              letterSpacing: "1px",
              lineHeight: 1.2,
              wordBreak: "break-word",
              position: "relative",
              zIndex: 2,
              textShadow: "0 2px 10px rgba(0, 0, 0, 0.6)",
              fontFamily: "'Montserrat', 'Manrope', sans-serif",
              fontStyle: "normal",
              textTransform: "uppercase",
            }}
          >
            {artist.name}
          </Typography>

          {/* Social Links in Hero - Mobile Only */}
          <div className="artist-social-links artist-social-links-hero">
            {artist.socialLinks.instagram && (
              <a
                href={artist.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Instagram"
              >
                <img src="https://www.svgrepo.com/show/520798/instagram.svg" alt="Instagram" className="social-icon instagram-icon" />
              </a>
            )}
            {artist.socialLinks.twitter && (
              <a
                href={artist.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="X"
              >
                <img src="https://www.svgrepo.com/show/519928/twitter.svg" alt="X" className="social-icon x-icon" />
              </a>
            )}
            {artist.socialLinks.tiktok && (
              <a
                href={artist.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="TikTok"
              >
                <img src="https://www.svgrepo.com/show/504994/tiktok.svg" alt="TikTok" className="social-icon tiktok-icon" />
              </a>
            )}
            {artist.socialLinks.facebook && (
              <a
                href={artist.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Facebook"
              >
                <img src="https://www.svgrepo.com/show/520728/facebook.svg" alt="Facebook" className="social-icon facebook-icon" />
              </a>
            )}
            {artist.socialLinks.youtube && (
              <a
                href={artist.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="YouTube"
              >
                <img src="https://www.svgrepo.com/show/293072/youtube.svg" alt="YouTube" className="social-icon youtube-icon" />
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="artist-profile-container">
        {/* Social Links Below Profile Image - Desktop Only */}
        <div className="artist-social-links-section artist-social-links-desktop" style={{ display: "none" }}>
          <div className="artist-social-links">
            {artist.socialLinks.instagram && (
              <a
                href={artist.socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Instagram"
              >
                <img src="https://www.svgrepo.com/show/520798/instagram.svg" alt="Instagram" className="social-icon instagram-icon" />
              </a>
            )}
            {artist.socialLinks.twitter && (
              <a
                href={artist.socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="X"
              >
                <img src="https://www.svgrepo.com/show/519928/twitter.svg" alt="X" className="social-icon x-icon" />
              </a>
            )}
            {artist.socialLinks.tiktok && (
              <a
                href={artist.socialLinks.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="TikTok"
              >
                <img src="https://www.svgrepo.com/show/504994/tiktok.svg" alt="TikTok" className="social-icon tiktok-icon" />
              </a>
            )}
            {artist.socialLinks.facebook && (
              <a
                href={artist.socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="Facebook"
              >
                <img src="https://www.svgrepo.com/show/520728/facebook.svg" alt="Facebook" className="social-icon facebook-icon" />
              </a>
            )}
            {artist.socialLinks.youtube && (
              <a
                href={artist.socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title="YouTube"
              >
                <img src="https://www.svgrepo.com/show/293072/youtube.svg" alt="YouTube" className="social-icon youtube-icon" />
              </a>
            )}
          </div>
        </div>

        {/* Bio Section */}
        <section className="artist-bio-section">
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "0.95rem", sm: "1rem", md: "1.1rem" },
              lineHeight: 1.8,
              color: "#e0e0e0",
              margin: "2rem 0",
              fontWeight: 400,
              textAlign: "justify",
            }}
          >
            {artist.bio}
          </Typography>
          
          {/* Beat Store Link - Only for THEWEIRDVIBE (id: 3) */}
          {artist.id === 3 && (
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: "1.5rem", gap: "0.5rem" }}>
              <Fab
                onClick={() => navigate("/beat-store")}
                size="small"
                sx={{
                  background: "#757575",
                  color: "#ffffff",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.2)",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    background: "#616161",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
                    transform: "translateY(-2px)",
                  },
                  "&:active": {
                    transform: "translateY(0)",
                  },
                }}
              >
                <StorefrontIcon sx={{ fontSize: "1.2rem" }} />
              </Fab>
              <Typography
                variant="caption"
                sx={{
                  fontSize: "0.75rem",
                  color: "#b0b0b0",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  textAlign: "center",
                }}
              >
                Visit TWV Beat Stores
              </Typography>
            </Box>
          )}
        </section>

        {/* Music Section */}
        {artist.music.length > 0 && (
          <section className="artist-music-section">
            <Box className="section-header">
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: 0,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  textAlign: "left",
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                }}
              >
                Music
              </Typography>
            </Box>
            <div className="music-grid">
              {artist.music.map((track) => {
                const coverImage = getCoverImage(artist.name, track.title);
                // eslint-disable-next-line react-hooks/rules-of-hooks
                const dominantColor = useDominantColor(coverImage);
                return (
                  <Box key={track.id} className="music-card-wrapper" sx={{ position: "relative" }}>
                    <Card
                      component="a"
                      href={track.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="music-card"
                      sx={{
                        position: "relative",
                        aspectRatio: "1",
                        borderRadius: "12px",
                        overflow: "hidden",
                        cursor: "pointer",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                        backgroundColor: "#1a1a1a",
                        textDecoration: "none",
                        color: "inherit",
                        display: "block",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: coverImage ? `url('${coverImage}')` : undefined,
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5))",
                          opacity: 1,
                          transition: "opacity 0.3s ease",
                          zIndex: 1,
                        },
                        "&:hover": {
                          boxShadow: "0 12px 35px rgba(196, 30, 58, 0.3)",
                          zIndex: 10,
                          transform: "scale(0.95)",
                          "&::before": {
                            background: "linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))",
                            opacity: 1,
                          },
                        },
                      }}
                    />
                    {isRecentRelease(track.releaseDate) && (
                      <Chip
                        label="NEW"
                        size="small"
                        sx={{
                          position: "absolute",
                          top: "0.6rem",
                          right: "0.6rem",
                          zIndex: 10,
                          background: `linear-gradient(135deg, ${dominantColor} 0%, ${dominantColor} 100%)`,
                          color: "#ffffff",
                          fontWeight: 900,
                          fontSize: "0.4rem",
                          height: "auto",
                          padding: "0.15rem 0.45rem",
                          letterSpacing: "0.5px",
                          boxShadow: `0 3px 12px ${dominantColor}66`,
                          borderRadius: "4px",
                          fontFamily: "'Montserrat', 'Manrope', sans-serif",
                        }}
                      />
                    )}
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.8rem" },
                        fontWeight: 700,
                        color: "#ffffff",
                        margin: 0,
                        textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                        maxWidth: "100%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        lineHeight: 1.2,
                      }}
                    >
                      {track.title}
                    </Typography>
                  </Box>
                );
              })}
            </div>
          </section>
        )}

        {/* Videos Section */}
        {artist.videos.length > 0 && (
          <section className="artist-videos-section">
            <Box className="section-header">
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  color: "#ffffff",
                  margin: 0,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  textAlign: "left",
                  fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
                }}
              >
                Videos
              </Typography>
            </Box>
            <div className="videos-grid">
              {artist.videos.map((video) => {
                const thumbnail = getVideoThumbnail(artist.name, video.title);
                const youtubeUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;
                return (
                  <Box
                    key={video.id}
                    className="video-card-wrapper"
                    onClick={() => window.open(youtubeUrl, '_blank')}
                    sx={{ cursor: "pointer", transition: "transform 0.3s ease", position: "relative", "&:hover": { transform: "translateY(-4px)" } }}
                  >
                    <Card
                      className="video-card"
                      sx={{
                        position: "relative",
                        aspectRatio: "16 / 9",
                        borderRadius: "12px",
                        overflow: "hidden",
                        backgroundColor: "#1a1a1a",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        cursor: "pointer",
                        width: "100%",
                        display: "block",
                        backgroundImage: thumbnail ? `url('${thumbnail}')` : undefined,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(135deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.5))",
                          opacity: 1,
                          transition: "opacity 0.3s ease",
                          zIndex: 1,
                        },
                        "&:hover": {
                          boxShadow: "0 12px 35px rgba(196, 30, 58, 0.3)",
                          zIndex: 10,
                          transform: "scale(0.95)",
                          "&::before": {
                            background: "linear-gradient(135deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7))",
                            opacity: 1,
                          },
                        },
                      }}
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.8rem" },
                        fontWeight: 700,
                        color: "#ffffff",
                        margin: 0,
                        textShadow: "0 2px 8px rgba(0, 0, 0, 0.5)",
                        maxWidth: "100%",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: "vertical",
                        lineHeight: 1.2,
                      }}
                    >
                      {video.title}
                    </Typography>
                  </Box>
                );
              })}
            </div>
          </section>
        )}
      </div>

      {/* Back Button */}
      <Box className="artist-profile-footer">
        <Button
          onClick={() => navigate("/")}
          className="back-button"
          title="Back to Home"
          sx={{
            padding: "0.4rem",
            minWidth: "2.5rem",
            height: "2.5rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, rgba(196, 30, 58, 0.1) 0%, rgba(196, 30, 58, 0.05) 100%)",
            border: "2px solid #c41e3a",
            color: "#c41e3a",
            borderRadius: "12px",
            backdropFilter: "blur(5px)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              background: "linear-gradient(135deg, #c41e3a 0%, #a01830 100%)",
              borderColor: "#a01830",
              color: "white",
              transform: "translateY(-3px)",
              boxShadow: "0 8px 20px rgba(196, 30, 58, 0.3)",
            },
            "&:active": {
              transform: "translateY(-1px)",
            },
          }}
        >
          <HomeIcon style={{ fontSize: "1.5rem" }} />
        </Button>
      </Box>
    </div>
  );
};

export default ArtistProfile;
