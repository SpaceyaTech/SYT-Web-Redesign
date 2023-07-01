import SampleImg from "../../../../assets/images/shop-page/main-sample.png";
import SmallSample1 from "../../../../assets/images/shop-page/small-sample-colored.png";
import SmallSample2 from "../../../../assets/images/shop-page/small-sample-greyscale.png";

const VariationData = [SmallSample1, SmallSample2, SmallSample1, SmallSample2];
// color
// img-color
// single-item

function SingleItemPage() {
  return (
    <div className="px-0 sm:px-28 sm:m-auto max-w-screen-2xl flex min-h-50">
      <div className="md:pt-10 px-4 md:px-7 md:pb-14 mt-16 md:my-32 w-full md:w-50 ">
        <img src={SampleImg} alt="Sample" />
        <div className="grid grid-flow-col">
          {VariationData.map((pic, i) => (
            <div key={i}>
              <img src={pic} />
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-50">
        <h1>SpaceYaTech Hoodie</h1>
        <h3>Product description</h3>
        <p>
          Our Iconic T-Shirt is crafted with meticulous attention to detail,
          using superior materials that ensure durability and long-lasting
          performance. It&apos;s a wardrobe investment that will continue to
          impress you with its impeccable construction and ability to withstand
          the test of time.
        </p>
        <b>Ksh 1500</b>
        <h4>Choose color</h4>
        <div className="flex justify-between">
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
        <h4>Choose size</h4>
        <button type="button">S</button>
        <button type="button">M</button>
        <button type="button">L</button>
        <button type="button">XL</button>
        <input />
        <button type="button">Buy Now</button>
        <button type="button">Add to cart</button>
      </div>
    </div>
  );
}

export default SingleItemPage;
