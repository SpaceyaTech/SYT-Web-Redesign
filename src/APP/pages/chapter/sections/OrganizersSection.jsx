import React from "react";
import DetailsContainer from "./DetailsContainer";
import {
  Akinyi,
  Emmy,
  Pam,
  akinyiux,
  eakinyi,
} from "../../../../assets/images/community";

const organizationDetails = {
  title: "Organizers",
  paragraph:
    "The SpaceYaTech Nairobi Chapter is led by a capable team of developers and designers from Kenya. ",
};
// const organizers = [{ name: 'Emmy Akinyi', role: 'UX team lead', img: Akinyi }, { name: 'Pamela Owino', role: 'Lead UX designer at SpaceYaTech', img: Pam }, { name: 'Emmy Akinyi', role: 'UX team lead', img: Emmy }, { name: 'Emmy Akinyi', role: 'UX team lead', img: akinyiux }, { name: 'Emmy Akinyi', role: 'UX team lead', img: eakinyi }]

// <div className="overflow-auto px-6 pb-12 mt-6 md:grid md:grid-cols-1 md:gap-x-2 md:gap-y-10 lg:grid-cols-5 xl:gap-x-8">
// {organizers.map(({ name, role, img }, index) => (
//   <div className="relative h-72 rounded-lg overflow-hidden mr-6 md:mr-0" key={index}>
//     <img className="absolute inset-0 w-full h-full object-cover" src={img} alt="Image" />
//     <div className="absolute inset-0" />
//     <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black to-transparent opacity-50 h-1/2" />
//     <div className="flex flex-col absolute inset-x-0 bottom-0 items-center justify-center p-4 text-white">
//       <p className="text-lg font-normal">{name}</p>
//       <p className="text-center text-sm font-normal">{role}</p>
//     </div>
//   </div>

// ))}

// </div>
function ImpactSection({ organizers, city, country }) {
  // content-between md:px-20
  const aboutChapter = `The SpaceYaTech ${city} Chapter is led by a capable team of developers and designers from ${country}.`

  return (
    <div className="">
      <DetailsContainer title="Organizers" paragraph={aboutChapter} />

      <div className="flex overflow-auto px-6 pb-12 mt-6 md:grid md:grid-cols-1 md:gap-x-2 md:gap-y-10 lg:grid-cols-5 xl:gap-x-8">
        {organizers.map(({ id, name, role, image }) => (
          <div
            className="relative w-full h-72 rounded-lg overflow-auto mr-6 md:mr-0"
            key={id}
          >
            <img
              className="absolute inset-0 w-full h-full object-cover"
              src={image}
              alt="Image"
            />
            <div className="absolute inset-0" />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black to-transparent opacity-50 h-1/2" />
            <div className="flex flex-col absolute inset-x-0 bottom-0 items-center justify-center p-4 text-white">
              <p className="text-lg font-normal">{name}</p>
              <p className="text-center text-sm font-normal">{role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImpactSection;
