import Project from "./Project";

const Work = ({ projects }) => {
  const currentYear = new Date().getFullYear();

  const renderItems = projects.map((item) => {
    return (
      <Project
        title={item.title}
        description={item.description}
        built={item.built}
        link={item.link}
        github={item.github}
        image={item.image}
      />
    );
  });

  return (
    <div>
      <main id="work">
        <h1 className="lg-heading">
          My <span className="text-secondary">Work</span>
        </h1>
        <h2 className="sm-heading">Check out some of my projects...</h2>
        <div className="projects">{renderItems}</div>
      </main>
      <footer id="main-footer">Copyright © {currentYear}</footer>
    </div>
  );
};

export default Work;
