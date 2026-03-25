import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { scrollToTop } from '../utils/scrollUtils';
import './Footer.css';

const Footer: FC = () => {
  /**
   * Social media links with external URLs
   */
  const socialLinks = [
    { href: 'https://instagram.com/theled.ng', label: 'Instagram', icon: 'https://www.svgrepo.com/show/520798/instagram.svg' },
    { href: 'https://www.tiktok.com/@theledng', label: 'TikTok', icon: 'https://www.svgrepo.com/show/504994/tiktok.svg' },
    { href: 'https://youtube.com/@theledng', label: 'YouTube', icon: 'https://www.svgrepo.com/show/293072/youtube.svg' },
    { href: 'https://facebook.com/theled.ng', label: 'Facebook', icon: 'https://www.svgrepo.com/show/520728/facebook.svg' },
    { href: 'https://x.com/theledng', label: 'X', icon: 'https://www.svgrepo.com/show/519928/twitter.svg' },
    { href: 'mailto:admin@theledng.com', label: 'Email', icon: 'https://www.svgrepo.com/show/511915/email-1564.svg' },
  ];

  /**
   * Partner links
   */
  const partners = [
    {
      name: 'TheBridgeDistro',
      url: 'https://thebridgedistro.com/',
      logo: 'https://thebridgedistro.com/wp-content/uploads/elementor/thumbs/Bridge-logo-gradient-copy-ovb3wouao026haqpktder523qqn9g5cgu0vgr5rnwi.png',
    },
    {
      name: 'ScoopUniversal',
      url: 'https://scoopuniversal.com',
      logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyoD2fz_QEaVO4Xf7WPZzU0cgMRaKECfIdbg&s',
    },
  ];
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-header">
          <h2 className="footer-title">TheLedNG</h2>
          <p className="footer-description">
            Your premier destination for music distribution and artist empowerment.
            Connect, collaborate, and reach your audience globally.
          </p>
        </div>

        {/* Social Media Links */}
        <div className="footer-socials">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-link`}
              aria-label={link.label}
            >
              <img src={link.icon} alt={link.label} className={`social-icon ${link.label.toLowerCase()}-icon`} />
            </a>
          ))}
        </div>

        {/* Quick Navigation Links */}
        <div className="footer-quicklinks">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/" onClick={() => scrollToTop()}>Home</Link></li>
            <li><Link to="/about" onClick={() => scrollToTop()}>About</Link></li>
            <li><Link to="/services" onClick={() => scrollToTop()}>Services</Link></li>
            <li><Link to="/contact" onClick={() => scrollToTop()}>Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Partners Section */}
      <div className="footer-partners">
        <h3>Our Partners</h3>
        <div className="partners-container">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-link"
              aria-label={partner.name}
            >
              <img src={partner.logo} alt={partner.name} className="partner-logo" />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright Notice */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} TheLedNG. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
