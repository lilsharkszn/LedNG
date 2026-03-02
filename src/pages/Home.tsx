import type { FC } from "react";
import Carousel from "../components/Carousel";
import { useState } from "react";
import Mottos from "../components/Mottos";
import ArtistCards from "../components/ArtistCards";
import "./Home.css";
import img1 from "../assets/images/Studio.jpg";
import img2 from "../assets/images/Koshera.jpg";
import img3 from "../assets/images/Jay.jpg";
import img4 from "../assets/images/Calz.png";
import img5 from "../assets/images/SCOPE.png";
import img6 from "../assets/images/Weird2.jpg";
import ServiceCards from "../components/ServiceCards";

const Home: FC = () => {
  const [images] = useState<string[]>([img1, img2, img3, img4, img5, img6]);

  return (
    <>
      <div className="hero-section">
        <div className="hero-carousel">
          <Carousel images={images} interval={8000} />
        </div>

        <div className="hero-content">
          <h1 id="h1">TheLedNG</h1>
          <Mottos />
        </div>
      </div>
      <div className="home-content">
        <ServiceCards />
      </div>

      <ArtistCards />
    </>
  );
};

export default Home;
