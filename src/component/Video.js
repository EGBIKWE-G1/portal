import React, {
  useRef,
  useState,
  useEffect,
  useCallback,
  useContext,
} from "react";

import VisibilitySensor from "react-visibility-sensor";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";
import { MutedContext } from "../context/MutedContext";
import useOnScreen from "../hooks/useOnScreen";

const Video = (props) => {
  const { muted, setMuted } = useContext(MutedContext);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const isShowing = useOnScreen(ref);
  const playOrPause = useCallback(() => {
    if (videoRef.current.paused || videoRef.current.ended) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, []);

  useEffect(() => {
    if (isVisible) {
      videoRef.current.play();
    } else {
      if (videoRef.current.play) {
        videoRef.current.pause();
      }
    }
  }, [isVisible]);

  const onPlay = useCallback(() => setIsPlaying(true), []);

  const onPause = useCallback(() => setIsPlaying(false), []);
  const handleMuted = () => {
    setMuted(!muted);
  };
  return (
    <div className="video-wrapper" ref={ref}>
      <VisibilitySensor onChange={(isVisible) => setIsVisible(isVisible)}>
        <video
          width="100%"
          onPlay={onPlay}
          onPause={onPause}
          ref={videoRef}
          // ref={videoVisibleRef}
          className="video"
          src={props.src}
          // style={{ height: "25rem" }}
          muted={muted}
          // isShowing={isShowing}
          // className="tw-object-contain"
        />
      </VisibilitySensor>
      <div
        className="info--icon tw-flex tw-mr-4  tw-place-content-end tw-z-10 tw-absolute  tw-right-0"
        style={{ fontSize: "8px", bottom: "1rem" }}
        onClick={handleMuted}
      >
        {!muted ? <VolumeUpIcon /> : <VolumeOffIcon />}
      </div>
      <div className="controls" onClick={playOrPause}>
        <img
          src="/assets/images/play.png"
          alt="play button"
          className={`video-control ${
            isPlaying ? "control-hidden" : "control-shown"
          }`}
        />
      </div>
    </div>
  );
};

export default Video;
