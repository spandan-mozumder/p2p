import React from 'react';
import videoHome from '../assets/home.mp4';

const VideoHome = () => {
  return (
    <div className="relative h-[70vh] w-screen">
      <video
        className="absolute left-0 top-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoHome} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white"
        style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' }}
      >
        <h1 className="mb-4 text-4xl font-bold md:text-6xl">
          Learn, Collaborate, and Share Knowledge
        </h1>
        <p className="max-w-2xl text-lg md:text-2xl">
          Because knowledge is free to learn from whoever you want
        </p>
      </div>
    </div>
  );
};

export default VideoHome;
