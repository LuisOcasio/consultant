import React from "react";
import { Navigation } from "../components/index";
import { StrainTable } from "../components/index";

const Home = () => {
  return (
    <div className="top-section">
      <Navigation />
      <StrainTable />
    </div>
  );
};

export default Home;
