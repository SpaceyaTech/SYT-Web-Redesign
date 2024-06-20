import React from "react";
import DetailsContainer from "./DetailsContainer";

function ImpactSection({members, events_count}) {
  return (
    <div className="w-full md:w-4/5 ">
      <DetailsContainer title="Impact" paragraph="" />
      <div className="px-4 md:w-4/5 grid gap-3 grid-cols-2 md:grid-cols-4">
      <div className="flex flex-col p-2 gap-3 ">
          <h5 className="mb-6 text-xs">COMMUNITY MEMBERS</h5>
          <h2 className="mb-6 text-2xl md:text-4xl">{members}</h2>
        </div>
        <div className="flex flex-col p-2 gap-3 ">
          <h5 className="mb-6 text-xs">EVENTS ORGANIZED</h5>
          <h2 className="mb-6 text-2xl md:text-4xl">{events_count}</h2>
        </div>
      </div>
    </div>
  );
}

export default ImpactSection;
