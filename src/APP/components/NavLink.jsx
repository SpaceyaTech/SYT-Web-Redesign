import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ route, link }) => {
  const { pathname } = useLocation();

  console.log("Pathname: ", pathname, "Route: ", route);
  const isActive = pathname === route;
  return (
    <Link
      className={`${
        isActive ? "text-[#009975] underline" : "text-gray-900"
      } hover:text-[#009975] hover:underline transition-all duration-300 cursor-pointer`}
      to={`${route}`}
    >
      {link}
    </Link>
  );
};

export default NavLink;
