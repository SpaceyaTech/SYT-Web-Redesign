import React from "react";

import { Button } from "../../../../../components";
import LandingWrapper from "../../../../../components/LandingWrapper";
import { EventDescription, Hero, SimilarEvents } from "./sections";

const sections = [
  {
    title: "about the event",
    component: <EventDescription />,
  },
  {
    title: "similar events",
    component: <SimilarEvents />,
  },
];

function SingleEvent2() {
  return (
    <section className="border border-red-400 px-2 md:px-0 py-4 md:py-10">
      <div className="max-w-1216 mx-auto flex flex-col gap-3 w-full md:p-3">
        <Button link="/" title="go back" />
        <Hero />
      </div>
      {sections.map(({ title, component }) => (
        <LandingWrapper key={title} title={title}>
          {component}
        </LandingWrapper>
      ))}
    </section>
  );
}

export default SingleEvent2;
