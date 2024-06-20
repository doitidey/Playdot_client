import { fetchAuth, fetchData } from "./commonAPI";

// 로그인
// POST
// requestBody - email: string, password: string
export const login = () => {
  try {
    const requestBody = {
      username: "playdot2",
      password: "test",
    };
    const res = fetchAuth("login", "post", requestBody);
    return res;
  } catch (error) {
    console.error(error);
  }
};

// 소셜 로그인
// GET
export const oauthLogin = (registrationId: string, code: string) => {
  try {
    return fetchAuth(`login/oauth2/code/${registrationId}?code=${code}`, "get");
  } catch (error) {
    console.error(error);
  }
};

// 구단 조회
// GET
export const teams = () => {
  try {
    return fetchData("teams", "get");
  } catch (error) {
    console.error(error);
  }
};

// 로그아웃
// POST
// requestBody - X
export const logout = () => {
  return fetchData("logout", "post");
};
