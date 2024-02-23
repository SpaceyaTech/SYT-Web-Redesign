import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

function SocialMediaLinks({ thePrevious, theNext, setCollectedChapter }) {
  const validationSchema = yup.object().shape({
    website: yup.string().url("Enter a valid url.").required("Website link required."),
    facebook: yup.string().url("Enter a valid url.").required("Facebook link Required."),
    twitter: yup.string().url("Enter a valid url.").required("Twitter link Required."),
    linkedin: yup.string().url("Enter a valid url.").required("Linkedin link Required."),
    instagram: yup.string().url("Enter a valid url.").required("Instagram link Required."),
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onChange",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    setCollectedChapter((prevState) => ({
      ...prevState,
      socials: data
    }))
    theNext();
  }

  return (
    <>
    <div className=" w-3/4 mt-4  items-center">
      <form id="socialMediaLinksForm" onSubmit={handleSubmit(onSubmit)}>
      <p className="tracking-wider text-lg font-normal text-[#323433]">
        Social Media Links
      </p>
        <div className={`w-full mt-4 ${errors.website ? '' : 'h-10'}`}>
          <input
            id="website"
            {...register("website")}
            className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Website"
          />
          { errors.website && <span className="text-xs text-red-500">{errors.website.message}</span>}
        </div>
        <div className={`w-full mt-4 ${errors.facebook ? '' : 'h-10'}`}>
          <input
            id="facebook"
            {...register("facebook")}
            className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Facebook"
          />
          { errors.facebook && <span className="text-xs text-red-500">{errors.facebook.message}</span>}
        </div>
        <div className={`w-full mt-4 ${errors.twitter ? '' : 'h-10'}`}>
          <input
            id="twitter"
            {...register("twitter")}
            className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Twitter"
          />
          { errors.twitter && <span className="text-xs text-red-500">{errors.twitter.message}</span>}
        </div>
        <div className={`w-full mt-4 ${errors.linkedin ? '' : 'h-10'}`}>
          <input
            id="linkedin"
            {...register("linkedin")}
            className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Linkedin"
          />
          { errors.linkedin && <span className="text-xs text-red-500">{errors.linkedin.message}</span>}
        </div>
        <div className={`w-full mt-4 ${errors.instagram ? '' : 'h-10'}`}>
          <input
            id="instagram"
            {...register("instagram")}
            className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Instagram"
          />
          { errors.instagram && <span className="text-xs text-red-500">{errors.instagram.message}</span>}
        </div>
      </form>
    </div>
    <div className=" w-3/4 mt-4 mb-14 items-center inline-flex justify-end gap-x-4">
    <button
      type="button"
      className="w-52 h-11 px-8 py-3 rounded-lg border border-zinc-500 text-zinc-500 text-[13px] font-medium leading-tight tracking-tight"
      onClick={thePrevious}
    >
      Back
    </button>
    <button
      type="submit"
      form="socialMediaLinksForm"
      className="w-52 h-11 bg-emerald-600 rounded-lg text-neutral-50 text-[13px] font-medium leading-tight tracking-tight py-3 px-8"
    >Next</button>
  </div>
  </>
  );
}

export default SocialMediaLinks;
