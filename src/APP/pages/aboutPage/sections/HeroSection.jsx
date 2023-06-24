import AboutImg1 from "../../../../assets/images/aboutPage/about-img-1.png";
import AboutImg2 from "../../../../assets/images/aboutPage/about-img-2.png";

function HeroSection() {
  return (
    <div className="px-32">
      <div className="bg-[#E5EFEC] rounded-2xl relative pt-10 px-7 pb-5 my-32 w-[90%] h-96 ">
        <h2 className="mt-3 text-[#009975] inline-flex items-center font-semibold pb-4 text-xl">
          About us
        </h2>
        <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 w-1/2 leading-10">
          A community of innovators, building a space for African tech
          talents...
        </h3>
        <p className="leading-6 w-1/2 text-base">
          SpaceYaTech is a language and stack agnostic community of technology
          enthusiasts with membership across Kenya, Tanzania, Nigeria and
          pockets of Africa. We welcome techies from all backgrounds to build a
          vibrant community of innovators of tech, users of tech and tech
          evangelists.
        </p>
        <img
          src={AboutImg1}
          alt="space ya tech"
          className="absolute -top-24 -right-36"
        />
      </div>
      <div className="flex justify-between items-center my-32 min-h-96">
        <div>
          <img src={AboutImg2} alt="space ya tech" height="100%" width="100%"/>
        </div>
        <div className="leading-6 w-1/2 text-base space-y-4 pl-10">
          <p>
            Our activities center around designing and building software and
            hardware solutions for the most salient needs we see in the society,
            through a unique open-source model that gets our community members
            paid for their skills. SpaceYaTech also aims to develop capacity in
            the fields of software development and design to help build the
            future workforce and start-up founders in Africa.
          </p>
          <p>
            We aim to be an inclusive community, where the contributions of
            everyone who wishes to join and be part of a movement to transform
            Africa through, can be appreciated and celebrated.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
