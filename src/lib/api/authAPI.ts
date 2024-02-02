import { fetchData } from "./commonAPI";

// 로그인
// POST
// requestBody - email: string, password: string
export const login = async () => {
  try {
    const requestBody = {
      username: "playdot2",
      password: "test",
    };
    const res = fetchData("login", "post", requestBody);
    return res;
  } catch (error) {
    console.error(error);
  }
};

// 구단 조회
// GET
export const teams = async () => {
  try {
    return fetchData("teams", "get");
  } catch (error) {
    console.error(error);
  }
};

// 로그아웃
// POST
// requestBody - X
export const logout = async () => {
  return fetchData("logout", "post");
};
