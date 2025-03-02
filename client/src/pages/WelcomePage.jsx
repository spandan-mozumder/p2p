import React from 'react';
import Navbar from '../components/Navbar';
import VideoHome from '../components/VideoHome';
import CategoriesHome from '../components/CategoriesHome';
import USPHome from '../components/USPHome';
import Footer from '../components/Footer';

const WelcomePage = () => {
  return (
    <div className="h-full bg-[var(--colour-1)] text-[var(--colour-4)]">
      <Navbar />
      <VideoHome />
      <CategoriesHome />
      <USPHome />
      <Footer />
    </div>
  );
};

export default WelcomePage;
