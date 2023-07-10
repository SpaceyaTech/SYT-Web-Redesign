import { Link } from "react-router-dom";
import { useState } from "react";

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
  return (
    <>
      <div className="pt-10 px-5">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Categories
        </h2>
        <div className="flex space-x-3 sm:space-x-0 shrink-0 overflow-x-scroll lg:overflow-x-hidden lg:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-x-8 p-3">
          {categories.map((category) => {
            return (
              <div key={category.id} className="w-60 sm:w-80 shrink-0">
                <Link to={`/shop/category/${category.href}`}>
                <img
                  src={category.imgURL}
                  className="object-cover object-center w-60 sm:w-80 h-60 rounded-xl"
                  alt=""
                />
                </Link>
                <div className="p-2 flex items-center justify-between">
                  <p>{category.name}</p>
                  <Link className="text-[#009975] text-sm">Learn more</Link>
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
