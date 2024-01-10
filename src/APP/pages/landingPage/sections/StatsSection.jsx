import { useState, useEffect } from "react";
import axios from "axios";

function StatsSection() {
  const [isError, setError] = useState();
  const [TotalMembers, setTotalMembers] = useState(0);
  
  
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

      setTotalMembers(total);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllChapters();
  }, []);

  return (
    <section className="bg-[#E5EFEC] body-font">
      <div className="container px-5 py-8 mx-auto max-w-[1440px]">
        <div className="flex flex-col text-center w-full mb-10">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-[#323433] my-4">
            Our Impact
          </h1>
          <div className="flex flex-col md:flex-row justify-around items-center mt-2 md:mt-8">
            <div className="flex gap-x-4 py-4 md:py-0 border-l-[#00664E] w-full justify-center">
              <h1 className="sm:text-5xl text-4xl font-extrabold title-font text-[#323433]">
                10
              </h1>
              <h1 className="sm:text-5xl text-4xl font-medium title-font text-[#323433]">
                Projects
              </h1>
            </div>
            {/* <div className="flex gap-x-4 py-4 md:py-0 border-b-2 border-l-[#00664E] w-full justify-center">
              <h1 className="sm:text-5xl text-4xl font-extrabold title-font text-[#323433]">
                30K
              </h1>
              <h1 className="sm:text-5xl text-4xl font-medium title-font text-[#323433]">
                Donations
              </h1>
            </div> */}
            <div className="flex gap-x-4 py-4 md:py-0 w-full justify-center">
              <h1 className="sm:text-5xl text-4xl font-extrabold title-font text-[#323433]">
                {TotalMembers}
              </h1>
              <h1 className="sm:text-5xl text-4xl font-medium title-font text-[#323433]">
                Members
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;