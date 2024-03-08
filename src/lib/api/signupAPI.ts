import { fetchData } from "./commonAPI";

// 구단 조회
// GET
export const getTeams = () => {
  try {
    const res = fetchData("teams", "get");
    return res;
  } catch (error) {
    console.error(error);
  }
};

// 닉네임 중복 확인
// GET
export const nicknameCheck = (nickname: string) => {
  try {
    const res = fetchData(`profile/nickname-check?nickname=${nickname}`, "get");
    return res;
  } catch (error) {
    console.error(error);
  }
};
