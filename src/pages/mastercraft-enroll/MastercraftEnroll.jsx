import { useLocation } from "react-router-dom";
import SeoMetadata from "../../components/SeoMetadata";
import { Header as MastercraftHeader } from "../mastercraft/sections";
import { programs } from "../mastercraft/sections/data";
import MastercraftEnrollmentComponent from "./sections/MastercraftEnrollmentComponent";

function MastercraftEnroll() {
  const { pathname } = useLocation();
  const program = pathname.split("/")[2];

  const programRender = programs.find(({ slug }) => slug === program);

  return (
    <>
      <SeoMetadata
        title="Mastercraft"
        description="SpaceYaTech is the fastest growing Africa, open-source community looking to change the way young Africans get started in technology."
        type="website"
        url="https://www.spaceyatech.com/"
        ogImage="https://apis.spaceyatech.com/media/blog-images/syt.png"
        ogImageAlt="SpaceYaTech logo, social media handles, website URL, email, and more on a muted background."
      />
      <div className="bg-[#F5F5F5]">
        <main className="py-16 flex items-center flex-col gap-10 lg:gap-20 max-w-1440 mx-auto md:px-8 px-5">
          <MastercraftHeader
            isRegOpen={programRender.isRegOpen}
            category={programRender.category}
            cover={programRender.cover}
            description={programRender.description}
            nextCohortDate={programRender.nextCohortDate}
            productInfo={programRender.productInfo}
            tags={programRender.tags}
            title={programRender.title}
          />

          <MastercraftEnrollmentComponent program={programRender} />
        </main>
      </div>
    </>
  );
}

export default MastercraftEnroll;
