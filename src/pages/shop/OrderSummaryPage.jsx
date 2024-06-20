/* eslint-disable react/react-in-jsx-scope */
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Sample1 from "../../../assets/images/shop-page/sample1.png";
import Sample2 from "../../../assets/images/shop-page/sample2.png";
import useMakeOrder from "../../hooks/Mutations/shop/useMakeOrder";
import useProductsInCart from "../../hooks/Queries/shop/useCartProducts";
import { useOrderSummary } from "../../hooks/Queries/shop/useOrdersList";
import CartDrawer from "../../components/shop/CartDrawer";
import Counter from "../../components/shop/Counter";
import ItemHeader from "./sections/ItemHeader";
import { LazyLoadImage } from "react-lazy-load-image-component";

const steps = [
  { description: "Provide your MPESA mobile number", key: 1 },
  {
    description:
      "Click submit and a prompt will appear on your phone with a request to confirm transaction by providing your MPESA PIN",
    key: 2,
  },
  {
    description:
      "Once completed, you will receive the confirmation SMS for this transaction",
    key: 3,
  },
];

function Checkout() {
  const { data: products, isSuccess } = useProductsInCart();
  const {
    mutate: makeOrder,
    isPending,
    isSuccess: successfulOrder,
  } = useMakeOrder();

  const [open, setOpen] = useState(false);
  const [count, setCount] = useState(1);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [county, setCounty] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [street, setStreet] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const [isOpen, setIsOpen] = useState(false);
  // const { data: orderSummary, status } = useOrderSummary();

  const handleSubmit = (e) => {
    const payload = {
      address,
      phonenumber: phoneNumber,
    };
    makeOrder(payload);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  console.log("products ", products);

  return (
    <>
      <ItemHeader show={() => setOpen((prev) => !prev)} />

      <div className="px-8 sm:px-0 m-auto mb-10 max-w-screen-2xl justify-between w-full space-y-10 md:space-y-20 text-[#323433]">
        <div className="flex flex-col md:flex-row justify-between space-y-8 sm:space-y-0">
          {/* form */}
          <div className="w-full min-w-40">
            <h1 className="text-xl sm:text-3xl font-medium mb-3">
              Shipping Address
            </h1>
            <form className="w-full max-w-2xl min-h-full flex flex-col justify-evenly">
              <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full px-3">
                  <input
                    value={email}
                    id="email-address"
                    className="block w-full py-3 px-4 mb-3 border border-[#79747E] rounded-md text-sm shadow-sm leading-tight placeholder-[#49454F] focus:outline-none focus:border-[#009975] focus:ring-1 focus:ring-[#009975] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="email"
                    placeholder="Email Address"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full px-3">
                  <input
                    value={name}
                    id="full-name"
                    className="block w-full py-3 px-4 mb-3 border border-[#79747E] rounded-md text-sm shadow-sm leading-tight placeholder-[#49454F] focus:outline-none focus:border-[#009975] focus:ring-1 focus:ring-[#009975] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="text"
                    placeholder="Full Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full px-3">
                  <input
                    value={county}
                    id="county"
                    className="block w-full py-3 px-4 mb-3 border border-[#79747E] rounded-md text-sm shadow-sm leading-tight placeholder-[#49454F] focus:outline-none focus:border-[#009975] focus:ring-1 focus:ring-[#009975] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="text"
                    placeholder="County"
                    onChange={(e) => setCounty(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full px-3">
                  <input
                    value={address}
                    id="address"
                    className="block w-full py-3 px-4 mb-3 border border-[#79747E] rounded-md text-sm shadow-sm leading-tight placeholder-[#49454F] focus:outline-none focus:border-[#009975] focus:ring-1 focus:ring-[#009975] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="text"
                    placeholder="Address"
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full md:w-1/2 px-3 md:mb-0">
                  <input
                    value={city}
                    id="city"
                    className="block w-full py-3 px-4 mb-3 border border-[#79747E] rounded-md text-sm shadow-sm leading-tight placeholder-[#49454F] focus:outline-none focus:border-[#009975] focus:ring-1 focus:ring-[#009975] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="text"
                    placeholder="City"
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 md:mb-0">
                  <input
                    value={postalCode}
                    id="postal-code"
                    className="block w-full py-3 px-4 mb-3 border border-[#79747E] rounded-md text-sm shadow-sm leading-tight placeholder-[#49454F] focus:outline-none focus:border-[#009975] focus:ring-1 focus:ring-[#009975] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="text"
                    placeholder="Postal Code"
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full px-3">
                  <input
                    value={street}
                    id="street"
                    className="block w-full py-3 px-4 mb-3 border border-[#79747E] rounded-md text-sm shadow-sm leading-tight placeholder-[#49454F] focus:outline-none focus:border-[#009975] focus:ring-1 focus:ring-[#009975] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="text"
                    placeholder="Street"
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full px-3">
                  <input
                    value={phoneNumber}
                    id="phone-number"
                    className="block w-full py-3 px-4 mb-3 border border-[#79747E] rounded-md text-sm shadow-sm leading-tight placeholder-[#49454F] focus:outline-none focus:border-[#009975] focus:ring-1 focus:ring-[#009975] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="telephone"
                    placeholder="Phone Number"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>
            </form>
          </div>

          {/* order summary */}
          <div className="bg-[#F5FFFD] min-w-40 w-full p-4 md:p-8">
            <h2 className="text-xl font-medium sm:font-semibold">
              Order Summary
            </h2>
            <div className="mt-8">
              <div className="flow-root">
                <ul className="-my-6 divide-y divide-gray-200 border-b">
                  {isSuccess &&
                    products.cart_items?.map(
                      ({
                        id,
                        product: { id: productId, image, name, price },
                        quantity,
                      }) => (
                        <li
                          key={id}
                          className="flex py-6 space-x-4 sm:space-x-24"
                        >
                          <div className="h-24 w-32 flex-shrink-0 overflow-hidden rounded-lg">
                            <LazyLoadImage 
                              src={`https://apis.spaceyatech.com${image}`}
                              alt={name}
                              className="h-full w-full object-cover object-center"
                            />
                          </div>

                          <div className="text-base space-y-2">
                            <p className="">
                              {" "}
                              <Link to={`/shop/item/${productId}`}>{name}</Link>
                            </p>

                            <p className="">
                              Ksh
                              {price}
                            </p>
                            <Counter
                              className="h-8 w-24"
                              count={quantity}
                              setCount={setCount}
                            />
                          </div>
                        </li>
                      )
                    )}
                </ul>
              </div>
              <div className="flex border-b space-x-4 sm:space-x-24 mt-10 pb-6 font-semibold sm:font-medium text-base">
                <div className="w-32 space-y-4">
                  <p>Subtotal</p>
                  <p>Shipping</p>
                </div>
                <div className="space-y-4">
                  <p>
                    Ksh
                    {isSuccess && products.total_price}
                  </p>
                  <p>
                    Ksh
                    {isSuccess && products.total_price * 0.1}
                  </p>
                </div>
              </div>
              <div className="flex space-x-24 py-5 sm:text-xl">
                <h3 className="w-32 text-lg">Total</h3>
                <h3 className="font-bold sm:font-semibold">
                  Ksh{" "}
                  {isSuccess &&
                    products.total_price * 0.1 + products.total_price}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className="w-full sm:w-2/3 space-y-4 text-left">
          <h1 className="text-lg sm:text-3xl font-semibold sm:font-medium">
            Payment
          </h1>
          <h3 className="font-bold">Lipa na MPESA</h3>
          <p className="text-sm">Follow the steps below to complete payment</p>

          <ol className="space-y-1">
            {steps.map(({ description, key }) => (
              <li className="text-xs" key={key}>
                {key}.{description}
              </li>
            ))}
          </ol>

          <h3 className="font-bold">Input your mpesa number</h3>
          <div className="flex flex-wrap mb-1 mt-4">
            <div className=" md:w-1/2 w-full">
              <input
                value=""
                id="phone-number"
                className="block w-full py-3 px-4 mb-3 h-14 border border-[#79747E] rounded-md text-sm shadow-sm leading-tight placeholder-[#49454F] focus:outline-none focus:border-[#009975] focus:ring-1 focus:ring-[#009975] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                type="telephone"
                placeholder="+254 7"
              />
            </div>
          </div>
          <button
            type="button"
            className=" md:w-1/2 w-full h-[62px] bg-primary hover:bg-[#00664E] text-[#F7F7F7] text-sm font-medium rounded-lg"
            onClick={handleSubmit}
          >
            {isPending ? "Loading" : "Pay and place order"}
          </button>
        </div>
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
              <div className="fixed inset-0 bg-black/25" />
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
                      className="text-lg font-medium leading-6 text-primary text-center"
                    >
                      Payment Successful!
                    </Dialog.Title>

                    <div
                      className="p-2 mb-4 rounded-lg text-base  text-center"
                      role="alert"
                    >
                      <p className="text-sm mt-6">
                        Ksh {products.total_price * 0.1 + products.total_price}{" "}
                      </p>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}

      {/* Cart Drawer */}
      <CartDrawer open={open} setOpen={setOpen} />
    </>
  );
}

export default Checkout;
