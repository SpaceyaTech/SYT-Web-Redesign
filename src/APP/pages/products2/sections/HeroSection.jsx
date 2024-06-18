import videoCaptions from "../../../../assets/images/syt-video-captions_en.vtt";
import video from "../../../../assets/images/syt.mp4";

function HeroSection() {
  return (
    <section className="py-4 md:py-12 flex flex-col gap-6 md:gap-8 items-center justify-center md:max-w-4xl mx-auto">
      {/* text section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-primary text-base md:text-2xl font-normal text-center capitalize">
          Our products
        </h1>
        <p className="text-center text-[25px] leading-9 md:text-[33px] font-medium md:font-semibold md:leading-normal px-4">
          We don’t just talk about code. We build products that work and look
          good.
        </p>
      </div>

      {/* video section */}
      <div className="w-full md:rounded-2xl overflow-hidden">
        <video
          aria-label="SpaceYaTech promotion video"
          controls
          className="h-full w-fit aspect-video"
          autoPlay={false}
          controlsList="nodownload"
          muted
        >
          <source src={video} type="video/mp4" />
          <track
            kind="captions"
            src={videoCaptions}
            srcLang="en"
            label="English captions"
            default
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}

export default HeroSection;
