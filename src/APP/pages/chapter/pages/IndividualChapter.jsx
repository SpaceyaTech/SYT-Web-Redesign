import { React, useEffect } from "react";
import { useParams } from "react-router-dom";
import WelcomeSection from "../sections/WelcomeSection";
import AboutChapterSection from "../sections/AboutChapterSection";
import UpcomingEventSection from "../sections/UpcomingEventSection";
import ImpactSection from "../sections/ImpactSection";
import OrganizersSection from "../sections/OrganizersSection";
import { useDataDispatch, useDataState } from "../../../contexts/DataContext";
import { fetchChapterData } from "./data";

function IndividualChapter() {
  const dataState = useDataState();
  const dataDispatch = useDataDispatch();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const chapterData = await fetchChapterData(id);
        dataDispatch({ type: "SET_ONE_CHAPTER", payload: chapterData });
      } catch (error) {
        console.error("Problem fetching chapter data:", error);
      }
    };
    fetchData();
  }, [dataDispatch]);

  return (
    <>
      {dataState.chapter ? (
        <div>
          <WelcomeSection chapter={dataState.chapter} />
          <AboutChapterSection chapter={dataState.chapter} />
          <UpcomingEventSection />
          <ImpactSection />
          <OrganizersSection organizers={dataState.chapter.organizers} />
        </div>
      ) : (
        <div>Loading chapter...</div>
      )}
    </>
  );
}

export default IndividualChapter;
