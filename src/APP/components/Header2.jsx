import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/images/sytLogo.png";
import menu from "../../assets/images/hamburger-menu.svg";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
  // {
  //   id: 7,
  //   link: "Shop",
  //   route: "/shop",
  // },
  // {
  //   id: 8,
  //   link: "Donate",
  //   route: "/donate",
  // },
];

const Header2 = () => {
  const [showNavlinks, setShowNavlinks] = useState(false);

  const { pathname } = useLocation();

  return (
    <header className="py-5 md:px-10 px-5 flex items-center justify-between md:shadow-none shadow-md relative max-w-[1440px] md:mx-auto">
      {/* logo */}
      <Link to="/">
        <LazyLoadImage src={logo} alt="logo" className="md:w-16 w-12" />
      </Link>

      {/* mobile menu */}
      <LazyLoadImage
        src={menu}
        alt="logo"
        className="md:hidden"
        onClick={() => setShowNavlinks((prev) => !prev)}
      />

      {/* mobile navlinks */}
      <nav
        className="flex flex-col items-start justify-start gap-6 text-base absolute top-[90px] left-0 bg-white border-b w-full h-fit z-[1] p-5 pl-12"
        style={
          showNavlinks
            ? { display: "flex", height: "calc(100vh - 90px)" }
            : { display: "none" }
        }
      >
        {navLinks.map(({ link, id, route }) => {
          const isActive = pathname === route;
          return (
            <Link
              key={id}
              className={`${
                isActive ? "text-primary underline" : "text-gray-900"
              } hover:text-primary hover:underline transition-all duration-300 cursor-pointer`}
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
          const isActive = pathname === route;
          return (
            <Link
              key={id}
              className={`${
                isActive ? "text-primary underline" : "text-gray-900"
              } hover:text-primary hover:underline transition-all duration-300 cursor-pointer`}
              to={`${route}`}
            >
              {link}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default Header2;
