import React from "react";
import HeroSection from "./components/HeroSection";

import Services from "./components/Services";
import Trusted from "./components/Trusted";
import FeaturedProduct from "./components/FeaturedProduct";

const Home = () => {
  return (
    <>
      <HeroSection />
      <FeaturedProduct />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
