import axios from "axios";
import React, { useEffect, useState } from "react";

const usePostJoinChapter = (chapterId) => {
  const [postEmail, setPostEmail] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(null);

  const clearError = () => setError(null);
  const clearStatus = () => setStatus(null);

  useEffect(() => {
    if (postEmail) {
      axios
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/chapter/${chapterId}/members/`,
          JSON.stringify(postEmail),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          if (response.status === 200 || response.status === 201) {
            setStatus("success");
            setPostEmail(null);
            setError(null);
          } else {
            setStatus("error");
            setError(response.data);
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 400) {
            setError(error.response.data);
          }
          setStatus("error");
          // console.error("Error adding chapter: ", error);
          // throw error;
        });
    }
  }, [postEmail, chapterId]);

  return { setPostEmail, error, clearError, status, clearStatus };
};

export default usePostJoinChapter;
