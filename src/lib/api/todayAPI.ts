import { fetchData } from "./commonAPI";

export const todayGames = () => {
  try {
    const res = fetchData("games", "get");
    return res;
  } catch (e) {
    console.error(e);
  }
};

export const todayGamesComment = () => {
  try {
    const res = fetchData("games/daily-replies", "get");
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
    const res = fetchData("games/daily-reply", "post", requestBody).then(
      (res) => {
        console.log(res);
      },
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};
