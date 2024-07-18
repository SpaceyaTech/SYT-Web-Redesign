/* eslint-disable no-console */
import axios from "axios";
import { useEffect, useState } from "react";
import { briefcase, teams } from "../../../assets/images/icons";
import formatNumber from "../../../utilities/formatNumber";

function StatsSection() {
  const [totalMembers, setTotalMembers] = useState(0);

  const getAllChapters = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/chapter/`
      );

      const MembersArr = response.data.map(({ members }) => members);
      const total = MembersArr.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
      );

      setTotalMembers(formatNumber(total));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAllChapters();
  }, []);

  return (
    <section className="max-w-1440 w-full mx-auto flex flex-col items-center gap-9 pt-2">
      <h3 className="w-full max-w-lg text-green-header text-center font-semibold text-xl md:text-3xl">
        A community geared towards holistic results{" "}
      </h3>

      <div className="w-full flex flex-col gap-6 p-2">
        <div className="flex items-center flex-wrap md:flex-nowrap gap-4">
          <div className="w-full flex-center flex-col gap-5">
            <img src={teams} alt="teams" className="size-10 object-contain" />
            <div className="flex-center flex-col gap-2">
              <h4 className="text-green-dark text-3xl font-semibold">
                {totalMembers}
              </h4>

              <h5 className="text-lg font-semibold">Members</h5>

              <p className="text-base font-normal text-center">
                Spanning our communities and following
              </p>
            </div>
          </div>

          <hr className="w-1/2 h-0.5 flex md:hidden rounded-sm bg-green-dark md:bg-gray-400 mx-auto" />

          <div className="w-full flex-center flex-col gap-5">
            <img src={teams} alt="teams" className="size-10 object-contain" />
            <div className="flex-center flex-col gap-2">
              <h4 className="text-green-dark text-3xl font-semibold">23</h4>

              <h5 className="text-lg font-semibold">Students</h5>

              <p className="text-base font-normal text-center">
                Benefiting from our{" "}
                <span className="font-semibold text-green-dark">
                  {" "}
                  Mastercraft Program
                </span>{" "}
              </p>
            </div>
          </div>
        </div>

        <hr className="w-1/2 md:w-full h-0.5 rounded-sm bg-green-dark md:bg-gray-400 mx-auto" />

        <div className="flex items-center flex-wrap md:flex-nowrap gap-4">
          <div className="w-full flex-center flex-col gap-5">
            <img src={teams} alt="teams" className="size-10 object-contain" />
            <div className="flex-center flex-col gap-2">
              <h4 className="text-green-dark text-3xl font-semibold">43</h4>

              <h5 className="text-lg font-semibold">Team Size</h5>

              <p className="text-base font-normal text-center">
                Of pros making SpaceYaTech tick{" "}
              </p>
            </div>
          </div>

          <hr className="w-1/2 h-[2px] flex md:hidden rounded-sm bg-green-dark md:bg-gray-400 mx-auto" />

          <div className="w-full flex-center flex-col gap-5">
            <img
              src={briefcase}
              alt="teams"
              className="size-10 object-contain"
            />
            <div className="flex-center flex-col gap-2">
              <h4 className="text-green-dark text-3xl font-semibold">5</h4>

              <h5 className="text-lg font-semibold">Projects</h5>

              <p className="text-base font-normal text-center">
                Completed over a span of 2 years
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
