import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header, Footer } from "../components";

function ScrollToTopOnLinkClick() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Layout() {
  return (
    <div className="w-screen overflow-hidden">
      <Header />
      <ScrollToTopOnLinkClick />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
