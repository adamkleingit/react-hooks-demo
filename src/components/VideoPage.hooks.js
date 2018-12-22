import React, { useState } from "react";
import Video, { useVideoState } from "./Video";

const VideoPage = () => {
  const [value, setValue] = useState("");
  const videoState = useVideoState(false);
  return (
    <div className="video-page">
      <input value={value} onChange={e => setValue(e.target.value)} />
      <button onClick={videoState.toggleIsPlaying}>
        {videoState.isPlaying ? "Pause" : "Play"}
      </button>
      <Video {...videoState} src="https://www.w3schools.com/html/mov_bbb.mp4" />
    </div>
  );
};

export default VideoPage;
