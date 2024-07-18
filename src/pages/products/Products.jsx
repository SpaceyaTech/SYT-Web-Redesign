import { HeroSection, ProductsSections } from "./sections";

const Products = () => {
  return (
    <div className="p-10 flex flex-col gap-8">
      <HeroSection />
      <ProductsSections />
    </div>
  );
};

export default Products;
