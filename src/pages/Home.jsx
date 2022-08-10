import Main from "../components/main/Main";
import SideBar from "../components/sideBar/SideBar";
import "./home.scss";

const Home = () => {
  return (
    <div className="homePage">
      <SideBar />
      <Main />
    </div>
  );
};

export default Home;
