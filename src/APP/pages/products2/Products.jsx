import React, { useEffect } from "react";
import { HeroSection, ProductsSection, Teams, TechStack } from "./sections";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection />
      <ProductsSection />
      <TechStack />
      <Teams />
    </>
  );
};

export default Products;
