import { fetchData, fetchForm } from "./commonAPI";

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

// 구단 설정
// PUT
export const putTeam = (teamId: number) => {
  try {
    const res = fetchData("profile/team", "put", {
      teamId: teamId,
    });
    return res;
  } catch (error) {
    console.error(error);
  }
};

// 프로필 설정
// PUT
export const putProfile = (body: FormData) => {
  try {
    const res = fetchForm("profile/details", "put", body);
    return res;
  } catch (error) {
    console.error(error);
  }
};
