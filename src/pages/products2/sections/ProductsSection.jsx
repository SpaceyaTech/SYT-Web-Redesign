import React from "react";

import ProductsCard from "./ProductsCard";
import { products } from "../data";

const ProductsSection = () => {
  return (
    <section className="py-2 px-4 md:px-8 md:py-4 flex flex-col gap-6 md:gap-10">
      {products.map(({ name, desc, img, link }, i) => (
        <ProductsCard
          key={name}
          name={name}
          desc={desc}
          img={img}
          link={link}
          index={i}
        />
      ))}
    </section>
  );
};

export default ProductsSection;
