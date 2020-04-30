import React from "react";
import "./index.scss";
import { Navigation } from "./components/index";
import { Home } from "./components/index";
import { Route } from "react-router-dom";
import Flavors from "./Pages/Flavors";

const App = () => {
  return (
    <div id="wrapper">
      <Navigation />
      <Route exact path="/" component={Home} />
      <Route path="/flavors" component={Flavors} />
    </div>
  );
};

export default App;
