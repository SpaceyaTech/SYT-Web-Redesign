import MissionBg from "../../../../assets/images/aboutPage/mission-bg.png";
import VisionBg from "../../../../assets/images/aboutPage/vision-bg.png";

function MissionVisionSection() {
  return (
    <div className="flex px-32 h-[24rem] pb-16 text-center justify-between">
      <div
        style={{
          background: `url(${MissionBg}) no-repeat center`,
          backgroundSize: "contain",
        }}
        className=" w-[45%] pt-20"
      >
        {/* <div className={`bg-[url(${MissionBg})]`}> */}
        <h2 className="sm:text-3xl text-2xl font-medium title-font my-4">
          Our Mission
        </h2>
        <p className="m-auto w-[80%]">
          To help 10,000 young Africans to transition to tech in the next three
          years by being a pool of resources, mentorship and capacity building.
        </p>
      </div>
      <div
        style={{
          background: `url(${VisionBg}) no-repeat center`,
          backgroundSize: "contain",
        }}
        className="w-[50%] pt-20"
      >
        <h2 className="sm:text-3xl text-2xl font-medium title-font my-4 ">
          Our Vision
        </h2>
        <p className="m-auto w-[80%]">
          To be the best tech community, focused on innovation and actually
          leveraging on technology to build solutions for Africa and to help our
          community members to level up their tech skills in the process.
        </p>
      </div>
    </div>
  );
}

export default MissionVisionSection;
