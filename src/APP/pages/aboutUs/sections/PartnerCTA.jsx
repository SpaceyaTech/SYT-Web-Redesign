// import AaronAbubakar from "../../../../assets/images/aboutPage/creativeTeam/aaron-abubakar.jpeg";
// import PamelaOwino from "../../../../assets/images/aboutPage/creativeTeam/pamela-owino.png";
// import EmmyAkinyi from "../../../../assets/images/aboutPage/creativeTeam/emmy-akinyi.jpeg";
// import Temitayo from "../../../../assets/images/aboutPage/creativeTeam/temitayo.jpeg";
// import TempPic from "../../../../assets/images/aboutPage/leadership/james-otieno.png";
// import {
//   facebook,
//   instagram,
//   linkedin,
//   twitter,
//   discord,
// } from "../../../../assets/images/socials";
// import Caroussel from "../../../components/Caroussel";

// const CreativeTeamData = [
//   {
//     name: "Emmy Akinyi",
//     title: "UX Team Lead",
//     image: EmmyAkinyi,
//   },
//   {
//     name: "Pamela Owino",
//     title: "Lead Product Designer",
//     image: PamelaOwino,
//   },
//   {
//     name: "Aaron Abubakar",
//     title: "Product Designer",
//     image: AaronAbubakar,
//   },
// {
//   name: "Robert Okusi",
//   title: "Product Designer",
//   image: TempPic,
// },
//   {
//     name: "Temitayo",
//     title: "Product Designer",
//     image: Temitayo,
//   },
// ];

function PartnerCTA() {
  return (
    <section className="pt-16 pb-10 mx-auto w-full max-w-screen-2xl">
      {/* <h1 className="sm:text-3xl text-2xl font-semibold title-font text-[#323433] text-center">
        The Creative Team
      </h1>

      <Caroussel CarousselData={CreativeTeamData} /> */}
      <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-28">
        <div className="space-y-4 mb-8 sm:mb-0">
          <h3 className="font-semibold text-md sm:text-xl">Our Reports</h3>
          {/* <p><a href="/" className="text-primary text-sm sm:text-base">Annual SpaceYaTech  Report - 2022</a></p>
          <p><a href="/" className="text-primary text-sm sm:text-base">Mentorlst Leadership and Growth</a></p> */}
          <p>
            <a
              href="/src/assets/reports/spaceyatech-internship-program.pdf"
              download="SpaceYaTech_Internship_Program_2023.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm sm:text-base"
            >
              SpaceYaTech Internship Program - 2023
            </a>
          </p>
        </div>
        {/* <div>
          <h3 className="font-semibold">Follow us on social media </h3>
          <div className="flex items-center w-full space-evenly py-4">
            <a
              href="https://x.com/SpaceYaTech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="twitter" className="w-12 h-12" />
            </a>

            <a
              href="https://linkedin.com/company/spaceyatech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" className="w-12 h-12" />
            </a>

            <a
              href="https://discord.com/invite/T6zTMWsnnS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={discord} alt="discord" className="w-12 h-12 p-3" />
            </a>

            <a
              href="https://www.instagram.com/SpaceYaTech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="instagram" className="w-12 h-12" />
            </a>

            <a
              href="https://www.facebook.com/spaceyatech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="facebook" className="w-12 h-12" />
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default PartnerCTA;
