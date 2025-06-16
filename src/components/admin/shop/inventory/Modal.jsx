/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { IoMdClose } from "react-icons/io";
import * as yup from "yup";

const validFileExtensions = {
  image: ["jpg", "gif", "png", "jpeg", "svg", "webp"],
};

const MAX_FILE_SIZE = 10485760;

// get allowed file extensions
function getAllowedExt(type) {
  return validFileExtensions[type].map((e) => `.${e}`).toString();
}

// validate file type and extension
function isValidFileType(fileName, fileType) {
  if (!fileName) return false;
  const extension = fileName.split(".").pop().toLowerCase();
  return validFileExtensions[fileType].includes(extension);
}

// form validation schema in yup
const schema = yup.object().shape({
  price: yup.number().required("Price is required"),
  size: yup.string().required("Size is required"),
  category: yup.string().required("Category is required"),
  color: yup.string().required("Color is required"),
  description: yup.string().required("Description is required"),
  image: yup
    .mixed()
    .required("Image is required")
    .test("is-valid-type", "Not a valid image type", (value) =>
      isValidFileType(value && value[0]?.name, "image")
    )
    .test(
      "is-valid-size",
      "Max allowed size is 10MB",
      (value) => value && value[0]?.size <= MAX_FILE_SIZE
    ),
});

export default function Modal({ showModal, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = () => {
    // console.log(data);
  };

  const allowedExts = getAllowedExt("image");

  return (
    <>
      <div />
      {showModal ? (
        <>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-[80%] h-[80%] my-6 mx-auto max-w-3xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex w-full">
                  <div className="w-1/2 pr-2 pl-6">
                    {/* header */}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-xl font-poppins font-medium text-[#353535]">
                        Add Item
                      </h3>
                      <button
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                      >
                        <IoMdClose className="size-10 text-[#353535]" />
                      </button>
                    </div>
                    {/* body */}
                    <div className="relative p-6 flex-auto">
                      <div className="min-w-sm mx-auto my-4 leading-relaxed">
                        <div className="mb-5">
                          <label
                            htmlFor="price"
                            className="block mb-2 text-sm font-medium text-gray-900"
                          >
                            Price
                          </label>
                          <input
                            id="price"
                            {...register("price")}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#009975] focus:border-[#009975] block w-full p-2.5 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder="KES 0.00"
                          />
                          {errors.price && (
                            <p className="text-red-500">price is required</p>
                          )}
                        </div>
                        <div className="mb-5 max-w-sm mx-auto">
                          <label
                            htmlFor="size"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Size
                          </label>
                          <select
                            id="size"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#009975] focus:border-[#009975] focus:outline-none focus:ring focus:ring-opacity-40 block w-full p-2.5"
                            {...register("size")}
                          >
                            <option value="" selected>
                              Select Size
                            </option>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="ExtraLarge">ExtraLarge</option>
                          </select>
                          {errors.size && (
                            <p className="text-red-500">
                              {errors.size.message}
                            </p>
                          )}
                        </div>
                        <div className="mb-5 max-w-sm mx-auto">
                          <label
                            htmlFor="category"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          >
                            Category
                          </label>
                          <select
                            id="category"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#009975] focus:border-[#009975] focus:outline-none focus:ring focus:ring-opacity-40 block w-full p-2.5"
                            {...register("category")}
                          >
                            <option value="" selected>
                              Select Category
                            </option>
                            <option value="Shirts">Shirts</option>
                            <option value="Hoodies">Hoodies</option>
                          </select>
                          {errors.category && (
                            <p className="text-red-500">
                              {errors.category.message}
                            </p>
                          )}
                        </div>
                        <div className="mb-5 max-w-sm mx-auto">
                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Color
                          </label>
                          <select
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#009975] focus:border-[#009975] focus:outline-none focus:ring focus:ring-opacity-40 block w-full p-2.5"
                            {...register("color")}
                          >
                            <option value="" selected>
                              Select Color
                            </option>
                            <option value="Black">Black</option>
                            <option value="Grey">Grey</option>
                          </select>
                          {errors.color && (
                            <p className="text-red-500">
                              {errors.color.message}
                            </p>
                          )}
                        </div>
                        <div className="mb-5">
                          <label className="block mb-2 text-sm font-medium text-gray-900">
                            Description
                          </label>
                          <textarea
                            {...register("description")}
                            rows="4"
                            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-[#009975] focus:border-[#009975] focus:outline-none focus:ring focus:ring-opacity-40"
                          />
                          {errors.description && (
                            <p className="text-red-500">
                              {errors.description.message}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center flex-col w-1/2 pl-2 pr-6 mt-20">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-96 border-2 border-[#009975] border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg
                          className="w-8 h-8 mb-4 text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold text-[#009975]">
                            Upload file
                          </span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          {" "}
                          PNG, JPG or GIF up to 10MB
                        </p>
                      </div>
                      <input
                        accept={allowedExts}
                        {...register("image")}
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                        multiple
                      />
                    </label>
                    {errors.image && errors.image.type === "required" && (
                      <p className="text-[#cc3300]">Image is required</p>
                    )}
                    {errors.image && errors.image.type === "is-valid-type" && (
                      <p className="text-red-500">Not a valid image type</p>
                    )}
                    {errors.image && errors.image.type === "is-valid-size" && (
                      <p className="text-red-500">Max allowed size is 10MB</p>
                    )}
                  </div>
                </div>

                {/* footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    onClick={onClose}
                    type="button"
                    className="text-[#009975] uppercase rounded-lg pl-4 pr-4 pt-2 pb-2 border-2 border-[#009975] mr-4 text-lg"
                  >
                    {" "}
                    cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#009975] text-white rounded-lg pl-4 pr-4 pt-2 pb-2 uppercase text-lg"
                  >
                    {" "}
                    add item
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </>
  );
}

Modal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
