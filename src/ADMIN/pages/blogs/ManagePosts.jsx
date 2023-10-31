import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import BlogsHeader from "../../components/blogs/BlogsHeader";

function ManagePosts() {
  const [isError, setError] = useState(null);
  const [Posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/blog/`
      );

      setPosts(response.data.results);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <div className="max-w-[1328px] mx-auto h-screen">
      <BlogsHeader pageType="ManagePosts" />
      <div className="border-t border-x border-[#D9D9D9]">
        <table className="table-auto min-w-full text-left text-base">
          <tbody>
            {Posts?.map(({ id, title }, idx) => (
              <tr key={id} className="border-b border-[#D9D9D9]">
                <td className="px-6 py-4">
                  {(idx + 1).toString().length === 1 ? `0${idx + 1}` : idx + 1}.{" "}
                  {title}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-[#009975]">
                  <button type="button">
                    Edit
                    <FontAwesomeIcon icon={faPenToSquare} className="ml-2" />
                  </button>
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-red-600">
                  <button type="button">
                    {" "}
                    Delete
                    <FontAwesomeIcon icon={faTrashCan} className="ml-2" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isError && <p>{isError}</p>}
      </div>
    </div>
  );
}

export default ManagePosts;
