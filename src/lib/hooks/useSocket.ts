import { useCallback } from "react";

import { configureStompClient } from "@/lib/api/chatAPI";
import {
  useStompClient,
  useStompMessageData,
} from "../store/chat/stompclientStore";

type MessageDetailProps = {
  message: string;
  type: string;
};

export const useSocket = () => {
  const { stompClient, roomId, setStompClient, setRoomId } = useStompClient();
  const { setMessageData } = useStompMessageData();

  //소켓 연결하기
  const connectSocket = (roomNumber: number) => {
    setRoomId(roomNumber);
    const socket = configureStompClient(roomId);

    //소켓 연결 후 바로 구독
    socket.onConnect = () => {
      setStompClient(socket);
      socket.subscribe(
        `/sub/chat/${roomId}`,
        (frame) => {
          try {
            const receivedMessage = JSON.parse(frame.body);
            setMessageData(receivedMessage);
          } catch (error) {
            console.error("stomp 구독에 오류가 발생했습니다:", error);
          }
        },
        {
          gameId: `${roomId}`,
          Authorization: `${localStorage.getItem("authToken")}`,
        },
      );
    };

    socket.activate();
  };

  //메세지 보내기
  const sendMessage = useCallback(
    (props: MessageDetailProps) => {
      if (stompClient && stompClient.connected) {
        const messageDetails = JSON.stringify({
          gameId: `${roomId}`,
          type: `${props.type}`,
          message: `${props.message}`,
        });
        console.log(messageDetails);

        stompClient.publish({
          destination: "/pub/chat/message",
          body: messageDetails,
          headers: {
            gameId: `${roomId}`,
            Authorization: `${localStorage.getItem("authToken")}`,
          },
        });
      }
    },
    [roomId, stompClient],
  );

  return { connectSocket, sendMessage };
};
