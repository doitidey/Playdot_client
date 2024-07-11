import { authInstance, formInstance, instance } from "@/lib/api/instance";

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

// 폼데이터 fetch 함수
export const fetchForm = async (
  url: string,
  method: Method,
  reqData: FormData,
) => {
  try {
    const { data } = await formInstance({ url, method, data: reqData });
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
    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

// 폼데이터 response interceptor
formInstance.interceptors.request.use(
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
