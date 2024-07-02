import { LandingWrapper } from "@/components";
import SectionWrapper from "@/components/shop/SectionWrapper";
import { useSwagList } from "@/hooks/Queries/shop/useSwagList";
import ProductCard from "@/components/shop/ProductCard";

const NewProducts = () => {
  const { data: swagList, isSuccess } = useSwagList();

  return (
    <LandingWrapper title="Browse">
      <SectionWrapper>
        <section className="w-full flex flex-col gap-4 px-3 ">
          <h3 className="text-green-header text-center font-semibold text-xl md:text-3xl mb-4">
            Discover new products
          </h3>
        </section>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {isSuccess &&
            swagList?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </SectionWrapper>
    </LandingWrapper>
  );
};

export default NewProducts;
