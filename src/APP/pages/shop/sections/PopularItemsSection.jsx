import { useNavigate } from "react-router-dom";
import { useSwagList } from "../../../../hooks/Queries/shop/useSwagList";
import { LazyLoadImage } from "react-lazy-load-image-component";

function PopularItemsSection() {
  const navigate = useNavigate();

  const { data: products, isPending, isError, isSuccess } = useSwagList();

  return (
    <div className="p-10">
      <h2 className="text-3xl font-medium tracking-tight text-gray-900">
        Popular items from SpaceYaTech
      </h2>
      <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {products
          ?.slice(0, 8)
          .map(
            ({ available, category, description, id, name, image, price }) => {
              return (
                <div
                  key={id}
                  className="group relative"
                  onClick={() => navigate(`/shop/item/${id}`)}
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <LazyLoadImage
                      src={image}
                      alt={name}
                      className="w-full h-60 object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div className="mt-4 flex justify-between">
                    <div className="space-y-2">
                      <h3 className="text-sm text-gray-700">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0"
                        ></span>
                        {name}
                      </h3>
                      <p className="text-sm font-medium text-gray-900">
                        {price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
      </div>
    </div>
  );
}

export default PopularItemsSection;
