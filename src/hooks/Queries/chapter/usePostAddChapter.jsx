import axios from 'axios';
import React, { useEffect, useState } from 'react'

const usePostAddChapter = () => {
  const [ chapterData, setChapterData ] = useState(null);
  const [ error, setError ] = useState(null);
  const [ status, setStatus ] = useState(null);

  const clearError = (error  = 'all') => {
    error === 'all' && setError(null);
    // Clear one item's error?
  }

  const clearStatus = (status = 'all') => {
    status === 'all' && setStatus(null);
    // Clear one item's status?
  }

  useEffect(() => {
    if (chapterData) {
      const formData = new FormData();

      formData.append('country', chapterData.country);
      formData.append('city', chapterData.city);
      formData.append('name', chapterData.name);
      formData.append('about', chapterData.about);
      formData.append('socials', JSON.stringify(chapterData.socials));
      formData.append('banner', chapterData.banner);

      chapterData.organizers.forEach((organizer, index) => {
        const newOrganizer = {...organizer}
        formData.append(`organizer.${index}.image`, organizer.image);
        delete newOrganizer.image;
        formData.append(`organizers`, JSON.stringify(newOrganizer));
      });

      axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/chapter/`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      ).then(response => {
        if (response.status === 200 || response.status === 201) {
          setStatus("success");
          setChapterData(null);
          setError(null);
        } else {
          setStatus("error");
          setError(response.data);
        }
      }).catch((error) => {
        switch (error.code) {
          case 'ERR_NETWORK':
            setError({ axios: error.message });
            setStatus("error");
            break;
          case 'ERR_BAD_REQUEST':
            error.response ? (
              setError({
                chapter: error.response.data
              })
            ) : (
              setError({ server: "Problem contacting the server!" })
            );
            setStatus("error");
            break;
          default:
            setStatus("error");
            setError({ axios: "Please try again later."})
            break;
        }
      })
    }
  }, [chapterData]);

  return { setChapterData, error, clearError, status, clearStatus};
}

export default usePostAddChapter