import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import CloseIcon from "../../../assets/images/icons/close-icon.svg";
import DeleteIcon from "../../../assets/images/icons/delete-icon.svg";
import SampleImg from "../../../assets/images/shop-page/main-sample.png";
import Sample3 from "../../../assets/images/shop-page/sample3.png";
import { useDeleteSwag } from "../../../hooks/Mutations/shop/useCartSwagg";
import useProductsInCart from "../../../hooks/Queries/shop/useCartProducts";
import useAuth from "../../../hooks/useAuth";
import Counter from "./Counter";
import { LazyLoadImage } from "react-lazy-load-image-component";

function CartDrawer({ open, setOpen }) {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);

  // Get the JSON string from localStorage
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const storage = localStorage.getItem("swagList")
      ? JSON.parse(localStorage.getItem("swagList"))
      : null;
    setCartProducts(storage);
  }, [cartProducts]);

  // const { data: cartProducts, isSuccess } = useProductsInCart();
  useEffect(() => {
    // Function to handle storage changes
    const handleStorageChange = (e) => {
      if (e.key === "swagList") {
        setCartProducts(JSON.parse(e.newValue));
        console.log(JSON.parse(e.newValue));
      }
    };

    // Add event listener
    window.addEventListener("storage", handleStorageChange);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // const { mutate: deleteSwag } = useDeleteSwag();

  const deleteFromLocalStorage = (cartItemId) => {
    // Parse it back to an array of objects
    const swagList = cartProducts;

    const idxToDelete = swagList.findIndex(
      (swag) => swag.swagg_id === cartItemId
    );

    // Check if the object was found
    if (idxToDelete !== -1) {
      // Remove the object from the swagList
      swagList.splice(idxToDelete, 1);

      // Convert the updated list to a JSON string
      setCartProducts(JSON.stringify(swagList));

      // Store the updated list back to localStorage
      localStorage.setItem("swagList", cartProducts);
    } else {
      console.log("Swag not found in swagList");
    }
  };

  const handleDeleteSwag = (cartItemId) => {
    // deleteSwag(cartItemId);
    deleteFromLocalStorage(cartItemId);
  };

  const handleCheckout = () => {
    // if (auth?.access) {
    navigate("/shop/checkout");
    // }
  };
  console.log("cartProducts: ", cartProducts);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-60 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full sm:pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-2xl">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl py-6 sm:py-12 px-2 sm:px-10">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-3xl font-semibold">
                        Your cart{" "}
                        <span className="text-primary">
                          {/* ({isSuccess  */}(
                          {(cartProducts?.cart_items
                            ? cartProducts.cart_items?.length
                            : cartProducts?.length) || 0}
                          )
                        </span>
                      </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <LazyLoadImage src={CloseIcon} alt="close" />
                        </button>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      {/* Items in Cart */}
                      <div className="mt-8">
                        <div className="flow-root">
                          <ul className="-my-6 divide-y divide-gray-200 border-b">
                            {/* {isSuccess && */}
                            {cartProducts?.length > 0 &&
                              (cartProducts?.cart_items
                                ? cartProducts.cart_items
                                : cartProducts
                              )?.map(
                                // ({
                                //   id,
                                //   product: {
                                //     id: productId,
                                //     image,
                                //     name,
                                //     price,
                                //     size,
                                //   },
                                //   quantity,
                                // })
                                (cartProduct) => (
                                  <li
                                    // key={cartProduct.id || cartProduct.swagg_id}
                                    key={crypto.randomUUID()}
                                    className="flex py-6 space-x-4 sm:space-x-16"
                                  >
                                    <div className="h-32 w-28 flex-shrink-0 overflow-hidden rounded-2xl">
                                      <LazyLoadImage
                                        src={`https://apis.spaceyatech.com${
                                          cartProduct.image ||
                                          cartProduct.product?.image
                                        }`}
                                        alt={
                                          cartProduct.name ||
                                          cartProduct.product?.name
                                        }
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col space-y-14">
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <p className="text-base md:text-xl">
                                            {" "}
                                            <Link
                                              to={`/shop/item/${
                                                cartProduct.productId ||
                                                cartProduct.swagg_id
                                              }`}
                                            >
                                              {cartProduct.name ||
                                                cartProduct.product?.name}
                                            </Link>
                                          </p>
                                        </h3>
                                        <button
                                          type="button"
                                          className="flex justify-end"
                                          onClick={() => {
                                            handleDeleteSwag(
                                              cartProduct.id ||
                                                cartProduct.swagg_id
                                            );
                                          }}
                                        >
                                          <LazyLoadImage
                                            src={DeleteIcon}
                                            alt="delete button"
                                          />
                                        </button>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-xl md:text-2xl font-bold">
                                          Ksh{" "}
                                          {cartProduct.price ||
                                            cartProduct.product?.price}
                                        </p>

                                        {/* Count thing reason out */}
                                        <Counter
                                          className="h-8 sm:h-12 w-24 sm:w-32"
                                          setCount={setCount}
                                          count={cartProduct.quantity}
                                        />
                                      </div>
                                    </div>
                                  </li>
                                )
                              )}
                          </ul>
                        </div>
                      </div>

                      {/* Recommendation items */}
                      <div className="pb-8 pt-10 border-b">
                        <p className="pt-6 text-base md:text-xl text-center font-bold">
                          {" <  "}
                          You might love {"  > "}
                        </p>
                        <div className="flex pb-8 pt-10 space-x-4 sm:space-x-16 sm:px-8">
                          <div className="h-32 w-28 flex-shrink-0 overflow-hidden rounded-2xl">
                            <LazyLoadImage
                              src={Sample3}
                              alt="Mentorlst Hoodie"
                              className="h-full w-full"
                            />
                          </div>
                          <div className="flex flex-col flex-1 ">
                            <p className="text-base md:text-xl">
                              Mentorlst Hoodie
                            </p>
                            <div className="flex flex-1 flex-col sm:flex-row justify-between items-start sm:items-center">
                              <p className="text-xl md:text-2xl font-bold text-center">
                                Ksh 1500
                              </p>
                              <button
                                type="button"
                                className="w-36 sm:w-40 h-12 sm:h-16 py-2 px-8 bg-primary text-[#F7F7F7] text-sm font-medium rounded-lg"
                              >
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Sub Total */}
                    <div className="bg-[#F5FFFD] space-y-4 mx-4 p-8 rounded-lg ">
                      <div className="text-xl md:text-2xl font-bold flex justify-between">
                        <h2>Sub Total</h2>
                        <h2>
                          Ksh {/* {isSuccess  */}
                          {cartProducts?.total_price || "00"}
                        </h2>
                      </div>
                      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-10">
                        <button
                          type="button"
                          className="md:w-1/2 w-full h-[62px] bg-[#F5FFFD] text-primary text-sm font-medium rounded-lg outline outline-2 outline-[#009975]"
                          onClick={() => setOpen(false)}
                        >
                          Continue shopping
                        </button>
                        <button
                          type="button"
                          className="md:w-1/2 w-full h-[62px] bg-primary hover:bg-[#00664E] text-[#F7F7F7] text-sm font-medium rounded-lg"
                          onClick={handleCheckout}
                        >
                          Checkout
                        </button>
                      </div>
                      <p className="text-center">
                        By selecting ‘Check Out’ you are agreeing to our{" "}
                        <a
                          href="#!"
                          className="font-medium underline cursor-pointer text-primary hover:text-[#00664E]"
                        >
                          Terms & Conditions
                        </a>
                      </p>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default CartDrawer;
