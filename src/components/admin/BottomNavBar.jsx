import { Link, useLocation } from "react-router-dom";

function BottomNavBar() {
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

  const navLinks = location.pathname.startsWith("/shop") ? shopNavLinks : adminNavLinks;

  return (
    <nav className="flex flex-row items-center justify-between font-medium text-sm fixed overflow-hidden bottom-0 left-0 bg-white w-full px-3 py-5 shadow-2xl border-y border-[#E7E0EC] md:hidden">
      {navLinks.map((link) => (
        <Link
          key={link.label}
          className="text-[#7E8180] hover:text-primary transition-all duration-300 cursor-pointer"
          to={link.to}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

export default BottomNavBar;
