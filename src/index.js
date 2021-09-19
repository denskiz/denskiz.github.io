// import React from "react";
import ReactDOM from 'react-dom';
import './App.css';
import HomePage from './HomePage';
import AboutMe from './AboutMe';
import Work from './Work';
import projects from './Projects';

const App = () => {
  return (
    <div>
      <HomePage />
      <AboutMe />
      <Work projects={projects} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
