import type { FC } from 'react';
import { useState } from 'react';
import SEO from '../components/SEO';
import { SEO_CONFIG } from '../config/seoConfig';
// @ts-ignore
import MailIcon from '@mui/icons-material/Mail';
// @ts-ignore
import PhoneIcon from '@mui/icons-material/Phone';
// @ts-ignore
import LocationOnIcon from '@mui/icons-material/LocationOn';
// @ts-ignore
import SendIcon from '@mui/icons-material/Send';
import './Contact.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        setError('Please fill in all fields');
        setLoading(false);
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError('Please enter a valid email address');
        setLoading(false);
        return;
      }

      // Send email using Formspree (free service, no setup required)
      const response = await fetch('https://formspree.io/f/xoovzonk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Contact Form Submission: ${formData.subject}`,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError('Failed to send message. Please try again or contact us directly.');
      }
    } catch (err) {
      console.error('Error sending form:', err);
      setError('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* SEO Meta Tags & Structured Data */}
      <SEO
        title={SEO_CONFIG.pages.contact.title}
        description={SEO_CONFIG.pages.contact.description}
        image={SEO_CONFIG.pages.contact.image}
        imageAlt="Contact TheLedNG"
        canonical={SEO_CONFIG.canonicalBase + SEO_CONFIG.pages.contact.path}
      />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-content">
          <h1 className="hero-title">Get In Touch With Us</h1>
          <p className="hero-subtitle">Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            
            <div className="info-card">
              <div className="info-icon">
                <MailIcon style={{ fontSize: '1.5rem' }} />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <a href="mailto:admin@theledng.com">admin@theledng.com</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <PhoneIcon style={{ fontSize: '1.5rem' }} />
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <a href="tel:+2348164654033">+234 (816) 465-4033</a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-icon">
                <LocationOnIcon style={{ fontSize: '1.5rem' }} />
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Lagos, Nigeria</p>
              </div>
            </div>

            <div className="contact-hours">
              <h3>Business Hours</h3>
              <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              <p>Saturday & Sunday: Closed</p>
            </div>

            {/* Social Links */}
            <div className="contact-socials">
              <h3>Follow Us</h3>
              <div className="socials-grid">
                <a href="https://instagram.com/theled.ng" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="Instagram">
                  <img src="https://www.svgrepo.com/show/520798/instagram.svg" alt="Instagram" />
                </a>
                <a href="https://www.tiktok.com/@theledng" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="TikTok">
                  <img src="https://www.svgrepo.com/show/504994/tiktok.svg" alt="TikTok" />
                </a>
                <a href="https://youtube.com/@theledng" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="YouTube">
                  <img src="https://www.svgrepo.com/show/293072/youtube.svg" alt="YouTube" />
                </a>
                <a href="https://facebook.com/theled.ng" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="Facebook">
                  <img src="https://www.svgrepo.com/show/520728/facebook.svg" alt="Facebook" />
                </a>
                <a href="https://x.com/theledng" target="_blank" rel="noopener noreferrer" className="social-icon-link" title="X">
                  <img src="https://www.svgrepo.com/show/519928/twitter.svg" alt="X" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2>Send Us a Message</h2>
            
            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully. We'll be in touch soon.
              </div>
            )}

            {error && (
              <div className="error-message">
                ✗ {error}
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What is this about?"
                  required
                  disabled={loading}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message here..."
                  rows={6}
                  required
                  disabled={loading}
                />
              </div>

              <button
                type="submit"
                className="submit-btn"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
                <SendIcon style={{ fontSize: '1rem', marginLeft: '0.5rem' }} />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
