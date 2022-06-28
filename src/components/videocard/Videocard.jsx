import "./videocard.css";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getChannel } from "../../features/videoSlice";

const apikey = "AIzaSyAIIkawVE52beRqK5hejFYOF2YiRoYmDxs";

const Videocard = ({ video }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const dispatch = useDispatch();

  // video destructuring
  const { channelTitle, title, channelId, publishedAt } = video?.snippet;
  const { videoId } = video?.id;
  const thumbnail = video?.snippet.thumbnails.medium.url;

  // channelProfile destructuring
  const [channel, setChannel] = useState([]);
  const profilePicture = channel?.snippet?.thumbnails?.default.url;

  useEffect(() => {
    const FetchChannel = async () => {
      try {
        await fetch(
          `https://www.googleapis.com/youtube/v3/channels?key=${apikey}&part=snippet,contentDetails,statistics&id=${channelId}`
        )
          .then((response) => response.json())
          .then((data) => {
            dispatch(getChannel(data?.items[0]));
            setChannel(data?.items[0]);
          });
      } catch (error) {
        console.log({ msg: error.message });
      }
    };
    FetchChannel();
  }, [dispatch, channelId]);

  return (
    <div className="videocard">
      <Link to={/video/ + videoId}>
        <img src={thumbnail ? thumbnail : PF + "thumbnail1.png"} alt="" />
      </Link>
      <div className="videoInfo">
        <img src={profilePicture ? profilePicture : PF + "avatar.png"} alt="" />
        <div className="videoDesc">
          <Link
            to={/video/ + videoId}
            style={{ textDecoration: "none", color: "black" }}
          >
            <h4>{title}</h4>
          </Link>
          <p>{channelTitle}</p>
          <p>
            15k Views &bull; <span>{format(publishedAt)}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Videocard;
