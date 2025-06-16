/* eslint-disable no-underscore-dangle */
import axios from "axios";
import publicAxios from "./publicAxios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const privateAxios = axios.create({
  baseURL: BASE_URL,
});

let isRefreshing = false;
// eslint-disable-next-line no-unused-vars
let refreshPromise = null;

let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });

  failedQueue = [];
};

privateAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const errorResponse = error.response?.data;

    if (error.response && errorResponse.statusCode === 401) {
      const originalRequest = error.config;

      if (!originalRequest._retry) {
        originalRequest._retry = true;

        if (!isRefreshing) {
          isRefreshing = true;

          refreshPromise = publicAxios
            .post("/token/refresh", {
              refreshString: JSON.parse(localStorage.getItem("auth") || "{}")
                .refresh,
            })
            .then((response) => {
              if (response.data.access) {
                const authObject = {
                  ...JSON.parse(localStorage.getItem("auth") || "{}"),
                  access: response.data.access,
                  refresh: response.data.refresh,
                };

                localStorage.setItem("auth", JSON.stringify(authObject));
                originalRequest.headers.Authorization = `Bearer ${authObject.access}`;
                processQueue(null, response.data.access);

                return response;
              }
              localStorage.removeItem("auth");
              window.location.href = "/login";
              return Promise.reject(error);
            })
            .catch((err) => {
              processQueue(err, null);

              if (err.response.status === 401 || err.response.status === 404) {
                localStorage.removeItem("auth");

                window.location.href = "/login";

                return Promise.reject(err);
              }

              throw err;
            })
            .finally(() => {
              isRefreshing = false;
            });
        }

        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;

            return axios(originalRequest);
          })
          .catch((err) => Promise.reject(err));
      }
    }

    return Promise.reject(error);
  }
);

export default privateAxios;
