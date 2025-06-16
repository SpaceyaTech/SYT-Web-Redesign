import { book, teams } from "../../../assets/images/icons";

function StatsSection() {
  return (
    <section className="max-w-1440 w-full mx-auto flex flex-col items-center gap-9 pt-2">
      <h3 className="w-full max-w-lg text-green-header text-center font-semibold text-xl md:text-3xl">
        Transforming potential to professional excellence
      </h3>

      <div className="w-full flex flex-col gap-6 p-2">
        <div className="flex items-center flex-wrap md:flex-nowrap gap-4">
          <div className="w-full flex-center flex-col gap-5">
            <img src={teams} alt="teams" className="size-10 object-contain" />
            <div className="flex-center flex-col gap-2">
              <h4 className="text-green-dark text-3xl font-semibold">100+</h4>

              <h5 className="text-lg font-semibold">Students</h5>

              <p className="text-base font-normal text-center">
                Growing their employability with us
              </p>
            </div>
          </div>

          <hr className="w-1/2 h-0.5 flex md:hidden rounded-sm bg-green-dark md:bg-gray-400 mx-auto" />

          <div className="w-full flex-center flex-col gap-5">
            <img src={teams} alt="teams" className="size-10 object-contain" />
            <div className="flex-center flex-col gap-2">
              <h4 className="text-green-dark text-3xl font-semibold">8</h4>

              <h5 className="text-lg font-semibold">Professionals</h5>

              <p className="text-base font-normal text-center">
                Guiding the next generation of Kenyans in the tech industry
              </p>
            </div>
          </div>

          <hr className="w-1/2 h-0.5 flex md:hidden rounded-sm bg-green-dark md:bg-gray-400 mx-auto" />

          <div className="w-full flex-center flex-col gap-5">
            <img src={book} alt="teams" className="size-10 object-contain" />
            <div className="flex-center flex-col gap-2">
              <h4 className="text-green-dark text-3xl font-semibold">4</h4>

              <h5 className="text-lg font-semibold">Bootcamps</h5>

              <p className="text-base font-normal text-center">
                Of high quality content
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsSection;
