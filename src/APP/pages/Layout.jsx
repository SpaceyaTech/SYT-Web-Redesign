import { Outlet } from "react-router-dom";

import { Header2, Footer } from "../components";

const Layout = () => {
  return (
    <div>
      <Header2 />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
