/* eslint-disable react/prop-types */
const ProductCard = ({ product }) => {
  const { header, desc, button } = product;
  return (
    <div className="flex flex-col items-center gap-10 p-6 border-2 border-gray-900 rounded-2xl">
      <h2 className="text-2xl font-medium capitalize">{header}</h2>
      <p className="text-sm text-center leading-6">{desc}</p>
      <button className="py-3 px-8 border-2 border-solid border-[#009975] rounded-lg flex items-center justify-center text-sm text-primary capitalize transition-all duration-300 ease-in hover:text-white hover:bg-primary">
        {button}
      </button>
    </div>
  );
};

export default ProductCard;
