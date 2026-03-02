import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./Home";
import ServicesDetail from "./ServicesDetail";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services/:slug" element={<ServicesDetail />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}