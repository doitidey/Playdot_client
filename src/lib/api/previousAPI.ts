import { instance } from "./instance";

export const getPrevious = async (startDate: string, endDate: string) => {
  const response = await instance
    .get(`games/past?startDate=${startDate}&endDate=${endDate}`)
    .then((res) => res.data);
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
