import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import ServicesDetail from "./ServicesDetail";
import Contact from "./Contact";
import ArtistProfile from "./ArtistProfile";

/**
 * Application Routes
 * 
 * Defines all routes for the TheLedNG application
 * - Home page at root
 * - About page with company information
 * - Services overview and individual service detail pages
 * - Contact form page
 * - Artist profile pages
 * - Catch-all redirect to home for unknown routes
 */
export default function AppRoutes() {
  return (
    <Routes>
      {/* Main Pages */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Services Pages */}
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServicesDetail />} />

      {/* Artist Pages */}
      <Route path="/artists/:slug" element={<ArtistProfile />} />

      {/* Catch-all route - redirect unknown paths to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}