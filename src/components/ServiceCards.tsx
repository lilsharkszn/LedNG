import type { FC as ReactFC } from "react";
import { SERVICES } from "../data/ServiceData";
import { Link } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
// @ts-ignore
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "../components/ServiceCards.css";

const ServiceCards: ReactFC = () => {
  const services = useMemo(() => SERVICES, []);
  const [index, setIndex] = useState(0);
  const [currentVideoPath, setCurrentVideoPath] = useState<string>(
    `${import.meta.env.BASE_URL}v5.mp4`,
  );

  // List of background videos in public folder
  const allVideos = [
    `${import.meta.env.BASE_URL}v1.mp4`,
    `${import.meta.env.BASE_URL}v2.mp4`,
    `${import.meta.env.BASE_URL}v3.mp4`,
    `${import.meta.env.BASE_URL}v4.mp4`,
    `${import.meta.env.BASE_URL}v5.mp4`,
    `${import.meta.env.BASE_URL}v6.mp4`,
  ];

  // Get random video that's different from the last one
  const getRandomVideo = (excludeVideo?: string) => {
    const availableVideos = excludeVideo
      ? allVideos.filter((video) => video !== excludeVideo)
      : allVideos;
    return availableVideos[Math.floor(Math.random() * availableVideos.length)];
  };

  // Initialize on component mount
  useEffect(() => {
    const lastVideo = localStorage.getItem("lastVideoPath");
    const newVideo = getRandomVideo(lastVideo || undefined);
    setCurrentVideoPath(newVideo);
    localStorage.setItem("lastVideoPath", newVideo);
  }, []);

  const next = () => setIndex((prevIndex) => (prevIndex + 1) % services.length);

  // Auto-swipe every 10 seconds
  useEffect(() => {
    const autoSwipeInterval = setInterval(() => {
      next();
    }, 10000);

    return () => clearInterval(autoSwipeInterval);
  }, []);

  return (
    <section className="service-section">
      <video className="service-section-video" autoPlay muted loop playsInline>
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
