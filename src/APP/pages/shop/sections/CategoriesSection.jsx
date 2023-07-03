import { Link } from "react-router-dom";
import { useState } from "react";

function CategoriesSection() {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Hoodies",
      imgURL:
        "https://images.unsplash.com/photo-1588618575327-87bfc763efd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80",
    },
    {
      id: 2,
      name: "T-Shirts",
      imgURL:
        "https://images.unsplash.com/photo-1588618575327-87bfc763efd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80",
    },
    {
      id: 3,
      name: "Stickers",
      imgURL:
        "https://images.unsplash.com/photo-1588618575327-87bfc763efd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80",
    },
    {
      id: 4,
      name: "Cups",
      imgURL:
        "https://images.unsplash.com/photo-1588618575327-87bfc763efd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80",
    },
    {
      id: 5,
      name: "Bookmarks",
      imgURL:
        "https://images.unsplash.com/photo-1588618575327-87bfc763efd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80",
    },
    {
      id: 6,
      name: "Hoodies",
      imgURL:
        "https://images.unsplash.com/photo-1588618575327-87bfc763efd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=865&q=80",
    },
  ]);
  return (
    <>
      <div className="p-10">
        <h2 class="text-2xl font-bold tracking-tight text-gray-900">
          Categories
        </h2>
        <div className="grid grid-cols-3 gap-x-8 p-3">
          {categories.map((category) => {
            return (
              <>
                <div key={category.id}>
                  <img
                    src={category.imgURL}
                    className="object-cover object-center rounded-xl"
                    alt=""
                  />
                  <div className="p-2 flex items-center justify-between">
                    <p>{category.name}</p>
                    <Link className="text-[#009975] text-sm">Learn more</Link>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CategoriesSection;
