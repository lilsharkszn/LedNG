import type { FC } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ARTISTS, type Artist } from "../data/ArtistData";
import { featuredArtistsData } from "../data/RecentReleasesData";
import { artistVideosData } from "../data/VideoData";
// @ts-ignore
import HomeIcon from "@mui/icons-material/Home";
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

  if (!artist) {
    return (
      <div className="artist-profile-not-found">
        <h2>Artist not found</h2>
        <button onClick={() => navigate("/")} className="back-button" title="Back to Home">
          <HomeIcon style={{ fontSize: "1.5rem" }} />
        </button>
      </div>
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
          <h1 className="artist-name-reel">{artist.name}</h1>

          {/* Social Links in Hero */}
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
      </section>

      {/* Main Content */}
      <div className="artist-profile-container">
        {/* Bio Section */}
        <section className="artist-bio-section">
          <p className="artist-bio-text">{artist.bio}</p>
        </section>

        {/* Music Section */}
        {artist.music.length > 0 && (
          <section className="artist-music-section">
            <div className="section-header">
              <h2>Music</h2>
            </div>
            <div className="music-grid">
              {artist.music.map((track) => {
                const coverImage = getCoverImage(artist.name, track.title);
                return (
                  <div key={track.id} className="music-card-wrapper">
                    <a
                      href={track.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="music-card"
                      style={{
                        backgroundImage: coverImage ? `url('${coverImage}')` : undefined,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <h3 className="music-title">{track.title}</h3>
                    <p className="music-artists">{track.artists.join(", ")}</p>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* Videos Section */}
        {artist.videos.length > 0 && (
          <section className="artist-videos-section">
            <div className="section-header">
              <h2>Videos</h2>
            </div>
            <div className="videos-grid">
              {artist.videos.map((video) => {
                const thumbnail = getVideoThumbnail(artist.name, video.title);
                const youtubeUrl = `https://www.youtube.com/watch?v=${video.youtubeId}`;
                return (
                  <div
                    key={video.id}
                    className="video-card-wrapper"
                    onClick={() => window.open(youtubeUrl, '_blank')}
                    style={{ cursor: 'pointer' }}
                  >
                    <div
                      className="video-card"
                      style={{
                        backgroundImage: thumbnail ? `url('${thumbnail}')` : undefined,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <h3 className="video-title">{video.title}</h3>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>

      {/* Back Button */}
      <div className="artist-profile-footer">
        <button onClick={() => navigate("/")} className="back-button" title="Back to Home">
          <HomeIcon style={{ fontSize: "1.5rem" }} />
        </button>
      </div>
    </div>
  );
};

export default ArtistProfile;
