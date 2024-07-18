import { addCommaSeparator, categoryColors, cn } from "@/utilities/utils";
import { CiShoppingTag } from "react-icons/ci";
import { MdAddShoppingCart } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { backgroundColor, color } = categoryColors(product.category);

  return (
    <div className="border rounded-lg p-2.5 pr-1.5 shadow-sm group hover:bg-green-dark/10 bg-white flex flex-col gap-4 ">
      <Link
        to={`/shop/item/${product.id}`}
        className="aspect-h-1 aspect-w-1 w-full bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96"
      >
        <LazyLoadImage
          src={product.image}
          alt="Product image"
          className="w-full h-80 object-cover object-center lg:h-full lg:w-full"
        />
      </Link>
      <Link
        to={`/shop/item/${product.id}`}
        className="flex justify-between pr-1"
      >
        <h3 className="text-md uppercase font-bold text-gray-600">
          {product.name}
        </h3>
        <div className="p-1 rounded-xl bg-green-dark/10">
          {product.stock > 0 ? (
            <p className="text-green-dark font-medium text-sm px-1">
              <span> {product.stock}</span>
              <span className="ml-2">items left</span>
            </p>
          ) : (
            <div className=" text-red-800 p-1 rounded-lg bg-red-800/20 font-bold text-base">
              <p>Out of stock</p>
            </div>
          )}
        </div>
      </Link>
      <div className="flex justify-start w-full">
        <div
          style={{ backgroundColor, color }}
          className="px-2 rounded-2xl flex gap-2 items-center"
        >
          <CiShoppingTag size={28} />
          <p className="font-medium text-sm">{product.category}</p>
        </div>
      </div>
      <div className="flex justify-between pr-1">
        <h3 className="text-lg font-bold text-gray-700">
          KES {addCommaSeparator(Number(product.price))}
        </h3>
        <div className="flex text-green-dark gap-2 items-center md:opacity-0 md:group-hover:opacity-100 transition-opacity cursor-pointer">
          <MdAddShoppingCart size={20} />
          <p className="font-bold text-base">Add to cart</p>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
