import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { cancel, menu } from "../../assets/images/icons";
import logo from "../../assets/images/sytLogo.png";

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

function Header() {
  const [showNavlinks, setShowNavlinks] = useState(false);

  const { pathname } = useLocation();

  return (
    <div className="bg-secondary">
      <header className="py-2.5 md:px-10 px-5 flex items-center justify-between md:shadow-none shadow-md relative max-w-[1440px] md:mx-auto">
        {/* logo */}
        <Link to="/" className="md:w-[60px] w-12">
          <img src={logo} alt="logo" className="w-full" />
        </Link>

        {/* mobile menu */}
        {showNavlinks ? (
          <img
            src={cancel}
            alt="cancel"
            className="md:hidden"
            onClick={() => setShowNavlinks(false)}
          />
        ) : (
          <img
            src={menu}
            alt="menu"
            className="md:hidden"
            onClick={() => setShowNavlinks(true)}
          />
        )}

        {/* mobile navlinks */}
        <nav
          className="flex flex-col items-start justify-start gap-6 text-base absolute top-[65px] left-0 bg-secondary rounded-b-lg border-t w-full h-fit z-[1] p-5"
          style={showNavlinks ? { display: "flex" } : { display: "none" }}
        >
          {navLinks.map(({ link, id, route }) => {
            const isActive = pathname === route;
            return (
              <Link
                key={id}
                className={`${
                  isActive ? "text-primary" : "text-white"
                } hover:text-primary transition-all duration-300 cursor-pointer`}
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
                  isActive ? "text-primary" : "text-white"
                } hover:text-primary transition-all duration-300 cursor-pointer`}
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
