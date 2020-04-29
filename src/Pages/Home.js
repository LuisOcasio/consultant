import React from "react";
import { Navigation } from "../components/index";
import Strains from "../components/Strain/Strains";

const Home = () => {
  return (
    <div className="top-section">
      <Navigation />
      <Strains />
    </div>
  );
};

export default Home;
