import { Route, Routes } from "react-router-dom";
import About from "../about/About";
import Contact from "../contact/Contact";
import Education from "../education/Education";
import HomeComponent from "../Home/HomeComponent";
import Projects from "../projects/Projects";
import "./main.scss";

const Main = () => {
  return (
    <div className="mainContent">
      <Routes>
        <Route index element={<HomeComponent />}></Route>
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};
export default Main;
