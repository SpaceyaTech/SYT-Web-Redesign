import React from "react";

const BlogPagination = ({
  count,
  next,
  previous,
  current,
  blogs_per_page,
  onPageChange,
}) => {
  let button_count = 0;
  // Determine total pages
  if (next === null) {
    if (previous === null) {
      // Do not show nav
    } else {
      const previous_page_count = parseInt(previous.split("=")[1]);
      button_count = previous_page_count + 1;
    }
  } else {
    button_count = Math.ceil(count / blogs_per_page);
  }

  const prevP = current === 1 ? 1 : current - 1;
  const nextP = current === button_count ? button_count : current + 1;

  const buttons = [];

  for (let index = 1; index <= button_count; index++) {
    buttons.push(
      <li key={index}>
        <button
          onClick={() => onPageChange({ index })}
          className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          {index}
        </button>
      </li>
    );
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="flex items-center -space-x-px h-10 text-base">
        <li key="0">
          <button
            onClick={() => onPageChange({ index: prevP })}
            className="flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Previous</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
          </button>
        </li>
        {buttons}
        <li key={button_count + 1}>
          <button
            onClick={() => onPageChange({ index: nextP })}
            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          >
            <span className="sr-only">Next</span>
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default BlogPagination;
