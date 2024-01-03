import React from "react";
import {
  Banner,
  CategoriesSection,
  PopularItemsSection,
  SearchAndCart,
} from "../sections";

function Homepage() {
  return (
    <main className="max-w-[1440px] mx-auto flex flex-col gap-4 items-center">
      <Banner />
      <SearchAndCart />
      <CategoriesSection />
      <PopularItemsSection />
    </main>
  );
}

export default Homepage;
