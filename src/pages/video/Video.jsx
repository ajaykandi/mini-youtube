import "./video.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { format } from "timeago.js";

// number formatter for the sucscriber count
function numFormatter(num) {
  if (num > 999 && num < 1000000) {
    return (num / 1000).toFixed(1) + "K"; // convert to K for number from > 1000 < 1 million
  } else if (num > 1000000) {
    return (num / 1000000).toFixed(1) + "M"; // convert to M for number from > 1 million
  } else if (num < 900) {
    return num; // if value < 1000, nothing to do
  }
}

const Video = () => {
  const [show, setShow] = useState(false);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const { videoId } = useParams();
  const data = useSelector((state) => state.data.items);
  const channel = useSelector((state) => state.channel);

  const currentVideo = data?.filter((video) => video.id.videoId === videoId);
  const { channelTitle, title, channelId, publishedAt } =
    currentVideo[0]?.snippet;

  //channel details destructuring
  const currentProfile = channel?.filter(
    (channel) => channel.id === channelId
  )[0];
  const { description } = currentProfile?.snippet;
  const { subscriberCount } = currentProfile?.statistics;
  const profilePicture = currentProfile?.snippet.thumbnails.default.url;

  return (
    <>
      <div className="videoContainer">
        <div className="videoLeft">
          <iframe
            width="100%"
            height="50%"
            title="mytitle"
            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
            allowFullScreen
          ></iframe>

          <div className="videoDescription">
            <div>
              <h4>{title}</h4>
              <div className="videoCounts">
                <p>
                  15k Views &bull; <span>{format(publishedAt)}</span>{" "}
                </p>
                <div className="videoIcons">
                  <div className="videoIcon">
                    <img src={PF + "like.png"} alt="" />
                    <span>66k</span>
                  </div>
                  <div className="videoIcon">
                    <img src={PF + "dislike.png"} alt="" />
                    <span>5k</span>
                  </div>
                  <div className="videoIcon">
                    <img src={PF + "share.png"} alt="" />
                    <span>share</span>
                  </div>
                  <div className="videoIcon">
                    <img src={PF + "save.png"} alt="" />
                    <span>save</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr style={{ opacity: "0.5" }} />
          <div className="channel">
            <img
              src={profilePicture ? profilePicture : PF + "avatar.png"}
              alt=""
            />
            <div className="channelInfo">
              <div>
                <h4>{channelTitle}</h4>
                <span>
                  {subscriberCount &&
                    numFormatter(subscriberCount) + " subscribers"}
                </span>
              </div>
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className="channelDesc">
            <p className={!show ? "showLess" : ""}>{description}</p>
            {description && (
              <span onClick={() => setShow(!show)}>
                {!show ? "SHOW MORE" : "SHOW LESS"}
              </span>
            )}
          </div>
          <hr style={{ margin: "20px 0", opacity: "0.5" }} />
        </div>

        {/* video suggetions */}
        <div className="videoRight">
          {data.slice(0, 8).map((video) => {
            const { channelTitle, title } = video.snippet;
            const { videoId } = video.id;
            const thumbnail = video.snippet.thumbnails.medium.url;
            return (
              <div key={videoId} className="videoRightCard">
                <Link to={/video/ + videoId}>
                  <img src={thumbnail} alt="" />
                </Link>
                <div className="videoRightInfo">
                  <h4>{title}</h4>
                  <p>{channelTitle}</p>
                  <p>
                    793k Views &bull; <span>{format(publishedAt)}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Video;
