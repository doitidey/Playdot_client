import { fetchToday } from "./commonAPI";

export const todayGames = () => {
  try {
    const res = fetchToday("games", "get");
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const todayGamesComment = () => {
  try {
    const res = fetchToday("games/daily-replies", "get");
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const postTodayComment = (comment: string) => {
  try {
    const requestBody = {
      content: comment,
    };
    const res = fetchToday("games/daily-reply", "post", requestBody).then(
      (res) => {
        console.log(res);
      },
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};
