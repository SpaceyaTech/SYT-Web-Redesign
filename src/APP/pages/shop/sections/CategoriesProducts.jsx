import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ItemHeader from "./ItemHeader";

function CategoriesProducts() {
  const params = useParams();
  const navigate = useNavigate();
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

  return (
    <>
      <ItemHeader show={() => setOpen((prev) => !prev)} />
      <div>
        <div className="p-10">
          <h2 className="text-3xl font-medium tracking-tight text-gray-900 capitalize">
            {params?.category}
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="group relative"
                  onClick={() => navigate(`/shop/item/${product.id}`)}
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img
                      src={product.imageSrc}
                      alt="Front of men&#039;s Basic Tee in black."
                      className="w-full h-60 object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div className="space-y-2">
                      <h3 className="text-xl font-normal text-gray-700">
                        <a href="#">
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          ></span>
                          {product.name}
                        </a>
                      </h3>
                      <p className="text-base font-medium text-gray-700">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesProducts;
