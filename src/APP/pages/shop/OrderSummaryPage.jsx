/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import Sample1 from "../../../assets/images/shop-page/sample1.png";
import Sample2 from "../../../assets/images/shop-page/sample2.png";
import { useOrderSummary } from "../../../hooks/Queries/shop/useOrdersList";
import Counter from "../../components/shop/Counter";
import ItemHeader from "./sections/ItemHeader";

const products = [
  {
    id: 1,
    name: "SYT Hoodie",
    href: "#",
    color: "Salmon",
    price: "90.00",
    quantity: 1,
    imageSrc: Sample1,
  },
  {
    id: 2,
    name: "SYT Bookmark",
    href: "#",
    color: "Blue",
    price: "32.00",
    quantity: 1,
    imageSrc: Sample2,
  },
  // More products...
];

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
  const [open, setOpen] = useState(false);

  const { data: orderSummary, status } = useOrderSummary();


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
                    value=""
                    id="email-address"
                    className="block w-full py-3 px-4 mb-3 border border-[#79747E] rounded-md text-sm shadow-sm leading-tight placeholder-[#49454F] focus:outline-none focus:border-[#009975] focus:ring-1 focus:ring-[#009975] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="email"
                    placeholder="Email Address"
                  />
                  {/* <p className="text-red-500 text-xs italic">
                    Please fill out this field.
                  </p> */}
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full px-3">
                  <input
                    value=""
                    id="full-name"
                    className="block w-full py-3 px-4 mb-3 border border-[#79747E] rounded-md text-sm shadow-sm leading-tight placeholder-[#49454F] focus:outline-none focus:border-[#009975] focus:ring-1 focus:ring-[#009975] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full px-3">
                  <input
                    value=""
                    id="county"
                    className="block w-full py-3 px-4 mb-3 border border-[#79747E] rounded-md text-sm shadow-sm leading-tight placeholder-[#49454F] focus:outline-none focus:border-[#009975] focus:ring-1 focus:ring-[#009975] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="text"
                    placeholder="County"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full px-3">
                  <input
                    value=""
                    id="address"
                    className="block w-full py-3 px-4 mb-3 border border-[#79747E] rounded-md text-sm shadow-sm leading-tight placeholder-[#49454F] focus:outline-none focus:border-[#009975] focus:ring-1 focus:ring-[#009975] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="text"
                    placeholder="Address"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full md:w-1/2 px-3 md:mb-0">
                  <input
                    value=""
                    id="city"
                    className="block w-full py-3 px-4 mb-3 border border-[#79747E] rounded-md text-sm shadow-sm leading-tight placeholder-[#49454F] focus:outline-none focus:border-[#009975] focus:ring-1 focus:ring-[#009975] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="text"
                    placeholder="City"
                  />
                </div>
                <div className="w-full md:w-1/2 px-3 md:mb-0">
                  <input
                    value=""
                    id="postal-code"
                    className="block w-full py-3 px-4 mb-3 border border-[#79747E] rounded-md text-sm shadow-sm leading-tight placeholder-[#49454F] focus:outline-none focus:border-[#009975] focus:ring-1 focus:ring-[#009975] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="text"
                    placeholder="Postal Code"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full px-3">
                  <input
                    value=""
                    id="street"
                    className="block w-full py-3 px-4 mb-3 border border-[#79747E] rounded-md text-sm shadow-sm leading-tight placeholder-[#49454F] focus:outline-none focus:border-[#009975] focus:ring-1 focus:ring-[#009975] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="text"
                    placeholder="Street"
                  />
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mb-1">
                <div className="w-full px-3">
                  <input
                    value=""
                    id="phone-number"
                    className="block w-full py-3 px-4 mb-3 border border-[#79747E] rounded-md text-sm shadow-sm leading-tight placeholder-[#49454F] focus:outline-none focus:border-[#009975] focus:ring-1 focus:ring-[#009975] disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                    type="telephone"
                    placeholder="Phone Number"
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
                  {products.map(
                    ({ id, imageSrc, name, href, price, color, quantity }) => (
                      <li
                        key={id}
                        className="flex py-6 space-x-4 sm:space-x-24"
                      >
                        <div className="h-24 w-32 flex-shrink-0 overflow-hidden rounded-lg">
                          <img
                            src={imageSrc}
                            alt={name}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>

                        <div className="text-base space-y-2">
                          <p className="">
                            {" "}
                            <a href={href}>{name}</a>
                          </p>

                          <p className="">
                            Ksh
                            {price}
                          </p>
                          <Counter className="h-8 w-24" />
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
                  <p>Ksh 3600</p>
                  <p>Ksh 350</p>
                </div>
              </div>
              <div className="flex space-x-24 py-5 sm:text-xl">
                <h3 className="w-32 text-lg">Total</h3>
                <h3 className="font-bold sm:font-semibold">Ksh 3950</h3>
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
                {description}
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
          >
            Pay and place order
          </button>
        </div>
      </div>
    </>
  );
}

export default Checkout;
