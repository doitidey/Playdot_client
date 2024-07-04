import { instance } from "./instance";

export const getMonthGame = async () => {
  const response = await instance.get("statistics").then((res) => res.data);
  return response.data;
};

// 요청 인터셉터
instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("accessToken") as string;
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
