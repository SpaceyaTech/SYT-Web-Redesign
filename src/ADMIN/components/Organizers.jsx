import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Organizers() {

  const handleImageChange = (event, index) => {
    const updatedOrganizers = [...organizers]
    updatedOrganizers[index].image = event.target.files[0]
    setOrganizers(updatedOrganizers);
  };

  const handleUploadImageClick = (e,id) => {
    document.getElementById(id).click();
  };

  const handleUploadImageKeyDown = (event,id) => {
    if (event.key === "Enter") {
      handleUploadImageClick(event,id);
    }
  };

  const handleChange =(e, index)=>{
    const updatedOrganizers = [...organizers]
    updatedOrganizers[index] = {...updatedOrganizers[index], [e.target.name.slice(0, -1)]:e.target.value}
    setOrganizers(updatedOrganizers);
    // console.log(organizers)
  }
  const [organizers, setOrganizers] = useState([
    {
      name: "",
      role:"",
      image:null
    },
  ]);

  const addOrganiser = () =>{
    setOrganizers([...organizers, {
      name: "",
      role:"",
      image:null
    }]);
    // console.log(organizers)
  }

  return (
    <div className=" w-3/4 mt-4  items-center">
      <p className="tracking-wider text-lg font-normal text-[#323433]">
        Organizers
      </p>
      <form>
        {organizers.map((organizer, index) => (
          <div className="my-6">
            {organizers.length > 1 && (
              <p className="tracking-wider text-sm font-normal text-[#323433]">
                {`Organiser ${index + 1}`}
              </p>
            )}
            <div className="w-full mt-4 h-10">
              <input
                id="username"
                className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                type="text"
                placeholder="Organizers Name"
                name={`name${index}`}
                value={organizers[index].name}
                onChange={(e)=>handleChange(e, index)}
              />
            </div>
            <div className="w-full mt-4 h-10">
              <input
                id="role"
                className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                type="text"
                placeholder="Organizers Role"
                name={`role${index}`}
                value={organizers[index].role}
                onChange={(e)=>handleChange(e, index)}
              />
            </div>
            <div
              className="w-full pl-4 py-2  mt-4 border-dashed border-2 border-gray-300  rounded-tl rounded-tr justify-start items-center inline-flex"
              onClick={(e)=>handleUploadImageClick(e,`imageInput${index}`)}
              onKeyDown={(e)=>handleUploadImageKeyDown((e,`imageInput${index}`))}
              tabIndex="0"
              role="button"
            >
              <input
                type="file"
                id={`imageInput${index}`}
                accept=".png,.jpg,.jpeg,.jfif"
                onChange={(e)=>handleImageChange(e, index)}
                style={{ display: "none" }}
              />
              <div className="grow shrink basis-0 h-[87px] flex-col justify-center items-center gap-2 inline-flex">
                <div className="justify-start items-center inline-flex">
                  <div className="text-zinc-700 text-base font-normal">
                    Upload Organizer’s Image
                  </div>
                </div>
                {organizer.image ? (
                  <div className="mt-4 rounded">
                    <p>{organizer.image.name}</p>
                  </div>
                ) : (
                  <div className="justify-start items-center inline-flex">
                    <div className="text-zinc-700 text-xs font-normal leading-[18px] tracking-tight">
                      PNG, JPG, JFIF
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* add organisers button */}
        <div className="w-full mt-4  items-center inline-flex justify-end ">
          <button
            type="button"
            onClick={addOrganiser}
            className="w-[154px] h-11 px-3.5 py-3 rounded-lg border border-emerald-600 text-emerald-600 text-[13px] font-medium leading-tight tracking-tight justify-end items-center gap-2.5 inline-flex"
          >
            <FontAwesomeIcon
              icon={faPlus}
              size="xl"
              style={{ color: "#009975" }}
            />
            Add Organizer
          </button>
        </div>
      </form>
    </div>
  );
}

export default Organizers;
