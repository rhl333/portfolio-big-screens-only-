import { Link } from "react-router-dom";
import pic from "../../assets/rahul.jpg";
import "./sidebar.scss";
const SideBar = () => {
  return (
    <div className="sideBar">
      <div className="sideBarContainer">
        <div className="top">
          <img className="profile" src={pic} alt="" />
          <h2>Rahul Negi</h2>
          <p>Full Stack Web Developer</p>
        </div>
        <div className="bottom">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/education">
              <li>Education</li>
            </Link>
            <Link to="projects">
              <li>Projects</li>
            </Link>
            <Link to="contact">
              <li>Contact</li>
            </Link>
            <Link to="about">
              <li>About</li>
            </Link>
          </ul>
        </div>
        <div className="socialMedia">
          <a href="https://www.linkedin.com/in/rahul-negi-091232243/" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/rhl333" target="_blank" rel="noreferrer">
            <i class="fa-brands fa-square-github"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
