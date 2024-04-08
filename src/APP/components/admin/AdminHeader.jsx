/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";
import logo from "../../../assets/images/sytLogo.png";
import bell from "../../../assets/images/icons/bell-icon.svg";
import profile from "../../../assets/images/adminPage/profile-pic.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function AdminHeader() {
  return (
    <header className="py-5 md:px-10 px-5 relative">
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
            <LazyLoadImage src={bell} alt="notification icon" />
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
          <Link
            className="text-[#7E8180] hover:text-primary transition-all duration-300 cursor-pointer rounded"
            to="/admin"
          >
            Dashboard
          </Link>
          <Link
            className="text-[#7E8180] hover:text-primary transition-all duration-300 cursor-pointer"
            to="/admin"
          >
            Blogs
          </Link>
          <Link
            className="text-[#7E8180] hover:text-primary transition-all duration-300 cursor-pointer"
            to="/admin/all-chapters"
          >
            Chapters
          </Link>
          <Link
            className="text-[#7E8180] hover:text-primary transition-all duration-300 cursor-pointer"
            to="/admin/events"
          >
            Events
          </Link>
          <Link
            className="text-[#7E8180] hover:text-primary transition-all duration-300 cursor-pointer"
            to="/admin/calendar"
          >
            Calendar
          </Link>
        </div>
        <div className="md:flex gap-8 items-center ">
          <Link
            className="text-[#7E8180] hover:text-primary transition-all duration-300 cursor-pointer"
            to="/"
          >
            <LazyLoadImage src={bell} alt="notification icon" />
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
