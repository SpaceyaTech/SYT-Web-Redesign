import { LandingWrapper } from "../../../components";
import ProductCard from "../../../components/shop/ProductCard";
import SectionWrapper from "../../../components/shop/SectionWrapper";
import { useSwagList } from "../../../hooks/Queries/shop/useSwagList";

function BrowseProducts() {
  const { data: swagList, isSuccess, isError, isPending } = useSwagList();

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
            Array.isArray(swagList) &&
            swagList.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        {isPending && (
          <div className="flex justify-center items-center my-8">
            <div className="text-base font-normal leading-5 tracking-[0.25px]">
              <p className="font-bold text-gray-900">Loading products... </p>
              <div className="mt-6 text-center">
                <div
                  className="text-surface ms-auto inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-[#d7f4eb] border-e-[#009370] align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                  role="status"
                />
              </div>
            </div>
          </div>
        )}
        {isError && (
          <div className="flex justify-center items-center my-8">
            <div className="text-base font-normal leading-5 tracking-[0.25px]">
              <p className="font-bold text-red-400">
                Error fetching products. Try again later
              </p>
            </div>
          </div>
        )}
      </SectionWrapper>
    </LandingWrapper>
  );
}

export default BrowseProducts;
