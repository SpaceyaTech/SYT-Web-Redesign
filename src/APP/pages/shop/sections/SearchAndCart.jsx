import React from "react";
import { Link } from "react-router-dom";

import { cart, search } from "../../../../assets/images/shop-page";

function SearchAndCart() {
  return (
    <div className="flex flex-row gap-4 justify-between items-center border-2 w-full px-4 py-2 md:px-10 md:py-6">
      <form className="flex items-center rounded-lg max-w-lg px-4 py-2 ring-1 ring-black w-5/6 md:w-lg">
        <input type="text" placeholder="Search products" className="w-full" />

        <button type="submit" className="h-6 w-6">
          <img
            src={search}
            alt="search"
            className="object-contain h-full w-full"
          />
        </button>
      </form>

      <Link to="/shop" className="h-8 md:w-8 w-1/6 ">
        <img src={cart} alt="cart" className="w-full h-full object-contain" />
      </Link>
    </div>
  );
}

export default SearchAndCart;
