import SingleProject from "./SingleProject";
import fb from "../../assets/fb.png";
import crypto from "../../assets/crypto.png";
import mordern from "../../assets/mordern.png";
import workout from "../../assets/workout.png";
import "./project.scss";

const Projects = () => {
  return (
    <div className="allProjects">
      <SingleProject src="https://cryptoworld-rhlnegi.netlify.app/" title="Crypto Details" image={crypto} />
      <SingleProject src="https://playful-gelato-196a21.netlify.app/" title="Mordern Landing Page" image={mordern} extra="Desktop screens only" />
      <SingleProject src="https://effulgent-concha-d93b1c.netlify.app/" title="Workout Buddy" image={workout} />
      <SingleProject src="https://github.com/rhl333/Facebook-Clone/" title="Facebook Clone" image={fb} extra="Currently working On....." />
    </div>
  );
};
export default Projects;
