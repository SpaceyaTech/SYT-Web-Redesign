/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from "prop-types";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

function GeneralInfo({ theNext, setCollectedChapter }) {
  const [banner, setBanner] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setBanner(file);
  };

  const handleUploadImageClick = (e, id) => {
    document.getElementById(id).click();
  };

  const handleUploadImageKeyDown = (event, id) => {
    if (event.key === "Enter") {
      handleUploadImageClick(event, id);
    }
  };

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    // eslint-disable-next-line no-param-reassign
    data.banner = banner;

    setCollectedChapter((prevState) => ({
      ...prevState,
      country: data.country,
      city: data.city,
      name: data.name,
      about: data.about,
      banner: data.banner,
    }));

    theNext();
  };

  return (
    <>
      <div className="w-3/4 mt-4 items-center">
        <form id="generalInfoForm" onSubmit={handleSubmit(onSubmit)}>
          <p className="tracking-wider text-lg font-normal text-[#323433]">
            General Info
          </p>
          <div className={`w-full mt-4 ${errors.country ? "" : "h-10"}`}>
            <input
              id="country"
              {...register("country", {
                required: "Country name is required.",
              })}
              className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="Country"
            />
            {errors.country && (
              <span className="text-xs text-red-500">
                {errors.country.message}
              </span>
            )}
          </div>
          <div className={`w-full mt-4 ${errors.city ? "" : "h-10"}`}>
            <input
              id="city"
              {...register("city", { required: "City is required." })}
              className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="City"
            />
            {errors.city && (
              <span className="text-xs text-red-500">
                {errors.city.message}
              </span>
            )}
          </div>
          <div className={`w-full mt-4 ${errors.name ? "" : "h-10"}`}>
            <input
              id="name"
              {...register("name", { required: "Chapter name is required." })}
              className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="Chapter name"
            />
            {errors.name && (
              <span className="text-xs text-red-500">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="w-full mt-4">
            <input
              id="about"
              {...register("about", { required: "About is required." })}
              className="w-full h-20 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              type="text"
              placeholder="About Chapter"
            />
            {errors.about && (
              <span className="text-xs text-red-500">
                {errors.about.message}
              </span>
            )}
          </div>

          <Controller
            name="banner"
            control={control}
            render={({ field }) => (
              <div
                className="w-full pl-4 py-2  mt-4 border-dashed border-2 border-gray-300  rounded-tl rounded-tr justify-start items-center inline-flex"
                onClick={(e) => handleUploadImageClick(e, "banner")}
                onKeyDown={(e) => handleUploadImageKeyDown(e, "banner")}
                tabIndex="0"
                role="button"
              >
                <input
                  type="file"
                  id="banner"
                  {...field}
                  accept=".png,.jpg,.jpeg,.jfif"
                  onChange={(e) => {
                    field.onChange(e);
                    handleImageChange(e);
                  }}
                  style={{ display: "none" }}
                />
                <div className="grow shrink basis-0 h-[87px] flex-col justify-center items-center gap-2 inline-flex">
                  <div className="justify-start items-center inline-flex">
                    <div className="text-zinc-700 text-base font-normal">
                      Upload Chapter&apos;s Banner
                    </div>
                  </div>
                  {banner ? (
                    <div className="mt-4 rounded">
                      <p>{banner.name}</p>
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
            )}
          />
          {errors.banner && (
            <span className="text-xs text-red-500">
              {errors.banner.message}
            </span>
          )}
        </form>
      </div>
      <div className="w-3/4 mt-4 mb-14 items-center inline-flex justify-end gap-x-4">
        <button
          type="button"
          className="w-52 h-11 px-8 py-3 rounded-lg border border-zinc-500 text-zinc-500 text-[13px] font-medium leading-tight tracking-tight opacity-50 cursor-not-allowed"
          disabled
        >
          Back
        </button>
        <button
          form="generalInfoForm"
          type="submit"
          className="w-52 h-11 bg-emerald-600 rounded-lg text-neutral-50 text-[13px] font-medium leading-tight tracking-tight py-3 px-8"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default GeneralInfo;

GeneralInfo.propTypes = {
  theNext: PropTypes.func.isRequired,
  setCollectedChapter: PropTypes.func.isRequired,
};
