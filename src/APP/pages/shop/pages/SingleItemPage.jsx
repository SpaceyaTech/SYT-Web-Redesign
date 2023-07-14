import { useState } from "react";
import SampleImg from "../../../../assets/images/shop-page/main-sample.png";
import SmallSample1 from "../../../../assets/images/shop-page/small-sample-colored.png";
import SmallSample2 from "../../../../assets/images/shop-page/small-sample-greyscale.png";
import Sample1 from "../../../../assets/images/shop-page/sample1.png";
import Sample2 from "../../../../assets/images/shop-page/sample2.png";
import Sample3 from "../../../../assets/images/shop-page/sample3.png";
import CloseIcon from "../../../../assets/images/icons/close-icon.svg"
import DeleteIcon from "../../../../assets/images/icons/delete-icon.svg"
import Counter from "../../../components/Counter"
import ItemHeader from "./../sections/ItemHeader"

const VariationData = [SmallSample1, SmallSample2, SmallSample1, SmallSample2];
const Cart = [
  {
    image: Sample1,
    name: "SYT Hoodie",
    price: 1500,
  },
  {
    image: Sample2,
    name: "SYT Bookmark",
    price: 700,
  }
]

const Recommendations = [
  {
    image: Sample3,
    name: "Mentorlst Hoodie",
    price: 1500,
  }
]
// props:{
  // color
  // img-color
  // single-item
// }

function SingleItemPage() {
  const [showDrawer, setShowDrawer] = useState(false);

  return (
    <div className="relative">
      <ItemHeader setShowDrawer={() => setShowDrawer((prev) => !prev)}/>
      <div className="relative z-[0]" style={showDrawer ?{boxShadow: "0 0 0 5000px rgba(0,0,0,0.7)"}: {boxShadow:"none"}}></div>
      <div className="px-8 sm:px-28 m-auto mb-10 max-w-screen-2xl flex flex-col md:flex-row justify-between w-full space-y-4 md:space-x-24 text-[#323433]">
        
        {/* cart drawer */}
        <div className="z-[1] absolute px-6 py-12 sm:px-16 top-[0] min-h-screen right-0 w-full sm:w-2/5 bg-white shadow-lg" style={showDrawer ? { display: "block" } : { display: "none" }}>
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">Your cart <span className="text-[#00CC9C]">(4)</span></h2>
            <button onClick={() => setShowDrawer((prev) => !prev)} className=""><img src={CloseIcon} alt="close"/></button>
          </div>
          
          {Cart.map(({image, name, price}, i)=>{
            return (
              <div key={i} className="flex flex-row space-x-6 border-b pb-8 pt-10">
                <img src={image} alt={name} className="w-24 sm:w-28" />
                <div className="flex sm:justify-evenly justify-between w-full">
                  <div className="flex flex-col justify-around">
                    <p className="text-base md:text-xl">{name}</p>
                    <p className="text-xl md:text-2xl font-bold">Ksh {price}</p>
                  </div>

                  <div className="flex flex-col justify-around">
                    <button className="flex justify-end"><img src={DeleteIcon} alt="delete button"/></button>
                    <Counter className="h-6 w-20"/>
                  </div>
                </div>
              </div>
            )
          })}

          <div className="pb-8 pt-10">
            <p className="text-base md:text-xl text-center font-bold">You might love</p>
            <div className="flex border-b pb-8 pt-10 space-x-6">
              <img src={Sample3} alt="Mentorlst Hoodie" className="w-24" />
              <div className="flex flex-col justify-around">
                <p className="text-base md:text-xl">Mentorlst Hoodie</p>
                <p className="text-xl md:text-2xl font-bold">Ksh 1500</p>
                <button type="button" className="w-32 py-2 px-8 bg-[#009975] text-[#F7F7F7] text-sm font-medium rounded-lg">Buy Now</button>
              </div>
            </div>
          </div>

          {/* SubTotal */}
          <div className="bg-[#F5FFFD] space-y-4 p-4 rounded-lg">
            <div className="text-xl md:text-2xl font-bold flex justify-between">
              <h2>Sub Total</h2>
              <h2>Ksh 3600</h2>
            </div>
            <div className="flex md:flex-row md:space-x-10">
              <button type="button" className=" md:w-1/2 w-full h-[62px] bg-[#F5FFFD] text-[#009975] text-sm font-medium rounded-lg outline outline-2 outline-[#009975]">Continue shopping</button>
              <button type="button" className=" md:w-1/2 w-full h-[62px] bg-[#009975] text-[#F7F7F7] text-sm font-medium rounded-lg">Checkout</button>
            </div>
            <p className="text-center">By selecting ‘Check Out’ you are agreeing to our <b className="font-medium">Terms & Conditions</b></p>
          </div>
        </div>

        <div className="md:pb-14 md:w-1/2 space-y-6">
          <img src={SampleImg} alt="Sample" className="m-auto md:min-w-full "/>
          <div className="flex justify-start space-x-4">
            {VariationData.map((pic, i) => (
              <div key={i}>
                <img src={pic}/>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-5">
          <h1 className="text-xl md:text-4xl font-semibold md:font-medium">SpaceYaTech Hoodie</h1>
          <h3 className="text-base md:text-xl font-normal md:font-medium">Product description</h3>
          <p className="text-sm md:text-base">
            Our Iconic T-Shirt is crafted with meticulous attention to detail,
            using superior materials that ensure durability and long-lasting
            performance. It&apos;s a wardrobe investment that will continue to
            impress you with its impeccable construction and ability to withstand
            the test of time.
          </p>
          <p className="text-xl md:text-2xl font-semibold md:font-bold">Ksh 1500</p>
          <h4 className="text-base md:text-xl">Choose color</h4>

          <div className="flex justify-start space-x-4">
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
            <button type="button" className="w-20 h-12 rounded-full border border-[#323433] text-2xl">S</button>
            <button type="button" className="w-20 h-12 rounded-full border border-[#323433] text-2xl">M</button>
            <button type="button" className="w-20 h-12 rounded-full border border-[#323433] text-2xl">L</button>
            <button type="button" className="w-20 h-12 rounded-full border border-[#323433] text-2xl">XL</button>
          </div>
          
          <Counter className="h-12 w-32"/>

          <button type="button" className="w-full h-[62px] bg-[#009975] text-[#F7F7F7] text-sm font-medium rounded-lg">Buy Now</button>
          <button type="button" className="w-full h-[62px] bg-[#F5FFFD] text-[#009975] text-sm font-medium rounded-lg outline outline-[#009975]">Add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default SingleItemPage;
