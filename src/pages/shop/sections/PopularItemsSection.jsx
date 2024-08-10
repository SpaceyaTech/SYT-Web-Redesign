import ProductCard from "../../../components/shop/ProductCard";
import { useSwagList } from "../../../hooks/Queries/shop/useSwagList";

function PopularItemsSection() {
  const { data: products, isSuccess, isError, isPending } = useSwagList();

  return (
    <div className="p-5 md:p-10 max-w-[1440px] mx-auto">
      <div className="mx-auto w-full flex flex-row items-center gap-2 md:gap-4 my-8">
        <div className="w-full h-0.5 rounded-sm bg-gray-300" />
        <h2 className="min-w-fit text-primary text-sm leading-loose px-4 bg-gradient-to-r from-[#D7F4EB] to-white py-2 rounded-full font-semibold border-2 border-gray-300 uppercase">
          Similar Products
        </h2>
        <div className="w-full h-0.5 bg-gray-300" />
      </div>
      <h3 className="md:text-3xl text-2xl font-semibold title-font text-green-dark text-center">
        Products similar to the one above
      </h3>
      {isSuccess && products?.length > 0 && (
        <div className="mt-8 py-4 flex flex-row gap-4 sm:gap-10 overflow-x-scroll h-full w-full hr-scrollbar">
          {products?.slice(0, 8).map((product) => (
            <div
              className="min-w-[100%] sm:min-w-[50%] lg:min-w-[33%]  h-full"
              key={product.id}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      )}
      {isSuccess && products?.length === 0 && (
        <div className="flex justify-center items-center my-8">
          <div className="text-base font-normal leading-5 tracking-[0.25px]">
            <p className="font-bold text-red-400">No products available</p>
          </div>
        </div>
      )}
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
    </div>
  );
}

export default PopularItemsSection;
