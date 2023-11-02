import React, { useState, useEffect } from "react";
import axios from "axios";
import { Listbox, Transition } from "@headlessui/react";
import { Navigate, useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import BlogsHeader from "../../components/blogs/BlogsHeader";
import useAuth from "../../../hooks/useAuth";
import "react-quill/dist/quill.snow.css";

function CreatePost() {
  const { auth } = useAuth();
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [body, setBody] = useState("");
  const [selectedCategory, setSelectedCategory] = useState();
  const [isError, setError] = useState(null);
  const navigate = useNavigate();

  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/blog/category`
      );

      setCategories(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/blog/create`,
        {
          title,
          description,
          body,
          category: selectedCategory.id,
        },
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Created blog successful ", response);
      navigate("/admin/blogs/manage-posts");
    } catch (error) {
      setError(error.message);
    }
  };

  if (auth?.access) {
    return <Navigate to="/admin" />;
  }
  return (
    <div className="max-w-[1328px] mx-auto h-screen px-4">
      <BlogsHeader pageType="CreatePost" />
      <form className="mb-4 sm:mb-16" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row justify-between gap-6 sm:gap-12">
          <div className="flex flex-col gap-6 sm:gap-12 w-full">
            {/* <Listbox
          as="div"
          className="w-full max-w-xs"
          value={selectedCategory}
          onChange={setSelectedCategory}
        >
          {({ open }) => (
            <div className="relative">
              <span className="inline-block w-full rounded-md shadow-sm">
                <Listbox.Button className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5">
                  <span className="block truncate">
                    {selectedCategory.name}
                  </span>
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      viewBox="0 0 20 20"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </Listbox.Button>
              </span>

              <Transition
                show={open}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
              >
                <Listbox.Options
                  static
                  className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                >
                  {categories.map(({ id, name }) => (
                    <Listbox.Option key={id} value={name}>
                      {({ selected, active }) => (
                        <div
                          className={`${
                            active
                              ? "text-[#009975] bg-[#F5FFFD]"
                              : "text-gray-900"
                          } cursor-default select-none relative py-2 pl-8 pr-4`}
                        >
                          <span
                            className={`${
                              selected ? "font-semibold" : "font-normal"
                            } block truncate`}
                          >
                            {name}
                          </span>
                          {selected && (
                            <span
                              className={`${
                                active ? "text-white" : "text-[#009975]"
                              } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                            >
                              <svg
                                className="h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </span>
                          )}
                        </div>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          )}
        </Listbox> */}
            <select
              name="category"
              className="w-full max-w-lg px-6 h-10 border border-solid border-[#7F7A83] rounded focus:outline-none focus:ring focus:ring-[#009975] text-base"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              placeholder="Select Category"
            >
              {categories?.map(({ id, name }) => (
                <option key={id} value={name}>
                  {name}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="title"
              className="w-full max-w-lg px-6 h-10 bg-white border border-solid shadow-sm border-[#7F7A83] rounded focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block sm:text-sm focus:ring"
              placeholder="Add Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-6 sm:gap-12 w-full items-end">
            <div className="cursor-pointer w-full max-w-lg h-10 overflow-hidden relative flex items-center border border-solid border-[#7F7A83] rounded focus:border-[#CCFFF3] focus:ring-[#009975] focus:ring">
              <span className="text-sm text-[#7E8180] ml-6">Browse Image</span>
              <input
                type="file"
                name="heading"
                className="absolute cursor-pointer opacity-0 block w-full h-full"
                placeholder="Upload Image"
                // value="Deploying and Managing Applications with Kubernetes"
              />
            </div>
            <input
              type="text"
              name="description"
              className="w-full max-w-lg px-6 h-10 bg-white border border-solid shadow-sm border-[#7F7A83] rounded focus:outline-none focus:border-[#CCFFF3] focus:ring-[#009975] block sm:text-sm focus:ring"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full h-96 my-6 sm:my-16">
          <ReactQuill
            placeholder="body"
            theme="snow"
            value={body}
            onChange={setBody}
            className="ql-custom"
            style={{
              height: "100%",
              fontSize: "14px",
            }}
          />
        </div>
      </form>
      <button
        type="submit"
        className="bg-[#009975] mb-20 text-center float-right text-white rounded-lg border-0 py-3 px-5 sm:px-8 w-full sm:w-56 hover:bg-white hover:border hover:border-[#009975] hover:text-[#009975] focus:outline-none"
      >
        Publish Post
      </button>
    </div>
  );
}

export default CreatePost;
