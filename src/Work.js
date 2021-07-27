import Project from "./Project";

const Work = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <main id="work">
        <h1 className="lg-heading">
          My <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="projects">
          <Project
            title="Book Explorer"
            description="Search for books using the Google Books API"
            built="Built with React, Bootstrap &amp; Google Books API"
            link="https://denskiz.github.io/book-explorer/"
            github="https://github.com/denskiz/book-explorer"
            image="https://i.imgur.com/WEJD4Ql.png"
          />
          <Project
            title="Emaily"
            description="A Full Stack Web App which sends email blasts"
            built="Built with NodeJS, React, Redux, Express, and MongoDB"
            link="https://emaily-de.herokuapp.com/"
            github="https://github.com/denskiz/emaily"
            image="https://i.imgur.com/qGZWPke.png"
          />
          <Project
            title="Seasons"
            description="A simple React app with conditional rendering depending on the season"
            built="Built with React &amp; and Geolocation API"
            link="https://denskiz.github.io/seasons"
            github="https://github.com/denskiz/seasons"
            image="https://i.imgur.com/Z4w16Fb.png"
          />
          <Project
            title="Countdown Timer"
            description="Counts down the remaining time from a given date."
            built="Built with React, TypeScript &amp; Bootstrap"
            link="https://denskiz.github.io/countdown-timer"
            github="https://github.com/denskiz/countdown-timer"
            image="https://i.imgur.com/Fdhp5yv.png"
          />
          <Project
            title="YouTube Search"
            description="App which lets you search for YouTube Videos"
            built="Built with React &amp; YouTube API"
            link="https://denskiz.github.io/youtube-search"
            github="https://github.com/denskiz/youtube-search"
            image="https://i.imgur.com/Fsxnijn.png"
          />
          <Project
            title="Pics"
            description="App which lets you search for photos"
            built="Built with React &amp; Unsplash API"
            link="https://denskiz.github.io/reminders"
            github="https://github.com/denskiz/reminders"
            image="https://i.imgur.com/1QUeVNC.png"
          />
          <Project
            title="Reminders"
            description="A Create, Read, Delete app
            which allows you to set reminders"
            built="Built with React, Redux and
            Browser Cookies"
            link="https://denskiz.github.io/reminders"
            github="https://github.com/denskiz/reminders"
            image="https://i.imgur.com/JleStT9.png"
          />

          <Project
            title="Weather App"
            description="App which shows current
            weather information"
            built="Built with React & Open Weather Map API"
            link="https://denskiz.github.io/react-weather-app"
            github="https://github.com/denskiz/react-weather-app"
            image="https://i.imgur.com/CeCmXm2.png"
          />
        </div>
      </main>
      <footer id="main-footer">Copyright © {currentYear}</footer>
    </div>
  );
};

export default Work;
