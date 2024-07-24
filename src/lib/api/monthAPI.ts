import { instance } from "./instance";

export const getMonthGame = async () => {
  const response = await instance.get("statistics").then((res) => res.data);
  return response.data;
};

// 월간 승리요정 댓글 조회 API
export const getMonthComment = async (page: number, item: number) => {
  const response = await instance
    .get(`statistics/replies?page=${page}&item=${item}`)
    .then((res) => res.data);
  return response.data;
};

// 월간 승리요정 대댓글 조회 API
export const getMonthReply = async (replyId: number) => {
  const response = await instance
    .get(`statistics/replies/${replyId}/sub`)
    .then((res) => res.data);
  return response.data;
};

// 월간 승리요정 댓글 작성 API
export const postMonthComment = async (content: string) => {
  const requestBody = {
    content: content,
  };
  const response = await instance
    .post(`statistics/reply`, requestBody)
    .then((res) => res.data);
  return response.data;
};

// 월간 승리요정 대댓글 작성 API
export const postMonthReply = async (content: string, replyId: number) => {
  const requestBody = {
    content: content,
  };
  const response = await instance
    .post(`statistics/replies/${replyId}/sub`, requestBody)
    .then((res) => res.data);
  return response.data;
};

// 월간 승리요정 댓글 삭제 API
export const deleteMonthComment = async (replyId: number) => {
  const response = await instance
    .delete(`statistics/replies${replyId}`)
    .then((res) => res.data);
  return response.data;
};

// 월간 승리요정 댓글 좋아요 API
export const postCommentLike = async (replyId: number) => {
  const response = await instance
    .post(`statistics/replies/${replyId}/like`)
    .then((res) => res.data);
  return response.data;
};

// 월간 승리요정 댓글 좋아요 취소 API
export const cancelCommentLike = async (replyId: number) => {
  const response = await instance
    .delete(`statistics/replies/${replyId}/like`)
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
