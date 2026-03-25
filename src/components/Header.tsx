import type { FC } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/scrollUtils";
import logo from "../assets/images/logopng1.png";
// @ts-ignore
import HomeIcon from "@mui/icons-material/Home";
// @ts-ignore
import InfoIcon from "@mui/icons-material/Info";
// @ts-ignore
import BuildIcon from "@mui/icons-material/Build";
// @ts-ignore
import MailIcon from "@mui/icons-material/Mail";
import "./Header.css";

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Toggles the mobile menu open/closed state
   */
  const handleMenuToggle = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Closes mobile menu and scrolls to top when a navigation link is clicked
   */
  const handleNavLinkClick = (): void => {
    setIsMenuOpen(false);
    scrollToTop();
  };

  /**
   * Handles logo click to navigate home and scroll to top
   */
  const handleLogoClick = (): void => {
    setIsMenuOpen(false);
    scrollToTop();
  };

  return (
    <>
      <header className="header">
        <Link 
          to="/"
          className="header-brand" 
          onClick={handleLogoClick}
        >
          <img
            src={logo}
            alt="TheLedNG Logo"
            className="header-logo"
          />
          <h1 className="header-title">
            Led<span id="NGspan">NG</span>
          </h1>
        </Link>

        <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link" onClick={handleNavLinkClick}>
                <HomeIcon className="nav-icon" />
                <span className="nav-label">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link" onClick={handleNavLinkClick}>
                <InfoIcon className="nav-icon" />
                <span className="nav-label">About</span>
              </Link>
            </li>
            <li>
              <Link to="/services" className="nav-link" onClick={handleNavLinkClick}>
                <BuildIcon className="nav-icon" />
                <span className="nav-label">Services</span>
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link" onClick={handleNavLinkClick}>
                <MailIcon className="nav-icon" />
                <span className="nav-label">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>

        <button
          id="playMenuHover"
          onClick={handleMenuToggle}
          type="button"
          className={`menu-toggle ${isMenuOpen ? "✕" : "▶"}`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "▶"}
        </button>
      </header>
    </>
  );
};

export default Header;
