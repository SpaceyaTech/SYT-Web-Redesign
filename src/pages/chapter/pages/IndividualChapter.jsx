import { React } from "react";
import { useParams } from "react-router-dom";

import useIndividualChapterData from "../../../hooks/Queries/chapter/useIndividualChapter";
import { Loader } from "../../../components";
import Error500 from "../../errorPages/Error500";
import AboutChapterSection from "../sections/AboutChapterSection";
import ImpactSection from "../sections/ImpactSection";
import OrganizersSection from "../sections/OrganizersSection";
import UpcomingEventSection from "../sections/UpcomingEventSection";
import WelcomeSection from "../sections/WelcomeSection";

function IndividualChapter() {
  const { id } = useParams();
  const {
    data: chapterData,
    isPending,
    isError,
    isSuccess,
  } = useIndividualChapterData(id);

  return (
    <>
      {isError && <Error500 />}
      {isPending === "loading" && (
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <Loader />
          <p className="text-lg font-medium text-primary">
            Loading event details...
          </p>
        </div>
      )}
      {isSuccess && (
        <div>
          <WelcomeSection chapter={chapterData} />
          <AboutChapterSection chapter={chapterData} />
          <UpcomingEventSection events={chapterData.events} />
          <ImpactSection
            members={chapterData.members}
            events_count={chapterData.events_count}
          />
          <OrganizersSection
            organizers={chapterData.organizers}
            city={chapterData.city}
            country={chapterData.country}
          />
        </div>
      )}
    </>
  );
}

export default IndividualChapter;
