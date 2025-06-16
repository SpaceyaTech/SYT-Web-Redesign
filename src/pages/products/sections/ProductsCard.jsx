import PropTypes from "prop-types";
import { PiArrowLineUpRightBold } from "react-icons/pi";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ProductsCard({ name, desc, img, link, index }) {
  return (
    <div
      className={`flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      } md:items-center gap-2 md:gap-6 my-3 md:my-0`}
    >
      {/* desc */}
      <div className="flex-1 flex flex-col gap-1 md:gap-6 max-w-[532px]">
        <h2 className="text-[25px] md:text-4xl lg:text-5xl xl:text-6xl leading-9 lg:leading-normal xl:leading-relaxed font-medium">
          {name}
        </h2>
        <p className="text-base md:text-lg font-normal">{desc}</p>

        {/* view btn */}
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex flex-row items-center justify-center gap-2 bg-primary py-3 px-4 h-fit rounded-lg w-fit"
        >
          <span className="text-base font-medium text-white capitalize">
            View product
          </span>
          <span className="bg-white rounded-full p-1">
            <PiArrowLineUpRightBold className="w-6 h-6 object-contain text-green-800" />
          </span>
        </a>
      </div>

      {/* pic */}
      <div className="flex-1 min-h-full pb-14">
        <LazyLoadImage
          src={img}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* view btn */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-row items-center justify-center gap-2 bg-primary py-3 px-4 h-fit rounded-lg md:hidden w-fit"
      >
        <span className="text-base font-medium text-white capitalize">
          View product
        </span>
        <PiArrowLineUpRightBold
          alt="view btn"
          className="w-6 h-6 object-contain text-white bg-blue p-1"
        />
      </a>
    </div>
  );
}

export default ProductsCard;

ProductsCard.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
