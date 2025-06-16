/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import { InstructorsComponent } from "@/pages/mastercraft/sections";
import { programs } from "@/pages/mastercraft/sections/data";

function Mentors() {
  const mentors = programs.map(({ mentors: men }) => men).flat();

  return (
    <section className="max-w-1440 w-full mx-auto flex flex-col items-center gap-9 pt-2">
      <h3 className="w-full max-w-lg text-green-header text-center font-semibold text-xl md:text-3xl">
        Get mentorship from our selected industry experts
      </h3>
      <div
        className={`flex items-center gap-2 md:gap-4 overflow-x-scroll ${mentors && mentors.length > 2 ? "scrollbar-2" : "justify-center"} py-6 w-[80%] md:w-[90%]`}
      >
        {mentors.map(
          ({
            id,
            name,
            role,
            organisation,
            img,
            experience,
            linkedin,
            twitter,
          }) => (
            <InstructorsComponent
              key={id}
              name={name}
              title={role}
              image={img}
              linkedin={linkedin}
              twitter={twitter}
              organisation={organisation}
              experience={experience}
            />
          )
        )}
      </div>
    </section>
  );
}

export default Mentors;
