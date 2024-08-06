/* eslint-disable no-unused-expressions */
import axios from "axios";
import { useEffect, useState } from "react";

const usePostLikeBlog = () => {
  const [blogIDLikes, setBlogIDLikes] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const clearError = (errorArg = "all") => {
    errorArg === "all" && setError(null);
  };

  const clearStatus = (statusArg = "all") => {
    statusArg === "all" && setStatus(null);
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
        .catch((err) => {
          switch (err.code) {
            case "ERR_NETWORK":
              setError({ axios: err.message });
              setStatus("error");
              break;
            case "ERR_BAD_REQUEST":
              err.response
                ? setError({
                    blog: err.response.data,
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
