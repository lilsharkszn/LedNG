import type { FC } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  // const [isMenuOpen, setIsOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsOpen(!isMenuOpen);
  // };
  const [playOpen, setPlayOpen] = useState(false);
  const DoPlayMenuLogo = () => {
    setPlayOpen(!playOpen);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      <header className="header">
        <div className="header-brand" onClick={handleLogoClick} style={{ cursor: "pointer" }}>
          <img
            src={logo}
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
              <HomeIcon className="nav-icon" />
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="nav-link"
              onClick={() => setPlayOpen(false)}
            >
              <InfoIcon className="nav-icon" />
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="nav-link"
              onClick={() => setPlayOpen(false)}
            >
              <BuildIcon className="nav-icon" />
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="nav-link"
              onClick={() => setPlayOpen(false)}
            >
              <MailIcon className="nav-icon" />
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
