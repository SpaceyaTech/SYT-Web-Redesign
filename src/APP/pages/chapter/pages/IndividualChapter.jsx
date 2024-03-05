import { React } from "react";
import { useParams } from "react-router-dom";
import WelcomeSection from "../sections/WelcomeSection";
import AboutChapterSection from "../sections/AboutChapterSection";
import UpcomingEventSection from "../sections/UpcomingEventSection";
import ImpactSection from "../sections/ImpactSection";
import OrganizersSection from "../sections/OrganizersSection";
import useIndividualChapterData from "../../../../hooks/Queries/chapter/useIndividualChapter";

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
      {isError && <p>Error loading chapter details!</p>}
      {isPending === "loading" && <p>Loading chapter details...</p>}
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
