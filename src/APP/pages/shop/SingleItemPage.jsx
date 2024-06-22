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
  const [Payload, setPayload] = useState({});

  // const { data: singleOrder } = useSingleOrder(params.id);
  const { data: singleSwag, isSuccess, refetch } = useSingleSwag(params.id);
  const { mutate: addItemsToCart } = useAddSwagToCart();

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
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
        <div className="px-8 sm:px-0 m-auto mb-10 max-w-screen-2xl flex flex-col md:flex-row justify-between w-full space-y-4 md:space-x-28 text-[#323433]">
          <div className="md:pb-14 md:w-1/2 space-y-6">
            <LazyLoadImage
              src={singleSwag.image}
              alt={singleSwag.name}
              className="m-auto md:min-w-full "
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
            <h1 className="text-xl md:text-4xl font-semibold md:font-medium">
              {singleSwag.name}
            </h1>
            <h3 className="text-base md:text-xl font-normal md:font-medium">
              Product description
            </h3>
            <p className="text-sm md:text-base">{singleSwag.description}</p>
            <p className="text-xl md:text-2xl font-semibold md:font-bold">
              Ksh {singleSwag.price}
            </p>
            <h4 className="text-base md:text-xl">Choose color</h4>

            <div className="flex justify-start space-x-6">
              {VariationData.map((pic) => (
                <div key={crypto.randomUUID()}>
                  <LazyLoadImage
                    src={pic}
                    alt=""
                    height="96px"
                    width="96px"
                    className="rounded-full"
                  />
                </div>
              ))}
            </div>

            <h4 className="text-base md:text-xl">Choose size</h4>
            <div className="flex justify-between sm:justify-start sm:space-x-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`w-20 h-12 rounded-full border border-[#323433] text-2xl ${
                    selectedSize === size
                      ? "bg-[#009975] text-white"
                      : "hover:bg-primary hover:border-[#009975] hover:text-white"
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <Counter className="h-12 w-32" count={count} setCount={setCount} />

            <button
              type="button"
              className="w-full h-[62px] bg-primary text-[#F7F7F7] text-sm font-medium rounded-lg"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
            <button
              type="button"
              className="w-full h-[62px] bg-[#F5FFFD] text-primary text-sm font-medium rounded-lg outline outline-[#009975]"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
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
