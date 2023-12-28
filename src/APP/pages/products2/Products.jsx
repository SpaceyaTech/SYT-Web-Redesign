import React, { useEffect } from "react";
import { HeroSection, ProductsSection, Teams, TechStack } from "./sections";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="md:px-10 xl:max-w-[1440px] mx-auto">
      <HeroSection />
      <ProductsSection />
      <TechStack />
      <Teams />
    </section>
  );
};

export default Products;
