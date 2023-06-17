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
          href="/about-us"
          onClick={() => setShowNavlinks(false)}
        >
          About Us
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/resources"
          onClick={() => setShowNavlinks(false)}
        >
          Resources
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/community"
          onClick={() => setShowNavlinks(false)}
        >
          Community
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/products"
          onClick={() => setShowNavlinks(false)}
        >
          Products
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/blog"
          onClick={() => setShowNavlinks(false)}
        >
          Blog
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/shop"
          onClick={() => setShowNavlinks(false)}
        >
          Shop
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/donate"
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
          href="/about-us"
        >
          About Us
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/resources"
        >
          Resources
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/community"
        >
          Community
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/products"
        >
          Products
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/blog"
        >
          Blog
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/shop"
        >
          Shop
        </a>
        <a
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer"
          href="/donate"
        >
          Donate
        </a>
      </nav>
    </header>
  );
};

export default Header2;
