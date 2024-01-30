import React, { useState, useEffect } from "react";

import Error500 from "./Error500";

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = (error) => {
      console.error(
        "Error: ",
        error.message,
        "ErrorFileName: ",
        error.filename
      );
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    return <Error500 />;
  }

  return <>{children}</>;
}

export default ErrorBoundary;
