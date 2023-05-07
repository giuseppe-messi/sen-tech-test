import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/lazy";
import { Video, videoStore } from "src/store/videoStore";
import { useEffect, useState } from "react";

const Player = () => {
  let { id } = useParams();

  const [video] = useState({
    title: sessionStorage.getItem("title"),
    tags: sessionStorage.getItem("tags"),
    viewCount: sessionStorage.getItem("viewCount"),
    likeCount: sessionStorage.getItem("likeCount"),
  });

  const { title, tags, viewCount, likeCount } = video;

  return (
    <>
      <ReactPlayer
        url={`https://www.youtube.com/watch?v=${id}`}
        controls={true}
        playsinline={true}
        config={{
          file: {
            forceVideo: true,
            forceAudio: true,
          },
          youtube: {
            playerVars: {
              autoplay: 1,
              controls: 1,
              modestbranding: 1,
              rel: 0,
              showinfo: 0,
              playsinline: 1,
              origin: window.location.origin,
              // Enable adaptive bitrate
              hls: {
                adaptive: true,
              },
              // Enable hardware acceleration
              playerVars: {
                hardwareAcceleration: 1,
              },
              // Choose the best video format for the web
              // 22: 720p, 43: 360p, 18: 360p, 36: 240p, 17: 144p
              fmt: "22+251/43+251/18+251/36+251/17",
              // Use video compression to improve load time
              // 1: Fast Start, 3: Use GPU, 15: Use compression
              iv_load_policy: 1,
              ecver: 3,
              enablejsapi: 1,
            },
          },
        }}
      />
      <h1>{title}</h1>
    </>
  );
};
export default Player;
