import React from "react";
import "./index.scss";
import { Home } from "./components/index";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <div id="#wrapper">
      <Route path="/" component={Home} />
    </div>
  );
};

export default App;
