import type { FC as ReactFC } from "react";
import { SERVICES } from "../data/ServiceData";
import { Link } from "react-router-dom";
import { useMemo, useState, useEffect } from "react";
import "../components/ServiceCards.css";

const ServiceCards: ReactFC = () => {
  const services = useMemo(() => SERVICES, []);
  const [index, setIndex] = useState(0);
  const [currentVideoPath, setCurrentVideoPath] = useState<string>("/v1.mp4");

  // List of background videos in public folder
  const allVideos = [
    "/v1.mp4",
    "/v2.mp4",
    "/v3.mp4",
    "/v4.mp4",
    "/v5.mp4",
    "/v6.mp4",
  ];

  // Get random video that's different from the last one
  const getRandomVideo = (excludeVideo?: string) => {
    const availableVideos = excludeVideo 
      ? allVideos.filter(video => video !== excludeVideo)
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

  const previous = () =>
    setIndex(
      (prevIndex) => (prevIndex - 1 + services.length) % services.length,
    );
  const next = () => setIndex((prevIndex) => (prevIndex + 1) % services.length);

  return (
    <section className="service-section">
      <video
        className="service-section-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={currentVideoPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h2>Our Services</h2>
      <div className="service-carousel">
        <div
          className="service-track"
          style={{ transform: `translateX(-${index * 20}%)` }}
        >
          {services.map((service) => (
            <article className="service-slide" key={service.id}>
              <div className="service-card">
                <h3 className="service-card-title">
                  <Link to={`/services/${service.slug}`}>{service.title}</Link>
                </h3>

                <p className="service-card-short">{service.description}</p>

                <Link
                  className="service-card-cta"
                  to={`/services/${service.slug}`}
                >
                  View details 
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="service-nav">
          <button
            type="button"
            onClick={previous}
            aria-label="Previous service"
          >
            ←
          </button>
          <button type="button" onClick={next} aria-label="Next service">
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCards;
