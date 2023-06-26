import FredOuko from "../../../../assets/images/aboutPage/leadership/fred-ouko.png";
import CatherineKiiru from "../../../../assets/images/aboutPage/leadership/catherine-kiiru.png";
import JamesOtieno from "../../../../assets/images/aboutPage/leadership/james-otieno.png";
import HudsonObai from "../../../../assets/images/aboutPage/leadership/hudson-obai.png";
import IanMugenya from "../../../../assets/images/aboutPage/leadership/ian-mugenya.png";
import MarlynMayienga from "../../../../assets/images/aboutPage/leadership/marlyn-mayienga.png";
import SharonJebitok from "../../../../assets/images/aboutPage/leadership/sharon-jebitok.png";
import WaithakaWaweru from "../../../../assets/images/aboutPage/leadership/waithaka-waweru.png";
import JumaLawrence from "../../../../assets/images/aboutPage/leadership/juma-lawrence.png";
import Caroussel from "../../../components/Caroussel";

const LeadershipData = [
  {
    name: "Fred Ouko",
    title: "Founder",
    image: FredOuko,
  },
  {
    name: "Catherine Kiiru",
    title: "Dev Relations & Opensource Programs",
    image: CatherineKiiru,
  },
  {
    name: "James Otieno",
    title: "Community Manager",
    image: JamesOtieno,
  },
  {
    name: "Hudson Obai",
    title: "Head of Engineering",
    image: HudsonObai,
  },
  {
    name: "Ian Mugenya",
    title: "Mentorship Program Lead",
    image: IanMugenya,
  },
  {
    name: "Marlyn Mayienga",
    title: "Program Manager",
    image: MarlynMayienga,
  },
  {
    name: "Sharon Jebitok",
    title: "Head of Chapters and Volunteers",
    image: SharonJebitok,
  },
  {
    name: "Waithaka Waweru",
    title: "Dev Relations and Events",
    image: WaithakaWaweru,
  },
  {
    name: "Juma Lawrence",
    title: "Head of Communication",
    image: JumaLawrence,
  },
];

function LeadershipSection() {
  return (
    <section className="pt-16 pb-10 mx-auto w-full max-w-screen-2xl pl-32">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#323433] text-center">
        Meet our leadership
      </h1>

      <Caroussel CarousselData={LeadershipData} />
    </section>
  );
}

export default LeadershipSection;
