import React from 'react';
import videoHome from '../assets/home.mp4';

const VideoHome = () => {
  return (
    <div className="flex h-[80vh] w-screen items-center justify-center">
      <div className="relative h-[70vh] w-[80vw] rounded-4xl drop-shadow-[0_15px_15px_rgba(0,0,0,0.4)]">
        <video
          className="absolute top-0 left-0 h-full w-full rounded-4xl object-cover"
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
    </div>
  );
};

export default VideoHome;
