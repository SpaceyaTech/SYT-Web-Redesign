import FredOuko from "../../../../assets/images/aboutPage/leadership/fred-ouko.png";
import Caroussel from "../../../components/Caroussel";

const LeadershipData = [
  {
    name: "Fred Ouko",
    title: "Founder",
    image: FredOuko,
  },
  {
    name: "Fred Ouko",
    title: "Founder",
    image: FredOuko,
  },
  {
    name: "Fred Ouko",
    title: "Founder",
    image: FredOuko,
  },
  {
    name: "Fred Ouko",
    title: "Founder",
    image: FredOuko,
  },
  {
    name: "Fred Ouko",
    title: "Founder",
    image: FredOuko,
  },
  {
    name: "Fred Ouko",
    title: "Founder",
    image: FredOuko,
  },
  {
    name: "Fred Ouko",
    title: "Founder",
    image: FredOuko,
  },
];

function LeadershipSection() {
  return (
    <section className="pt-16 pb-10 mx-auto w-full max-w-screen-2xl">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#323433] my-4 text-center">
        Meet our leadership
      </h1>

      <Caroussel CarousselData={LeadershipData} />
    </section>
  );
}

export default LeadershipSection;
