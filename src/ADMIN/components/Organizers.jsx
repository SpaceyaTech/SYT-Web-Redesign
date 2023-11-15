import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useFieldArray, useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function Organizers({ thePrevious, collectedChapter, formComplete }) {
  const [ fileNames, setFileNames ] = useState({});

  const validationSchema = yup.object().shape({
    organizers: yup.array().of(
      yup.object().shape({
        name: yup.string().required("Organizer's name is required."),
        role: yup.string().required("Organizer's Role is required."),
        image: yup.mixed().required("Organizer's image is required."),
      }))
  })

  const { register, control, handleSubmit, setValue, formState: { errors }, clearErrors } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'organizers',
  });

  useEffect(() => {
    if (fields.length === 0) {append({})};
  }, [fields, append]);

  useEffect(() => {}, [fileNames])

  const handleImageChange = (event, index) => {
    const file = event.target.files[0];

    setValue(`organizers.${index}.image`, file);
    clearErrors(`organizers.${index}.image`)
    setFileNames((prevState) => {
      return {...prevState, [`organizer${index}`]: file.name}
    })
  };

  const removeOrganizer = (index) => {
    setFileNames((prevState) => {
      const { [`organizer${index}`]: removedfileName, ...updatedFilenames } = prevState;
      return updatedFilenames
    })
    remove(index)
  }

  const onSubmit = (data) => {
    collectedChapter['organizers'] = data.organizers;
    formComplete(collectedChapter);
  }

  return (
    <>
    <div className=" w-3/4 mt-4  items-center">
      <p className="tracking-wider text-lg font-normal text-[#323433]">
        Organizers
      </p>
      <form id="organizersForm" onSubmit={handleSubmit(onSubmit)}>
        {fields.map((organizer, index) => (
          <div className="my-6" key={organizer.id}>
              <p className="tracking-wider text-sm font-normal text-[#323433]">
                {`Organizer ${index + 1}`}
                <button className="px-3 py-2 text-xs text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-center mr-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 float-right" onClick={() => removeOrganizer(index)}>
                  Remove Organizer</button>
              </p>
            <div className={`w-full mt-4 ${errors.organizers && errors.organizers[index]?.name ? '' : 'h-10'}`}>
              <input
                className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                type="text"
                placeholder="Organizers Name"
                {...register(`organizers.${index}.name`)}
              />
              {errors.organizers ? (
                <span className="text-xs text-red-500">{errors.organizers[index]?.name?.message || ''}</span>
              ) : ('')}
              
            </div>
            <div className={`w-full mt-4 ${errors.organizers && errors.organizers[index]?.role ? '' : 'h-10'}`}>
              <input
                className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
                type="text"
                placeholder="Organizers Role"
                {...register(`organizers.${index}.role`)}
              />
              { errors.organizers ? (
                <span className="text-xs text-red-500">{errors.organizers[index]?.role?.message || ''}</span>
              ) : ('')}
            </div>
            <div
              className="w-full pl-4 py-2  mt-4 border-dashed border-2 border-gray-300  rounded-tl rounded-tr justify-start items-center inline-flex"
              // onKeyDown={(e)=>handleUploadImageKeyDown((e,`organizerImage${index}`))}
              tabIndex="0"
              role="button"
              onClick={() => {
                const fileInput = document.getElementById(`organizers.${index}.image`);
                fileInput.click();
              }}
            >
              <Controller
                name={`organizers.${index}.image`}
                control={control}
                render={({ field }) => (
                  <>
                  <input
                    type="file"
                    id={`organizers.${index}.image`}
                    accept=".png,.jpg,.jpeg,.jfif"
                    style={{ display: "none" }}
                    onChange={(e) => {
                      field.onChange(e);
                      handleImageChange(e, index);
                    }} />
                  <div className="grow shrink basis-0 h-[87px] flex-col justify-center items-center gap-2 inline-flex">
                    <div className="justify-start items-center inline-flex">
                      <div className="text-zinc-700 text-base font-normal">
                        Upload Organizer’s Image
                      </div>
                    </div>
                    {fileNames && fileNames[`organizer${index}`] ? (
                      <div className="mt-4 rounded">
                        <p>{fileNames[`organizer${index}`]}</p>
                      </div>
                    ) : (
                      <div className="justify-start items-center inline-flex">
                        <div className="text-zinc-700 text-xs font-normal leading-[18px] tracking-tight">
                          PNG, JPG, JFIF
                        </div>
                      </div>
                    )}
                  </div>
                  </>
                )}
              />
            </div>
            { errors.organizers ? (
                <span className="text-xs text-red-500">{errors.organizers[index]?.image?.message || ''}</span>
              ) : ('')}
          </div>
        ))}

        {/* add organisers button */}
        <div className="w-full mt-4  items-center inline-flex justify-end ">
          <button
            type="button"
            onClick = {() => append({})}
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
    <div className=" w-3/4 mt-4 mb-14 items-center inline-flex justify-end gap-x-4">
    <button
      type="button"
      onClick={thePrevious}
      className="w-52 h-11 px-8 py-3 rounded-lg border border-zinc-500 text-zinc-500 text-[13px] font-medium leading-tight tracking-tight"
    >
      Back
    </button>
    <button
      type="submit"
      form="organizersForm"
      className="w-52 h-11 bg-emerald-600 rounded-lg text-neutral-50 text-[13px] font-medium leading-tight tracking-tight py-3 px-8"
    >Finish</button>
  </div>
  </>
  );
}

export default Organizers;
