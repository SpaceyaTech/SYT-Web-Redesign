import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WelcomeSection from "../sections/WelcomeSection";
import AboutChapterSection from "../sections/AboutChapterSection";
import UpcomingEventSection from "../sections/UpcomingEventSection";
import ImpactSection from "../sections/ImpactSection";
import OrganizersSection from "../sections/OrganizersSection";
import { fetchChapterData } from "./data";

function IndividualChapter() {
  const [chapterData, setChapterData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const theData = await fetchChapterData(id);
        setChapterData((prevState) => {
          return prevState = theData;
        });
      } catch (error) {
        console.error("Problem fetching chapter data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {chapterData ? (
        <div>
          <WelcomeSection chapter={chapterData} />
          <AboutChapterSection chapter={chapterData} />
          <UpcomingEventSection events={chapterData.events} />
          <ImpactSection events_count={chapterData.events_count} />
          <OrganizersSection organizers={chapterData.organizers} />
        </div>
      ) : (
        <div>Loading chapter...</div>
      )}
    </>
  );
}

export default IndividualChapter;
