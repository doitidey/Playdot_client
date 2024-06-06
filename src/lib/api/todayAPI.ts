import { instance } from "./instance";

// 오늘의 승부예측 조회 API
export const getTodayGames = async () => {
  const response = await instance.get("games").then((res) => res.data);
  return response.data;
};

// 오늘의 승부예측 투표 API
export const voteTodayGames = async (gameId: number, teamId: number) => {
  const requestBody = {
    teamId: teamId,
  };
  const response = await instance
    .post(`games/${gameId}/vote`, requestBody)
    .then((res) => res.data);
  return response.data;
};

// 오늘의 승부예측 투표 취소 API
export const deleteTodayGames = async (gameId: number) => {
  const response = await instance
    .delete(`games/voteDelete/${gameId}`)
    .then((res) => res.data);
  return response.data;
};

// 오늘의 승부예측 투표 변경 API
export const updateTodayGames = async (gameId: number, teamId: number) => {
  const requestBody = {
    teamId: teamId,
  };
  const response = await instance
    .put(`games/voteUpdate/${gameId}`, requestBody)
    .then((res) => res.data);
  return response.data;
};