import type { FC } from "react";
import Carousel from "../components/Carousel";
import { useState } from "react";
import Mottos from "../components/Mottos";
import ArtistCards from "../components/ArtistCards";
import RecentReleases from "../components/RecentReleases";
import ServiceCards from "../components/ServiceCards";
import SEO from "../components/SEO";
import {
  getOrganizationSchema,
  getWebsiteSchema,
} from "../utils/schemaBuilder";
import { SEO_CONFIG } from "../config/seoConfig";
import "./Home.css";
import img1 from "../assets/images/Studio.jpg";
import img6 from "../assets/images/Koshera.jpg";
import img2 from "../assets/images/Jay.jpg";
import img4 from "../assets/images/Calz.png";
import img5 from "../assets/images/SCOPE.png";
import img3 from "../assets/images/Weird2.jpg";

const Home: FC = () => {
  const [images] = useState<string[]>([img1, img2, img3, img4, img5, img6]);

  // Prepare schemas for homepage
  const schemas = [getOrganizationSchema(), getWebsiteSchema()];

  return (
    <>
      {/* SEO Meta Tags & Structured Data */}
      <SEO
        title={SEO_CONFIG.pages.home.title}
        description={SEO_CONFIG.pages.home.description}
        image={SEO_CONFIG.pages.home.image}
        imageAlt="TheLedNG - Music Platform"
        keywords={SEO_CONFIG.keywords.home}
        ogType="website"
        schemaList={schemas}
      />

      <div className="hero-section">
        <div className="hero-carousel">
          <Carousel images={images} interval={8000} />
        </div>

        <div className="hero-content">
          <h1 id="h1">TheLedNG</h1>
          <Mottos />
        </div>
      </div>

      <RecentReleases />

      <div className="home-content">
        <ServiceCards />
      </div>

      <ArtistCards />
    </>
  );
};

export default Home;
