import type { FC } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import AppRoutes from './pages/AppRoutes';
import './App.css';

/**
 * Root App Component
 * 
 * Main application wrapper that provides:
 * - HelmetProvider for SEO meta tag management
 * - Router for navigation between pages
 * - Header with logo and navigation menu
 * - Page routes
 * - Footer with social links and company info
 */
const App: FC = () => {
  return (
    <HelmetProvider>
      <Router>
        <Header />
        <AppRoutes />
        <Footer />
      </Router>
    </HelmetProvider>
  );
}

export default App;