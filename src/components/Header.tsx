import type { FC } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header: FC = () => {
  // const [isMenuOpen, setIsOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsOpen(!isMenuOpen);
  // };
  const [playOpen, setPlayOpen] = useState(false);
  const DoPlayMenuLogo = () => {
    setPlayOpen(!playOpen);
  };

  return (
    <>
      <header className="header">
        <div className="header-brand">
          <img
            src="src\assets\images\logopng1.png"
            alt="TheLedNG Logo"
            className="header-logo"
          />
          <h1 className="header-title">
            Led<span id="NGspan">NG</span>
          </h1>
        </div>

        <button
          id="playMenuHover"
          onClick={DoPlayMenuLogo}
          type="button"
          className={`menu-toggle ${playOpen ? "✕" : "▶"}`}
          aria-label={playOpen ? "Close menu" : "Open menu"}
        >
          {playOpen ? "✕" : "▶"}
        </button>
      </header>

      <nav className={`nav-menu ${playOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li>
            <Link to="/" className="nav-link" onClick={() => setPlayOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-link"
              onClick={() => setPlayOpen(false)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="nav-link"
              onClick={() => setPlayOpen(false)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav-link"
              onClick={() => setPlayOpen(false)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
