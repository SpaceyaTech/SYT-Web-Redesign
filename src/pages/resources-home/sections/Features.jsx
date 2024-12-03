import { Search } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../../utilities/utils";
import ResourceCard from "./ResourceCard";

function Features() {
  const [activeTab, setActiveTab] = React.useState("All");
  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const resource = formData.get("resource");
    // eslint-disable-next-line no-console
    console.log(resource);
  };

  return (
    <section className="bg-green-light w-full py-4">
      <div className="px-4 py-8 mx-auto max-w-1440">
        <div className="flex flex-col items-center w-full gap-8 md:gap-12">
          {/* Search & Tabs */}
          <div className="w-full flex items-center flex-col gap-4 md:gap-8">
            {/* SearchBar */}
            <form
              className="max-w-2xl w-full rounded-xl md:rounded-2xl flex items-center overflow-hidden"
              onSubmit={handleSearch}
            >
              <div className="relative flex items-center flex-grow pl-4 sm:px-6 py-2 sm:py-3 bg-white text-gray-500">
                <input
                  type="text"
                  name="resource"
                  className="pl-7 outline-none flex-grow"
                  placeholder="Search resources"
                />
                <Search
                  size={20}
                  className="absolute left-4 sm:left-6 top-2.5 sm:top-3.5"
                />
              </div>
              <button
                type="submit"
                className="flex-shrink-0 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-b from-green-dark to-primary text-white min-w-[100px] md:min-w-[120px] lg:min-w-[140px]"
              >
                Search
              </button>
            </form>

            {/* Tabs */}
            <div className="w-full overflow-x-scroll flex items-center">
              <div className="flex gap-3 sm:gap-4 mx-auto">
                <button
                  onClick={() => setActiveTab("All")}
                  type="button"
                  className={cn(
                    "capitalize rounded border border-green-dark text-gray-500 text-xs text-nowrap py-2 px-3 transition-colors duration-300 ease-in hover:bg-green-dark hover:text-white",
                    activeTab === "All" && "bg-green-dark text-white"
                  )}
                >
                  All
                </button>
                {[
                  "Documentation",
                  "Tutorials",
                  "Videos",
                  "Technical Articles",
                  "GitHub Repos",
                  "Podcasts",
                  "Books",
                  "Courses",
                ].map((tabItem) => (
                  <button
                    key={tabItem}
                    onClick={() => setActiveTab(tabItem)}
                    type="button"
                    className={cn(
                      "capitalize rounded border border-green-dark text-gray-500 text-xs text-nowrap p-2 transition-colors duration-300 ease-in hover:bg-green-dark hover:text-white",
                      activeTab === tabItem && "bg-green-dark text-white"
                    )}
                  >
                    {tabItem}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Day-Zero Software developers */}
          <div className="md:self-start flex flex-col gap-8 md:gap-10 w-full">
            <div className="max-w-xl space-y-2 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl text-green-dark font-semibold">
                Day-Zero Software developers
              </h3>
              <p className="text-base leading-tight text-gray-500">
                If this is your first day in tech and you are wondering where to
                begin, we got you covered. Start here.
              </p>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-5">
              <ResourceCard />
              <ResourceCard />
              <ResourceCard />
            </div>
          </div>

          {/* Newly uploaded resources */}
          <div className="md:self-start flex flex-col gap-8 md:gap-10 w-full">
            <div className="flex items-center justify-between text-center md:text-left flex-col md:flex-row gap-3">
              <h3 className="text-2xl md:text-3xl text-green-dark font-semibold">
                Newly uploaded resources
              </h3>
              <Link
                to="/resources"
                className="text-sm xl:text-base leading-tight font-normal text-primary underline"
              >
                Explore all frontend resources
              </Link>
            </div>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-5">
              <ResourceCard />
              <ResourceCard />
              <ResourceCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
