import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ImageCard({ photo, style }) {
  const { width, src, alt, date, event, height } = photo;

  return (
    <div
      style={style}
      //   className={`bg-white px-2 my-2 mx-2 uppercase text-grey-neutral font-medium text-xs w-[${width}px]`}
      className="bg-white px-2 my-2 mx-2 uppercase text-grey-neutral font-medium text-xs size-full"
    >
      <p className="float-right py-2">{date}</p>

      <LazyLoadImage
        src={src}
        alt={alt}
        // height={217}
        // className="aspect-video object-cover"
        height={height}
        width={width}
        className="object-cover size-full"
        effect="blur"
      />
      <p className="py-2">Collection 2024 | {event}</p>
    </div>
  );
}

export default ImageCard;
ImageCard.propTypes = {
  photo: PropTypes.shape({
    width: PropTypes.number.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    event: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  style: PropTypes.objectOf(PropTypes.any).isRequired,
};
