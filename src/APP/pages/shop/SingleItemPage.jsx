/* eslint-disable react/react-in-jsx-scope */
import { useHookstate } from "@hookstate/core";
import { localstored } from "@hookstate/localstored";
import { Fragment, useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Sample1 from "../../../assets/images/shop-page/sample1.png";
import Sample2 from "../../../assets/images/shop-page/sample2.png";
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
import formatPrice from "../../../utilities/FormatPrice";

// const products = [
//   {
//     id: 1,
//     name: "SYT Hoodie",
//     href: "#",
//     color: "Salmon",
//     price: "90.00",
//     quantity: 1,
//     imageSrc: Sample1,
//   },
//   {
//     id: 2,
//     name: "SYT Bookmark",
//     href: "#",
//     color: "Blue",
//     price: "32.00",
//     quantity: 1,
//     imageSrc: Sample2,
//   },
//   // More products...
// ];

// {
//   "swagg_id": "0d0aacc0-9ed8-4c13-8038-41a8f42642cd",
//   "product": {
//     "name": "Tech-Infused Comfort",
//     "description": "Meet our Signature T-Shirt, engineered with tech-savvy comfort in mind. Crafted from premium materials, it seamlessly blends style with innovation. Perfect for work or play, its breathable fabric keeps you cool while you conquer coding challenges or unwind after a long day of programming. Elevate your wardrobe with our tech-inspired tee and embrace the future of fashion.",
//     "price": "1000",
//     "size": "S"
//   },
//   "quantity": 2
// }

const VariationData = [SmallSample1, SmallSample2, SmallSample1, SmallSample2];

export default function SingleItemPage() {
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const { auth } = useAuth();
  const { id } = useParams();
  // const navigate = useNavigate();

  const [count, setCount] = useState(1);
  const [open, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [selectedSize, setSelectedSize] = useState(sizes[2]);
  const [Payload, setPayload] = useState({});

  const { data: singleOrder } = useSingleOrder(id);
  const { data: singleSwag, isSuccess, refetch } = useSingleSwag(id);
  const { mutate: addItemsToCart, isLoading } = useAddSwagToCart();

  // const state = useHookstate(
  //   [],
  //   localstored({
  //     // key is optional,
  //     // if it is not defined, the extension requires and
  //     // uses the identifier from the @hookstate/identifiable
  //     key: "cart-items",
  //   })
  // );

  // console.log("singleSwag", singleSwag);
  useEffect(() => {
    setPayload({
      swagg_id: singleSwag?.id,
      product: {
        name: singleSwag?.name,
        description: singleSwag?.description,
        price: singleSwag?.price,
        size: selectedSize,
        // image: singleSwag.image,
      },
      quantity: count,
    });

    refetch();
  }, [isSuccess]);

  const handleAddToCart = () => {
    // if (auth?.access) {
    addItemsToCart(Payload);
    // console.log("Payload Passed ✅", Payload);
    // } else {
    // console.log("Payload", {
    //   swagg_id: singleSwag.id,
    //   product: {
    //     name: singleSwag.name,
    //     description: singleSwag.description,
    //     price: singleSwag.price,
    //     size: selectedSize,
    //   },
    //   quantity: count,
    // });
    // if (state) {
    //   const existingItem = state.find(
    //     ({ payload }) =>
    //       payload.swagg_id.get() === singleSwag.id &&
    //       payload.product.size.get() === selectedSize
    //   );

    //   if (existingItem) {
    //     existingItem.payload.quantity.set(
    //       existingItem.payload.quantity.get() + count
    //     );
    //   } else {
    //     state.merge([
    //       {
    //         payload: {
    //           swagg_id: singleSwag.id,
    //           product: {
    //             name: singleSwag.name,
    //             description: singleSwag.description,
    //             price: singleSwag.price,
    //             size: selectedSize,
    //             image: singleSwag.image,
    //           },
    //           quantity: count,
    //         },
    //       },
    //     ]);
    //   }
    // }

    // toast("✅ Item added to cart 🛒!");
    // setIsModalOpen(true);
    setOpen(true);

    // }
  };

  // useEffect(() => {
  // }, []);

  // const handleBuyNow = () => {
  //   // if (auth?.access) {
  //   //   addItemsToCart(Payload);
  //   setOpen(true);
  //   // } else {
  //   // toast("make an order ✅");
  //   setIsModalOpen(true);
  //   // }
  // };

  return (
    <>
      <ItemHeader show={() => setOpen((prev) => !prev)} />
      {isSuccess ? (
        <div className="px-8 sm:px-0 m-auto mb-10 max-w-screen-2xl flex flex-col md:flex-row justify-between w-full space-y-4 md:space-x-28 text-[#323433]">
          <div className="md:pb-14 md:w-1/2 space-y-6">
            <img
              src={singleSwag.image}
              alt={singleSwag.name}
              className="m-auto md:min-w-full "
            />
            <div className="flex justify-between">
              {VariationData.map((pic) => (
                <div key={crypto.randomUUID()} className="w-[70px] sm:w-auto">
                  <img src={pic} alt="recommendation" />
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
              {formatPrice(singleSwag.price)}
            </p>
            <h4 className="text-base md:text-xl">Choose color</h4>

            <div className="flex justify-start space-x-6">
              {VariationData.map((pic) => (
                <div key={crypto.randomUUID()}>
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
            {/* 
            <button
              type="button"
              className="w-full h-[62px] bg-primary text-[#F7F7F7] text-sm font-medium rounded-lg"
              onClick={handleBuyNow}
            >
              Buy Now
            </button> */}
            <button
              type="button"
              className="w-full h-[62px] bg-[#F5FFFD] text-primary hover:bg-primary hover:text-[#F7F7F7] text-sm font-medium rounded-lg outline outline-[#009975]"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          </div>
        </div>
      ) : (
        <p>Error Fetching Item</p>
      )}

      {/* {state &&
        state?.map((taskState) => (
          <p key={crypto.randomUUID()}>
            <input
              value={taskState.name.get()}
              onChange={(e) => taskState.name.set(e.target.value)}
            />
          </p>
        ))} */}

      {/* Drawer */}
      <CartDrawer open={open} setOpen={setOpen} />

      {/* Notification Modal */}
      {/* <NotificationModal
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        message={message}
      /> */}
    </>
  );
}

// import { useHookstate } from "@hookstate/core";
// import { localstored } from "@hookstate/localstored";

// const SingleItemPage = () => {
//   const state = useHookstate(
//     [],
//     localstored({
//       // key is optional,
//       // if it is not defined, the extension requires and
//       // uses the identifier from the @hookstate/identifiable
//       key: "state-key",
//     })
//   );

//   console.log("state length: ", state.length);

//   return (
//     <>
//       {state.map((taskState, taskIndex) => {
//         return (
//           <p key={taskIndex}>
//             <input
//               value={taskState.name.first.get()}
//               onChange={(e) => taskState.name.set(e.target.value)}
//             />
//           </p>
//         );
//       })}
//       <p>
//         <button
//           onClick={() =>
//             state.merge([
//               {
//                 name: {
//                   first: "First Task",
//                   Second: "Second name",
//                   third: {
//                     fourth: "Fourth name",
//                   },
//                 },
//               },
//             ])
//           }
//         >
//           Add task
//         </button>
//       </p>
//     </>
//   );
// };

// export default SingleItemPage;
