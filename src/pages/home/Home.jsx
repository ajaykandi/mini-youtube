import "./home.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar";

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="containerLeft">
          <Sidebar />
        </div>
        <div className="containerRight">
          <Rightbar />
        </div>
      </div>
    </>
  );
};

export default Home;
