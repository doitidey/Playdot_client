import { fetchData } from "./commonAPI";

export const todayGames = () => {
  try {
    const res = fetchData("games", "get");
    return res;
  } catch (e) {
    console.error(e);
  }
};
