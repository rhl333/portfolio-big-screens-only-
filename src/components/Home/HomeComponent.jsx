import "./home.scss";

const HomeComponent = () => {
  return (
    <div className="homeComponent">
      <div className="homeComponentMain">
        <h2>Hi There !</h2>
        <h1>
          I'M <span> Rahul</span>
        </h1>
        <p>
          I'm a full-stack Web Developer with more than one year of experience. Javascript is my choice of programming language for building the
          frontend and backend. Currently, I am working on a full stack project which is a clone of facebook.com. Generally, I use ReactJS, SASS,
          Material UI, CSS, and Styled Components for the frontend, and for the backend, I use NodeJS, ExpressJS, and MongoDB.
        </p>
        <a className="resume" href="/">
          <i class="fa-solid fa-download"></i>
          <span>My Resume</span>
        </a>
      </div>
    </div>
  );
};

export default HomeComponent;
