import AaronAbubakar from "../../../../assets/images/aboutPage/creativeTeam/aaron-abubakar.png";
import PamelaOwino from "../../../../assets/images/aboutPage/creativeTeam/pamela-owino.png";
import EmmyAkinyi from "../../../../assets/images/aboutPage/creativeTeam/emmy-akinyi.png";
import TempPic from "../../../../assets/images/aboutPage/leadership/james-otieno.png";

import Caroussel from "../../../components/Caroussel";

const CreativeTeamData = [
  {
    name: "Emmy Akinyi",
    title: "UX Team Lead",
    image: EmmyAkinyi,
  },
  {
    name: "Pamela Owino",
    title: "Lead Product Designer",
    image: PamelaOwino,
  },
  {
    name: "Aaron Abubakar",
    title: "Product Designer",
    image: AaronAbubakar,
  },
  {
    name: "Robert Okusi",
    title: "Product Designer",
    image: TempPic,
  },
  {
    name: "Temitayo",
    title: "Product Designer",
    image: TempPic,
  },
];

function CreativeTeamSection() {
  return (
    <section className="pt-16 pb-10 mx-auto w-full max-w-screen-2xl pl-32">
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#323433] text-center">
        The Creative Team
      </h1>

      <Caroussel CarousselData={CreativeTeamData} />
    </section>
  );
}

export default CreativeTeamSection;
