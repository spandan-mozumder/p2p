import React from "react";
import Navbar from "../components/Navbar";
import VideoHome from "../components/VideoHome";
import USPHome from "../components/USPHome";

const WelcomePage = () => {
  return (
    <div className="w-screen h-full bg-[var(--colour-1)] text-[var(--colour-5)]">
      <Navbar />
      <VideoHome />
      <div className="m-20 h-full">
        <USPHome />
      </div>
    </div>
  );
};

export default WelcomePage;
