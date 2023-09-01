import * as React from "react";

function Organizers() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];
    setSelectedImage(imageFile);
  };

  const handleUploadImageClick = () => {
    document.getElementById("imageInput").click();
  };
  const handleUploadImageKeyDown = (event) => {
    if (event.key === "Enter") {
      handleUploadImageClick();
    }
  };

  return (
    <div className=" w-3/4 mt-4  items-center">
      <p className="tracking-wider text-lg font-normal text-[#323433]">
        Organizers
      </p>
      <form>
        <div className="w-full mt-4 h-10">
          <input
            id="username"
            className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Organizers Name"
          />
        </div>
        <div className="w-full mt-4 h-10">
          <input
            id="username"
            className="w-full h-12 px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            placeholder="Organizers Role"
          />
        </div>
        <div
          className="w-full pl-4 py-2  mt-4 border-dashed border-2 border-gray-300  rounded-tl rounded-tr justify-start items-center inline-flex"
          onClick={handleUploadImageClick}
          onKeyDown={handleUploadImageKeyDown}
          tabIndex="0"
          role="button"
        >
          <div className="grow shrink basis-0 h-[87px] flex-col justify-center items-center gap-2 inline-flex">
            <div className="justify-start items-center inline-flex">
              <div className="text-zinc-700 text-base font-normal">
                Upload Organizer’s Image
              </div>
            </div>
            {selectedImage ? (
              <div className="mt-4 rounded">
                <p>{selectedImage.name}</p>
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
        <input
          type="file"
          id="imageInput"
          accept=".png,.jpg,.jpeg,.jfif"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </form>
    </div>
  );
}

export default Organizers;
