import type { FC as ReactFC } from "react";
import { SERVICES } from "../data/ServiceData";
import { Link } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
// @ts-ignore
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./ServiceCards.css";

/**
 * ServiceCards Component
 * 
 * Displays a carousel of services with rotating background videos
 * - Auto-rotates between service cards every 10 seconds
 * - Cycles through background videos sequentially
 * - Starts with a random video on each page load
 */
const ServiceCards: ReactFC = () => {
  const services = useMemo(() => SERVICES, []);
  const [index, setIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);

  /**
   * All background video files stored in public folder
   * Videos are named v1.mp4 through v6.mp4
   */
  const allVideos = [
    `${import.meta.env.BASE_URL}v1.mp4`,
    `${import.meta.env.BASE_URL}v2.mp4`,
    `${import.meta.env.BASE_URL}v3.mp4`,
    `${import.meta.env.BASE_URL}v4.mp4`,
    `${import.meta.env.BASE_URL}v5.mp4`,
    `${import.meta.env.BASE_URL}v6.mp4`,
  ];

  const currentVideoPath = allVideos[videoIndex];

  /**
   * Initialize with a random video on component mount
   * This ensures each page load starts with a different video
   */
  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * allVideos.length);
    setVideoIndex(randomIndex);
  }, []);

  /**
   * Advance to the next video when current one finishes
   * Loops back to start after the last video
   */
  const handleVideoEnd = (): void => {
    setVideoIndex((prevIndex) => (prevIndex + 1) % allVideos.length);
  };

  /**
   * Move to the next service in the carousel
   */
  const handleNextService = (): void => {
    setIndex((prevIndex) => (prevIndex + 1) % services.length);
  };

  /**
   * Auto-advance carousel every 10 seconds
   */
  useEffect(() => {
    const autoSwipeInterval = setInterval(() => {
      handleNextService();
    }, 10000);

    return () => clearInterval(autoSwipeInterval);
  }, [services.length]);

  return (
    <section className="service-section">
      <video 
        key={currentVideoPath}
        className="service-section-video" 
        autoPlay 
        muted 
        playsInline
        onEnded={handleVideoEnd}
      >
        <source src={currentVideoPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="service-carousel">
        <h2>Our Services</h2>
        <div
          className="service-track"
          style={{ transform: `translateX(-${index * 20}%)` }}
        >
          {services.map((service) => {
            const titleId = `service-${service.id}-title`;
            return (
              <article
                className="service-slide"
                key={service.id}
                aria-labelledby={titleId}
              >
                <div className="service-card">
                  <h3 className="service-card-title" id={titleId}>
                    <Link to={`/services/${service.slug}`}>{service.title}</Link>
                  </h3>

                  <p className="service-card-short">{service.description}</p>

                  <Link
                    className="service-card-cta"
                    to={`/services/${service.slug}`}
                    aria-label={`View details for ${service.title}`}
                  >
                    <ArrowForwardIcon style={{ fontSize: '1rem' }} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="service-nav">
          {services.map((_, serviceIndex) => (
            <button
              key={serviceIndex}
              type="button"
              className={`service-dot ${index === serviceIndex ? 'active' : ''}`}
              onClick={() => setIndex(serviceIndex)}
              aria-label={`Go to service ${serviceIndex + 1}`}
              aria-pressed={index === serviceIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
