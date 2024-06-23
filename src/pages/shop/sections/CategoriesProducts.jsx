import { useEffect, useState } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { useSwagList } from "../../../hooks/Queries/shop/useSwagList";
import ItemHeader from "./ItemHeader";
import { LazyLoadImage } from "react-lazy-load-image-component";
import FilterSection from "./FilterSection";
import SectionWrapper from "@/components/shop/SectionWrapper";

function CategoriesProducts() {
  const params = useParams();
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort");

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Bookmarks",
      href: "",
      imageSrc:
        "https://images.unsplash.com/photo-1588618575327-87bfc763efd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80",
      price: "Ksh 500",
    },
    {
      id: 2,
      name: "SpaceYaTech Hoodie",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80",
      price: "Ksh 500",
    },
    {
      id: 3,
      name: "Mentorist T-shirt",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80",
      price: "Ksh 500",
    },
    {
      id: 4,
      name: "SpaceYaTech Mug",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
      price: "Ksh 500",
    },
    {
      id: 5,
      name: "Bookmarks",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1588618575327-87bfc763efd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80",
      price: "Ksh 500",
    },
    {
      id: 6,
      name: "SpaceYaTech Hoodie",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80",
      price: "Ksh 500",
    },
    {
      id: 7,
      name: "Mentorist T-shirt",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=436&q=80",
      price: "Ksh 500",
    },
    {
      id: 8,
      name: "SpaceYaTech Mug",
      href: "#",
      imageSrc:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80",
      price: "Ksh 500",
    },
  ]);
  const [open, setOpen] = useState(true);

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
      <div>
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
      </div>
    </>
  );
}

export default CategoriesProducts;
