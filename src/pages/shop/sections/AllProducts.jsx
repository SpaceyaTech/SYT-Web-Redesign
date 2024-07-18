import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../../../components/shop/ProductCard";
import SectionWrapper from "../../../components/shop/SectionWrapper";
import { useSwagList } from "../../../hooks/Queries/shop/useSwagList";
import FilterSection from "./FilterSection";
import ItemHeader from "./ItemHeader";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const { data: swagList, isSuccess } = useSwagList();
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");
  const searchText = searchParams.get("search");
  const [, setOpen] = useState(false)

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [swagList, searchText, sort]);

  return (
    <>
      <div className="flex flex-col gap-1">
        <ItemHeader show={() => setOpen((prev) => !prev)} />

        <FilterSection />
      </div>
      <SectionWrapper>
        <div className="mt-6 grid grid-cols-1  gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {isSuccess &&
            products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </SectionWrapper>
    </>
  );
}

export default AllProducts;
