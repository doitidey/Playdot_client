import { fetchData } from "./commonAPI";

//마이페이지 프로필 정보 조회
//GET
export const getProfileDetails = () => {
  try {
    const res = fetchData("profile/details", "get");
    return res;
  } catch (error) {
    console.error(error);
  }
};

//마이페이지 요정 통계 조회
//GET
export const getFairyHistory = () => {
  try {
    const res = fetchData("profile/history/fairy-statistics", "get");
    return res;
  } catch (error) {
    console.error(error);
  }
};

//마이페이지 선물 내역 조회
//GET
export const getGiftHistory = (page: number) => {
  try {
    const res = fetchData(`profile/history/gifts?page=${page}&item=10`, "get");
    return res;
  } catch (error) {
    console.error(error);
  }
};
