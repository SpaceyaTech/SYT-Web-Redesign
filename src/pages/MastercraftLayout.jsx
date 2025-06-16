import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Header, ResourcesFooter } from "../components";

function ScrollToTopOnLinkClick() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MastercraftLayout() {
  return (
    <div className="w-screen overflow-hidden bg-[#F5F5F5]">
      <Header />
      <ScrollToTopOnLinkClick />
      <Outlet />
      <ResourcesFooter />
    </div>
  );
}

export default MastercraftLayout;
