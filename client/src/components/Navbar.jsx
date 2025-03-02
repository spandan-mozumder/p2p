import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { navCategories } from '../constants/index';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div>
      <nav id="navbar" className="h-20 w-screen border-b-1 border-gray-300">
        <div className="flex h-full items-center justify-between px-8">
          <h1
            className="gradient-text text-4xl font-bold"
            style={{ textShadow: '1px 1px 2px var(--colour-4)' }}
          >
            PeerPals
          </h1>

          <div className="flex flex-row items-center justify-center gap-10">
            <button
              className="flex cursor-pointer flex-row gap-2 text-lg"
              onMouseEnter={() => setIsHovered(true)}
            >
              Categories
              {isHovered ? (
                <img
                  width="30"
                  height="25"
                  src={
                    theme == 'light'
                      ? 'https://img.icons8.com/ios-glyphs/30/212a31/chevron-up.png'
                      : 'https://img.icons8.com/ios-glyphs/30/d3d9d4F/chevron-up.png'
                  }
                  alt="chevron-up"
                  className="rotate-180 transition-all duration-300"
                />
              ) : (
                <img
                  width="30"
                  height="25"
                  src={
                    theme == 'light'
                      ? 'https://img.icons8.com/ios-glyphs/30/212a31/chevron-up.png'
                      : 'https://img.icons8.com/ios-glyphs/30/d3d9d4/chevron-up.png'
                  }
                  alt="chevron-up"
                  className="rotate-0 transition-all duration-300"
                />
              )}
            </button>

            <Link
              to="/"
              className="gradient-text cursor-pointer text-lg font-semibold underline decoration-[var(--colour-4)] underline-offset-3"
            >
              Become an Educator
            </Link>

            <Link to="/" className="cursor-pointer text-lg">
              Sign In
            </Link>

            <Link
              to="/"
              className="cursor-pointer rounded-md border border-[var(--colour-4)] bg-transparent px-5 py-1.5 text-lg text-[var(--colour-4)] transition-all hover:bg-[linear-gradient(to_right,var(--colour-3),var(--colour-5))] hover:text-[var(--colour-1)]"
            >
              Join
            </Link>

            <button onClick={toggleTheme} className="ml-10 cursor-pointer">
              {theme === 'light' ? (
                <img
                  width="35"
                  height="35"
                  src="https://img.icons8.com/external-others-amoghdesign/48/external-dark-multimedia-solid-24px-others-amoghdesign.png"
                  alt="external-dark-multimedia-solid-24px-others-amoghdesign"
                />
              ) : (
                <img
                  width="35"
                  height="35"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/sun--v1.png"
                  alt="sun--v1"
                />
              )}
            </button>
          </div>
        </div>
      </nav>

      {isHovered && (
        <div
          className="absolute right-10 z-10 mt-[-10px] grid h-[80vh] grid-cols-3 gap-2 overflow-x-scroll rounded-lg border bg-[var(--colour-1)] p-3 shadow-lg"
          onMouseLeave={() => setIsHovered(false)}
        >
          {navCategories.map((category, index) => (
            <div
              key={index}
              className="border-b-1 border-[var(--colour-4)] p-2"
            >
              <p className="px-5 py-2 text-lg font-bold text-[var(--colour-3)]">
                {category.domain}
              </p>

              {category.subdomains.map((subdomain, subIndex) => (
                <Link
                  key={subIndex}
                  to={`/category/${subdomain.toLowerCase().replace(/ /g, '-')}`}
                  className="block rounded-lg px-6 py-2 text-sm text-[var(--colour-4)] hover:bg-[var(--colour-3)] hover:font-semibold"
                >
                  {subdomain}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
