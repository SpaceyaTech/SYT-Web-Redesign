import React, { useState, useEffect } from "react";
import { search } from "../../../../assets/images/resources-page";
import ResourceCard from "./ResourceCard";
import ResourcesButtons from "./ResourcesButtons";
import Sidebar from "./Sidebar";
import ResourceFeature from "./ResourceFeature";
import useResourcesData from "../../../../hooks/Queries/resources/useResourcesData";

function ResourcesSection() {
  const {
    data: resourceTypes,
    isLoading,
    isError,
    isSuccess,
  } = useResourcesData();

  // Filter data to display
  const categoryList = [...new Set(resourceTypes?.map((el) => el.category))];
  const levelList = [...new Set(resourceTypes?.map((el) => el.level))];

  const [searchText, setSearchText] = useState("");
  const [dataFilter, setDataFilter] = useState([]);
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    setDataFilter(resourceTypes);
  }, [resourceTypes]);

  const handleResourceFilter = (category, level) => {
    // If --- will be implemented to improve the quality of code

    setFilterBy(category);
    const filter = resourceTypes.filter(
      (el) => el.category.toLowerCase() === category.toLowerCase()
    );

    setDataFilter(() => {
      return [...filter];
    });
  };

  /* const handleLevelsFilter = (level) => {
    setFilterBy(level);
    const filter = resourceTypes.filter(
      (el) => el.level.toLowerCase() === level.toLowerCase()
    );

    setDataFilter(() => {
      return [...filter];
    });
  }; */

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const loadingArrayFeature = new Array(10).fill(null);

  return (
    <>
      {isLoading ? (
        <p className="text-center">Loading resource categories...</p>
      ) : isError ? (
        <p className="text-center">Error loading resource categories!</p>
      ) : (
        isSuccess && (
          <div className="flex gap-4">
            <div className="">
              <div className="flex flex-col gap-12">
                <div className="flex self-stretch flex-row mx-auto border-[#CBCDCC] border-2 rounded-[30px] px-4">
                  <input
                    type="text"
                    placeholder="Search resources"
                    className="h-10 md:w-[50vw] w-[70vw] border-none outline-none"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                  <img
                    src={search}
                    alt="search"
                    className="p-2 cursor-pointer"
                    onClick={handleSearch}
                  />
                </div>
              </div>

              <div className="flex justify-center items-center sm:flex flex-wrap gap-3 my-6">
                {categoryList ? (
                  categoryList.map((el) => {
                    return (
                      <ResourcesButtons
                        key={el}
                        category={el}
                        isActive={el.toLowerCase() === filterBy.toLowerCase()}
                        onClick={() => handleResourceFilter(el)}
                      />
                    );
                  })
                ) : (
                  <div className="">
                    <p>Loading...</p>
                  </div>
                )}
              </div>

              <div className="lg:flex hidden gap-4">
                <div className="flex flex-col gap-5 cursor-pointer">
                  {levelList ? (
                    levelList.map((el) => {
                      return (
                        <Sidebar
                          key={el}
                          level={el}
                          isActive={el.toLowerCase() === filterBy.toLowerCase()}
                          onClick={() => handleResourceFilter(el)}
                        />
                      );
                    })
                  ) : (
                    <div className="">
                      <p>Loading...</p>
                    </div>
                  )}
                </div>

                <div className="grid md:grid-cols-4 sm:grid-cols-2 md:gap-16 sm:gap-12 gap-8 grid-cols-1">
                  {dataFilter && Array.isArray(dataFilter)
                    ? dataFilter.map((resource) => (
                        <ResourceCard key={resource.id} resource={resource} />
                      ))
                    : ""}
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}

export default ResourcesSection;

{
  /* <div className="">
    {dataFilter
      ? dataFilter.map((el) => {
          return (
            <ResourceFeature
              key={el.id}
              id={el.id}
              name={el.name}
              category={el.category}
              level={el.level}
              image={el.image}
              description={el.description}
            />
          );
        })
      : loadingArrayFeature.map((el, index) => (
          <ResourceFeature key={index} loading="Loading" />
        ))}
  </div> */
}
