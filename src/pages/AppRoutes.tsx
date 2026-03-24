import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import ServicesDetail from "./ServicesDetail";
import Contact from "./Contact";
import ArtistProfile from "./ArtistProfile";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServicesDetail />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/artists/:slug" element={<ArtistProfile />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}