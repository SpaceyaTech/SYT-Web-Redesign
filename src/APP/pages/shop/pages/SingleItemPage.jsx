import SampleImg from "../../../../assets/images/shop-page/main-sample.png";
import SmallSample1 from "../../../../assets/images/shop-page/small-sample-colored.png";
import SmallSample2 from "../../../../assets/images/shop-page/small-sample-greyscale.png";

const VariationData = [SmallSample1, SmallSample2, SmallSample1, SmallSample2];
// color
// img-color
// single-item

function SingleItemPage() {
  return (
    <div className="px-0 sm:px-28 sm:m-auto max-w-screen-2xl flex justify-center w-full space-x-14 min-h-50">
      <div className="px-4 md:px-7 md:pb-14 w-full md:w-1/2 space-y-6">
        <img src={SampleImg} alt="Sample" />
        <div className="flex justify-between">
          {VariationData.map((pic, i) => (
            <div key={i}>
              <img src={pic} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-5">
        <h1 className="text-3xl md:text-4xl font-medium">SpaceYaTech Hoodie</h1>
        <h3 className="text-lg md:text-xl font-medium">Product description</h3>
        <p className="text-sm md:text-base">
          Our Iconic T-Shirt is crafted with meticulous attention to detail,
          using superior materials that ensure durability and long-lasting
          performance. It&apos;s a wardrobe investment that will continue to
          impress you with its impeccable construction and ability to withstand
          the test of time.
        </p>
        <p className="text-2xl font-bold">Ksh 1500</p>
        <h4 className="text-xl">Choose color</h4>

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
        <h4 className="text-xl">Choose size</h4>
        <div className="space-x-4">
        <button type="button" className="w-[80px] h-[50px] rounded-full border border-black text-2xl">S</button>
        <button type="button" className="w-[80px] h-[50px] rounded-full border border-black text-2xl">M</button>
        <button type="button" className="w-[80px] h-[50px] rounded-full border border-black text-2xl">L</button>
        <button type="button" className="w-[80px] h-[50px] rounded-full border border-black text-2xl">XL</button>
        </div>
        
        {/* <div className="custom-number-input h-10 w-32">
          <label for="custom-input-number" className="w-full text-gray-700 text-sm font-semibold">Counter Input</label>
          <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
            <button data-action="decrement" className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none">
              <span className="m-auto text-2xl font-thin">−</span>
            </button>
            <input type="number" className="outline-none focus:outline-none text-center w-full bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700 " name="custom-input-number" value="0"/>
            <button data-action="increment" className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer">
              <span className="m-auto text-2xl font-thin">+</span>
            </button>
          </div>
        </div> */}

        <button type="button" className="w-full h-[62px] bg-[#009975] text-[#F7F7F7] text-sm font-medium rounded-lg">Buy Now</button>
        <button type="button" className="w-full h-[62px] bg-[#F5FFFD] text-[#009975] text-sm font-medium rounded-lg outline outline-[#009975]">Add to cart</button>
      </div>
    </div>
  );
}

export default SingleItemPage;
