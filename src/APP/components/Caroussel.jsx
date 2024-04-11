import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  arrowCircleLeft,
  arrowCircleRight,
  greyLinkedin,
  greyTwitter,
} from "../../assets/images/icons";

function Caroussel({ CarousselData }) {
  const carouselRef = useRef();

  const scroll = (scrollOffset) => {
    carouselRef.current.scrollLeft += scrollOffset;
  };

  return (
    <section className="pt-4 sm:pt-16 pb-10 mx-auto w-full max-w-screen-2xl">
      <div
        ref={carouselRef}
        className="py-6 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-x-auto scrollbar-hide"
        style={{
          gridTemplateColumns: "max-content",
          gridTemplateRows: "minmax(588px, 400px)",
          gridAutoFlow: "column",
          gridAutoColumns: "max-content",
        }}
      >
        {CarousselData.map(({ name, title, image, linkedin, twitter }) => (
          <div
            key={crypto.randomUUID()}
            className="border bg-white p-2 max-w-[400px] rounded-2xl md:rounded-[20px]"
          >
            <LazyLoadImage
              className="rounded-t-2xl h-4/6 w-[400px] object-cover"
              src={image}
              alt={name}
            />
            <div className="bg-green-light flex flex-col gap-2 w-full h-2/6 p-3 rounded-b-2xl">
              <p className=" text-2xl font-medium">{name}</p>
              <p className="flex gap-4 items-center text-base font-light text-grey-neutral space-x-4">
                <FontAwesomeIcon icon={faBriefcase} />
                {title}
              </p>
              <p className="flex items-center text-base font-light text-grey-neutral space-x-4">
                <img
                  src={greyLinkedin}
                  alt="Linkedin logo"
                  width="16"
                  height="16"
                />

                <a
                  href={linkedin.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className=""
                >
                  {linkedin.username}
                </a>
              </p>
              {twitter.username && (
                <p className="flex items-center text-base font-light text-grey-neutral space-x-4">
                  <img
                    src={greyTwitter}
                    alt="Twitter logo"
                    width="16"
                    height="16"
                  />
                  <a
                    href={twitter.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className=""
                  >
                    {twitter.username}
                  </a>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4">
        <button type="button" onClick={() => scroll(-400)}>
          <img src={arrowCircleLeft} alt="left" />
        </button>
        <button type="button" onClick={() => scroll(400)}>
          <img src={arrowCircleRight} alt="right" />
        </button>
      </div>
    </section>
  );
}

Caroussel.propTypes = {
  CarousselData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Caroussel;
