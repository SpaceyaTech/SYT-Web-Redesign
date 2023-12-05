import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section className="text-gray-600 body-font relative mx-auto w-full max-w-screen-2xl">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-8 md:mb-12">
          <h1 className="sm:text-3xl text-3xl font-semibold title-font mb-4 text-[#00664E]">
            Join, thrive, grow
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base font-normal">
            You miss all the shots you do not take. Invest your time in horning
            your craft.
          </p>
        </div>
        <div className="flex justify-center">
          <Link
            to="/community"
            className="inline-flex  text-white bg-[#009975] border-0 py-3 px-8 focus:outline-none  rounded-lg text-lg"
          >
            Join the community
          </Link>
        </div>
      </div>

      <div className="w-ful h-full absolute top-0 left-0">
        <div className="relative ">
          <div className="sm:blur-1 blur-sm-1" />
          <div className="sm:blur-2 blur-sm-2" />
          <div className="sm:blur-3 blur-sm-3" />
        </div>
      </div>
    </section>
  );
}

export default CTASection;
