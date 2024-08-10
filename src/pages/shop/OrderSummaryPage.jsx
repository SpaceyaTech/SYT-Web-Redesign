import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { CiShoppingTag } from "react-icons/ci";
import { FaTrash } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { Link } from "react-router-dom";
import {
  useDeleteSwag,
  useDeleteAllSwag,
} from "../../hooks/Mutations/shop/useCartSwagg";
import useMakeOrder from "../../hooks/Mutations/shop/useMakeOrder";
import useProductsInCart from "../../hooks/Queries/shop/useCartProducts";
import PaymentMethd from "./PaymentMethd";
import ItemHeader from "./sections/ItemHeader";

function Checkout() {
  const { data: products, isSuccess } = useProductsInCart();
  const {
    mutate: makeOrder,
    isPending,
    isSuccess: successfulOrder,
  } = useMakeOrder();
  const { mutate: deleteSwag } = useDeleteSwag(); // Use deleteSwag

  const { mutate: clearCart } = useDeleteAllSwag();

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (data) => {
    const payload = {
      city: `${data.address.city}, ${data.address.country}`,
      phone: data.phoneNumber,
      address: data.address.postalAddress,
      postal_code: data.address.postalCode,
    };
    makeOrder(payload);

    // clear session cart
    clearCart();
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleDeleteItem = (productId) => {
    deleteSwag(productId);
  };

  return (
    <>
      <ItemHeader show={() => setIsOpen(true)} />
      <div className="px-8 sm:px-10 m-auto mb-10 max-w-screen-2xl justify-between w-full space-y-10 md:space-y-10 text-[#323433]">
        <div className="flex flex-col-reverse md:flex-row justify-between space-y-8 sm:space-y-0 gap-4 md:gap-0">
          <PaymentMethd isPending={isPending} handleSubmit={handleSubmit} />

          {/* order summary */}
          <div className="bg-white min-w-40 md:w-3/5 w-full p-4 md:p-5 border rounded-md md:mx-6 my-2 md:my-0 h-full">
            <h2 className="text-xl font-medium sm:font-semibold">Your Cart</h2>
            <div className="mt-8 w-full">
              <div className="flow-root">
                <ul className="-my-6 divide-y divide-gray-200 w-full">
                  {isSuccess &&
                    products.cart_items?.map(
                      ({
                        id,
                        product: { id: productId, image, name, price },
                        quantity,
                      }) => (
                        <li key={id} className="flex py-6 space-x-4">
                          <div className="h-32 w-32 flex-shrink-0 overflow-hidden rounded-lg">
                            <LazyLoadImage
                              src={`https://apis.spaceyatech.com${image}`}
                              alt={name}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="text-base space-y-2 w-full">
                            <span className="border bg-pink-200 flex p-1 px-2 rounded-full items-center gap-2 text-sm text-pink-700 w-max">
                              <CiShoppingTag />
                              {id}
                            </span>
                            <p className="">
                              <Link to={`/shop/item/${productId}`}>{name}</Link>
                            </p>

                            <div className="flex justify-between w-full mt-4">
                              <p>Qty: {quantity}</p>
                              <p className="">Ksh {price}</p>
                            </div>
                          </div>
                          <button
                            className="text-red-600 mb-5 text-lg"
                            type="button"
                            onClick={() => handleDeleteItem(productId)}
                            aria-label="Delete"
                          >
                            <FaTrash />
                          </button>
                        </li>
                      )
                    )}
                </ul>
              </div>
              <div className="flex space-x-4 justify-between mt-10 pb-6 font-semibold sm:font-medium text-base">
                <div className="space-y-4 text-xl">
                  <p>Cart Subtotal</p>
                </div>
                <div className="space-y-4 font-bold text-xl">
                  <p>Ksh {isSuccess && products.total_price}</p>
                </div>
              </div>
              <div className="my-2 space-y-4 text-md">
                <label htmlFor="discountCode">
                  Discount Code
                  <input
                    id="discountCode"
                    placeholder="Enter Discount Code"
                    type="text"
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border"
                  />
                </label>
                <button
                  type="button"
                  className="bg-primary/15 p-2 px-4 my-3 rounded-lg text-md"
                >
                  Apply code
                </button>
              </div>
              <div className="my-2 space-y-4 text-md">
                <p>Promo Code</p>
                <input
                  placeholder="Enter Promo Code"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 py-2 px-3 border text-md"
                />
                <button
                  type="button"
                  className="bg-primary/15 p-2 px-4 my-3 rounded-lg"
                >
                  Apply code
                </button>
              </div>
              <div className="flex space-x-24 py-5 sm:text-xl justify-between">
                <h3 className="w-32 text-lg">VAT&#40;16%&#41;</h3>
                <h3 className="font-bold sm:font-semibold">
                  Ksh {isSuccess && products.total_price * 0.16}
                </h3>
              </div>
              <div className="flex space-x-24 py-5 sm:text-xl justify-between bg-primary/15 px-4 rounded-lg">
                <h3 className="w-32 text-xl font-bold">Total</h3>
                <h3 className="font-bold sm:font-semibold">
                  Ksh{" "}
                  {isSuccess &&
                    products.total_price * 0.16 + products.total_price}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Payment */}
      </div>
      {successfulOrder && (
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Order Confirmed!
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        Your order has been successfully placed and paid for.
                        You will receive a confirmation message shortly.
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-500 px-4 py-2 text-base font-medium text-white shadow-sm ring-offset-2 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
}

export default Checkout;
