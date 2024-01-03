import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SearchAndCart from "./sections/SearchAndCart";

function Shop() {
  return (
    <div>
      ase
      <Header />
      jnr
      <SearchAndCart />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Shop;
