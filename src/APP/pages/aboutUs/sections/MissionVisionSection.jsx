/* eslint-disable linebreak-style */
import { LazyLoadImage } from "react-lazy-load-image-component";
import { LittleMore } from "../../../../assets/images/aboutPage";

function MissionVisionSection() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="border bg-white p-2 w-full rounded-2xl md:rounded-[20px] lg:col-span-2">
        <div
          style={{
            background: `url(${LittleMore}) no-repeat center`,
            backgroundSize: "cover",
          }}
          className="h-full rounded-xl"
        >
          {/* <LazyLoadImage
          effect="blur"
          src={LittleMore}
          alt="mission and vision"
          className="object-cover"
        /> */}
          <div className="w-1/2 text-white space-y-4 pl-12 pb-10 pt-48">
            <h2 className="md:text-4xl text-2xl font-medium">
              Empowering the next generation of African innovators in tech
            </h2>

            <p className="">
              Our activities center around designing and building software and
              hardware solutions for the most salient needs we see in the
              society, through a unique open-source model that gets our
              community members paid for their skills.
            </p>
            <p>
              SpaceYaTech also aims to develop capacity in the fields of
              software development and design to help build the future workforce
              and start-up founders in Africa.
            </p>
          </div>
        </div>
      </div>

      {/* Mission And vision */}
      <div className="flex flex-col md:flex-row my-8 gap-4">
        <div className="border bg-white p-2 w-full rounded-2xl md:rounded-[20px] lg:col-span-2">
          <div className="bg-green-light rounded-lg md:rounded-xl size-full flex items-center justify-between flex-row p-3 sm:p-6 md:py-20 md:gap-5">
            <div className="flex-center md:flex-start flex-col p-3 sm:p-8 gap-3">
              <h4 className="text-green-header capitalize text-base md:text-xl font-semibold text-center md:text-start">
                Our Mission
              </h4>

              <p className="text-sm md:text-base font-normal text-center md:text-start">
                To help 10,000 young Africans to transition to tech in the next
                three years by being a pool of resources, mentorship and
                capacity building.
              </p>
            </div>
          </div>
        </div>
        <div className="border bg-white p-2 w-full rounded-2xl md:rounded-[20px] lg:col-span-2">
          <div className="bg-green-light rounded-lg md:rounded-xl size-full flex items-center justify-between flex-row p-3 sm:p-6 md:py-20 md:gap-5">
            <div className="flex-center md:flex-start flex-col p-3 sm:p-8 gap-3">
              <h4 className="text-green-header capitalize text-base md:text-xl font-semibold text-center md:text-start">
                Our Vision
              </h4>

              <p className="text-sm md:text-base font-normal text-center md:text-start">
                To be the best tech community, focused on innovation and
                actually leveraging on technology to build solutions for Africa
                and to help our community members to level up their tech skills
                in the process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionVisionSection;
