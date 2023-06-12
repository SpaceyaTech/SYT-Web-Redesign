import logo from "../../assets/images/sytLogo.png";
import { useState } from "react";

import menu from "../../assets/images/hamburger-menu.svg";

const Header2 = () => {
  const [showNavlinks, setShowNavlinks] = useState(false);

  return (
    <header className="py-5 md:px-10 px-5 flex items-center justify-between md:shadow-none shadow-md relative">
      {/* logo */}
      <a href="/">
        <img src={logo} alt="logo" className="md:w-16 w-12" />
      </a>

      {/* mobile menu */}
      <img
        src={menu}
        alt="logo"
        className="md:hidden"
        onClick={() => setShowNavlinks((prev) => !prev)}
      />

      {/* mobile navlinks */}
      <nav
        className=" flex-col items-start gap-8 text-base absolute top-[90px] left-0 bg-white w-full h-[480px] z-[1] p-5 pl-12"
        style={showNavlinks ? { display: "flex" } : { display: "none" }}
      >
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/"
          onClick={() => setShowNavlinks(false)}
        >
          Home
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/"
          onClick={() => setShowNavlinks(false)}
        >
          About Us
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/"
          onClick={() => setShowNavlinks(false)}
        >
          Resources
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/"
          onClick={() => setShowNavlinks(false)}
        >
          Community
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/"
          onClick={() => setShowNavlinks(false)}
        >
          Products
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/"
          onClick={() => setShowNavlinks(false)}
        >
          Blog
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/"
          onClick={() => setShowNavlinks(false)}
        >
          Shop
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/"
          onClick={() => setShowNavlinks(false)}
        >
          Donate
        </a>
      </nav>

      {/* navlinks */}
      <nav className="md:flex hidden items-center gap-5 text-base">
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/"
        >
          Home
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/"
        >
          About Us
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/"
        >
          Resources
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/"
        >
          Community
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/"
        >
          Products
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/"
        >
          Blog
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/"
        >
          Shop
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/"
        >
          Donate
        </a>
      </nav>
    </header>
  );
};

export default Header2;
