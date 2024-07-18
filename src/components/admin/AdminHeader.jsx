/* eslint-disable react/react-in-jsx-scope */
import { CiBellOn } from "react-icons/ci";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useLocation } from "react-router-dom";
import profile from "../../assets/images/adminPage/profile-pic.png";
import logo from "../../assets/images/sytLogo.png";

function AdminHeader() {
  const location = useLocation();

  const adminNavLinks = [
    { to: "/admin", label: "Dashboard" },
    { to: "/admin/blogs", label: "Blogs" },
    { to: "/admin/all-chapters", label: "Chapters" },
    { to: "/admin/events", label: "Events" },
    { to: "/admin/calendar", label: "Calendar" },
  ];

  const shopNavLinks = [
    { to: "/admin/shop", label: "Dashboard" },
    { to: "/admin/shop/sales", label: "Sales" },
    { to: "/admin/shop/orders", label: "Orders" },
    { to: "/admin/shop/inventory", label: "Inventory" },
  ];

  const navLinks = location.pathname.startsWith("/admin/shop")
    ? shopNavLinks
    : adminNavLinks;

  return (
    <header className="py-5 md:px-10 px-5 relative shadow-md">
      {/* mobile menu */}
      <nav className="flex justify-between items-center md:hidden">
        <div>
          {/* logo */}
          <Link to="/">
            <LazyLoadImage
              src={logo}
              alt="logo"
              className="md:w-16 w-12 md:hidden"
            />
          </Link>
        </div>
        <div className="flex gap-5 items-center">
          <Link
            className="transition-all duration-300 cursor-pointer"
            to="/notification"
          >
            <CiBellOn className="size-8" />
          </Link>
          <Link
            className="transition-all duration-300 cursor-pointer"
            to="/profile"
          >
            <LazyLoadImage
              src={profile}
              alt="profile pic"
              className="rounded-full"
            />
          </Link>
        </div>
      </nav>

      {/* navlinks */}
      <nav className="md:flex justify-between hidden items-center text-base font-medium gap-12">
        <div>
          {/* logo */}
          <Link to="/">
            <LazyLoadImage src={logo} alt="logo" className="md:w-16 w-12" />
          </Link>
        </div>
        <div className="md:flex flex-1 gap-12">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              className="text-[#7E8180] hover:text-primary transition-all duration-300 cursor-pointer rounded"
              to={link.to}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="md:flex gap-8 items-center">
          <Link
            className="text-[#7E8180] hover:text-primary transition-all duration-300 cursor-pointer"
            to="/"
          >
            <CiBellOn className="size-8" />
          </Link>
          <Link
            className="text-[#7E8180] hover:text-primary transition-all duration-300 cursor-pointer"
            to="/about-us"
          >
            <LazyLoadImage
              src={profile}
              alt="profile pic"
              className="rounded-full"
            />
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default AdminHeader;
