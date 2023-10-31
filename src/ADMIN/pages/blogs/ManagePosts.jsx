import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import BlogsHeader from "../../components/blogs/BlogsHeader";

function ManagePosts() {
  const [isError, setError] = useState(null);
  const [Posts, setPosts] = useState([]);

  const getAllPosts = async () => {
    console.log(`${process.env.REACT_APP_API_BASE_URL}/api/blog/`)
    
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_BASE_URL}/api/blog/`
      );

      setPosts(response.results);
      console.log(response);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllPosts();
    // try {
    //   const response = axios.get(
    //     `${process.env.REACT_APP_API_BASE_URL}/api/blog/`
    //   );

    //   setPosts(response.results);
    // } catch (error) {
    //   setError(error.message);
    // }
  }, []);

  return (
    <div className="max-w-[1328px] mx-auto h-screen">
      <BlogsHeader pageType="ManagePosts" />
      <div className="border-t border-x border-[#D9D9D9]">
        <table className="table-auto min-w-full text-left text-base">
          <tbody>
            <tr className="border-b border-[#D9D9D9]">
              <td className="px-6 py-4">
                01. Introduction to UI/UX Fundamentals
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-[#009975]">
                Edit
                <FontAwesomeIcon icon={faPenToSquare} className="ml-2" />
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-red-600">
                Delete
                <FontAwesomeIcon icon={faTrashCan} className="ml-2" />
              </td>
            </tr>
            {Posts.map(({ id, title }) => (
              <tr key={id} className="border-b border-[#D9D9D9]">
                <td className="px-6 py-4">
                  {id}.{title}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-[#009975]">
                  Edit
                  <FontAwesomeIcon icon={faPenToSquare} className="ml-2" />
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-red-600">
                  Delete
                  <FontAwesomeIcon icon={faTrashCan} className="ml-2" />
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
