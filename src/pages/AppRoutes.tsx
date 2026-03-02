import { Routes, Route, Navigate } from "react-router-dom";
import ServiceCards from "../pages/ServicesDetail";
import ServiceDetail from "../components/ServiceCards";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/services" element={<ServiceCards />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="*" element={<Navigate to="/services" replace />} />
    </Routes>
  );
}