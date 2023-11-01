/* eslint-disable react/prop-types */
function PartnerCard({ image, backgroundColor }) {
  return (
    <div
      className={`flex flex-col items-center p-8 justify-between h-80 border-2 rounded-2xl bg-[${backgroundColor}]`}
    >
      <img src={image} />
      <button
        type="button"
        className="py-2 px-12 border-2 border-solid my-8 rounded-lg flex items-center justify-center text-xs capitalize transition-all duration-300 ease-in hover:text-white hover:bg-[#009975] border-[#009975] text-[#009975]"
      >
        JOIN
      </button>
    </div>
  );
}

export default PartnerCard;
