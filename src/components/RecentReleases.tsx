import type { FC } from "react";
import { useState, useEffect, useCallback } from "react";
import { useSwipeable } from "react-swipeable";
import { featuredArtistsData, type Release } from "../data/RecentReleasesData";
import "./RecentReleases.css";

interface ReleaseBoxProps {
  release: Release;
}

const ReleaseBox: FC<ReleaseBoxProps> = ({ release }) => {
  const handlePlatformClick = (url: string | undefined) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="release-box">
      <img src={release.coverUrl} alt={release.title} className="release-image" />
      <div className="release-overlay">
        <div className="spotify-info">
          <h4>{release.title}</h4>
          <p className="release-artist-only">{release.artist}</p>
          <div className="platform-links">
            {release.platforms?.spotify && (
              <button
                className="platform-button"
                onClick={() => handlePlatformClick(release.platforms.spotify)}
                title="Spotify"
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVYcmCniDwINpsMInuhq3rRAftCD2LvfZGTA&s"
                  alt="Spotify"
                  className="platform-icon spotify-logo"
                />
                <span className="platform-name">Spotify</span>
              </button>
            )}
            {release.platforms?.apple && (
              <button
                className="platform-button"
                onClick={() => handlePlatformClick(release.platforms.apple)}
                title="Apple Music"
              >
                <img
                  src="https://1000logos.net/wp-content/uploads/2023/01/Apple-Music-Emblem.png"
                  alt="Apple Music"
                  className="platform-icon apple-logo"
                />
                <span className="platform-name">Apple</span>
              </button>
            )}
            {release.platforms?.youtube && (
              <button
                className="platform-button"
                onClick={() => handlePlatformClick(release.platforms.youtube)}
                title="YouTube"
              >
                <img
                  src="https://www.pngall.com/wp-content/uploads/15/Youtube-Music-Logo-PNG.png"
                  alt="YouTube"
                  className="platform-icon youtube-logo"
                />
                <span className="platform-name">YouTube</span>
              </button>
            )}
            {release.platforms?.audiomack && (
              <button
                className="platform-button"
                onClick={() => handlePlatformClick(release.platforms.audiomack)}
                title="AudioMack"
              >
                <img
                  src="https://styleguide.audiomack.com/assets/images/logos/stacked-black.png"
                  alt="AudioMack"
                  className="platform-icon audiomack-logo"
                />
                <span className="platform-name">AudioMack</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface RecentReleasesCardProps {
  artist: (typeof featuredArtistsData)[0];
  gridReleases: Release[];
}

const RecentReleasesCard: FC<RecentReleasesCardProps> = ({ artist, gridReleases }) => {
  return (
    <div>
      <div className="featured-header">
        <h2>Featured Releases</h2>
        <p className="featured-artist-name">{artist.name}</p>
        <p className="swipe-hint">← LedCograpghy → </p>
      </div>
      <div className="releases-grid fade-in">
        {gridReleases.map((release, index) => (
          <ReleaseBox key={`${release.id || release.title}-${index}`} release={release} />
        ))}
      </div>
    </div>
  );
};

const RecentReleases: FC = () => {
  const [currentArtistIndex, setCurrentArtistIndex] = useState(0);
  const [gridReleases, setGridReleases] = useState<Release[]>([]);

  // Function to get 4 randomized releases from artist
  const getGridReleases = useCallback((releases: Release[]): Release[] => {
    if (releases.length === 0) return [];

    // Create an array of empty slots (up to 4)
    const gridSize = Math.min(4, releases.length);
    const shuffled = [...releases].sort(() => Math.random() - 0.5);

    // Take the first gridSize releases from shuffled array
    return shuffled.slice(0, gridSize);
  }, []);

  // Initialize grid releases on mount and when artist changes
  useEffect(() => {
    const newReleases = getGridReleases(featuredArtistsData[currentArtistIndex].releases);
    setGridReleases(newReleases);
  }, [currentArtistIndex, getGridReleases]);

  // Shuffle releases every 10 seconds
  useEffect(() => {
    const shuffleInterval = setInterval(() => {
      const newReleases = getGridReleases(featuredArtistsData[currentArtistIndex].releases);
      setGridReleases(newReleases);
    }, 10000);

    return () => clearInterval(shuffleInterval);
  }, [currentArtistIndex, getGridReleases]);

  // Auto-advance to next artist every 30 seconds
  useEffect(() => {
    const autoAdvanceInterval = setInterval(() => {
      setCurrentArtistIndex((prev) => (prev + 1) % featuredArtistsData.length);
    }, 30000);

    return () => clearInterval(autoAdvanceInterval);
  }, []);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setCurrentArtistIndex((prev) => (prev + 1) % featuredArtistsData.length);
    },
    onSwipedRight: () => {
      setCurrentArtistIndex((prev) => 
        prev === 0 ? featuredArtistsData.length - 1 : prev - 1
      );
    },
    trackMouse: true,
    delta: 50,
  });

  const handleDotClick = (index: number) => {
    setCurrentArtistIndex(index);
  };

  const currentArtist = featuredArtistsData[currentArtistIndex];

  return (
    <section className="featured-releases-section" {...handlers}>
      <div className="featured-releases-container">
        <RecentReleasesCard artist={currentArtist} gridReleases={gridReleases} />

        {/* Pagination Dots */}
        <div className="pagination">
          {featuredArtistsData.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === currentArtistIndex ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentReleases;
