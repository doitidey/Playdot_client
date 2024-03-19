import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

export const configureStompClient = (gameId: number) => {
  const serverUrl = `${process.env.NEXT_PUBLIC_BASE_URL}chat`;
  const token = localStorage.getItem("authToken");
  console.log(token);
  const sockJs = new SockJS(serverUrl);
  const stompClient = new Client({
    brokerURL: serverUrl,
    webSocketFactory: () => sockJs,
    connectHeaders: {
      gameId: `${gameId}`,
      Authorization: `${token}`,
    },
    debug: function (str) {
      console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
  });

  return stompClient;
};
