import { LandingWrapper } from "@/components";
import SectionWrapper from "@/components/shop/SectionWrapper";
import { useSwagList } from "@/hooks/Queries/shop/useSwagList";
import ProductCard from "@/components/shop/ProductCard";

const FeaturedProducts = () => {
  const { data: swagList, isSuccess } = useSwagList();

  return (
    <LandingWrapper title="Featured Products">
      <SectionWrapper>
        <section className="w-full flex flex-col gap-4 px-3 ">
          <h3 className="text-green-header text-center font-semibold text-xl md:text-3xl mb-4">
            Our most popular products
          </h3>
        </section>
        <div className="mt-8 py-4 flex gap-4 overflow-x-scroll h-full w-full hr-scrollbar">
          {isSuccess &&
            swagList?.map((product) => (
              <div
                className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]  h-full"
                key={product.id}
              >
                <ProductCard product={product} />
              </div>
            ))}
        </div>
      </SectionWrapper>
    </LandingWrapper>
  );
};

export default FeaturedProducts;
