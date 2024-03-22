import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { ErrorBoundary } from "./APP";
import { AuthContextProvider } from "./context/AuthContext";
import { SearchBlogProvider } from "./context/searchBlog";
import router from "./router";

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
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 5000,
                success: {
                  style: {
                    background: "#289643",
                    color: "white",
                  },
                  iconTheme: {
                    primary: "white",
                    secondary: "black",
                  },
                },
                error: {
                  style: {
                    background: "#E5352B",
                    color: "white",
                  },
                  iconTheme: {
                    primary: "white",
                    secondary: "black",
                  },
                },
              }}
            />
            <ReactQueryDevtools position="bottom-right" />
          </SearchBlogProvider>
        </QueryClientProvider>
      </AuthContextProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
