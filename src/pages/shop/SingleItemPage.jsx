import { useEffect, useState } from "react";
import { FaRegCircle } from "react-icons/fa";
import { FaRegCircleDot, FaRegStar } from "react-icons/fa6";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import SmallSample1 from "../../assets/images/shop-page/small-sample-colored.png";
import SmallSample2 from "../../assets/images/shop-page/small-sample-greyscale.png";
import SeoMetadata from "../../components/SeoMetadata";
import CartDrawer from "../../components/shop/CartDrawer";
import Counter from "../../components/shop/Counter";
// import { useAddSwagToCart } from "../../hooks/Mutations/shop/useCartSwagg";
import { useSingleSwag } from "../../hooks/Queries/shop/useSwagList";
import formatPrice from "../../utilities/formatPrice";
import ItemHeader from "./sections/ItemHeader";

const VariationData = [
  SmallSample1,
  SmallSample2,
  SmallSample1,
  SmallSample2,
  SmallSample2,
  SmallSample1,
  SmallSample2,
];

export default function SingleItemPage() {
  const params = useParams();

  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState("");

  const [selectedVariant, setSelectedVariant] = useState(null);
  const [variants, setVariants] = useState(null);
  const [selectedImage, setSelectedImage] = useState(1);
  const [error, setError] = useState("");

  // const { data: singleOrder } = useSingleOrder(params.id);
  const {
    data: singleSwag,
    isSuccess,
    isPending,
    isError,
    refetch,
  } = useSingleSwag(params.id);
  // const { mutate: addItemsToCart } = useAddSwagToCart();

  const sizes = {
    XS: "Extra Small",
    S: "Small",
    M: "Medium",
    L: "Large",
    XL: "Extra Large",
  };

  useEffect(() => {
    if (isSuccess) {
      const initialVariant = singleSwag.attributes[0];
      setSelectedVariant(initialVariant);
      setSelectedColor(initialVariant.color);
      setVariants(singleSwag.attributes);
    }
  }, [isSuccess, singleSwag]);

  useEffect(() => {
    refetch();
  }, [params.id, refetch]);

  useEffect(() => {
    // Update selected variant when selected color changes
    if (selectedColor && variants) {
      const variant = variants.find((v) => v.color === selectedColor);
      setSelectedVariant(variant);
    }
  }, [selectedColor, variants]);

  const addToLocalStorage = () => {
    const newData = {
      id: singleSwag.id,
      name: singleSwag.name,
      category: singleSwag.category,
      size: selectedSize.name,
      color: selectedColor,
      price: singleSwag.price * count,
      orderUnits: count,
      slug: singleSwag.slug,
      image: selectedVariant.images[0].image,
    };

    let swagList = [];
    let swagListJSON;
    if (localStorage.getItem("swagList")) {
      // Get the existing list from localStorage
      swagList = JSON.parse(localStorage.getItem("swagList"));

      // Also check for matching swagg_id that already exist in local storage
      swagList.push(newData);
      swagListJSON = JSON.stringify(swagList);
      localStorage.setItem("swagList", swagListJSON);
    } else {
      swagList.push(newData);
      swagListJSON = JSON.stringify(swagList);

      localStorage.setItem("swagList", swagListJSON);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError("Please select a size");
    } else {
      // Add to local storage
      addToLocalStorage();

      // open cart
      setOpen(true);
    }
  };

  // const handleBuyNow = () => {
  //   // Send to backend not giving a usable response
  //   addItemsToCart(payload);

  //   // Add to local storage
  //   addToLocalStorage();

  //   navigate("/shop/checkout");
  // };

  const getSizeKeyByValue = (value) =>
    Object.keys(sizes).find((key) => sizes[key] === value);

  return (
    <>
      <SeoMetadata
        title={`${singleSwag?.name}`}
        description="Elevate your style with SpaceYaTech's exclusive collection of merchandise."
        type="website"
        url="https://www.spaceyatech.com/shop"
        ogImage="https://apis.spaceyatech.com/media/blog-images/syt.png"
        ogImageAlt="SpaceYaTech logo, social media handles, website URL, email, and more on a muted background."
        siteName="SpaceYaTech Shop"
      />
      <ItemHeader show={() => setOpen((prev) => !prev)} />
      {isSuccess && (
        <div className="px-8 sm:px-10 m-auto mb-10 max-w-screen-2xl flex flex-col md:flex-row justify-between w-full space-y-4 md:space-x-28 text-[#323433]">
          <div className="md:pb-14 md:w-1/2 space-y-6">
            <div className="flex overflow-x-auto">
              {VariationData.map((image, index) => (
                <LazyLoadImage
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  src={image}
                  alt={singleSwag.name}
                  className={`m-auto min-w-full ${selectedImage === index + 1 ? "block" : "hidden"}`}
                />
              ))}
            </div>
            <div className="flex justify-between overflow-x-auto gap-4">
              {VariationData.map((pic, index) => (
                <button
                  type="button"
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  onClick={() => setSelectedImage(index + 1)}
                  className={`w-[70px] sm:w-auto cursor-pointer rounded-lg border-2 hover:border-[#2a7762] ${selectedImage === index + 1 ? "border-[#2a7762]" : "border-white"}`}
                >
                  <LazyLoadImage
                    src={pic}
                    alt="recommendation"
                    className="p-[2px]"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-5 sm:pr-16">
            <h1 className="text-xl md:text-4xl font-medium md:font-semibold">
              {singleSwag?.name}
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-[#323433]">
              KES {formatPrice(singleSwag?.price)}
            </p>
            <p className="flex gap-2 items-center text-lg md:text-xl font-semibold text-[#656767]">
              <span>4.5</span>
              <span>
                <FaRegStar className="h-5 w-5 fill-primary mb-1" />
              </span>
            </p>
            <hr />
            <h4 className="text-base md:text-xl text-[#656767]">
              Choose color
            </h4>

            <div className="flex justify-start space-x-6">
              {singleSwag &&
                singleSwag?.attributes.map((color) => (
                  <button
                    type="button"
                    key={crypto.randomUUID()}
                    onClick={() => {
                      setSelectedColor(color.color);
                    }}
                  >
                    {selectedColor === color.color ? (
                      <div
                        role="button"
                        aria-label="Color selection button"
                        className="w-12 h-12 border bg-white border-primary rounded-full flex items-center justify-center"
                      >
                        <div
                          className="w-9 h-9 rounded-full flex justify-center items-center"
                          style={{ backgroundColor: `${color.color}` }}
                        >
                          <IoMdCheckmark className="text-white text-3xl font-bold" />
                        </div>
                      </div>
                    ) : (
                      <div
                        aria-label="Color selection button"
                        role="button"
                        className="w-12 h-12 rounded-full"
                        style={{ backgroundColor: `${color.color}` }}
                      />
                    )}
                  </button>
                ))}
            </div>
            <h4 className="text-base md:text-xl text-[#656767]">
              Choose a size
            </h4>
            <div className="flex flex-wrap justify-start sm:justify-start gap-2">
              {selectedVariant &&
                selectedVariant?.size.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={`w-fit min-w-12 px-2 sm:px-3 h-8 sm:h-10 rounded-md border border-[#EAECF0] text-lg sm:text-xl font-light flex justify-between items-center gap-1 sm:gap-3 ${
                      selectedSize === size
                        ? "bg-[#009975] text-white"
                        : "hover:bg-primary hover:border-[#009975] hover:text-white"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {selectedSize === size ? (
                      <FaRegCircleDot className="text-sm sm:text-lg" />
                    ) : (
                      <FaRegCircle className="text-sm sm:text-lg" />
                    )}{" "}
                    {getSizeKeyByValue(size.name)}
                  </button>
                ))}
            </div>
            <hr />

            {error && (
              <p className="font-normal text-red-400 text-center">{error}</p>
            )}
            <div className="flex justify-start gap-3 ">
              <Counter
                className="h-12 sm:h-14 w-32"
                count={count}
                setCount={setCount}
              />

              <button
                type="button"
                className="w-32 h-12 sm:w-[179px] sm:h-14 flex justify-center items-center px-1 sm:px-2 py-4 gap-1 sm:gap-3 bg-gradient-to-b from-[#00664E] from-180% to-[#009975] to-90% text-white sm:font-bold text-sm sm:text-base font-medium rounded-lg"
                onClick={handleAddToCart}
              >
                <MdOutlineAddShoppingCart className=" sm:h-8 sm:w-8 text-white" />{" "}
                Add to cart
              </button>
            </div>
            <hr />
            <h3 className="text-base md:text-xl text-[#323433] font-medium">
              Product description
            </h3>
            <p className="text-sm md:text-base text-[#323433] font-light">
              {singleSwag?.description}
            </p>
          </div>
        </div>
      )}
      {isPending && (
        <div className="flex justify-center items-center my-8">
          <div className="text-base font-normal leading-5 tracking-[0.25px]">
            <p className="font-bold text-gray-900">Loading product... </p>
            <div className="mt-6 text-center">
              <div
                className="text-surface ms-auto inline-block h-10 w-10 animate-spin rounded-full border-4 border-solid border-[#d7f4eb] border-e-[#009370] align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              />
            </div>
          </div>
        </div>
      )}
      {isError && (
        <div className="flex justify-center items-center my-8">
          <div className="text-base font-normal leading-5 tracking-[0.25px]">
            <p className="font-bold text-red-400">
              Error fetching product. Try again later
            </p>
          </div>
        </div>
      )}

      {/* Cart Drawer */}
      <CartDrawer open={open} setOpen={setOpen} />
    </>
  );
}
