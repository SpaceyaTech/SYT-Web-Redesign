import { Link } from "react-router-dom";
import { podImage1, podImage2 } from "../../../../assets/images/podcast";
import { PodcastCard } from "../../../components";

const data = [
  {
    id: 1,
    img: podImage1,
    link: "https://open.spotify.com/episode/6GAhWxeZNuDtfQj76o7EhV?si=PFb994_WQzKw2qfXCtsrbQ",

    title: "The Future of Fintech X Saruni Maina",
    desc: "Join host Marlyn Mayienga in a captivating conversation with Saruni Maina as they dive into 'The Future of Fintech in Africa.",
  },
  {
    id: 2,
    img: podImage2,
    link: "https://open.spotify.com/episode/4iHhYqBHMWjPTpOdm6F14z?si=JTp43JZoSgesogJi90X-xQ",
    title: "Tech Makers & Movers with PocketFood",
    desc: "The story behind the branding, the success, and the challenges PocketFood has faced in delivering innovative food-tech solutions in Africa.",
  },
  {
    id: 3,
    img: podImage1,
    link: "https://open.spotify.com/episode/1kfTpXwooNq98svRGSriPt?si=iFiuS_VKTzSmNVBc2PsjqA",
    title:
      "What it Takes to be a World-class SDE in Today's Market x Juma Allan",
    desc: "Ever wanted to know what it takes to be a world-class SDE? Then you should come and listen to today's space.",
  },
  {
    id: 4,
    img: podImage2,
    link: "https://open.spotify.com/episode/4NtWmj2NrFl9LVFtVbA7T8?si=yabUkjcETZafbRPKz5kmMg",
    title: "Bouncing Back from a Layoff - part 2",
    desc: "Due to popular demand, @CharityKith and I shall be hosting @Sometkip to tell us how he thought he'd only be out for 3 months but ended up jobless for 8!",
  },
  {
    id: 5,
    img: podImage1,
    link: "https://open.spotify.com/episode/64dVAfEgahcUev5S0UjC2U?si=hsbFSKmWT8WJDarmkNPPOg",
    title:
      "Insights and Advice from Tech Recruiters on Navigating the Job Market",
    desc: "Don't miss our upcoming Twitter Space, where top recruiters spill the tea on how to ace the job market.",
  },
  {
    id: 6,
    img: podImage2,
    link: "https://open.spotify.com/episode/2vE4J2b4QuCqZgMZuRZGpW?si=8sD1AQKmTXKEZaS1MWOZ4w",
    title: "Bootcamps, Computer Science Degrees and YouTube University",
    desc: "Where does a CS degree win over boot camps and self-taught road maps, where do boot camps excel?",
  },
  {
    id: 7,
    img: podImage1,
    link: "https://open.spotify.com/episode/7hUJsdPdB0drnyNNTiYim2?si=idIGiZQBQdau9lEdh4Y8Rg",
    title: "Product life-cycle with Product Head at SafeBoda",
    desc: "The conversation wades into product-management-specific topics that you'd be interested in.",
  },
  {
    id: 8,
    img: podImage2,
    link: "https://open.spotify.com/episode/5tILKOJk1NAVK8BN1C1NOB?si=83126b9c020c43b4",
    title: "UX Africa: What Recruiters look for when Hiring Designers",
    desc: "Don't miss out on this insightful episode if you're a Designer.",
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
          sahara, all for your listening pleasure.
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
        {data.map(({ id, img, desc, cat, title, link }) => (
          <PodcastCard
            key={id}
            img={img}
            cat={cat}
            title={title}
            desc={desc}
            link={link}
          />
        ))}
      </div>

      <a
        href="/https://open.spotify.com/show/4nUYzhacDAw1v9ClqPY89n?si=5a7b014ac3e34504"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#00664E] text-xl font-bold mx-auto"
      >
        View All
      </a>
    </section>
  );
}

export default PodcastSection;
