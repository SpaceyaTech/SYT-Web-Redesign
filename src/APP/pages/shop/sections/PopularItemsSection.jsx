import { useState } from "react";

function PopularItemsSection() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Bookmarks",
      href: "#",
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
  ]);
  return (
    <>
      <div>
        <div class="p-10">
          <h2 class="text-2xl font-bold tracking-tight text-gray-900">
            Popular items from SpaceYaTech
          </h2>

          <div class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => {
              return (
                <>
                  <div key={product.id} class="group relative">
                    <div class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                      <img
                        src={product.imageSrc}
                        alt="Front of men&#039;s Basic Tee in black."
                        class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                      />
                    </div>
                    <div class="mt-4 flex justify-between">
                      <div className="space-y-2">
                        <h3 class="text-sm text-gray-700">
                          <a href="#">
                            <span
                              aria-hidden="true"
                              class="absolute inset-0"
                            ></span>
                            { product.name }
                          </a>
                        </h3>
                        <p class="text-sm font-medium text-gray-900">{ product.price }</p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default PopularItemsSection;
