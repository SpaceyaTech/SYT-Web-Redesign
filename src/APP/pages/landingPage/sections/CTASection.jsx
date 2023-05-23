function CTASection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-8 md:mb-12">
          <h1 className="sm:text-3xl text-3xl font-medium title-font mb-4 text-[#00664E]">
            Join, thrive, grow
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            You miss all the shots you do not take. Invest your time in horning
            your craft.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="inline-flex  text-white bg-[#009975] border-0 py-3 px-8 focus:outline-none  rounded-lg text-lg">
            Join the community
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
