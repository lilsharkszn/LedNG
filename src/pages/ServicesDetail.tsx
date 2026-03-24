import type { FC } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
// @ts-ignore
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// @ts-ignore
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// @ts-ignore
import MusicNoteIcon from '@mui/icons-material/MusicNote';
// @ts-ignore
import PersonIcon from '@mui/icons-material/Person';
// @ts-ignore
import MicIcon from '@mui/icons-material/Mic';
// @ts-ignore
import PublicIcon from '@mui/icons-material/Public';
// @ts-ignore
import CampaignIcon from '@mui/icons-material/Campaign';
import { SERVICES } from "../data/ServiceData";
import "./ServicesDetail.css";

const iconMap: { [key: string]: any } = {
  MusicNoteIcon,
  PersonIcon,
  MicIcon,
  PublicIcon,
  CampaignIcon,
};

const ServicesDetail: FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES.find((whatWeDo) => whatWeDo.slug === slug);
  const currentIndex = SERVICES.findIndex((s) => s.slug === slug);
  const relatedServices = SERVICES.filter((_, idx) => idx !== currentIndex).slice(0, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <section className="service-detail-error">
        <div className="error-container">
          <h2>Service not found</h2>
          <p>The service you're looking for doesn't exist.</p>
          <Link to="/services" className="back-btn">
            ← Back to all services
          </Link>
        </div>
      </section>
    );
  }

  const ServiceIcon = iconMap[service.iconName || "MusicNoteIcon"];

  return (
    <div className="service-detail-page">
      {/* Back Button */}
      <div className="detail-breadcrumb">
        <Link to="/services" className="back-link">
          ← Back to Services
        </Link>
      </div>

      {/* Hero Section */}
      <section className="detail-hero">
        <div className="hero-content">
          <div className="hero-icon">
            {ServiceIcon && <ServiceIcon style={{ fontSize: "3rem" }} />}
          </div>
          <h1 className="hero-title">{service.title}</h1>
          <p className="hero-subtitle">{service.description}</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="detail-content">
        <div className="content-container">
          {/* Full Description */}
          {service.fullDescription && (
            <div className="detail-section">
              <h2>Overview</h2>
              <p className="section-description">{service.fullDescription}</p>
            </div>
          )}

          {/* Features */}
          {service.features && service.features.length > 0 && (
            <div className="detail-section">
              <h2>What We Offer</h2>
              <div className="features-grid">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <div className="feature-icon">
                      <CheckCircleIcon style={{ fontSize: "1.2rem" }} />
                    </div>
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Benefits */}
          {service.benefits && service.benefits.length > 0 && (
            <div className="detail-section">
              <h2>Benefits</h2>
              <div className="benefits-list">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="benefit-item">
                    <span className="benefit-number">{idx + 1}</span>
                    <p>{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Process */}
          {service.process && service.process.length > 0 && (
            <div className="detail-section">
              <h2>Our Process</h2>
              <div className="process-timeline">
                {service.process.map((step, idx) => (
                  <div key={idx} className="process-step">
                    <div className="step-number">{idx + 1}</div>
                    <div className="step-content">
                      <p>{step}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Expertise */}
          {service.expertise && service.expertise.length > 0 && (
            <div className="detail-section expertise-section">
              <h2>Our Team Expertise</h2>
              <div className="expertise-grid">
                {service.expertise.map((expert, idx) => (
                  <div key={idx} className="expertise-card">
                    <p>{expert}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* CTA Section */}
          <div className="detail-cta">
            <h2>Ready to Get Started?</h2>
            <p>Let's collaborate and bring your vision to life. Contact us today to discuss how we can help.</p>
            <Link to="/contact" className="cta-button">
              Get in Touch
              <ArrowForwardIcon style={{ fontSize: "1rem", marginLeft: "0.5rem" }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="related-services">
          <div className="related-container">
            <h2>Explore Other Services</h2>
            <div className="related-grid">
              {relatedServices.map((relatedService) => {
                const RelatedIcon = iconMap[relatedService.iconName || "MusicNoteIcon"];
                return (
                  <Link
                    key={relatedService.id}
                    to={`/services/${relatedService.slug}`}
                    className="related-card"
                  >
                    <div className="related-icon">
                      {RelatedIcon && <RelatedIcon style={{ fontSize: "2rem" }} />}
                    </div>
                    <h3>{relatedService.title}</h3>
                    <p>{relatedService.description}</p>
                    <span className="explore-link">
                      Explore <ArrowForwardIcon style={{ fontSize: "0.9rem" }} />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ServicesDetail;
