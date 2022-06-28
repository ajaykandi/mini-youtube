import { useSelector } from "react-redux";
import "./sidebar.css";

const Sidebar = () => {
  const toggle = useSelector((state) => state.toggle);
  return (
    <div className="sidebar">
      <div className="sidebarList">
        <div className="sidebarListItem">
          <img className="sidebarItemImg" src="assets/images/home.png" alt="" />
          <span
            style={{ color: "#ED3833" }}
            className={toggle ? "sidebarToggle" : "sidebarItemText "}
          >
            Home
          </span>
        </div>
        <div className="sidebarListItem">
          <img
            className="sidebarItemImg"
            src="assets/images/explore.png"
            alt=""
          />
          <span className={toggle ? "sidebarToggle" : "sidebarItemText "}>
            Explore
          </span>
        </div>
        <div className="sidebarListItem">
          <img
            className="sidebarItemImg"
            src="assets/images/subscriprion.png"
            alt=""
          />
          <span className={toggle ? "sidebarToggle" : "sidebarItemText "}>
            Subscription
          </span>
        </div>
        <div className="sidebarListItem">
          <img
            className="sidebarItemImg"
            src="assets/images/library.png"
            alt=""
          />
          <span className={toggle ? "sidebarToggle" : "sidebarItemText "}>
            Library
          </span>
        </div>
        <div className="sidebarListItem">
          <img
            className="sidebarItemImg"
            src="assets/images/history.png"
            alt=""
          />
          <span className={toggle ? "sidebarToggle" : "sidebarItemText "}>
            History
          </span>
        </div>
        <div className="sidebarListItem">
          <img className="sidebarItemImg" src="assets/images/cast.png" alt="" />
          <span className={toggle ? "sidebarToggle" : "sidebarItemText "}>
            Cast Videos
          </span>
        </div>
        <div className="sidebarListItem">
          <img
            className="sidebarItemImg"
            src="assets/images/playlist.png"
            alt=""
          />
          <span className={toggle ? "sidebarToggle" : "sidebarItemText "}>
            Playlist
          </span>
        </div>
        <div className="sidebarListItem">
          <img
            className="sidebarItemImg"
            src="assets/images/show-more.png"
            alt=""
          />
          <span className={toggle ? "sidebarToggle" : "sidebarItemText "}>
            Show More
          </span>
        </div>
        <hr className="sidebarHr" />
        <h4>{!toggle && "SUBSCRIPTIONS"}</h4>
        <div className="sidebarListItem">
          <img
            className="channelProfileImg"
            src="assets/images/jack.png"
            alt=""
          />
          <span className={toggle ? "sidebarToggle" : "sidebarItemText "}>
            Code with Harry
          </span>
        </div>
        <div className="sidebarListItem">
          <img
            className="channelProfileImg"
            src="assets/images/gerard.png"
            alt=""
          />
          <span className={toggle ? "sidebarToggle" : "sidebarItemText "}>
            FreeCodeCamp
          </span>
        </div>
        <div className="sidebarListItem">
          <img
            className="channelProfileImg"
            src="assets/images/megan.png"
            alt=""
          />
          <span className={toggle ? "sidebarToggle" : "sidebarItemText "}>
            Coding Addict
          </span>
        </div>
        <div className="sidebarListItem">
          <img
            className="channelProfileImg"
            src="assets/images/tom.png"
            alt=""
          />
          <span className={toggle ? "sidebarToggle" : "sidebarItemText "}>
            Easy Tutorials
          </span>
        </div>
        <div className="sidebarListItem">
          <img
            className="channelProfileImg"
            src="assets/images/cameron.png"
            alt=""
          />
          <span className={toggle ? "sidebarToggle" : "sidebarItemText "}>
            Telusko
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
