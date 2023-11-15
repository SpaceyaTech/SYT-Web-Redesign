import {
  RichardMulandi,
  Balogun,
  Saruni,
  Vivian,
  Jean,
  Melody,
  Kristin,
} from "../../../../assets/images/podcast";
import { PodcastCard } from "../../../components";

const data = [
  {
    id: 1,
    img: RichardMulandi,
    link: "https://open.spotify.com/episode/7hUJsdPdB0drnyNNTiYim2?si=idIGiZQBQdau9lEdh4Y8Rg",
    title: "Product life-cycle with Product Head at SafeBoda",
    description:
      "The conversation wades into product-management-specific topics that you'd be interested in.",
  },
  {
    id: 2,
    img: Balogun,
    link: "https://open.spotify.com/episode/4iHhYqBHMWjPTpOdm6F14z?si=JTp43JZoSgesogJi90X-xQ",
    title: "Tech Makers & Movers with PocketFood",
    description:
      "The story behind the branding, the success, and the challenges PocketFood has faced in delivering innovative food-tech solutions in Africa.",
  },
  {
    id: 3,
    img: Melody,
    link: "https://open.spotify.com/episode/7u24ofrYpk3umcCss9kgnw?si=0be796e136304358",
    title: "Smart Cities and Sustainable Urban Developement in Africa",
    description:
      "Do you know the checklist for a smart city? Find out in this fun converasation with Fred, Marlyn and Melody.",
  },
  {
    id: 4,
    img: Jean,
    link: "https://open.spotify.com/episode/1F6ecP7YS8S1mhWdnuQ0DU?si=2a94751b4c034a02",
    title: "Building a more inclusive Tech Industry in Africa",
    description:
      "Learn how to build and lead technical teams, applying development methodologies to design and ship software.",
  },
  {
    id: 5,
    img: Saruni,
    link: "https://open.spotify.com/episode/6GAhWxeZNuDtfQj76o7EhV?si=PFb994_WQzKw2qfXCtsrbQ",
    title: "The Future of Fintech X Saruni Maina",
    description:
      "Join host Marlyn Mayienga in a captivating conversation with Saruni Maina as they dive into the future of Fintech in Africa.",
  },

  {
    id: 6,
    img: Vivian,
    link: "https://open.spotify.com/episode/0KBLGLilCC5X0SnM4eg9Ko?si=6c129ddf60914838",
    title: "Digging into Website Hosting Sector",
    description:
      "Learn how the web development and hosting landscape in Kenya has changed over the past decade and how cloud hosting could disrupt it.",
  },
  {
    id: 7,
    img: Kristin,
    link: "https://open.spotify.com/episode/1XblqFJZJUf9l1uWmkAcvD?si=9bf748e882b848ed",
    title:
      "Sustainable Entrepreneurship and the Goal to Impact 1 billion Entrepreneurs in Africa",
    description:
      "Listen to how Kristin is helping SMEs across Africa to get off the ground in a sustainable way.",
  },
];

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
        {data.map(({ id, img, description, category, title, link }) => (
          <PodcastCard
            key={id}
            img={img}
            category={category}
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
