import { FaArrowRight } from 'react-icons/fa';
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSwagList } from "../../../hooks/Queries/shop/useSwagList";
import CartDrawer from "../../../components/shop/CartDrawer";
import ItemHeader from "./ItemHeader";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CategoriesSection() {
  const [open, setOpen] = useState(false);

  const { data, isPending, isError, isSuccess } = useSwagList();

  // setCategories(data.results.map((item) => item.category));
  // eslint-disable-next-line prefer-const
  let categoriesHash = {};
  isSuccess &&
    data.forEach((item) => {
      if (!categoriesHash[item.category]) {
        categoriesHash[item.category] = item.image;
      }
    });

  // eslint-disable-next-line prefer-const
  let categoryList = Object.keys(categoriesHash).map((item) => ({
    name: item.toLowerCase(),
    imgURL: categoriesHash[item],
  }));

  return (
    <>
      <ItemHeader show={() => setOpen((prev) => !prev)} />

      <div className="pt-10 px-4 sm:px-14 max-w-screen-2xl mx-auto">
        <h2 className="text-xl sm:text-3xl font-medium tracking-tight text-gray-900 mb-10">
          Categories
        </h2>

        <div className="grid grid-row-[minmax(300px,_256px)] grid-flow-col auto-cols-max gap-4 p-0 overflow-x-scroll sm:overflow-x-hidden md:grid-cols-3 md:grid-rows-2 md:gap-y-8 md:gap-x-8 md:p-3 overflow-y-hidden">
          {categoryList.map((category) => (
            <div
              key={crypto.randomUUID()}
              className="w-60 lg:w-[420px] h-72 hover:opacity-75"
            >
              <Link to={`/shop/category/${category.name}`}>
                <LazyLoadImage 
                  src={category.imgURL}
                  className="object-cover object-center rounded-2xl h-64 w-60 lg:w-[420px]"
                  alt={category.name}
                />
              </Link>
              <div className="p-2 flex items-center justify-between">
                <p className="text-xl sm:text-2xl font-medium capitalize">
                  {category.name}
                </p>
                <Link
                  to={`/shop/category/${category.name}`}
                  className="text-primary text-xs sm:text-sm flex items-center"
                >
                  View More
                  <FaArrowRight className="pl-2 size-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Drawer */}
      <CartDrawer open={open} setOpen={setOpen} />
    </>
  );
}

export default CategoriesSection;
