import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { Fragment, useEffect, useState } from "react";
import { CiShoppingTag } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useNavigate } from "react-router-dom";
import { useDeleteSwag } from "../../hooks/Mutations/shop/useCartSwagg";
import formatPrice from "../../utilities/formatPrice";

function CartDrawer({ open, setOpen }) {
  const navigate = useNavigate();

  // Get the JSON string from localStorage
  const [cartProducts, setCartProducts] = useState(() => {
    // Initialize state with the value from localStorage if it exists
    const storedProducts = localStorage.getItem("swagList");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  useEffect(() => {
    if (open) {
      const storedProducts = localStorage.getItem("swagList");
      if (storedProducts) {
        setCartProducts(JSON.parse(storedProducts));
      }
    }
  }, [open]);

  // const { data: cartProducts, isSuccess } = useProductsInCart();
  useEffect(() => {
    // Function to handle storage changes
    const handleStorageChange = (e) => {
      if (e.key === "swagList") {
        setCartProducts(JSON.parse(e.newValue));
      }
    };

    // Add event listener
    window.addEventListener("storage", handleStorageChange);

    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const { mutate: removeSwagFromCart } = useDeleteSwag();

  const deleteFromLocalStorage = (cartItemId) => {
    // Create a new array by filtering out the item to delete
    const updatedSwagList = cartProducts.filter(
      (swag) => swag.id !== cartItemId
    );

    // Update the state with the new array
    setCartProducts(updatedSwagList);

    // Convert the updated list to a JSON string and store it in localStorage
    localStorage.setItem("swagList", JSON.stringify(updatedSwagList));
  };

  const handleDeleteSwag = (cartItemId) => {
    removeSwagFromCart(cartItemId);
    deleteFromLocalStorage(cartItemId);
  };

  const handleCheckout = () => {
    // if (auth?.access) {
    navigate("/shop/checkout");
    // }
  };

  // query cart products
  // console.log("cartProducts: ", cartProducts);

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
                      <Dialog.Title className="text-[#333333] text-lg sm:text-[28px] font-semibold">
                        Your cart
                      </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={() => setOpen(false)}
                        >
                          <span className="sr-only">Close panel</span>
                          <IoIosCloseCircleOutline className=" w-8 h-8 sm:w-10 sm:h-10" />
                          {/* Close Icon */}
                        </button>
                      </div>
                    </div>

                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-0">
                      {/* Items in Cart */}
                      <div className="mt-8">
                        <div className="flow-root">
                          <ul className="-my-6 divide-y divide-gray-200 border-b">
                            {/* {isSuccess && */}
                            {cartProducts?.length > 0 &&
                              cartProducts?.map((cartProduct) => (
                                <li
                                  key={crypto.randomUUID()}
                                  className="flex py-6 space-x-4 sm:space-x-16"
                                >
                                  <div className="h-32 w-28 flex-shrink-0 overflow-hidden rounded-2xl">
                                    <LazyLoadImage
                                      src={`${
                                        cartProduct.image || cartProduct?.image
                                      }`}
                                      alt={cartProduct.name}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col space-y-14">
                                    <div className="flex flex-col justify-between text-base font-medium text-gray-900">
                                      <div className="flex flex-row justify-between items-center mb-4">
                                        <div className="flex flex-col space-y-2 justify-start">
                                          <div className="flex justify-between">
                                            <p className="flex justify-between items-center gap-1 font-medium bg-[#FEF3F2] text-[#B42318] text-sm rounded-full px-2 py-1">
                                              <CiShoppingTag />
                                              {cartProduct.category}
                                            </p>
                                          </div>
                                          <h3>
                                            <p className="text-base md:text-xl text-[#656767]">
                                              {" "}
                                              <Link
                                                to={`/shop/item/${
                                                  cartProduct.slug
                                                }`}
                                              >
                                                {cartProduct.name}
                                              </Link>
                                            </p>
                                          </h3>
                                        </div>
                                        <button
                                          type="button"
                                          className="flex justify-end"
                                          onClick={() => {
                                            handleDeleteSwag(cartProduct.id);
                                          }}
                                        >
                                          {/* Delete icon */}
                                          <RiDeleteBin6Line className="h-6 w-6 text-[#FC5555]" />
                                        </button>
                                      </div>
                                      <div className="flex flex-row justify-between text-[#656767] text-sm sm:text-base font-medium">
                                        <p>Qty: {cartProduct.orderUnits}</p>
                                        <p>
                                          KES {formatPrice(cartProduct.price)}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Sub Total */}
                    <div className="space-y-4 mx-0 p-0 rounded-lg ">
                      <div className="text-xl md:text-2xl font-bold flex justify-between">
                        {/* <h2>Sub Total</h2>
                        <h2>
                          Ksh
                          {cartProducts?.total_price || "00"}
                        </h2> */}
                      </div>
                      <div className="flex justify-start flex-col gap-3">
                        <button
                          type="button"
                          className="w-full h-[62px] bg-gradient-to-b from-[#00664E] from-180% to-[#009975] to-90% text-[#F7F7F7] text-sm font-medium rounded-lg"
                          onClick={handleCheckout}
                        >
                          Proceed to Checkout
                        </button>
                        <button
                          type="button"
                          className="w-full h-[62px] text-primary text-base font-medium"
                          onClick={() => setOpen(false)}
                        >
                          Continue Shopping
                        </button>
                      </div>
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

CartDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
};
