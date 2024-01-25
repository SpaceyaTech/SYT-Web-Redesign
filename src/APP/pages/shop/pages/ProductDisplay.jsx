import React from "react";
import SingleItemPage from "./SingleItemPage";
import PopularItemsSection from "../sections/PopularItemsSection";

function ProductDisplay() {
  return (
    <div>
      <SingleItemPage />
      <PopularItemsSection />
    </div>
  );
}

export default ProductDisplay;
