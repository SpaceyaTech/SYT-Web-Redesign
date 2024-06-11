import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { ErrorBoundary } from "./APP";
import { AuthContextProvider } from "./context/AuthContext";
import { SearchBlogProvider } from "./context/searchBlog";
import router from "./router";
import "react-lazy-load-image-component/src/effects/blur.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ErrorBoundary>
        <Toaster position="top-right" reverseOrder={false} />
        <AuthContextProvider>
          <QueryClientProvider client={queryClient}>
            <SearchBlogProvider>
              <RouterProvider router={router} />
              <ReactQueryDevtools position="bottom-right" />
            </SearchBlogProvider>
          </QueryClientProvider>
        </AuthContextProvider>
      </ErrorBoundary>
    </HelmetProvider>
  </React.StrictMode>
);
