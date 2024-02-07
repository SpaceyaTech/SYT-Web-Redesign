import React from "react";
import PopularItemsSection from "./sections/PopularItemsSection";
import SingleItemPage from "./SingleItemPage";

function ProductDisplay() {
  return (
    <div>
      <SingleItemPage />
      <PopularItemsSection />
    </div>
  );
}

export default ProductDisplay;
