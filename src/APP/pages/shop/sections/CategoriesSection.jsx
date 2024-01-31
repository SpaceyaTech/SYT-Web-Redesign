import { Link } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ItemHeader from "./ItemHeader";

function CategoriesSection() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Hoodies",
      imgURL:
        "https://images.unsplash.com/photo-1588618575327-87bfc763efd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80",
      href: "hoodies",
    },
    {
      id: 2,
      name: "T-Shirts",
      imgURL:
        "https://images.unsplash.com/photo-1588618575327-87bfc763efd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80",
      href: "t-shirts",
    },
    {
      id: 3,
      name: "Stickers",
      imgURL:
        "https://images.unsplash.com/photo-1588618575327-87bfc763efd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80",
      href: "stickers",
    },
    {
      id: 4,
      name: "Cups",
      imgURL:
        "https://images.unsplash.com/photo-1588618575327-87bfc763efd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80",
      href: "cups",
    },
    {
      id: 5,
      name: "Bookmarks",
      imgURL:
        "https://images.unsplash.com/photo-1588618575327-87bfc763efd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80",
      href: "bookmarks",
    },
    {
      id: 6,
      name: "Hoodies",
      imgURL:
        "https://images.unsplash.com/photo-1588618575327-87bfc763efd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80",
      href: "hoodies",
    },
  ]);
  const [open, setOpen] = useState(true);

  return (
    <>
      <ItemHeader show={() => setOpen((prev) => !prev)} />

      <div className="pt-10 px-4 sm:px-14 max-w-screen-2xl mx-auto">
        <h2 className="text-xl sm:text-3xl font-medium tracking-tight text-gray-900 mb-10">
          Categories
        </h2>

        <div className="grid grid-row-[minmax(300px,_256px)] grid-flow-col auto-cols-max gap-4 p-0 overflow-x-scroll sm:overflow-x-hidden md:grid-cols-3 md:grid-rows-2 md:gap-y-8 md:gap-x-8 md:p-3 overflow-y-hidden">
          {categories.map((category) => {
            return (
              <div
                key={category.id}
                className="w-60 lg:w-[420px] h-72 hover:opacity-75"
              >
                <Link to={`/shop/category/${category.href}`}>
                  <img
                    src={category.imgURL}
                    className="object-cover object-center rounded-2xl h-64 w-60 lg:w-[420px]"
                    alt={category.name}
                  />
                </Link>
                <div className="p-2 flex items-center justify-between">
                  <p className="text-xl sm:text-2xl font-medium">
                    {category.name}
                  </p>
                  <Link className="text-primary text-xs sm:text-sm">
                    View More{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CategoriesSection;
