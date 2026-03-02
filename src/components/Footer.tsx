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
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.85 0 3.204-.012 3.584-.07 4.85-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110 2.881 1.44 1.44 0 010-2.881z"/>
            </svg>
          </a>
          <a href="https://facebook.com/theled.ng" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="https://x.comtheledng" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 002.856-3.288c-1.04.562-2.153.922-3.322 1.084a5.8 5.8 0 002.556-3.23c-1.12.649-2.361 1.12-3.685 1.375a5.75 5.75 0 00-9.977 5.24A16.35 16.35 0 011.671 3.149a5.76 5.76 0 001.781 7.684 5.73 5.73 0 01-2.608-.722v.072c0 2.796 1.987 5.144 4.627 5.676a5.75 5.75 0 002.601.196 5.756 5.756 0 005.396 3.994 11.544 11.544 0 01-7.146 2.469c-.464 0-.92-.028-1.371-.084a16.328 16.328 0 008.856 2.596c10.627 0 16.426-8.799 16.426-16.426 0-.25-.006-.498-.02-.744a11.728 11.728 0 002.872-3.002z"/>
            </svg>
          </a>
          <a href="mailto:admin@theledng.com" className="social-link" aria-label="Email">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
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

      {/* Copyright */}
      <div className="footer-copyright">
        <p>&copy; {new Date().getFullYear()} TheLedNG. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
