import React, { useState } from "react";
import { search } from "../../../../assets/images/resources-page";
import ResourceCard from "./ResourceCard";
import ResourcesButtons from "./ResourcesButtons";
import useResourcesData from "../../../../hooks/Queries/resources/useResourcesData";

function ResourcesSection() {
  const [searchText, setSearchText] = useState("");

  const {
    data: resourceTypes,
    isLoading,
    isError,
    isSuccess,
  } = useResourcesData();

  return (
    <>
      {isLoading ? (
        <p className="text-center">Loading resource categories...</p>
      ) : isError ? (
        <p className="text-center">Error loading resource categories!</p>
      ) : (
        isSuccess && (
          <div className="flex gap-4">
            <div className="flex flex-col gap-4">
              <div className="border-2 rounded-xl p-4">Level 1</div>
              <div className="border-2 p-4">Level 2</div>
              <div className="border-2 p-4">Level 3</div>
            </div>
            <div className="grid md:grid-cols-4 sm:grid-cols-2 md:gap-16 sm:gap-12 gap-8 grid-cols-1">
              {resourceTypes && Array.isArray(resourceTypes)
                ? resourceTypes.map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))
                : ""}
            </div>
          </div>
        )
      )}
    </>
  );
}

export default ResourcesSection;
