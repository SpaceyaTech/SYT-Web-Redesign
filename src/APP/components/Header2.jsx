import logo from "../../assets/images/sytLogo.png";
import { useState } from "react";

import menu from "../../assets/images/hamburger-menu.svg";
import { Link } from "react-router-dom";

const Header2 = () => {
  const [showNavlinks, setShowNavlinks] = useState(false);

  return (
    <header className="py-5 md:px-10 px-5 flex items-center justify-between md:shadow-none shadow-md relative max-w-[1440px] md:mx-auto">
      {/* logo */}
      <Link to="/">
        <img src={logo} alt="logo" className="md:w-16 w-12" />
      </Link>

      {/* mobile menu */}
      <img
        src={menu}
        alt="logo"
        className="md:hidden"
        onClick={() => setShowNavlinks((prev) => !prev)}
      />

      {/* mobile navlinks */}
      <nav
        className="flex-col items-start gap-8 text-base absolute top-[90px] left-0 bg-white w-full h-[480px] z-[1] p-5 pl-12"
        style={showNavlinks ? { display: "flex" } : { display: "none" }}
      >
        <Link
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer focus:text-[#009975] focus:underline"
          to="/"
          onClick={() => setShowNavlinks(false)}
        >
          Home
        </Link>

        <Link
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer focus:text-[#009975] focus:underline"
          to="/about-us"
          onClick={() => setShowNavlinks(false)}
        >
          About Us
        </Link>

        <Link
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer focus:text-[#009975] focus:underline"
          to="/community"
          onClick={() => setShowNavlinks(false)}
        >
          Community
        </Link>

        <Link
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer focus:text-[#009975] focus:underline"
          to="/products"
          onClick={() => setShowNavlinks(false)}
        >
          Products
        </Link>

        <Link
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer focus:text-[#009975] focus:underline"
          to="/blogs"
          onClick={() => setShowNavlinks(false)}
        >
          Blog
        </Link>

        <Link
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer focus:text-[#009975] focus:underline"
          to="/resources"
          onClick={() => setShowNavlinks(false)}
        >
          Resources
        </Link>

        <Link
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer focus:text-[#009975] focus:underline"
          to="/shop"
          onClick={() => setShowNavlinks(false)}
        >
          Shop
        </Link>

        <Link
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer focus:text-[#009975] focus:underline"
          to="/donate"
          onClick={() => setShowNavlinks(false)}
        >
          Donate
        </Link>
      </nav>

      {/* navlinks */}
      <nav className="md:flex hidden items-center gap-5 text-base">
        <Link
          className="text-gray-900 hover:text-[#009975] hover:underline focus:text-[#009975] focus:underline transition-all duration-300 cursor-pointer"
          to="/"
        >
          Home
        </Link>

        <Link
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer focus:text-[#009975] focus:underline"
          to="/about-us"
        >
          About Us
        </Link>

        <Link
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer focus:text-[#009975] focus:underline"
          to="/community"
        >
          Community
        </Link>

        <Link
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer focus:text-[#009975] focus:underline"
          to="/products"
        >
          Products
        </Link>

        <Link
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer focus:text-[#009975] focus:underline"
          to="/blogs"
        >
          Blog
        </Link>

        <Link
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer focus:text-[#009975] focus:underline"
          to="/resources"
        >
          Resources
        </Link>

        <Link
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer focus:text-[#009975] focus:underline"
          to="/shop"
        >
          Shop
        </Link>
        <Link
          className="text-gray-900 hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer focus:text-[#009975] focus:underline"
          to="/donate"
        >
          Donate
        </Link>
      </nav>
    </header>
  );
};

export default Header2;
