// import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import Work from "./Work";

const projects = [
  {
    title: "Book Explorer",
    description: "Search for books using the Google Books API",
    built: "Built with React, Bootstrap &amp; Google Books API",
    link: "https://denskiz.github.io/book-explorer/",
    github: "https://github.com/denskiz/book-explorer",
    image: "https://i.imgur.com/WEJD4Ql.png",
  },
  {
    title: "Emaily",
    description: "A Full Stack Web App which sends email blasts",
    built: "Built with NodeJS, React, Redux, Express, and MongoDB",
    link: "https://emaily-de.herokuapp.com",
    github: "https://github.com/denskiz/emaily",
    image: "https://i.imgur.com/qGZWPke.png",
  },
  {
    title: "Seasons",
    description:
      "A simple React app with conditional rendering depending on the season",
    built: "Built with React &amp; and Geolocation API",
    link: "https://denskiz.github.io/seasons",
    github: "https://github.com/denskiz/seasons",
    image: "https://i.imgur.com/Z4w16Fb.png",
  },
  {
    title: "Countdown Timer",
    description: "Counts down the remaining time from a given date.",
    built: "Built with React, TypeScript &amp; Bootstrap",
    link: "https://denskiz.github.io/countdown-timer",
    github: "https://github.com/denskiz/countdown-timer",
    image: "https://i.imgur.com/Fdhp5yv.png",
  },
  {
    title: "YouTube Search",
    description: "App which lets you search for YouTube Videos",
    built: "Built with React &amp; YouTube API",
    link: "https://denskiz.github.io/youtube-search",
    github: "https://github.com/denskiz/youtube-search",
    image: "https://i.imgur.com/Fsxnijn.png",
  },
  {
    title: "Image Search",
    description: "App which lets you search for images",
    built: "Built with React &amp; Unsplash API",
    link: "https://denskiz.github.io/image-search",
    github: "https://github.com/denskiz/image-search",
    image: "https://i.imgur.com/1QUeVNC.png",
  },
  {
    title: "Reminders",
    description: "A Create, Read, Delete app which allows you to set reminders",
    built: "Built with React, Redux and Browser Cookies",
    link: "https://denskiz.github.io/reminders",
    github: "https://github.com/denskiz/reminders",
    image: "https://i.imgur.com/JleStT9.png",
  },
  {
    title: "Weather App",
    description: "App which shows current weather information",
    built: "Built with React & Open Weather Map API",
    link: "https://denskiz.github.io/react-weather-app",
    github: "https://github.com/denskiz/react-weather-app",
    image: "https://i.imgur.com/CeCmXm2.png",
  },
];

const App = () => {
  return (
    <div>
      <HomePage />
      <AboutMe />
      <Work projects={projects} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
