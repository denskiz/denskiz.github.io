// import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import Work from "./Work";

const App = () => {
  return (
    <div>
      <HomePage />
      <AboutMe />
      <Work />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
