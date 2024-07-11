const CommentInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="flex flex-col gap-4 mt-2 md:mt-4 sticky bottom-0 left-0 bg-opacity-10 backdrop-blur-sm backdrop-contrast-100 backdrop-brightness-125"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2 text-base font-normal">
        <label className="text-[#323433]">Your Comment</label>
        <textarea
          type="text"
          className="border border-[#79747E] outline-none rounded-md min-h-[100px] p-4 items-start"
          placeholder="Type here"
        />
      </div>

      <button
        type="submit"
        className="bg-primary text-white py-3 px-6 md:px-8 rounded-lg w-fit"
      >
        Comment
      </button>
    </form>
  );
};

export default CommentInput;
