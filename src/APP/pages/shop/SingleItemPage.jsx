/* eslint-disable react/react-in-jsx-scope */
import { useState, useEffect } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate, useParams } from "react-router-dom";
import SmallSample1 from "../../../assets/images/shop-page/small-sample-colored.png";
import SmallSample2 from "../../../assets/images/shop-page/small-sample-greyscale.png";
import { useAddSwagToCart } from "../../../hooks/Mutations/shop/useCartSwagg";
import { useSingleOrder } from "../../../hooks/Queries/shop/useOrdersList";
import { useSingleSwag } from "../../../hooks/Queries/shop/useSwagList";
import useAuth from "../../../hooks/useAuth";
import NotificationModal from "../../components/auth/NotificationModal";
import CartDrawer from "../../components/shop/CartDrawer";
import Counter from "../../components/shop/Counter";
import ItemHeader from "./sections/ItemHeader";
import { FaRegStar, FaRegCircleDot } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";

const VariationData = [SmallSample1, SmallSample2, SmallSample1, SmallSample2];

export default function SingleItemPage() {
  const { auth } = useAuth();
  const params = useParams();
  const navigate = useNavigate();

  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [Payload, setPayload] = useState({});

  // const { data: singleOrder } = useSingleOrder(params.id);
  const { data: singleSwag, isSuccess, refetch } = useSingleSwag(params.id);
  const { mutate: addItemsToCart } = useAddSwagToCart();

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = ["BBD278", "BBC1F8", "FFD3F8", "AF674F"];

  console.log("singleSwag: ", singleSwag);
  useEffect(() => {
    localStorage.setItem("swagList", []);
    if (isSuccess) {
      setPayload({
        swagg_id: singleSwag.id,
        product: {
          name: singleSwag.name,
          description: singleSwag.description,
          price: singleSwag.price,
          size: selectedSize,
          image: singleSwag.image,
        },
        quantity: count,
      });
      console.log("touched stffff", Payload);
    }
    refetch();
  }, [params.id]);

  const addToLocalStorage = () => {
    let swagList = [];
    let swagListJSON;
    if (localStorage.getItem("swagList")) {
      // Get the existing list from localStorage
      swagList = JSON.parse(localStorage.getItem("swagList"));
      console.log("singleSwag: ", swagList);

      // Also check for matching swagg_id that already exist in local storage
      if (Payload !== {}) swagList.push(Payload);
      swagListJSON = JSON.stringify(swagList);
      console.log("swagListJSON: ", swagListJSON);
      localStorage.setItem("swagList", swagListJSON);
    } else {
      swagList.push(Payload);
      swagListJSON = JSON.stringify(swagList);
      console.log("swagListJSON: ", swagListJSON);

      localStorage.setItem("swagList", swagListJSON);
    }
  };

  const handleAddToCart = () => {
    console.log("Payload: ", Payload);

    // Send to backend not giving a usable response
    addItemsToCart(Payload);

    // Add to local storage
    addToLocalStorage();

    setOpen(true);
  };

  const handleBuyNow = () => {
    // Send to backend not giving a usable response
    addItemsToCart(Payload);

    // Add to local storage
    addToLocalStorage();

    navigate("/shop/checkout");
  };

  return (
    <>
      <ItemHeader show={() => setOpen((prev) => !prev)} />
      {isSuccess ? (
        <div className="px-8 sm:px-10 m-auto mb-10 max-w-screen-2xl flex flex-col md:flex-row justify-between w-full space-y-4 md:space-x-28 text-[#323433]">
          <div className="md:pb-14 md:w-1/2 space-y-6">
            <LazyLoadImage
              src={singleSwag.image}
              alt={singleSwag.name}
              className="m-auto min-w-full"
            />
            <div className="flex justify-between">
              {VariationData.map((pic) => (
                <div key={crypto.randomUUID()} className="w-[70px] sm:w-auto">
                  <LazyLoadImage src={pic} alt="recommendation" />
                </div>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/2 space-y-5 sm:pr-16">
            <h1 className="text-xl md:text-4xl font-medium md:font-semibold">
              {singleSwag.name}
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-[#323433]">
              KES {singleSwag.price}
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
              {colors.map((color) => (
                <button
                  type="button"
                  key={crypto.randomUUID()}
                  onClick={() => setSelectedColor(color)}
                >
                  {selectedColor === color ? (
                    <div className="w-12 h-12 border bg-white border-primary rounded-full flex items-center justify-center">
                      <div className="w-9 h-9 bg-[#AF674F] rounded-full flex justify-center items-center">
                        <IoMdCheckmark className="text-white text-3xl font-bold" />
                      </div>
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-[#BBC1F8] rounded-full" />
                  )}
                </button>
              ))}
            </div>
            <h4 className="text-base md:text-xl text-[#656767]">
              Choose a size
            </h4>
            <div className="flex flex-wrap justify-start sm:justify-start gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`w-fit min-w-10 px-2 h-8 sm:h-10 rounded-md border border-[#EAECF0] text-lg sm:text-2xl flex justify-center items-center gap-2 ${
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
                  {size}
                </button>
              ))}
            </div>
            <hr />

            <div className="flex justify-start gap-3 ">
              <Counter
                className="h-14 w-32"
                count={count}
                setCount={setCount}
              />

              <button
                type="button"
                className="w-[179px] h-14 flex justify-center items-center px-2 py-4 gap-3 bg-primary text-white sm:font-bold text-base font-medium rounded-lg outline outline-[#009975]"
                onClick={handleAddToCart}
              >
                <MdOutlineAddShoppingCart className="h-8 w-8 text-white" /> Add
                to cart
              </button>
            </div>
            <hr />
            <h3 className="text-base md:text-xl text-[#323433] font-normal md:font-medium">
              Product description
            </h3>
            <p className="text-sm md:text-base font-light sm:font-normal text-[#323433]">
              {singleSwag.description}
            </p>
          </div>
        </div>
      ) : (
        <p>Error Fetching Item</p>
      )}

      {/* Cart Drawer */}
      <CartDrawer open={open} setOpen={setOpen} />
    </>
  );
}
