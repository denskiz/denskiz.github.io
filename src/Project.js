const Project = (props) => {
  return (
    <div>
      <div className="item">
        <a href={props.link} target="_blank" rel="noopener">
          <img src={props.image} alt="Project" />
        </a>
        <a
          href={props.link}
          target="_blank"
          className="btn-light"
          rel="noopener"
        >
          <i className="fas fa-eye"></i>
          {props.title} <br />
          {props.description} <br />
          {props.built}
        </a>
        <a
          href={props.github}
          target="_blank"
          className="btn-dark"
          rel="noopener"
        >
          <i className="fab fa-github"></i> Github
        </a>
      </div>
    </div>
  );
};

export default Project;
