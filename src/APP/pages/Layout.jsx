import { Outlet, useLocation } from "react-router-dom";

import { Header, Footer } from "../components";
import { useEffect } from "react";

const ScrollToTopOnLinkClick = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const Layout = () => {
  return (
    <div className="w-screen overflow-hidden">
      <Header />
      <ScrollToTopOnLinkClick />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
