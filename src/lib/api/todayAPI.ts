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

// 오늘의 승부예측 댓글 조회 API
export const getTodayComment = async (page?: number, item?: number) => {
  const response = await instance
    .get(`games/daily-replies?page=${page}&item=${item}`)
    .then((res) => res.data);
  return response.data;
};

// 오늘의 승부예측 대댓글 조회 API
export const getTodayReply = async (replyId: number) => {
  const response = await instance
    .get(`games/daily-replies/${replyId}/sub`)
    .then((res) => res.data);
  return response.data;
};

// 오늘의 승부예측 댓글 작성 API
export const postTodayComment = async (comment: string) => {
  const requestBody = {
    comment: comment,
  };
  const response = await instance
    .post(`games/daily-reply`, requestBody)
    .then((res) => res.data);
  return response.data;
};

// 오늘의 승부예측 대댓글 작성 API
export const postTodayReply = async (reply: string, replyId: number) => {
  const requestBody = {
    reply: reply,
  };
  const response = await instance
    .post(`games/daily-reply/${replyId}/sub`, requestBody)
    .then((res) => res.data);
  return response.data;
};

// 오늘의 승부예측 댓글 삭제 API
export const deleteTodayComment = async (replyId: number) => {
  const response = await instance
    .delete(`replies/${replyId}`)
    .then((res) => res.data);
  return response.data;
};

// 오늘의 승부예측 댓글 좋아요 API
export const postCommentLike = async (replyId: number) => {
  const response = await instance
    .post(`games/daily-reply/${replyId}/like`)
    .then((res) => res.data);
  return response.data;
};

// 오늘의 승부예측 댓글 좋아요 취소 API
export const cancelCommentLike = async (replyId: number) => {
  const response = await instance
    .delete(`games/daily-reply/${replyId}/like`)
    .then((res) => res.data);
  return response.data;
};

// 오늘의 승부예측 댓글 신고 조회 API
export const getTodayCommentReport = async (replyId: number) => {
  const response = await instance
    .get(`replies/${replyId}/report`)
    .then((res) => res.data);
  return response.data;
};

// 오늘의 승부예측 댓글 신고 API
export const postTodayCommentReport = async (
  replyId: number,
  reportType: string,
) => {
  const requestBody = {
    reportType: reportType,
  };
  const response = await instance
    .post(`replies/${replyId}/report`, requestBody)
    .then((res) => res.data);
  return response.data;
};

// 요청 인터셉터
instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("authToken") as string;
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
