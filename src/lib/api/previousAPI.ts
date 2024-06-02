import { fetchData } from "./commonAPI";

export const getPrevious = (startDate: string, endDate: string) => {
  try {
    const requestBody = {
      startDate: startDate,
      endDate: endDate,
    };
    const res = fetchData(
      `games/past?startDate=${startDate}&endDate=${endDate}`,
      "get",
      requestBody,
    );
    return res;
  } catch (e) {
    console.error(e);
  }
};
