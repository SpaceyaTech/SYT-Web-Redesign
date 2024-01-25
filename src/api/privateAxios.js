import axios from "axios";
import publicAxios from "./publicAxios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const privateAxios = axios.create({
  baseURL: BASE_URL,
});

let isRefreshing = false;
let refreshTokenPromise = null;

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

          refreshTokenPromise = publicAxios
            .post("/token/refresh", {
              refreshTokenString: JSON.parse(
                localStorage.getItem("auth") || "{}"
              ).refreshToken,
            })
            .then((response) => {
              if (response.data.accessToken) {
                const authObject = {
                  ...JSON.parse(localStorage.getItem("auth") || "{}"),
                  accessToken: response.data.accessToken,
                  refreshToken: response.data.refreshToken,
                };

                localStorage.setItem("auth", JSON.stringify(authObject));
                originalRequest.headers.Authorization = `Bearer ${authObject.accessToken}`;
                processQueue(null, response.data.accessToken);

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
