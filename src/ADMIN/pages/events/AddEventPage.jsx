import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnRedo,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  BtnUndo,
  Editor,
  EditorProvider,
  Toolbar,
} from "react-simple-wysiwyg";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { useEventsCategories } from "../../../hooks/Queries/eventsSection/useEventCategories";
import useChaptersData from "../../../hooks/Queries/community/useChaptersData";
import usePostEvents from "../../../hooks/Queries/eventsSection/usePostEvents";

function AddEventPage() {
  const [selectedEventCategory, setSelectedEventCategory] = useState("1");
  const [editorState, setEditorState] = useState("");
  const [poster, setPoster] = useState("");
  const [newCategory, setNewCategory] = useState(false);

  const { data: eventsCategories, status: statusEventsCategories } =
    useEventsCategories();
  const {
    data: chaptersData,
    isLoading,
    isError,
    isSuccess,
  } = useChaptersData();
  const {
    setEventData: postEvent,
    error: errorPostEvent,
    clearError: clearErrorPostEvent,
    status: statusPostEvent,
    clearStatus: clearStatusPostEvent,
  } = usePostEvents();

  const handleEventAboutChange = (e) => {
    setEditorState(e.target.value);
    setValue("about", e.target.value);
    clearErrors("about");
  };

  const handleUploadImageClick = (e, id) => {
    if ((e.type === "keydown" && e.key === "Enter") || e.type === "click")
      document.getElementById(id).click();
  };

  const validationSchema = yup.object().shape({
    name: yup.string().required("Event name is required."),
    about: yup.string().required("Event about details are reqired."),
    link: yup
      .string()
      .url("Enter a valid url.")
      .required("Event link is required."),
    location: yup
      .string()
      .required("Event location (Building, region, etc) is required."),
    mode: yup.string().required("Event mode is required."),
    city: yup.string().required("Event city is required."),
    country: yup.string().required("Event country is required."),
    date: yup.string().required("Event date is required"),
    start_time: yup.string().required("Event starting time is required."),
    end_time: yup.string().required("Event ending time is required."),
    poster: yup.mixed().required("Event poster is required."),
    category: yup.string().when("$newCategory", {
      is: false,
      then: (schema) => schema.required("Event category is required."),
      otherwise: (schema) => schema,
    }),
    category_name: yup.string().when("$newCategory", {
      is: true,
      then: (schema) => schema.required("Enter a new category name."),
      otherwise: (schema) => schema,
    }),
    chapter: yup.string().required("Associated chapter is required."),
  });

  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    clearErrors,
    trigger,
    reset,
  } = useForm({
    defaultValues: {
      category: 1,
      chapter: 1,
      mode: "Physical",
    },
    mode: "onChange",
    resolver: yupResolver(validationSchema),
    context: { newCategory },
  });

  const onSubmit = (data) => {
    data.poster = poster;

    postEvent({ ...data });
  };

  useEffect(() => {
    selectedEventCategory === "" ? setNewCategory(true) : setNewCategory(false);
  }, [selectedEventCategory]);

  useEffect(() => {
    trigger();
  }, [trigger, newCategory]);

  useEffect(() => {
    if (statusPostEvent === "success") {
      postEvent(null);
      reset();
      setEditorState("");
      setPoster("");
    }
  }, [statusPostEvent]);

  return (
    <div className="px-5 sm:px-14 xl:px-28 sm:m-auto max-w-screen-2xl">
      <div className="space-y-3">
        <p className="text-xs font-medium text-[#656767]">Events</p>
        <h1 className="text-2xl text-[#323433]">Create Event</h1>
        <p className="text-[#656767]">Add new event details</p>
      </div>
      {/* Success Display */}
      {statusPostEvent === "success" && (
        <div
          className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Event Added Successfully!</strong>
          <span
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() => {
              clearStatusPostEvent();
              postEvent(null);
            }}
          >
            <svg
              className="fill-current h-6 w-6 text-green-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
      {/* Errors Display */}
      {statusPostEvent === "error" && errorPostEvent?.axios && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Cannot add the event: </strong>
          <span className="block sm:inline">{errorPostEvent.axios}</span>
          <span
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() => {
              clearErrorPostEvent();
              clearStatusPostEvent();
            }}
          >
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}
      {statusPostEvent === "error" && errorPostEvent?.event && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
          role="alert"
        >
          <strong className="font-bold">Cannot add the event: </strong>
          <ul style={{ listStyle: "disc", padding: "revert" }}>
            {Object.keys(errorPostEvent.event).map((key) => (
              <li key={key}>
                <strong className="font-bold">{key}: </strong>{" "}
                {errorPostEvent.event[key].toString()}
              </li>
            ))}
          </ul>
          <span
            className="absolute top-0 bottom-0 right-0 px-4 py-3"
            onClick={() => {
              clearErrorPostEvent();
              clearStatusPostEvent();
            }}
          >
            <svg
              className="fill-current h-6 w-6 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}

      {isError && (
        <p>
          Error loading chapters. Cannot add an event without a chapters.
          Contact the site admin!
        </p>
      )}
      {isSuccess && (
        <>
          {chaptersData && Array.isArray(chaptersData) ? (
            <>
              {chaptersData.length >= 1 ? (
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="px-3 sm:px-20 py-3 sm:py-12 my-10 border border-[#989A9A] rounded-2xl space-y-4"
                >
                  <div className={`w-full mt-4 ${errors.name ? "" : "h-10"}`}>
                    <input
                      type="text"
                      name="event-name"
                      className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Event Name"
                      {...register("name")}
                    />
                    {errors.name && (
                      <span className="text-xs text-red-500">
                        {errors.name.message}
                      </span>
                    )}
                  </div>

                  {statusEventsCategories === "error" && (
                    <div
                      className={`w-full mt-4 ${
                        errors.category_name ? "" : "h-10"
                      }`}
                    >
                      <input
                        type="text"
                        className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Event Category"
                        {...register("category-name")}
                      />
                      {errors.category_name && (
                        <span className="text-xs text-red-500">
                          {errors.category_name.message}
                        </span>
                      )}
                    </div>
                  )}
                  {statusEventsCategories === "success" && (
                    <div
                      className={`w-full mt-4 ${errors.category ? "" : "h-10"}`}
                    >
                      <select
                        name="category"
                        placeholder="Event Category"
                        className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
                        {...register("category", {
                          onChange: (event) =>
                            setSelectedEventCategory(event.target.value),
                        })}
                      >
                        {eventsCategories.map((eventsCategory) => (
                          <option
                            key={eventsCategory.id}
                            value={eventsCategory.id}
                          >
                            {eventsCategory.name}
                          </option>
                        ))}
                        <option value="">Other (Fill Below)</option>
                      </select>
                      {errors.category && (
                        <span className="text-xs text-red-500">
                          {errors.category.message}
                        </span>
                      )}
                    </div>
                  )}

                  {selectedEventCategory === "" && newCategory && (
                    <input
                      type="text"
                      className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Event Category"
                      {...register("category_name")}
                    />
                  )}
                  {errors.category_name && (
                    <span className="text-xs text-red-500">
                      {errors.category_name.message}
                    </span>
                  )}
                  <div className={`container w-full mt-4`}>
                    <EditorProvider>
                      <Controller
                        name="about"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                          <Editor
                            {...field}
                            value={editorState}
                            onChange={handleEventAboutChange}
                            className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="About Event"
                          >
                            <Toolbar>
                              <BtnUndo />
                              <BtnRedo />
                              <BtnBold />
                              <BtnItalic />
                              <BtnUnderline />
                              <BtnStrikeThrough />
                              <BtnNumberedList />
                              <BtnBulletList />
                              <BtnLink />
                              <BtnClearFormatting />
                              <BtnStyles />
                            </Toolbar>
                          </Editor>
                        )}
                      />
                    </EditorProvider>
                    {errors.about && (
                      <span className="text-xs text-red-500">
                        {errors.about.message}
                      </span>
                    )}
                  </div>
                  <div
                    className={`w-full mt-4 ${errors.chapter ? "" : "h-10"}`}
                  >
                    <select
                      name="chapter"
                      placeholder="SYT Chapter"
                      className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
                      {...register("chapter")}
                    >
                      {chaptersData.map((chapter) => (
                        <option key={chapter.id} value={chapter.id}>
                          {chapter.name} {chapter.city}, {chapter.country}
                        </option>
                      ))}
                    </select>
                    {errors.chapter && (
                      <span className="text-xs text-red-500">
                        {errors.chapter.message}
                      </span>
                    )}
                  </div>
                  <div className={`w-full mt-4 ${errors.mode ? "" : "h-10"}`}>
                    <select
                      name="mode"
                      placeholder="Delivery Mode"
                      className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
                      {...register("mode")}
                    >
                      <option value="Physical">Physical</option>
                      <option value="Virtual">Virtual</option>
                    </select>
                    {errors.mode && (
                      <span className="text-xs text-red-500">
                        {errors.mode.message}
                      </span>
                    )}
                  </div>
                  <div
                    className={`w-full mt-4 ${errors.location ? "" : "h-10"}`}
                  >
                    <input
                      type="text"
                      className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Location of the Event"
                      {...register("location")}
                    />
                    {errors.location && (
                      <span className="text-xs text-red-500">
                        {errors.location.message}
                      </span>
                    )}
                  </div>
                  <div className={`w-full mt-4 ${errors.city ? "" : "h-10"}`}>
                    <input
                      type="text"
                      className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="City"
                      {...register("city")}
                    />
                    {errors.city && (
                      <span className="text-xs text-red-500">
                        {errors.city.message}
                      </span>
                    )}
                  </div>
                  <div
                    className={`w-full mt-4 ${errors.country ? "" : "h-10"}`}
                  >
                    <input
                      type="text"
                      className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Country"
                      {...register("country")}
                    />
                    {errors.country && (
                      <span className="text-xs text-red-500">
                        {errors.country.message}
                      </span>
                    )}
                  </div>
                  <div className={`w-full mt-4 ${errors.link ? "" : "h-10"}`}>
                    <input
                      type="text"
                      className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Event Link"
                      {...register("link")}
                    />
                    {errors.link && (
                      <span className="text-xs text-red-500">
                        {errors.link.message}
                      </span>
                    )}
                  </div>
                  <div className={`w-full mt-4 ${errors.date ? "" : ""}`}>
                    <span className="text-xs mt-1">Date</span>
                    <input
                      type="date"
                      className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
                      placeholder="Select Date"
                      {...register("date")}
                    />
                    {errors.date && (
                      <span className="text-xs text-red-500">
                        {errors.date.message}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col sm:flex-row sm:space-x-8">
                    <div className="flex flex-col flex-grow">
                      <span className="text-xs mt-1">Start Time</span>
                      <input
                        type="time"
                        className="mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="Start Time"
                        {...register("start_time")}
                      />
                      {errors.start_time && (
                        <span className="text-xs text-red-500 mt-1">
                          {errors.start_time.message}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col flex-grow">
                      <span className="text-xs mt-1">End Time</span>
                      <input
                        type="time"
                        className="mt-4 sm:mt-1 px-3 py-3 bg-white border shadow-sm border-[#656767] placeholder-[#7E8180] focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="End Time"
                        {...register("end_time")}
                      />
                      {errors.end_time && (
                        <span className="text-xs text-red-500 mt-1">
                          {errors.end_time.message}
                        </span>
                      )}
                    </div>
                  </div>
                  <div
                    className="w-full pl-4 py-2  mt-4 border-dashed border-2 border-gray-300  rounded-tl rounded-tr justify-start items-center inline-flex"
                    onClick={(e) => handleUploadImageClick(e, "poster")}
                    onKeyDown={(e) => handleUploadImageClick(e, "poster")}
                    tabIndex="0"
                    role="button"
                  >
                    <Controller
                      name="poster"
                      control={control}
                      render={({ field }) => (
                        <>
                          <input
                            type="file"
                            id="poster"
                            {...field}
                            accept=".png,.jpg,.jpeg,.jfif"
                            onChange={(e) => {
                              field.onChange(e);
                              setPoster(e.target.files[0]);
                            }}
                            style={{ display: "none" }}
                          />
                          <div className="grow shrink basis-0 h-[87px] flex-col justify-center items-center gap-2 inline-flex">
                            <div className="justify-start items-center inline-flex">
                              <div className="text-zinc-700 text-base font-normal">
                                Upload Event Poster
                              </div>
                            </div>
                            {poster ? (
                              <div className="mt-4 rounded">
                                <p>{poster.name}</p>
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
                  {errors.poster && (
                    <span className="text-xs text-red-500 mt-1">
                      {errors.poster.message}
                    </span>
                  )}
                  <div className="flex justify-between sm:justify-end space-x-4">
                    <a
                      href="/admin/events"
                      type="button"
                      className="hover:bg-[#009975] text-center text-[#7E8180] hover:text-white rounded-lg border hover:border-0 py-3 px-5 sm:px-8 w-full sm:w-52 border-[#7E8180] focus:outline-none"
                    >
                      Cancel
                    </a>
                    <button
                      type="submit"
                      className="bg-[#009975] text-center text-white rounded-lg border-0 py-3 px-5 sm:px-8 w-full sm:w-52 hover:bg-white hover:border hover:border-[#009975] hover:text-[#009975] focus:outline-none"
                    >
                      Add Event
                    </button>
                  </div>
                </form>
              ) : (
                <p>You need to first add a chapter before adding an event!</p>
              )}
            </>
          ) : (
            ""
          )}
        </>
      )}
    </div>
  );
}

export default AddEventPage;
