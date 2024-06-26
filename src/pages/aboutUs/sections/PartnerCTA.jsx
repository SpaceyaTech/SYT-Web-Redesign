import Report from "../../../assets/documentation/spaceyatech-internship-program.pdf";

function PartnerCTA() {
  return (
    <section className="pt-16 pb-10 mx-auto w-full max-w-screen-2xl">
      <div className="flex flex-col sm:flex-row justify-between px-4 sm:px-28">
        <div className="space-y-4 mb-8 sm:mb-0">
          <h3 className="font-semibold text-md sm:text-xl">Our Reports</h3>
          <p>
            <a
              href={Report}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm sm:text-base"
            >
              SpaceYaTech Internship Program - 2023
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default PartnerCTA;
