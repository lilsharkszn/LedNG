import type { FC } from 'react';
// @ts-ignore
import PersonIcon from '@mui/icons-material/Person';
// @ts-ignore
import MusicNoteIcon from '@mui/icons-material/MusicNote';
// @ts-ignore
import PublicIcon from '@mui/icons-material/Public';
// @ts-ignore
import CampaignIcon from '@mui/icons-material/Campaign';
// @ts-ignore
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// @ts-ignore
import HandshakeIcon from '@mui/icons-material/Handshake';
// @ts-ignore
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import './About.css';

const About: FC = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1 className="hero-title">TheLedNG</h1>
          <p className="hero-subtitle">Transforming African Music & Culture Globally</p>
        </div>
        <div className="hero-overlay"></div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="story-container">
          <div className="story-image">
            <img src="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=600&h=600&fit=crop" alt="TheLedNG Story" />
          </div>
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              TheLedNG was founded with a singular vision: to be the definitive gateway for African music and entertainment globally. We are a comprehensive entertainment company dedicated to discovering, nurturing, and promoting exceptional talent across the continent.
            </p>
            <p>
              Since our inception, we have championed innovative approaches to artist development, music production, and distribution. Our commitment to quality and cultural authenticity has established us as leaders in the African entertainment ecosystem.
            </p>
            <p>
              We partner with the brightest minds in music, technology, and business to create opportunities that transcend borders and elevate African creativity to the world stage.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="about-services">
        <h2 className="section-title">What We Do</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">
              <PersonIcon style={{ fontSize: '3rem' }} />
            </div>
            <h3>Artist Development</h3>
            <p>Comprehensive career management and talent cultivation from discovery to international success.</p>
            <a href="/services" className="service-fab">
              <ArrowForwardIcon style={{ fontSize: '1.5rem' }} />
            </a>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <MusicNoteIcon style={{ fontSize: '3rem' }} />
            </div>
            <h3>Music Production</h3>
            <p>World-class production facilities and creative teams crafting exceptional audio experiences.</p>
            <a href="/services" className="service-fab">
              <ArrowForwardIcon style={{ fontSize: '1.5rem' }} />
            </a>
          </div>
          
          <div className="service-card">
            <div className="service-icon">
              <PublicIcon style={{ fontSize: '3rem' }} />
            </div>
            <h3>Global Distribution</h3>
            <p>Strategic distribution partnerships ensuring your music reaches every corner of the world.</p>
            <a href="/services" className="service-fab">
              <ArrowForwardIcon style={{ fontSize: '1.5rem' }} />
            </a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <CampaignIcon style={{ fontSize: '3rem' }} />
            </div>
            <h3>Branding & Marketing</h3>
            <p>Creative campaigns and strategic brand partnerships that amplify your presence and impact.</p>
            <a href="/services" className="service-fab">
              <ArrowForwardIcon style={{ fontSize: '1.5rem' }} />
            </a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <TrendingUpIcon style={{ fontSize: '3rem' }} />
            </div>
            <h3>Analytics & Insights</h3>
            <p>Data-driven strategies leveraging advanced analytics to optimize growth and engagement.</p>
            <a href="/services" className="service-fab">
              <ArrowForwardIcon style={{ fontSize: '1.5rem' }} />
            </a>
          </div>

          <div className="service-card">
            <div className="service-icon">
              <HandshakeIcon style={{ fontSize: '3rem' }} />
            </div>
            <h3>Brand Partnerships</h3>
            <p>Strategic collaborations connecting brands with authentic cultural influence and reach.</p>
            <a href="/services" className="service-fab">
              <ArrowForwardIcon style={{ fontSize: '1.5rem' }} />
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="stats-container">
          <div className="stat-item">
            <h3 className="stat-number">10+</h3>
            <p className="stat-label">Artists On Roster</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">99+</h3>
            <p className="stat-label">Releases</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">105M+</h3>
            <p className="stat-label">Streams Globally</p>
          </div>
          <div className="stat-item">
            <h3 className="stat-number">10</h3>
            <p className="stat-label">Countries Served</p>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      {/* <section className="about-awards">
        <h2 className="section-title">Recognition & Achievements</h2>
        <div className="awards-container">
          <div className="award-item">
            <h4>Best Independent Record Label</h4>
            <p className="award-year">2023</p>
            <p className="award-org">African Music Industry Awards</p>
          </div>
          <div className="award-item">
            <h4>Most Innovative Entertainment Company</h4>
            <p className="award-year">2023</p>
            <p className="award-org">Continental Media Excellence Awards</p>
          </div>
          <div className="award-item">
            <h4>Global Impact in African Music</h4>
            <p className="award-year">2022</p>
            <p className="award-org">International Music Business Forum</p>
          </div>
          <div className="award-item">
            <h4>Emerging Entertainment Powerhouse</h4>
            <p className="award-year">2022</p>
            <p className="award-org">Content & Creator Summit Africa</p>
          </div>
        </div>
      </section> */}

      {/* Mission & Values Section */}
      <section className="about-mission">
        <div className="mission-container">
          <div className="mission-block">
            <h3>Our Mission</h3>
            <p>
              To empower African artists and creators by providing world-class infrastructure, opportunities, and platforms that enable their success on the global stage while preserving cultural authenticity and artistic integrity.
            </p>
          </div>
          <div className="mission-block">
            <h3>Our Vision</h3>
            <p>
              To establish TheLedNG as the leading entertainment nexus that bridges African creativity with global audiences, setting new standards for excellence in music, culture, and innovation.
            </p>
          </div>
          <div className="mission-block">
            <h3>Our Values</h3>
            <ul>
              <li>Authenticity in all creative endeavors</li>
              <li>Excellence without compromise</li>
              <li>Innovation through collaboration</li>
              <li>Impact-driven growth</li>
              <li>Integrity in partnerships</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Ready to Transform Your Music Career?</h2>
        <p>Join TheLedNG and be part of the next wave of African music revolution</p>
        <a href="/contact" className="cta-button">Get In Touch</a>
      </section>
    </div>
  );
};

export default About;
