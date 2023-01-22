import React from "react";
import Company from "./Company/Company";
import Developers from "./Developers/Developers";
import Gallery from "./Gallery/Gallery";
import HomeCarousel from "./HomeCarousel/HomeCarousel";

const Home = () => {
  return <div>
    <HomeCarousel></HomeCarousel>
    <Gallery></Gallery>
    <Developers></Developers>
    <Company></Company>
  </div>;
};

export default Home;
