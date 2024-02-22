import { authInstance, todayInstance } from "./instance";

type Method = "get" | "post" | "put" | "delete";

// fetch
export const fetchAuth = async (
  url: string,
  method: Method,
  reqData?: unknown,
) => {
  try {
    const { data } = await authInstance({ url, method, data: reqData });
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchToday = async (
  url: string,
  method: Method,
  reqData?: unknown,
) => {
  try {
    const { data } = await todayInstance({ url, method, data: reqData });
    return data;
  } catch (error) {
    console.error(error);
  }
};

// interceptor
authInstance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("authToken");
    if (!accessToken) {
      return config;
    }
    config.headers.authorization = accessToken;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

authInstance.interceptors.response.use(
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
    localStorage.setItem("authToken", config.headers.authorization);
    localStorage.setItem("nickname", config.data.data.nickname);
    localStorage.setItem("teamName", config.data.data.teamName);
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

todayInstance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("authToken") as string;
    if (!accessToken) {
      return config;
    }
    config.headers.authorization = accessToken;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);
