import React from 'react';
import { navCategories } from '../constants/index';

const Footer = () => {
  return (
    <div>
      <div className="flex h-full flex-row items-center justify-between px-20 py-5">
        <div>
          <h4>For Categories</h4>
          {navCategories.map((category, index) => (
            <p
              key={index}
              className="rounded-md border border-[var(--colour-4)] px-5 py-7 text-lg font-medium"
            >
              {category.domain}
            </p>
          ))}
        </div>
        <div>
          <h4>For Students</h4>
          <p>How PeerPal Works</p>
          <p>Customer Success Stories</p>
          <p>Trust and Safety</p>
          <p>Quality Guide</p>
          <p>Community</p>
        </div>
        <div>
          <h4>For Educators</h4>
          <p>Become a PeerPal Educator</p>
          <p>Educator Equity Program</p>
          <p>Forum</p>
          <p>Events</p>
        </div>
        <div>
          <h4>For Company</h4>
          <p>About PeerPal</p>
          <p>Help and Support</p>
          <p>Careers</p>
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Invite a Friend</p>
          <p>Press & News</p>
        </div>
      </div>

      <div>
        <p>PeerPal</p>
        <p>@ Peerpal International Ltd. 2025</p>
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/instagram-new--v1.png"
          alt="instagram-new--v1"
        />
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/50/linkedin.png"
          alt="linkedin"
        />
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/50/facebook-new.png"
          alt="facebook-new"
        />
        <img
          width="50"
          height="50"
          src="https://img.icons8.com/ios/50/twitterx--v2.png"
          alt="twitterx--v2"
        />
      </div>
    </div>
  );
};

export default Footer;
