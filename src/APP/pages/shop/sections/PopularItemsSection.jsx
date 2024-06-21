import { CiShoppingTag } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { useSwagList } from "../../../../hooks/Queries/shop/useSwagList";
import { LazyLoadImage } from "react-lazy-load-image-component";
import formatPrice from "../../../../utilities/formatPrice";

function PopularItemsSection() {
  const navigate = useNavigate();

  const { data: products, isPending, isError, isSuccess } = useSwagList();

  return (
    <div className="p-10">
      <div className="mx-auto w-full flex flex-row items-center gap-2 md:gap-4 my-8">
        <div className="w-full h-0.5 rounded-sm bg-gray-300" />
        <h2 className="min-w-fit text-primary text-sm leading-loose px-4 bg-gradient-to-r from-[#D7F4EB] to-white py-2 rounded-full font-semibold border-2 border-gray-300 uppercase">
          Similar Products
        </h2>
        <div className="w-full h-0.5 bg-gray-300" />
      </div>
      <h3 className="md:text-3xl text-2xl font-semibold title-font text-green-dark text-center">
        Products similar to the one above
      </h3>
      <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-16">
        {products
          ?.slice(0, 8)
          .map(({ stock, category, description, id, name, image, price }) => (
            <div
              key={id}
              className="group relative border border-slate-200 p-2 rounded-md"
              onClick={() => navigate(`/shop/item/${id}`)}
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <LazyLoadImage
                  src={image}
                  alt={name}
                  className="w-full h-60 object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <h4 className="text-base text-gray-700 uppercase">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0"
                      ></span>
                      {name}
                    </h4>
                    <div>
                      {stock ? (
                        <p className="font-medium bg-[#ECFDF3] text-[#027A48] text-sm rounded-full px-2 py-1">
                          {stock} items left
                        </p>
                      ) : (
                        <p className="font-medium bg-[#FEF3F2] text-[#B42318] text-sm rounded-full px-2 py-1">
                          Out of stock
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="flex justify-between items-center gap-1 font-medium bg-[#FEF3F2] text-[#B42318] text-sm rounded-full px-2 py-1">
                      <CiShoppingTag />
                      {category}
                    </p>
                  </div>
                  <p className="text-xl font-bold text-gray-500">
                    KES {formatPrice(price)}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default PopularItemsSection;
