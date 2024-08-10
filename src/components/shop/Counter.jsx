import PropTypes from "prop-types";

function Counter({ className, setCount, count, maxStock }) {
  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () =>
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : prevCount));
  // console.log(count)
  return (
    <div className={`flex rounded-lg ${className}`}>
      <button
        type="button"
        data-action="decrement"
        className="cursor-pointer outline-none w-20 border-y border-l border-l-[#EAECF0] border-y-[#EAECF0] rounded-l-md border-r"
        onClick={decrement}
      >
        <span className=" text-base">−</span>
      </button>
      <p
        className="outline-none focus:outline-none font-medium  md:text-base cursor-default flex items-center justify-center border-y px-5 border-y-[#EAECF0]"
        name="custom-input-number"
      >
        {count}
      </p>
      <button
        disabled={maxStock === count || count > maxStock}
        type="button"
        data-action="increment"
        className="cursor-pointer outline-none w-20 border-y border-r border-r-[#EAECF0] border-y-[#EAECF0] rounded-r-md border-l"
        onClick={increment}
      >
        <span className="text-base">+</span>
      </button>
    </div>
  );
}

export default Counter;

Counter.defaultProps = {
  className: "",
};

Counter.propTypes = {
  className: PropTypes.string,
  setCount: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  maxStock: PropTypes.number.isRequired,
};
