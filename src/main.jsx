import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./index.css";
import router from "./router";
import { SearchBlogProvider } from "./context/searchBlog";
import { AuthContextProvider } from "./utils/AuthContext";
import { ErrorBoundary } from "./APP";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AuthContextProvider>
        <QueryClientProvider client={queryClient}>
          <SearchBlogProvider>
            <RouterProvider router={router} />
            <ReactQueryDevtools position="bottom-right" />
          </SearchBlogProvider>
        </QueryClientProvider>
      </AuthContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
