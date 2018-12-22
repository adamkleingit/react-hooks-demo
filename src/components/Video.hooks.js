import React, { memo, useRef, useEffect } from "react";
import { useDetectScroll, useFlag } from "../hooks/common.hooks";
import { omit } from "lodash/fp";

export const useVideoState = initialIsPlaying => {
  const [isPlaying, toggleIsPlaying] = useFlag(initialIsPlaying);
  const videoRef = useRef();

  const isMinimized = useDetectScroll(videoRef);

  return {
    isPlaying,
    toggleIsPlaying,
    videoRef,
    isMinimized
  };
};

const Video = ({ src, toggleIsPlaying, isPlaying, isMinimized, videoRef }) => {
  console.count("render");

  useEffect(
    () => {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    },
    [isPlaying]
  );

  return (
    <video
      onClick={toggleIsPlaying}
      className={isMinimized ? "minimized" : ""}
      ref={videoRef}
      preload=""
      src={src}
    />
  );
};

export default memo(Video);
