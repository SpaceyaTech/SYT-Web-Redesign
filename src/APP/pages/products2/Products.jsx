import React, { useEffect } from "react";
import SeoMetadata from "../../components/SeoMetadata";
import { HeroSection, ProductsSection, Teams, TechStack } from "./sections";

const Products = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SeoMetadata
        title="Products"
        description="A collection of products build by SpaceYaTech. We build products that work and look good."
        type="website"
        url="https://www.spaceyatech.com/products"
        ogImage="https://apis.spaceyatech.com/media/blog-images/syt.png"
        ogImageAlt="SpaceYaTech logo, social media handles, website URL, email, and more on a muted background."
      />
      <section className="md:px-10 xl:max-w-[1440px] mx-auto">
        <HeroSection />
        <ProductsSection />
        <TechStack />
        <Teams />
      </section>
    </>
  );
};

export default Products;
