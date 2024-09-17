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

function ResourcesLayout() {
  return (
    <div className="w-screen overflow-hidden">
      <Header />
      <ScrollToTopOnLinkClick />
      <Outlet />
      <ResourcesFooter />
    </div>
  );
}

export default ResourcesLayout;
