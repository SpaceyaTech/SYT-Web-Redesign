import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { LandingWrapper, Loader } from "../../../../../components";
import { EventDescription, GoBackBtn, Hero, SimilarEvents } from "./sections";
import { useOneEvent } from "@/hooks/Queries/singleEvent/useSingleEvent";

function SingleEvent2() {
  const { id } = useParams();
  const {
    data: oneEvent,
    isPending,
    isError,
    isSuccess,
    refetch: refetchEvent,
  } = useOneEvent(id);

  useEffect(() => {
    refetchEvent();
  }, [id, refetchEvent]);

  return (
    <>
      {isError && <p>Error fetching event!</p>}
      {isPending && (
        <div className="flex flex-col items-center justify-center gap-4 py-10">
          <Loader />
          <p className="text-lg font-medium text-primary">Loading event...</p>
        </div>
      )}
      {isSuccess && typeof oneEvent !== "undefined" && (
        <section className="px-2 md:px-0 py-4 md:py-10">
          <div className="max-w-1216 mx-auto flex flex-col gap-3 md:gap-6 w-full md:p-3">
            <GoBackBtn />
            <Hero event={oneEvent} />
          </div>
          <LandingWrapper title="about the event">
            <EventDescription eventDesc={oneEvent?.about} />
          </LandingWrapper>
          <LandingWrapper title="similar events">
            <SimilarEvents />
          </LandingWrapper>
        </section>
      )}
    </>
  );
}

export default SingleEvent2;
