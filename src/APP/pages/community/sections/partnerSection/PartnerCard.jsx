import PropTypes from "prop-types";

function PartnerCard({ image, backgroundColor, link }) {
  return (
    <div
      className="flex flex-col items-center p-8 justify-between h-80 border-2 rounded-2xl"
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <img src={image} />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="py-2 px-12 border-2 border-solid my-8 rounded-lg flex items-center justify-center text-xs capitalize transition-all duration-300 ease-in hover:text-white hover:bg-primary border-[#009975] text-primary"
      >
        JOIN
      </a>
    </div>
  );
}

export default PartnerCard;

PartnerCard.propTypes = {
  image: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
