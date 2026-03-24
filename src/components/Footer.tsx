import type { FC } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Header Title and Description */}
        <div className="footer-header">
          <h2 className="footer-title">TheLedNG</h2>
          <p className="footer-description">
            Your premier destination for music distribution and artist empowerment.
            Connect, collaborate, and reach your audience globally.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="footer-socials">
          <a href="https://instagram.com/theled.ng" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
            <img src="https://www.svgrepo.com/show/520798/instagram.svg" alt="Instagram" className="social-icon instagram-icon" />
          </a>
          <a href="https://www.tiktok.com/@theledng" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="TikTok">
            <img src="https://www.svgrepo.com/show/504994/tiktok.svg" alt="TikTok" className="social-icon tiktok-icon" />
          </a>
          <a href="https://youtube.com/@theledng" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="YouTube">
            <img src="https://www.svgrepo.com/show/293072/youtube.svg" alt="YouTube" className="social-icon youtube-icon" />
          </a>
          <a href="https://facebook.com/theled.ng" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
            <img src="https://www.svgrepo.com/show/520728/facebook.svg" alt="Facebook" className="social-icon facebook-icon" />
          </a>
          <a href="https://x.com/theledng" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X">
            <img src="https://www.svgrepo.com/show/519928/twitter.svg" alt="X" className="social-icon x-icon" />
          </a>
          <a href="mailto:admin@theledng.com" className="social-link" aria-label="Email">
            <img src="https://www.svgrepo.com/show/511915/email-1564.svg" alt="Email" className="social-icon email-icon" />
          </a>
        </div>

        {/* Quick Links */}
        <div className="footer-quicklinks">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Partners Section */}
      <div className="footer-partners">
        <h3>Our Partners</h3>
        <div className="partners-container">
          <a href="https://thebridgedistro.com/" target="_blank" rel="noopener noreferrer" className="partner-link" aria-label="TheBridgeDistro">
            <img src="https://thebridgedistro.com/wp-content/uploads/elementor/thumbs/Bridge-logo-gradient-copy-ovb3wouao026haqpktder523qqn9g5cgu0vgr5rnwi.png" alt="TheBridgeDistro" className="partner-logo" />
          </a>
          <a href="https://scoopuniversal.com" target="_blank" rel="noopener noreferrer" className="partner-link" aria-label="ScoopUniversal">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyoD2fz_QEaVO4Xf7WPZzU0cgMRaKECfIdbg&s" alt="ScoopUniversal" className="partner-logo" />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} TheLedNG. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
