import { PodcastCard } from "../../../components";
import { podcasts } from "../data";

function PodcastSection() {
  return (
    <section className="py-14 flex flex-col justify-center gap-8">
      {/* Header */}
      <div className="font-normal flex flex-col gap-2 items-center w-full md:max-w-2xl mx-auto">
        <h5 className="text-xl text-[#00664E]">Podcast</h5>
        <h3 className="text-2xl">SpaceYaTech Podcasts</h3>
        <p className="text-center text-xl text-[#323433]">
          A collection from some of the finest tech podcasts this side of the
          Sahara, all for your listening pleasure.
        </p>
      </div>

      {/* Cards */}
      <div
        className="px-2 py-6 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-x-auto"
        style={{
          gridTemplateColumns: "max-content",
          gridTemplateRows: "minmax(520px, 300px)",
          gridAutoFlow: "column",
          gridAutoColumns: "max-content",
        }}
      >
        {podcasts.map(({ id, img, description, title, link }) => (
          <PodcastCard
            key={id}
            img={img}
            title={title}
            description={description}
            link={link}
          />
        ))}
      </div>
      <div className="flex items-center justify-center gap-2">
        <a
          href="https://open.spotify.com/show/4nUYzhacDAw1v9ClqPY89n"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#00664E] text-xl font-normal hover:underline"
        >
          View All Episodes
        </a>
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.3172 7.44254L9.69219 13.0675C9.57491 13.1848 9.41585 13.2507 9.25 13.2507C9.08415 13.2507 8.92509 13.1848 8.80781 13.0675C8.69054 12.9503 8.62465 12.7912 8.62465 12.6253C8.62465 12.4595 8.69054 12.3004 8.80781 12.1832L13.3664 7.62535H1.125C0.95924 7.62535 0.800269 7.5595 0.683058 7.44229C0.565848 7.32508 0.5 7.16611 0.5 7.00035C0.5 6.83459 0.565848 6.67562 0.683058 6.55841C0.800269 6.4412 0.95924 6.37535 1.125 6.37535H13.3664L8.80781 1.81753C8.69054 1.70026 8.62465 1.5412 8.62465 1.37535C8.62465 1.2095 8.69054 1.05044 8.80781 0.93316C8.92509 0.815885 9.08415 0.75 9.25 0.75C9.41585 0.75 9.57491 0.815885 9.69219 0.93316L15.3172 6.55816C15.3753 6.61621 15.4214 6.68514 15.4529 6.76101C15.4843 6.83688 15.5005 6.91821 15.5005 7.00035C15.5005 7.08248 15.4843 7.16381 15.4529 7.23969C15.4214 7.31556 15.3753 7.38449 15.3172 7.44254Z"
            fill="#009975"
          />
        </svg>
      </div>
    </section>
  );
}

export default PodcastSection;
