import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import { fetchData } from "@/lib/api/commonAPI";

export const configureStompClient = (
  gameId: string,
  setMsg: (message: string) => void,
) => {
  const serverUrl = `${process.env.NEXT_PUBLIC_BASE_URL}chat`;
  const token = localStorage.getItem("authToken");

  const sockJs = new SockJS(serverUrl);
  const stompClient = new Client({
    webSocketFactory: () => sockJs,
    connectHeaders: {
      gameId: `${gameId}`,
      Authorization: `${token}`,
    },
    onStompError: (str) => {
      console.error(str.body);
      setMsg(str.body);
    },
    debug: (str) => {
      // console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
  });

  return stompClient;
};

type TokenBody = {
  recipientNickName: string;
  token: number;
  comment: string;
};
export const putToken = (body: TokenBody) => {
  try {
    const res = fetchData("gift/token", "put", body);
    return res;
  } catch (error) {
    console.error(error);
  }
};

export const getProfile = (nickname: string) => {
  try {
    const res = fetchData(`/profiles?nickname=${nickname}`, "get");
    return res;
  } catch (error) {
    console.error(error);
  }
};
