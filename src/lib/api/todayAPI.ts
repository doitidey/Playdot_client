import { AxiosError } from "axios";
import { instance } from "@/lib/api/instance";

// 오늘의 승부예측 조회 API
export const getTodayGames = async () => {
  try {
    const response = await (await instance.get("games")).data;
    console.warn(response.data);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    if (err.response?.status === 400) {
      localStorage.clear();
      window.location.href = "/";
    } else {
      throw error;
    }
  }
};

// 오늘의 승부예측 투표 API
export const voteTodayGames = async (gameId: number, teamId: number) => {
  const requestBody = {
    teamId: teamId,
  };
  try {
    const response = await instance.post(`games/${gameId}/vote`, requestBody);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    const statusCode = err.response?.status;
    const statusText = err.response?.statusText;
    const message = err.message;
    console.error(`${statusCode} - ${statusText} - ${message}`);
  }
};

// 오늘의 승부예측 투표 취소 API
export const deleteTodayGames = async (gameId: number) => {
  try {
    const response = await (
      await instance.delete(`games/voteDelete/${gameId}`)
    ).data;
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    const statusCode = err.response?.status;
    const statusText = err.response?.statusText;
    const message = err.message;
    console.error(`${statusCode} - ${statusText} - ${message}`);
  }
};

// 오늘의 승부예측 투표 변경 API
export const updateTodayGames = async (gameId: number, teamId: number) => {
  const requestBody = {
    teamId: teamId,
  };
  try {
    const response = await (
      await instance.put(`games/voteUpdate/${gameId}`, requestBody)
    ).data;
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    const statusCode = err.response?.status;
    const statusText = err.response?.statusText;
    const message = err.message;
    console.error(`${statusCode} - ${statusText} - ${message}`);
  }
};

// 오늘의 승부예측 댓글 조회 API
export const getTodayComment = async (page: number, item: number) => {
  try {
    const response = await (
      await instance.get(`games/daily-replies?page=${page}&item=${item}`)
    ).data;
    console.warn(response.data);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    const statusCode = err.response?.status;
    const statusText = err.response?.statusText;
    const message = err.message;
    console.error(`${statusCode} - ${statusText} - ${message}`);
  }
};

// 오늘의 승부예측 대댓글 조회 API
export const getTodayReply = async (replyId: number) => {
  try {
    const response = await (
      await instance.get(`games/daily-replies/${replyId}/sub`)
    ).data;
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    const statusCode = err.response?.status;
    const statusText = err.response?.statusText;
    const message = err.message;
    console.error(`${statusCode} - ${statusText} - ${message}`);
  }
};

// 오늘의 승부예측 댓글 작성 API
export const postTodayComment = async (content: string) => {
  const requestBody = {
    content: content,
  };
  try {
    const response = await (
      await instance.post(`games/daily-reply`, requestBody)
    ).data;
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    const statusCode = err.response?.status;
    const statusText = err.response?.statusText;
    const message = err.message;
    console.error(`${statusCode} - ${statusText} - ${message}`);
  }
};

// 오늘의 승부예측 대댓글 작성 API
export const postTodayReply = async (reply: string, replyId: number) => {
  const requestBody = {
    reply: reply,
  };
  try {
    const response = await (
      await instance.post(`games/daily-reply/${replyId}/sub`, requestBody)
    ).data;
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    const statusCode = err.response?.status;
    const statusText = err.response?.statusText;
    const message = err.message;
    console.error(`${statusCode} - ${statusText} - ${message}`);
  }
};

// 오늘의 승부예측 댓글 삭제 API
export const deleteTodayComment = async (replyId: number) => {
  try {
    const response = await (await instance.delete(`replies/${replyId}`)).data;
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    const statusCode = err.response?.status;
    const statusText = err.response?.statusText;
    const message = err.message;
    console.error(`${statusCode} - ${statusText} - ${message}`);
  }
};

// 오늘의 승부예측 댓글 좋아요 API
export const postCommentLike = async (replyId: number) => {
  try {
    const response = await (
      await instance.post(`games/daily-reply/${replyId}/like`)
    ).data;
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    const statusCode = err.response?.status;
    const statusText = err.response?.statusText;
    const message = err.message;
    console.error(`${statusCode} - ${statusText} - ${message}`);
  }
};

// 오늘의 승부예측 댓글 좋아요 취소 API
export const cancelCommentLike = async (replyId: number) => {
  try {
    const response = await (
      await instance.delete(`games/daily-reply/${replyId}/like`)
    ).data;
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    const statusCode = err.response?.status;
    const statusText = err.response?.statusText;
    const message = err.message;
    console.error(`${statusCode} - ${statusText} - ${message}`);
  }
};

// 오늘의 승부예측 댓글 신고 조회 API
export const getTodayCommentReport = async (replyId: number) => {
  try {
    const response = await (
      await instance.get(`replies/${replyId}/report`)
    ).data;
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    const statusCode = err.response?.status;
    const statusText = err.response?.statusText;
    const message = err.message;
    console.error(`${statusCode} - ${statusText} - ${message}`);
  }
};

// 오늘의 승부예측 댓글 신고 API
export const postTodayCommentReport = async (
  replyId: number,
  reportType: string,
) => {
  const requestBody = {
    reportType: reportType,
  };
  try {
    const response = await (
      await instance.post(`replies/${replyId}/report`, requestBody)
    ).data;
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    const statusCode = err.response?.status;
    const statusText = err.response?.statusText;
    const message = err.message;
    console.error(`${statusCode} - ${statusText} - ${message}`);
  }
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
