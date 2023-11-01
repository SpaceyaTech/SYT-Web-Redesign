import { React } from "react";
import { useParams } from "react-router-dom";
import WelcomeSection from "../sections/WelcomeSection";
import AboutChapterSection from "../sections/AboutChapterSection";
import UpcomingEventSection from "../sections/UpcomingEventSection";
import ImpactSection from "../sections/ImpactSection";
import OrganizersSection from "../sections/OrganizersSection";
import { fetchChapterData } from "./data";
import { useQuery } from "react-query";

function IndividualChapter() {
  const { id } = useParams();
  const { data: chapterData, status } = useQuery("onechapter", () => fetchChapterData(id));

  return (
    <>
      {status === "error" && <p>Error!</p>}
      {status === "loading" && <p>Loading...</p>}
      {status === "success" && (
        <div>
        <WelcomeSection chapter={chapterData} />
        <AboutChapterSection chapter={chapterData} />
        <UpcomingEventSection events={chapterData.events} />
        <ImpactSection members={chapterData.members} events_count={chapterData.events_count} />
        <OrganizersSection organizers={chapterData.organizers} city={chapterData.city} country={chapterData.country} />
      </div>
      )}
    </>
  );
}

export default IndividualChapter;
