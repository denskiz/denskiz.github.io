const AboutMe = () => {
  return (
    <div>
      <main id="about">
        <h1 className="lg-heading">
          About {'   '}
          <span className="text-secondary">Me</span>
        </h1>
        <h2 className="sm-heading">Let me tell you a few things...</h2>
        <div className="about-info">
          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              I am an aspiring Web Developer looking for an amazing team to be a
              part of. Currently working through the Free Code Camp curriculum
              and learning the latest frameworks. Focusing on the MERN Stack. I
              am currently building projects in React, Redux, Node, Express,
              MongoDB and Mongoose.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutMe;
