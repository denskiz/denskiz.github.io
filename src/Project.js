const Project = (props) => {
  return (
    <div>
      <div className="item">
        <a href={props.link} target="_blank" rel="noreferrer">
          <img src={props.image} alt="Project" />
        </a>
        <a
          href={props.link}
          target="_blank"
          className="btn-light"
          rel="noreferrer"
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
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Project;
