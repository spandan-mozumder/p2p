import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { navCategories } from "../constants/index";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <nav
        id="navbar"
        className="h-20 w-screen border-b-1 border-[var(--colour-4)]"
      >
        <div className="flex items-center justify-between h-full px-8">
          <h1 className="gradient-text text-4xl font-bold">PeerPals</h1>

          <div className="flex flex-row justify-center items-center gap-10">
            <button
              className="cursor-pointer text-lg flex flex-row gap-2"
              onMouseEnter={() => setIsHovered(true)}
            >
              Categories
              {isHovered ? (
                <img
                  width="30"
                  height="25"
                  src={theme=="light"?("https://img.icons8.com/ios-glyphs/30/chevron-up.png"):("https://img.icons8.com/ios-glyphs/30/FFFFFF/chevron-up.png")}
                  alt="chevron-up"
                  className="rotate-180 transition-all duration-300"
                />
              ) : (
                <img
                  width="30"
                  height="25"
                  src={theme=="light"?("https://img.icons8.com/ios-glyphs/30/chevron-up.png"):("https://img.icons8.com/ios-glyphs/30/FFFFFF/chevron-up.png")}
                  alt="chevron-up"
                  className="rotate-0 transition-all duration-300"
                />
              )}
            </button>

            <Link
              to="/"
              className=" gradient-text underline underline-offset-3 decoration-[var(--colour-5)] cursor-pointer text-lg font-semibold"
            >
              Become an Educator
            </Link>

            <Link to="/" className="cursor-pointer text-lg">
              Sign In
            </Link>

            <Link
              to="/"
              className="text-lg rounded-md px-5 py-1.5 text-[var(--colour-5)] hover:text-[var(--colour-1)] bg-transparent border border-[var(--colour-4)] hover:bg-[linear-gradient(to_right,var(--colour-3),var(--colour-5))] transition-all cursor-pointer"
            >
              Join
            </Link>

            <button onClick={toggleTheme} className="ml-10 cursor-pointer">
              {theme === "light" ? (
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
          className="absolute bg-[var(--colour-1)] shadow-lg rounded-lg z-10 h-[80vh] grid grid-cols-3 gap-2 right-10 overflow-x-scroll p-3 border mt-[-10px]"
          onMouseLeave={() => setIsHovered(false)}
        >
          {navCategories.map((category, index) => (
            <div
              key={index}
              className="border-b-1 border-[var(--colour-5)] p-2"
            >
              <p className="px-4 py-2 font-bold text-[var(--colour-3)] text-md">
                {category.domain}
              </p>

              {category.subdomains.map((subdomain, subIndex) => (
                <Link
                  key={subIndex}
                  to={`/category/${subdomain.toLowerCase().replace(/ /g, "-")}`}
                  className="block px-6 py-2 text-[var(--colour-5)] hover:bg-[var(--colour-2)] hover:font-semibold rounded-lg text-sm"
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
