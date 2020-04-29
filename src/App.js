import React from "react";
import "./index.scss";
import { Home } from "./components/index";
import Strains from "./components/Strain/Strains";
import StrainFlavor from "./components/Strain/StrainFlavor";

const App = () => {
  return (
    <div id="#wrapper">
      <Home />
      <Strains />
      <StrainFlavor />
    </div>
  );
};

export default App;
