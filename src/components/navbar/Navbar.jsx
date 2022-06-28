import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { cleanChannel, getData, Toggle } from "../../features/videoSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

const apikey = "AIzaSyAIIkawVE52beRqK5hejFYOF2YiRoYmDxs";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [toggle, setToggle] = useState(false);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const dispatch = useDispatch();
  dispatch(Toggle(toggle));
  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    nav("/");
    try {
      await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=48&key=${apikey}`
      )
        .then((response) => response.json())
        .then((data) => {
          dispatch(cleanChannel());
          dispatch(getData(data));
        });
    } catch (error) {
      console.log({ msg: error.message });
    }
  };

  return (
    <div className="nav">
      <div className="navLeft">
        <img
          className="menuIcon"
          src={PF + "menu.png"}
          alt=""
          onClick={() => setToggle(!toggle)}
        />
        <Link to="/">
          <img className="logo" src={PF + "logo2.png"} alt="" />
        </Link>
      </div>
      <div className="navCenter">
        <form className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            spellCheck="false"
            placeholder="search..."
          />
          <button className="formButton">
            <img
              type="submit"
              className="searchIcon"
              src={PF + "search.png"}
              alt=""
            />
          </button>
        </form>
        <img src="assets/images/voice-search.png" alt="" />
      </div>
      <div className="navRight">
        <img src={PF + "upload.png"} alt="" />
        <img src={PF + "more.png"} alt="" />
        <img src={PF + "notification.png"} alt="" />
        <img className="profileIcon" src={PF + "jack.png"} alt="" />
      </div>
    </div>
  );
};

export default Navbar;
