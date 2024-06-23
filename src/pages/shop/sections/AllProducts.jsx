import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { useSwagList } from "../../../hooks/Queries/shop/useSwagList";
import { LazyLoadImage } from "react-lazy-load-image-component";
import SectionWrapper from "@/components/shop/SectionWrapper";
import CartIcon from "@/components/shop/CartIcon";
import FilterSection from "./FilterSection";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const { data: swagList, isSuccess } = useSwagList();
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  const searchText = searchParams.get("search");

  const sortedSwag =
    sort === "low"
      ? swagList?.sort((a, b) => +a.price - +b.price)
      : swagList?.sort((a, b) => +b.price - +a.price);
  const searchSwag =
    searchText === ""
      ? swagList
      : swagList?.filter((item) =>
          item.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(searchText?.toLowerCase().replace(/\s+/g, ""))
        );

  useEffect(() => {
    if (sort) {
      setProducts(sortedSwag);
    } else if (searchText) {
      setProducts(searchSwag);
    } else {
      setProducts(swagList);
    }
  }, [swagList, searchText, sort]);

  return (
    <>
      <div className="flex flex-col gap-1">
        <CartIcon />
        <FilterSection />
      </div>
      <SectionWrapper>
        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {isSuccess &&
            products.map((product) => (
              <Link
                key={product.id}
                className="group relative"
                to={`/shop/item/${product.id}`}
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <LazyLoadImage
                    src={product.image}
                    alt="Front of men&#039;s Basic Tee in black."
                    className="w-full h-60 object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-normal text-gray-700">
                      {product.name}
                    </h3>
                    <p className="text-base font-medium text-gray-700">
                      {product.price}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </SectionWrapper>
    </>
  );
}

export default AllProducts;
