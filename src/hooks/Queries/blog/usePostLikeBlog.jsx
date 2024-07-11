import axios from "axios";
import React, { useEffect, useState } from "react";

const usePostLikeBlog = () => {
  const [blogIDLikes, setBlogIDLikes] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const clearError = (error = "all") => {
    error === "all" && setError(null);
  };

  const clearStatus = (status = "all") => {
    status === "all" && setStatus(null);
  };

  useEffect(() => {
    if (blogIDLikes) {
      axios
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/blog/${blogIDLikes.id}/like/`
        )
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            setStatus("success");
            // setChapterData(null);
            setError(null);
          } else {
            setStatus("error");
            setError(response.data);
          }
        })
        .catch((error) => {
          switch (error.code) {
            case "ERR_NETWORK":
              setError({ axios: error.message });
              setStatus("error");
              break;
            case "ERR_BAD_REQUEST":
              error.response
                ? setError({
                    blog: error.response.data,
                  })
                : setError({ server: "Problem contacting the server!" });
              setStatus("error");
              break;
            default:
              setStatus("error");
              setError({ axios: "Please try again later." });
              break;
          }
        });
    }
  }, [blogIDLikes]);

  return { setBlogIDLikes, error, clearError, status, clearStatus };
};

export default usePostLikeBlog;
