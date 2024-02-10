import { getAccessTokenCookie } from "../cookies/cookies";
import { instance } from "./instance";

type Method = "get" | "post" | "put" | "delete";

// 공용 fetch 함수
export const fetchData = async (
  url: string,
  method: Method,
  reqData?: unknown,
) => {
  try {
    const { data } = await instance({ url, method, data: reqData });
    return data;
  } catch (error) {
    console.error(error);
  }
};

// interceptor
instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("authToken");
    if (!accessToken) {
      return config;
    }
    config.headers.Authorization = accessToken;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  function (config) {
    if (config.status === 404) {
      console.log("404 Not Found");
    } else if (config.status === 403) {
      console.log("403 Forbidden");
    } else if (config.status === 401) {
      console.log("401 Unauthorized");
    } else if (config.status === 500) {
      console.log("500 Internal Error");
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
