import axios from "axios";

const requestBody = {
  username: "playdot2",
  password: "test",
};

const url = process.env.NEXT_PUBLIC_BASE_URL + "login";

// axios.interceptors.request.use(
//   function (config) {
//     config.withCredentials = true;
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   },
// );

export const login = () => {
  return axios.post(url, requestBody, { withCredentials: true }).then((res) => {
    // axios.defaults.withCredentials = true;
    console.warn(res);
    console.warn(res.data.data.accessToken);
    localStorage.setItem("accessToken", res.data.data.accessToken);
    // axios.defaults.headers.common["accessToken"] = res.data.data.accessToken;
    return res.data;
  });
};
