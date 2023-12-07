import { Link } from "react-router-dom";
import {
  ctfroom,
  DevOps,
  Kushite,
  Propel,
  bannerImg,
  chimoney,
  moringa,
  osca,
  reactke,
  spheron,
  cytonn,
} from "../../../../assets/images/hero-section";

const partners = [
  {
    id: 1,
    img: ctfroom,
    name: "ctfroom",
    link: "https://ctfroom.com/",
  },
  {
    id: 2,
    img: DevOps,
    name: "DevOps",
    link: "https://twitter.com/nairobidevops",
  },
  {
    id: 3,
    img: Propel,
    name: "Propel",
    link: "https://propel.community/",
  },
  {
    id: 4,
    img: moringa,
    name: "moringa",
    link: "https://moringaschool.com/",
  },
  {
    id: 5,
    img: chimoney,
    name: "chimoney",
    link: "https://chimoney.io/",
  },
  {
    id: 6,
    img: Kushite,
    name: "Kushite",
    link: "https://icpkushite.com/",
  },
  {
    id: 7,
    img: osca,
    name: "osca",
    link: "https://oscafrica.org/",
  },
  {
    id: 8,
    img: cytonn,
    name: "cytonn",
    link: "#",
  },
  {
    id: 9,
    img: reactke,
    name: "reactke",
    link: "https://www.reactdevske.org/",
  },
];

const HeroSection3 = () => {
  return (
    <section className="p-3 md:px-10 flex flex-col mx-auto gap-2 xl:max-w-[1440px]">
      {/* Hero Header */}
      <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-4">
        {/* hero desc */}
        <div className="flex-1 flex flex-col gap-6">
          <h1 className="md:text-[40px] text-2xl leading-8 md:leading-normal font-medium text-gray-900 text-center md:text-left">
            Accelerate your <span className="text-[#009975]">growth</span> and
            unlock your potential in the tech ecosphere
          </h1>
          <p className="text-sm md:text-xl font-normal leading-relaxed text-center md:text-left">
            The fastest growing Africa, open-source community looking to change
            the way young Africans get started in technology.
          </p>

          <Link
            to="/community"
            preventScrollReset={true}
            className="text-white bg-[#009975] border-0 py-3 px-8 focus:outline-none rounded-lg text-lg w-full md:w-fit text-center"
          >
            Join the community
          </Link>
        </div>

        {/* hero img */}
        <div className="flex-1">
          <img
            src={bannerImg}
            alt="banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Partners */}
      <div className="my-6 flex flex-col items-center gap-6">
        <h2 className="text-3xl font-semibold">Our Partners</h2>

        <p className="max-w-[832px] text-center text-base font-normal">
          At SpaceYaTech, we thrive on innovation, knowledge and the support of
          our dedicated partners. Join us in celebrating the companies and
          individuals who make SpaceYaTech possible.
        </p>

        <div className="overflow-auto flex flex-row gap-14 md:px-3 w-full items-center">
          {partners.map(({ id, img, name, link }) => (
            <a href={link} target="_blank" rel="noopener noreferrer">
              <img src={img} className="object-cover" alt={name} key={id} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection3;
