import { Link } from "react-router-dom";

function BottomNavBar() {
  return (
    <nav className="flex flex-row items-center justify-between font-medium text-sm fixed overflow-hidden bottom-0 left-0 bg-white w-full px-3 py-5 shadow-2xl border-y border-[#E7E0EC] md:hidden">
      <Link
        className="text-[#7E8180] hover:text-[#009975] transition-all duration-300 cursor-pointer"
        to="/admin"
      >
        Dashboard
      </Link>

      <Link
        className="text-[#7E8180] hover:text-[#009975] transition-all duration-300 cursor-pointer"
        to="/admin/blogs/manage-posts"
      >
        Blogs
      </Link>
      <Link
        className="text-[#7E8180] hover:text-[#009975] transition-all duration-300 cursor-pointer"
        to="/admin/all-chapters"
      >
        Chapters
      </Link>
      <Link
        className="text-[#7E8180] hover:text-[#009975] transition-all duration-300 cursor-pointer"
        to="/admin/events"
      >
        Events
      </Link>
      <Link
        className="text-[#7E8180] hover:text-[#009975] transition-all duration-300 cursor-pointer"
        to="/calendar"
      >
        Calendar
      </Link>
    </nav>
  );
}

export default BottomNavBar;
