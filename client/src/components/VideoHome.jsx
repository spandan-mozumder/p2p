import React from "react";
import videoHome from "../assets/home.mp4";

const VideoHome = () => {
  return (
    <div className="relative w-screen h-[70vh]">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoHome} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 text-white"
        style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.8)" }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Learn, Collaborate, and Share Knowledge
          
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl">
        Because knowledge is free to learn from whoever you want
        </p>
      </div>
    </div>
  );
};

export default VideoHome;
