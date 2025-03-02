import React from 'react';
import Navbar from '../components/Navbar';
import VideoHome from '../components/VideoHome';
import USPHome from '../components/USPHome';

const WelcomePage = () => {
  return (
    <div className="h-full w-screen bg-[var(--colour-1)] text-[var(--colour-4)]">
      <Navbar />
      <VideoHome />
      <div className="m-10 h-full p-10">
        <USPHome />
      </div>
    </div>
  );
};

export default WelcomePage;
