/* eslint-disable react/react-in-jsx-scope */
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useNavigate } from "react-router-dom";
import SampleImg from "../../../../assets/images/shop-page/main-sample.png";
import SmallSample1 from "../../../../assets/images/shop-page/small-sample-colored.png";
import SmallSample2 from "../../../../assets/images/shop-page/small-sample-greyscale.png";
import Sample1 from "../../../../assets/images/shop-page/sample1.png";
import Sample2 from "../../../../assets/images/shop-page/sample2.png";
import Sample3 from "../../../../assets/images/shop-page/sample3.png";
import CloseIcon from "../../../../assets/images/icons/close-icon.svg";
import DeleteIcon from "../../../../assets/images/icons/delete-icon.svg";
import Counter from "../../../components/Counter";
import ItemHeader from "../sections/ItemHeader";

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

const VariationData = [SmallSample1, SmallSample2, SmallSample1, SmallSample2];

export default function SingleItemPage() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  return (
    <>
      <ItemHeader show={() => setOpen((prev) => !prev)} />
      <div className="px-8 sm:px-0 m-auto mb-10 max-w-screen-2xl flex flex-col md:flex-row justify-between w-full space-y-4 md:space-x-28 text-[#323433]">
        <div className="md:pb-14 md:w-1/2 space-y-6">
          <img src={SampleImg} alt="Sample" className="m-auto md:min-w-full " />
          <div className="flex justify-between">
            {VariationData.map((pic, i) => (
              <div key={i} className="w-[70px] sm:w-auto">
                <img src={pic} alt="recommendation" />
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-5 sm:pr-16">
          <h1 className="text-xl md:text-4xl font-semibold md:font-medium">
            SpaceYaTech Hoodie
          </h1>
          <h3 className="text-base md:text-xl font-normal md:font-medium">
            Product description
          </h3>
          <p className="text-sm md:text-base">
            Our Iconic T-Shirt is crafted with meticulous attention to detail,
            using superior materials that ensure durability and long-lasting
            performance. It&apos;s a wardrobe investment that will continue to
            impress you with its impeccable construction and ability to
            withstand the test of time.
          </p>
          <p className="text-xl md:text-2xl font-semibold md:font-bold">
            Ksh 1500
          </p>
          <h4 className="text-base md:text-xl">Choose color</h4>

          <div className="flex justify-start space-x-6">
            {VariationData.map((pic, i) => (
              <div key={i}>
                <img
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
            <button
              type="button"
              className="w-20 h-12 rounded-full border border-[#323433] text-2xl hover:bg-primary hover:border-[#009975] hover:text-white"
            >
              S
            </button>
            <button
              type="button"
              className="w-20 h-12 rounded-full border border-[#323433] text-2xl hover:bg-primary hover:border-[#009975] hover:text-white"
            >
              M
            </button>
            <button
              type="button"
              className="w-20 h-12 rounded-full border border-[#323433] text-2xl hover:bg-primary hover:border-[#009975] hover:text-white"
            >
              L
            </button>
            <button
              type="button"
              className="w-20 h-12 rounded-full border border-[#323433] text-2xl hover:bg-primary hover:border-[#009975] hover:text-white"
            >
              XL
            </button>
          </div>

          <Counter className="h-12 w-32" />

          <button
            type="button"
            className="w-full h-[62px] bg-primary text-[#F7F7F7] text-sm font-medium rounded-lg"
          >
            Buy Now
          </button>
          <button
            type="button"
            className="w-full h-[62px] bg-[#F5FFFD] text-primary text-sm font-medium rounded-lg outline outline-[#009975]"
          >
            Add to cart
          </button>
        </div>
      </div>

      {/* Drawer */}
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
                      <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-3xl font-semibold">
                            Your cart{" "}
                            <span className="text-[#00CC9C]">(4)</span>
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <img src={CloseIcon} alt="close" />
                            </button>
                          </div>
                        </div>

                        {/* Items in Cart */}
                        <div className="mt-8">
                          <div className="flow-root">
                            <ul className="-my-6 divide-y divide-gray-200 border-b">
                              {products.map(
                                ({
                                  id,
                                  imageSrc,
                                  name,
                                  href,
                                  price,
                                  color,
                                  quantity,
                                }) => (
                                  <li
                                    key={id}
                                    className="flex py-6 space-x-4 sm:space-x-16"
                                  >
                                    <div className="h-32 w-28 flex-shrink-0 overflow-hidden rounded-2xl">
                                      <img
                                        src={imageSrc}
                                        alt={name}
                                        className="h-full w-full object-cover object-center"
                                      />
                                    </div>

                                    <div className="ml-4 flex flex-1 flex-col space-y-14">
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <p className="text-base md:text-xl">
                                            {" "}
                                            <a href={href}>{name}</a>
                                          </p>
                                        </h3>
                                        <button
                                          type="button"
                                          className="flex justify-end"
                                        >
                                          <img
                                            src={DeleteIcon}
                                            alt="delete button"
                                          />
                                        </button>
                                      </div>
                                      <div className="flex flex-1 items-end justify-between text-sm">
                                        <p className="text-xl md:text-2xl font-bold">
                                          Ksh
                                          {price}
                                        </p>

                                        <Counter className="h-8 sm:h-12 w-24 sm:w-32" />
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
                              <img
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
                          <h2>Ksh 3600</h2>
                        </div>
                        <div className="flex flex-col md:flex-row space-y-6 md:space-x-10">
                          <button
                            type="button"
                            className=" md:w-1/2 w-full h-[62px] bg-[#F5FFFD] text-primary text-sm font-medium rounded-lg outline outline-2 outline-[#009975]"
                            onClick={() => navigate("/shop")}
                          >
                            Continue shopping
                          </button>
                          <button
                            type="button"
                            className=" md:w-1/2 w-full h-[62px] bg-primary hover:bg-[#00664E] text-[#F7F7F7] text-sm font-medium rounded-lg"
                            onClick={() => navigate("/shop/checkout")}
                          >
                            Checkout
                          </button>
                        </div>
                        <p className="text-center">
                          By selecting ‘Check Out’ you are agreeing to our{" "}
                          <b className="font-medium">Terms & Conditions</b>
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
    </>
  );
}
