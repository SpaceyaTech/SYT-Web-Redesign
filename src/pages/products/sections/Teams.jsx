import { Tab } from "@headlessui/react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useNavigate } from "react-router-dom";
import { upleftGreen } from "../../../assets/images/icons";
import { Loader } from "../../../components";
import useStackData from "../../../hooks/Queries/stack/useStackData";
import DeveloperCard from "./DeveloperCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Teams() {
  const navigate = useNavigate();

  const { data: teamData, isLoading, isError, isSuccess } = useStackData();

  return (
    <section className="p-3 md:p-6 flex flex-col md:flex-row gap-6 md:gap-4 mb-4 md:mb-8">
      {/* Header */}
      <div className="w-full md:w-1/3 gap-3 md:gap-6">
        <h2 className="text-[25px] font-medium leading-9 md:text-5xl md:leading-normal">
          Backed by a team of Global Talents.
        </h2>

        <Link
          to="/community"
          // target="_blank"
          // rel="noopener noreferrer"
          className="inline-flex items-center gap-2 py-2"
        >
          <span className="text-base md:text-[32px] md:leading-normal text-primary font-medium">
            Join us
          </span>

          <LazyLoadImage
            effect="blur"
            src={upleftGreen}
            alt="upleft"
            className="h-6 w-6 md:h-10 md:w-10 object-contain"
          />
        </Link>
      </div>

      {/* Tabs */}
      <div className="w-full md:w-2/3">
        {isError && navigate("/error-500")}

        {isLoading && (
          <div className="flex flex-col items-center justify-center gap-4 py-10">
            <Loader />
            <p className="text-lg font-medium text-primary">
              Loading team details...
            </p>
          </div>
        )}
        {isSuccess && (
          <Tab.Group>
            <Tab.List className="flex space-x-2 justify-between w-full overflow-x-auto bg-transparent p-1">
              {teamData.map(({ id, name }) => (
                <Tab
                  key={id}
                  className={({ selected }) =>
                    classNames(
                      "min-w-fit w-fit rounded-[40px] py-2 px-4 text-base font-light leading-5",
                      "ring-white/60 ring-offset-2 ring-offset-gray-600 focus:outline-none",
                      selected
                        ? "bg-primary font-medium text-white"
                        : "bg-[#f8f8f8] font-normal"
                    )
                  }
                >
                  {name}
                </Tab>
              ))}
            </Tab.List>
            <Tab.Panels className="mt-1 md:mt-2 w-full">
              {teamData.map(({ id, developers }) => (
                <Tab.Panel
                  key={id}
                  className={classNames(
                    "bg-white grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-7 lg:gap-12 w-full"
                  )}
                >
                  {developers.map(({ name, title, portfolio, image }) => (
                    <DeveloperCard
                      key={crypto.randomUUID()}
                      name={name}
                      title={title}
                      headshot={image}
                      portfolio={portfolio}
                    />
                  ))}
                </Tab.Panel>
              ))}
            </Tab.Panels>
          </Tab.Group>
        )}
      </div>
    </section>
  );
}

export default Teams;
