import { useSwagList } from "../../../hooks/Queries/shop/useSwagList";
import ProductCard from "../../../components/shop/ProductCard";

function PopularItemsSection() {
  const { data: products } = useSwagList();

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
    </div>
  );
}

export default PopularItemsSection;
