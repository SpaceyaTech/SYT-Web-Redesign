import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

function CategoryCard({ categoryData }) {
  const { slug, cover, tags, title, period, courseType, hosts } = categoryData;
  return (
    <div className="size-full bg-green-light border-4 border-white rounded-lg p-4 flex flex-col gap-4">
      <LazyLoadImage
        src={cover}
        effect="blur"
        alt={title}
        className="w-full h-2/5 rounded-md object-cover"
      />
      <div className="h-3/5 spay-2.5">
        <div className="flex items-center flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={tag}
              className="capitalize bg-white py-1 px-3 border rounded-full text-green-header text-sm font-semibold"
            >
              {tag}
            </p>
          ))}
        </div>

        <div className="my-3 space-y-2 w-full">
          <h4 className="text-grey-dark font-semibold text-xl">{title}</h4>

          <p className="text-base text-gray-500">
            {period} ● {courseType}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h6 className="text-xs text-gray-500">Hosted by</h6>

          <ul className="list-none flex flex-col gap-2">
            {hosts.map(({ id, headshot, name, role }) => (
              <li key={id} className="flex items-center gap-1.5">
                <LazyLoadImage
                  src={headshot}
                  alt={name}
                  className="size-11 rounded-full border-2 border-white"
                  effect="blur"
                />

                <div className="flex flex-col justify-between gap-1.5">
                  <h4 className="font-semibold text-sm">{name}</h4>
                  <p className="text-sm text-gray-500">{role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Link
        to={`/resources/${slug}`}
        className="border border-green-header px-3 py-2 rounded-lg mt-10 flex-center transition-colors ease-in duration-500 text-primary text-base font-semibold hover:text-white hover:bg-green-header"
      >
        Learn More
      </Link>
    </div>
  );
}

CategoryCard.propTypes = {
  categoryData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    slug: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired, // Assuming these image paths are strings
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    title: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    courseType: PropTypes.string.isRequired,
    hosts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        headshot: PropTypes.string.isRequired, // Assuming the images are strings (paths)
        name: PropTypes.string.isRequired,
        role: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default CategoryCard;
