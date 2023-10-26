import { Link } from "react-router-dom";
import { podImage1, podImage2 } from "../../../../assets/images/podcast";
import { PodcastCard } from "../../../components";

const data = [
  {
    id: 1,
    img: podImage1,
    cat: "Article",
    title: "Boost your conversion rate",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
  {
    id: 2,
    img: podImage2,
    cat: "Article",
    title: "Boost your conversion rate",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
  {
    id: 3,
    img: podImage1,
    cat: "Article",
    title: "Boost your conversion rate",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
  {
    id: 4,
    img: podImage2,
    cat: "Article",
    title: "Boost your conversion rate",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
  {
    id: 5,
    img: podImage1,
    cat: "Article",
    title: "Boost your conversion rate",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
  {
    id: 6,
    img: podImage2,
    cat: "Article",
    title: "Boost your conversion rate",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
  {
    id: 7,
    img: podImage1,
    cat: "Article",
    title: "Boost your conversion rate",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
  {
    id: 8,
    img: podImage2,
    cat: "Article",
    title: "Boost your conversion rate",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.",
  },
];

const PodcastSection = () => {
  return (
    <section className="py-14 flex flex-col items-center justify-center gap-8">
      {/* Header */}
      <div className="font-normal flex flex-col gap-2 items-center w-full md:max-w-2xl">
        <h5 className="text-xl text-[#00664E]">Podcast</h5>
        <h3 className="text-2xl">SpaceYaTech Podcasts</h3>
        <p className="text-center text-xl text-[#323433]">
          A collection from some of the finest tech podcasts this side of the
          sahara, all for your listening pleasure.
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-row gap-8 overflow-x-auto">
        {data.map(({ id, img, desc, cat, title }) => (
          <PodcastCard key={id} img={img} cat={cat} title={title} desc={desc} />
        ))}
      </div>

      <Link to="/" className="text-[#00664E] text-xl font-bold">
        View All
      </Link>
    </section>
  );
};

export default PodcastSection;
