import { Search } from "lucide-react";
import { useState } from "react";
import { cn } from "../../../utilities/utils";
import ResourceCard from "../sections/ResourceCard";

function MastercraftSearch() {
  const [activeTab, setActiveTab] = useState("All");
  const [activeTitle, setActiveTitle] = useState("Tutorials");

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const resource = formData.get("resource");
    // eslint-disable-next-line no-console
    console.log(resource);
  };

  return (
    <section className="w-full py-4">
      <div className="px-4 py-8 mx-auto max-w-1440">
        <div className="flex flex-col items-center w-full gap-8 md:gap-12">
          <div className="w-full flex items-center flex-col gap-4 md:gap-8">
            <div className="w-full flex flex-col md:flex-row  items-center gap-10">
              {/* First bar */}
              <div className="flex gap-10 overflow-x-scroll w-full">
                {[
                  "Documentation",
                  "Tutorials",
                  "Courses",
                  "Technical Articles",
                  "Podcasts",
                  "Videos",
                ].map((tabItem) => (
                  <button
                    key={tabItem}
                    onClick={() => setActiveTitle(tabItem)}
                    type="button"
                    className={cn(
                      "capitalize hover:text-green-dark hover:font-semibold text-grey-dark font-normal text-nowrap p-2 transition-colors duration-300 ease-in",
                      activeTitle === tabItem && "text-green-dark font-semibold"
                    )}
                  >
                    {tabItem}
                  </button>
                ))}
              </div>
              <div className="w-full sm:w-auto relative flex items-center flex-grow pl-4 sm:px-6 py-2 sm:py-3 bg-white text-grey-dark rounded-xl md:rounded-2xl border border-[#EAECF0]">
                <input
                  type="text"
                  name="resource"
                  className="pl-7 outline-none flex-grow"
                  placeholder="Search resources"
                  onChange={(e) => handleSearch(e.target.value)}
                />
                <Search
                  size={20}
                  className="absolute left-4 sm:left-6 top-2.5 sm:top-3.5 text-[#989A9A]"
                />
              </div>
            </div>
            {/* Tabs */}
            <div className="w-full overflow-x-scroll flex gap-3 sm:gap- items-center justify-between">
              <button
                onClick={() => setActiveTab("All")}
                type="button"
                className={cn(
                  "capitalize rounded border border-[#EAECF0] text-[#6E7070] text-xs text-nowrap py-2 px-3 transition-colors duration-300 ease-in hover:bg-green-dark hover:text-white bg-white",
                  activeTab === "All" && "bg-green-dark text-white"
                )}
              >
                All
              </button>
              {[
                "Java",
                "JavaScript",
                "C++",
                "Python",
                "Node.js",
                "TypeScript",
                "Next.js",
                "Kotlin",
                "Flutter",
                "C",
                "SQL",
                "PHP",
                "C#",
                "GO",
              ].map((tabItem) => (
                <button
                  key={tabItem}
                  onClick={() => setActiveTab(tabItem)}
                  type="button"
                  className={cn(
                    "capitalize rounded border border-[#EAECF0] text-[#6E7070] text-xs text-nowrap p-2 transition-colors duration-300 ease-in hover:bg-green-dark hover:text-white bg-white",
                    activeTab === tabItem && "bg-green-dark text-white"
                  )}
                >
                  {tabItem}
                </button>
              ))}
            </div>
          </div>
          <h2 className="mr-auto text-2xl font-normal">{activeTitle}</h2>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-5">
            <ResourceCard />
            <ResourceCard />
            <ResourceCard />
          </div>
        </div>
      </div>
    </section>
  );
}

export default MastercraftSearch;
