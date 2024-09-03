import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useLocation } from "react-router-dom";

import logo from "../assets/images/sytLogo.png";
import CartIcon from "./shop/CartIcon";

const navLinks = [
  {
    id: 1,
    link: "Home",
    route: "/",
  },
  {
    id: 2,
    link: "About Us",
    route: "/about-us",
  },
  {
    id: 3,
    link: "Community",
    route: "/community",
  },
  {
    id: 4,
    link: "Products",
    route: "/products",
  },
  {
    id: 5,
    link: "Blogs",
    route: "/blogs",
  },
  {
    id: 6,
    link: "Resources",
    route: "/resources",
  },
  {
    id: 7,
    link: "Shop",
    route: "/shop",
  },
  // {
  //   id: 8,
  //   link: "Donate",
  //   route: "/donate",
  // },
];

function Header() {
  const [showNavlinks, setShowNavlinks] = useState(false);

  const { pathname } = useLocation();

  return (
    <div className="bg-secondary relative z-30 w-full">
      <header className="bg-secondary py-4 md:px-10 px-6 flex items-center justify-between w-full md:shadow-none shadow-md fixed  md:mx-auto">
        {/* logo */}
        <Link to="/" className="md:w-[60px] w-12">
          <LazyLoadImage src={logo} alt="logo" className="w-full" />
        </Link>

        {/* mobile menu */}
        <div className="flex gap-4 items-center">
          <div className="flex md:hidden">
            <CartIcon />
          </div>
          {showNavlinks ? (
            <button
              type="button"
              aria-label="Close menu"
              className="md:hidden"
              onClick={() => setShowNavlinks(false)}
            >
              <AiOutlineClose
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />{" "}
              {/* Close Icon */}
            </button>
          ) : (
            <button
              type="button"
              aria-label="Open menu"
              className="md:hidden"
              onClick={() => setShowNavlinks(true)}
            >
              <HiOutlineMenuAlt4
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />{" "}
              {/* Menu Icon */}
            </button>
          )}
        </div>

        {/* mobile navlinks */}
        <nav
          className="flex flex-col items-start justify-start gap-6 text-base absolute top-[65px] left-0 bg-secondary rounded-b-lg border-t w-full h-fit z-[1] p-5"
          style={showNavlinks ? { display: "flex" } : { display: "none" }}
        >
          {navLinks.map(({ link, id, route }) => {
            const isActive =
              pathname === route || pathname.startsWith(`${route}/`);
            return (
              <Link
                key={id}
                className={`${
                  isActive ? "text-primary" : "text-white"
                } hover:text-primary transition-all font-normal duration-300 cursor-pointer`}
                to={`${route}`}
                onClick={() => setShowNavlinks(false)}
              >
                {link}
              </Link>
            );
          })}
        </nav>

        {/* navlinks */}
        <nav className="md:flex hidden items-center gap-5 text-base">
          {navLinks.map(({ id, link, route }) => {
            const isActive =
              pathname === route || pathname.startsWith(`${route}/`);
            return (
              <Link
                key={id}
                className={`${
                  isActive ? "text-primary" : "text-white"
                } hover:text-primary transition-all font-normal duration-300 cursor-pointer`}
                to={`${route}`}
              >
                {link}
              </Link>
            );
          })}
        </nav>
      </header>
    </div>
  );
}

export default Header;
