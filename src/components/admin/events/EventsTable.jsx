import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const initialData = [
  {
    id: 1,
    eventName:
      "(Next Stop, Pottersville) (Next Stop, Pottersville) (Next Stop, Pottersville)",
    city: "New York",
    date: "2023-09-10",
    from: "10:00",
    to: "18:00",
    chapter: "Central Park",
    rsvp: 75,
  },
  {
    id: 2,
    eventName: "Art Exhibition",
    city: "Paris",
    date: "2023-09-15",
    from: "09:00",
    to: "17:00",
    chapter: "Louvre Museum",
    rsvp: 25,
  },
  {
    id: 3,
    eventName: "Tech Conference",
    city: "San Francisco",
    date: "2023-09-20",
    from: "08:00",
    to: "16:00",
    chapter: "Moscone Center",
    rsvp: 90,
  },
  {
    id: 4,
    eventName: "Food Festival",
    city: "London",
    date: "2023-09-25",
    from: "11:00",
    to: "19:00",
    chapter: "Hyde Park",
    rsvp: 10,
  },
  {
    id: 5,
    eventName: "(Next Stop, Pottersville)",
    city: "New York",
    date: "2023-09-10",
    from: "10:00",
    to: "18:00",
    chapter: "Central Park",
    rsvp: 75,
  },
  {
    id: 6,
    eventName: "Art Exhibition",
    city: "Paris",
    date: "2023-09-15",
    from: "09:00",
    to: "17:00",
    chapter: "Louvre Museum",
    rsvp: 25,
  },
  {
    id: 7,
    eventName: "Tech Conference",
    city: "San Francisco",
    date: "2023-09-20",
    from: "08:00",
    to: "16:00",
    chapter: "Moscone Center",
    rsvp: 90,
  },
  {
    id: 8,
    eventName: "Food Festival",
    city: "London",
    date: "2023-09-25",
    from: "11:00",
    to: "19:00",
    chapter: "Hyde Park",
    rsvp: 10,
  },
];

function EventsTable() {
  const [data, setData] = useState(initialData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectRow = (event, id) => {
    if (event.target.checked) {
      setSelectedRows([...selectedRows, id]);
      setSelectAll(selectedRows.length === data.length - 1);
    } else {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
      setSelectAll(false);
    }
  };

  const handleSelectAll = (event) => {
    if (event.target.checked) {
      setSelectedRows(data.map((row) => row.id));
      setSelectAll(true);
    } else {
      setSelectedRows([]);
      setSelectAll(false);
    }
  };

  const handleDelete = () => {
    setData(data.filter((row) => !selectedRows.includes(row.id)));
    setSelectedRows([]);
    setSelectAll(false);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
    setSelectedRows([]);
    setSelectAll(false);
  };

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
    setSelectedRows([]);
    setSelectAll(false);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
    setCurrentPage(1);
  };

  const filteredData = data.filter(
    (row) =>
      row.eventName.toLowerCase().includes(searchQuery) ||
      row.city.toLowerCase().includes(searchQuery) ||
      row.chapter.toLowerCase().includes(searchQuery)
  );

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentData = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="px-5 sm:px-0">
      {/* header */}
      <div className="flex justify-between items-center py-10">
        <h2 className="text-2xl">SYT events</h2>
        <div>
          <label className="relative block w-full" htmlFor="search">
            <input
              className="placeholder:text-base placeholder:text-[#49454F] block w-52 border border-[#49454F] rounded py-2 pl-4 pr-3 focus:outline-none focus:border-[#009975] focus:ring-[#009975] focus:ring-1 sm:text-sm"
              placeholder="Search"
              type="text"
              name="search"
              id="search"
              onChange={handleSearch}
            />
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 right-1 flex items-center pr-2">
              <AiOutlineSearch />
            </span>
          </label>
        </div>
      </div>

      {/* table actions */}
      <div className="border border-gray-200 rounded py-4 px-3">
        <div className="space-x-4 py-2 hidden sm:block">
          <input
            type="checkbox"
            onChange={handleSelectAll}
            checked={selectAll}
          />
          <button
            type="button"
            onClick={handleDelete}
            className="hover:cursor-pointer"
          >
            <span className="sr-only">Delete</span>
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.25 3.5H13.5V2.75C13.5 2.15326 13.2629 1.58097 12.841 1.15901C12.419 0.737053 11.8467 0.5 11.25 0.5H6.75C6.15326 0.5 5.58097 0.737053 5.15901 1.15901C4.73705 1.58097 4.5 2.15326 4.5 2.75V3.5H0.75C0.551088 3.5 0.360322 3.57902 0.21967 3.71967C0.0790178 3.86032 0 4.05109 0 4.25C0 4.44891 0.0790178 4.63968 0.21967 4.78033C0.360322 4.92098 0.551088 5 0.75 5H1.5V18.5C1.5 18.8978 1.65804 19.2794 1.93934 19.5607C2.22064 19.842 2.60218 20 3 20H15C15.3978 20 15.7794 19.842 16.0607 19.5607C16.342 19.2794 16.5 18.8978 16.5 18.5V5H17.25C17.4489 5 17.6397 4.92098 17.7803 4.78033C17.921 4.63968 18 4.44891 18 4.25C18 4.05109 17.921 3.86032 17.7803 3.71967C17.6397 3.57902 17.4489 3.5 17.25 3.5ZM6 2.75C6 2.55109 6.07902 2.36032 6.21967 2.21967C6.36032 2.07902 6.55109 2 6.75 2H11.25C11.4489 2 11.6397 2.07902 11.7803 2.21967C11.921 2.36032 12 2.55109 12 2.75V3.5H6V2.75ZM15 18.5H3V5H15V18.5ZM7.5 8.75V14.75C7.5 14.9489 7.42098 15.1397 7.28033 15.2803C7.13968 15.421 6.94891 15.5 6.75 15.5C6.55109 15.5 6.36032 15.421 6.21967 15.2803C6.07902 15.1397 6 14.9489 6 14.75V8.75C6 8.55109 6.07902 8.36032 6.21967 8.21967C6.36032 8.07902 6.55109 8 6.75 8C6.94891 8 7.13968 8.07902 7.28033 8.21967C7.42098 8.36032 7.5 8.55109 7.5 8.75ZM12 8.75V14.75C12 14.9489 11.921 15.1397 11.7803 15.2803C11.6397 15.421 11.4489 15.5 11.25 15.5C11.0511 15.5 10.8603 15.421 10.7197 15.2803C10.579 15.1397 10.5 14.9489 10.5 14.75V8.75C10.5 8.55109 10.579 8.36032 10.7197 8.21967C10.8603 8.07902 11.0511 8 11.25 8C11.4489 8 11.6397 8.07902 11.7803 8.21967C11.921 8.36032 12 8.55109 12 8.75Z"
                fill="#FE0101"
              />
            </svg>
          </button>
        </div>

        {/* table display */}
        <div className="overflow-scroll">
          <table className="min-w-full divide-y divide-gray-200 table-auto sm:table-fixed">
            <thead>
              <tr className="text-left font-medium text-[#323433]">
                <th className="hidden sm:table-cell min-w-4">{}</th>
                <th className="py-4 w-64">Event Name</th>
                <th className="min-w-32">City</th>
                <th className="hidden sm:table-cell min-w-32">Date</th>
                <th className="hidden sm:table-cell min-w-24">From</th>
                <th className="hidden sm:table-cell min-w-24">To</th>
                <th className="hidden sm:table-cell min-w-32">Chapter</th>
                <th className="min-w-24">RSVPs</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentData.map((row) => (
                <tr
                  key={row.id}
                  className={
                    selectedRows.includes(row.id)
                      ? "bg-[#F5FFFD] text-primary"
                      : "hover:bg-[#F7F7F7] text-[#656767] text-sm"
                  }
                >
                  <td
                    className="hidden sm:table-cell py-4"
                    id={`checkbox-${row.id}`}
                  >
                    <input
                      aria-labelledby={`checkbox-${row.id}`}
                      type="checkbox"
                      className="cursor-pointer"
                      onChange={(event) => handleSelectRow(event, row.id)}
                      checked={selectedRows.includes(row.id)}
                    />
                  </td>
                  <td className="whitespace-wrap px-2 py-4">{row.eventName}</td>
                  <td>{row.city}</td>
                  <td className="hidden sm:table-cell">{row.date}</td>∏
                  <td className="hidden sm:table-cell">{row.from}</td>
                  <td className="hidden sm:table-cell">{row.to}</td>
                  <td className="hidden sm:table-cell">{row.chapter}</td>
                  <td className="text-center sm:text-start">{row.rsvp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* pagination */}
        <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1 items-center justify-end space-x-4">
            <div>
              <p className="text-sm text-[#656767] font-normal">
                <span>
                  Page {currentPage} of{" "}
                  {Math.ceil(filteredData.length / rowsPerPage)}
                </span>
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px"
                aria-label="Pagination"
              >
                <button
                  type="button"
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center px-2 py-2 text-[#989A9A] hover:bg-gray-50 hover:text-[#323433] hover:cursor-pointer"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  onClick={handleNextPage}
                  disabled={
                    currentPage === Math.ceil(data.length / rowsPerPage)
                  }
                  className="relative inline-flex items-center px-2 py-2 text-[#989A9A] hover:bg-gray-50 hover:text-[#323433] hover:cursor-pointer"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventsTable;
