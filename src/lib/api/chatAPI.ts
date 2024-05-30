import SockJS from "sockjs-client";
import { Client } from "@stomp/stompjs";
import { fetchData } from "@/lib/api/commonAPI";

export const configureStompClient = (gameId: number) => {
  const serverUrl = `${process.env.NEXT_PUBLIC_BASE_URL}chat`;
  const token = localStorage.getItem("authToken");
  const sockJs = new SockJS(serverUrl);
  const stompClient = new Client({
    webSocketFactory: () => sockJs,
    connectHeaders: {
      gameId: `${gameId}`,
      Authorization: `${token}`,
    },
    // onStompError: (frame) => {
    //   console.log("ㄷㄱ객", frame);
    // },
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
