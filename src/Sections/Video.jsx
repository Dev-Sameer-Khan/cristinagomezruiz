import React from "react";

const Video = () => {
  return (
    <div className="w-full h-[90vh] overflow-hidden px-6 py-12 flex items-center justify-center gap-6">
      <div className="video-1 w-[35%] translate-y-[15%]">
        <video
          className="w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/2795403/2795403-sd_360_640_25fps.mp4"
          loop
          muted
          autoPlay
        ></video>
      </div>
      <div className="video-1 w-[35%] translate-y-[15%]">
        <video
          className="w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/31187306/13323002_360_640_60fps.mp4"
          loop
          muted
          autoPlay
        ></video>
      </div>
      <div className="video-1 w-[35%] translate-y-[15%]">
        <video
          className="w-full h-full object-cover"
          src="https://videos.pexels.com/video-files/31176452/13317937_360_640_30fps.mp4"
          loop
          muted
          autoPlay
        ></video>
      </div>
    </div>
  );
};

export default Video;
