import Videocard from "../videocard/Videocard";
import "./rightbar.css";
import { useSelector } from "react-redux";

const Rightbar = () => {
  const videoData = useSelector((state) => state.data.items);
  return (
    <div className="rightbar">
      <img className="rightbarBanner" src="assets/images/banner.png" alt="" />
      <div className="videoContainer">
        {videoData.map((video) => {
          const { videoId } = video.id;
          return <Videocard key={videoId} video={video} />;
        })}
      </div>
    </div>
  );
};

export default Rightbar;
