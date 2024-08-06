import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import ProductCard from "../../../components/shop/ProductCard";
import SectionWrapper from "../../../components/shop/SectionWrapper";
import { useSwagList } from "../../../hooks/Queries/shop/useSwagList";
import FilterSection from "./FilterSection";
import ItemHeader from "./ItemHeader";

function CategoriesProducts() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");

  const [products, setProducts] = useState([]);
  const [, setOpen] = useState(true);

  const { data: swagList, isSuccess } = useSwagList();

  useEffect(() => {
    const data =
      swagList?.filter(
        (item) => item.category.toLowerCase() === params?.category.toLowerCase()
      ) || [];
    if (sort === "low") {
      setProducts(data.sort((a, b) => +a.price - +b.price));
    } else if (sort === "high") {
      setProducts(data.sort((a, b) => +b.price - +a.price));
    } else {
      setProducts(data);
    }
  }, [swagList, params, sort]);

  return (
    <>
      <div className="flex flex-col gap-2">
        <ItemHeader show={() => setOpen((prev) => !prev)} />
        <FilterSection />
      </div>
      <SectionWrapper>
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {isSuccess &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </SectionWrapper>
    </>
  );
}

export default CategoriesProducts;
