import PropTypes from "prop-types";
import { CiShoppingTag } from "react-icons/ci";
import { MdAddShoppingCart } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { addCommaSeparator, categoryColors } from "../../utilities/utils";

function ProductCard({ product }) {
  const { backgroundColor, color } = categoryColors(product.category);

  const attributeWithImages = product.attributes.find(
    (attribute) => attribute.images.length > 0
  );
  const image = attributeWithImages
    ? attributeWithImages.images.map((img) => img.image)[0]
    : "";
  const totalStock = product.attributes.reduce(
    (acc, attribute) => acc + attribute.stock,
    0
  );
  return (
    <div className="border rounded-lg p-2.5 pr-1.5 shadow-sm group hover:bg-green-dark/10 bg-white flex flex-col gap-4 ">
      <Link
        to={`/shop/item/${product.slug}`}
        className="aspect-h-1 aspect-w-1 w-full bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-96"
      >
        <LazyLoadImage
          src={image}
          alt={product.name}
          className="w-full h-80 object-cover object-center lg:h-full lg:w-full"
        />
      </Link>
      <Link
        to={`/shop/item/${product.slug}`}
        className="flex justify-between pr-1"
      >
        <h3 className="text-md uppercase font-medium text-gray-600">
          {product.name}
        </h3>
        <div className="p-1 rounded-xl bg-green-dark/10">
          {totalStock > 0 ? (
            <p className="text-green-dark font-medium text-sm px-1">
              <span> {totalStock}</span>
              <span className="ml-2">items left</span>
            </p>
          ) : (
            <div className=" text-red-800 p-1 rounded-lg bg-red-800/20 font-bold text-sm">
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
}
export default ProductCard;

const imagePropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  product_attribute: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  is_primary: PropTypes.bool.isRequired,
  angle: PropTypes.string.isRequired,
});

const sizePropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
});

const attributePropTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  size: PropTypes.arrayOf(sizePropTypes).isRequired,
  color: PropTypes.string.isRequired,
  stock: PropTypes.number.isRequired,
  images: PropTypes.arrayOf(imagePropTypes).isRequired,
});

const ProductCardPropTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  is_featured: PropTypes.bool.isRequired,
  attributes: PropTypes.arrayOf(attributePropTypes).isRequired,
};
ProductCard.propTypes = {
  product: PropTypes.shape(ProductCardPropTypes).isRequired,
};
