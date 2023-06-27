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
import BuildingCommunity from "../../../../assets/images/aboutPage/building-community.png";

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
    <section className="pt-16 pb-10 mx-auto w-full max-w-screen-2xl">
      <h1 className="md:text-3xl text-2xl font-medium title-font text-[#323433] text-center">
        Meet our leadership
      </h1>

      <Caroussel CarousselData={LeadershipData}/>
      
      <div className="bg-[#E5EFEC] flex -mt-36 pt-40 pb-8 md:pb-24 px-4 sm:px-28 justify-between flex-col md:flex-row">
        <div className="space-y-4 md:w-1/2 mb-14">
          <h2 className="text-[#009975] items-center font-semibold text-xl">
            Committed to building community
          </h2>
          <h3 className=" md:text-4xl text-2xl font-medium text-gray-900 leading-8 md:leading-10">
            We partner with like-minded organizations to build the workforce for
            Africa’s transformation.
          </h3>
          <p className="leading-6 text-base md:mr-5">
            We have narrowed our focus to do just one thing; building capacity
            in tech. We partner with individuals, organizations and public
            institutions to mentor and coach young people, between the ages of
            18-35 in the technology skills they need to build the software that
            power the world.
          </p>
          <p className="leading-6 text-base md:mr-5">
            {" "}
            We therefore focus our energies and resources on ensuring that those
            getting in a tech career, and specifically IT, are directed to the
            right resources, connected with the right people in industry for
            mentorship and connected with job opportunities where they can earn
            from their hard work.
          </p>
          <button className="font-semibold text-white bg-[#009975] border-0 py-3 px-8 w-full md:w-auto focus:outline-none rounded-lg text-lg">Partner with us</button>
        </div>
        <div className="md:w-1/2">
          <img src={BuildingCommunity} alt="Space ya Tech Community"/>
        </div>
      </div>
    </section>
  );
}

export default LeadershipSection;
