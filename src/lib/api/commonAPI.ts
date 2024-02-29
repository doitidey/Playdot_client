import { authInstance, instance } from "./instance";

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

// 로그인 fetch 함수
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
// 공용 request interceptor
instance.interceptors.request.use(
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

// 로그인 request interceptor
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

// 로그인 response interceptor
authInstance.interceptors.response.use(
  function (config) {
    if (config.status === 404) {
      console.error("404 Not Found");
    } else if (config.status === 403) {
      console.error("403 Forbidden");
    } else if (config.status === 401) {
      console.error("401 Unauthorized");
    } else if (config.status === 500) {
      console.error("500 Internal Error");
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
