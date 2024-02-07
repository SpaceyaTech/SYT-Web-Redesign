import useResourcesData from "../../../../hooks/Queries/resources/useResourcesData";

const ResourcesButtons = ({ resource }) => {
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
          <>
            <div className="flex justify-center items-center gap-4">
              {resourceTypes && Array.isArray(resourceTypes)
                ? resourceTypes.map((resource) => (
                    <button
                      className="bg-slate-100 cursor-pointer no-wrap rounded-full px-4 py-1"
                      key={resource.id}
                    >
                      {resource.category}
                    </button>
                  ))
                : ""}
            </div>
          </>
        )
      )}
    </>
  );
};

export default ResourcesButtons;
