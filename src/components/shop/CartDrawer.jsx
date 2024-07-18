import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import { Fragment, useEffect, useState } from "react";
import { CiShoppingTag } from "react-icons/ci";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useNavigate } from "react-router-dom";
import formatPrice from "../../utilities/formatPrice";

function CartDrawer({ open, setOpen }) {
  const navigate = useNavigate();

  // Get the JSON string from localStorage
  const [cartProducts, setCartProducts] = useState([]);

  const dummyCartData = [
    {
      id: "271fcc1c-0337-44f4-9449-2bc35b6ffd01",
      name: "Cityscape Jacket",
      description:
        "Introducing our Cityscape Jacket: a blend of urban flair and unbeatable comfort. Crafted with premium materials, it offers sleek design and weather resistance for city adventures. Stay stylish and protected with adjustable features and convenient pockets. Upgrade your urban wardrobe today!",
      category: "Jackets",
      image:
        "https://apis.spaceyatech.com/media/product_images/main-sample_copy_Fud5OzF.png",
      price: "3000.00",
      stock: 10,
      color: "brown",
    },
    {
      id: "232437b9-3e64-4cad-a6c3-08158e118207",
      name: "Cityscape Jacket - Mid",
      description:
        "Introducing our Cityscape Jacket: a blend of urban flair and unbeatable comfort. Crafted with premium materials, it offers sleek design and weather resistance for city adventures. Stay stylish and protected with adjustable features and convenient pockets. Upgrade your urban wardrobe today!",
      category: "Jackets",
      image:
        "https://apis.spaceyatech.com/media/product_images/main-sample_copy_BRv17MK.png",
      price: "1800.00",
      stock: 11,
      color: "brown",
    },
    {
      id: "9cd9a601-0ed9-4685-8633-4b04e0811fc7",
      name: "SYT Hoodie",
      description:
        "Unleash your tech-savvy style with our Tech-Fit Hoodie. Designed for the modern individual, it seamlessly integrates functionality and fashion. Crafted with cutting-edge materials, it offers unrivaled comfort and durability. Elevate your wardrobe with this essential piece that effortlessly combines innovation and style.",
      category: "Hoodies",
      image:
        "https://apis.spaceyatech.com/media/product_images/sample1_copy_PXgn3MX.png",
      price: "2000.00",
      stock: 10,
      color: "white",
    },
  ];

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
                            {dummyCartData?.length > 0 &&
                              (dummyCartData?.cart_items
                                ? dummyCartData.cart_items
                                : dummyCartData
                              )?.map((cartProduct) => (
                                <li
                                  key={crypto.randomUUID()}
                                  className="flex py-6 space-x-4 sm:space-x-16"
                                >
                                  <div className="h-32 w-28 flex-shrink-0 overflow-hidden rounded-2xl">
                                    <LazyLoadImage
                                      src={`${
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
                                    <div className="flex flex-col justify-between text-base font-medium text-gray-900">
                                      <div className="flex flex-row justify-between items-center mb-4">
                                        <div className="flex flex-col space-y-2 justify-start">
                                          <div className="flex justify-between">
                                            <p className="flex justify-between items-center gap-1 font-medium bg-[#FEF3F2] text-[#B42318] text-sm rounded-full px-2 py-1">
                                              <CiShoppingTag />
                                              Hoodies
                                            </p>
                                          </div>
                                          <h3>
                                            <p className="text-base md:text-xl text-[#656767]">
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
                                        </div>
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
                                          {/* Delete icon */}
                                          <RiDeleteBin6Line className="h-6 w-6 text-[#FC5555]" />
                                        </button>
                                      </div>
                                      <div className="flex flex-row justify-between text-[#656767] text-sm sm:text-base font-medium">
                                        <p>Qty: 1</p>
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
