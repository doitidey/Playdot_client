import { fetchAuth } from "./commonAPI";

// 닉네임 중복 확인
// GET
export const nicknameCheck = (nickname: string) => {
  try {
    const requestBody = {
      nickname: nickname,
    };
    const res = fetchAuth("profile/nickname-check", "get", requestBody);
    return res;
  } catch (error) {
    console.error(error);
  }
};
