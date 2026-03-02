import type { FC as ReactFC } from "react";
import { ARTISTS, type Artist } from "../data/ArtistData";
import { Link } from "react-router-dom";
import { useMemo } from "react";
import "./ArtistCards.css";

const ArtistCards: ReactFC = () => {
  const artists = useMemo(() => ARTISTS, []);

  return (
    <section className="artist-section">
      <h2>Featured Artists</h2>
      <div className="artist-grid">
        {artists.map((artist: Artist) => (
          <article className="artist-card" key={artist.id}>
            <div className="artist-card-image-wrapper">
              <img
                src={artist.image}
                alt={artist.name}
                className="artist-card-image"
              />
              <span className="artist-genre-tag">{artist.genre}</span>
            </div>

            <div className="artist-card-info">
              <h3 className="artist-name">{artist.name}</h3>
              <Link
                className="artist-profile-link"
                to={`/artists/${artist.slug}`}
              >
                View Profile →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ArtistCards;
