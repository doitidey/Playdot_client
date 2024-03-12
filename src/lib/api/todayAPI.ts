import { fetchData } from "./commonAPI";

// 오늘의 승부예측
// 경기 조회
export const todayGames = () => {
  try {
    const res = fetchData("games", "get");
    return res;
  } catch (e) {
    console.error(e);
  }
};

// 투표
export const todayGameVote = (gameId: number, teamId: number) => {
  try {
    const requestBody = {
      teamId: teamId,
    };
    const res = fetchData(`games/${gameId}/vote`, "post", requestBody);
    return res;
  } catch (e) {
    console.error(e);
  }
};

// 투표 변경
export const updateTodayGameVote = (gameId: number, teamId: number) => {
  try {
    const requestBody = {
      teamId: teamId,
    };
    const res = fetchData(`games/voteUpdate/${gameId}`, "put", requestBody);
    return res;
  } catch (e) {
    console.error(e);
  }
};

// 투표 취소
export const deleteTodayGameVote = (gameId: number) => {
  try {
    const res = fetchData(`games/voteDelete/${gameId}`, "delete");
    return res;
  } catch (e) {
    console.error(e);
  }
};

// 댓글 조회
export const todayGamesComment = () => {
  try {
    const res = fetchData("games/daily-replies", "get");
    return res;
  } catch (e) {
    console.error(e);
  }
};

// 댓글 입력
export const postTodayComment = (comment: string) => {
  try {
    const requestBody = {
      content: comment,
    };
    const res = fetchData("games/daily-reply", "post", requestBody).then(
      (res) => {
        console.warn(res);
      },
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};

// 댓글 삭제
export const removeTodayComment = (replyId: number) => {
  try {
    const requestBody = {
      replyId: replyId,
    };
    const res = fetchData(`replies/${replyId}`, "delete", requestBody);
    return res;
  } catch (e) {
    console.error(e);
  }
};

// 댓글 좋아요
export const likeTodayComment = (replyId: number) => {
  try {
    const requestBody = {
      replyId: replyId,
    };
    const res = fetchData(
      `games/daily-reply/${replyId}/like`,
      "post",
      requestBody,
    );
    console.warn(res);
    return res;
  } catch (e) {
    console.error(e);
  }
};
