import { useCallback } from "react";

import { configureStompClient } from "@/lib/api/chatAPI";
import {
  useStompClient,
  useStompMessageData,
  useStompShoutData,
  useStompVoteData,
} from "@/lib/store/chat/stompclientStore";
import {
  CreateVoteDetailProps,
  MessageDetailProps,
  SendVoteDetailProps,
} from "@/lib/types/hooks/useSocketTypes";

export const useSocket = () => {
  const { stompClient, roomId, setStompClient, setRoomId } = useStompClient();
  const { setMessageData } = useStompMessageData();
  const { setShoutData } = useStompShoutData();
  const { setVoteData } = useStompVoteData();

  useStompVoteData;
  const headers = {
    gameId: `${roomId}`,
    Authorization: `${localStorage.getItem("authToken")}`,
  };

  //소켓 연결하기
  const connectSocket = (roomNumber: number) => {
    setRoomId(roomNumber);
    const socket = configureStompClient(roomId);

    //소켓 연결 후 바로 구독
    socket.onConnect = () => {
      setStompClient(socket);
      socket.subscribe(
        `/sub/chat/${roomId}`,
        (frame: { body: string }) => {
          try {
            const receivedMessage = JSON.parse(frame.body);
            // console.log(receivedMessage);
            if (receivedMessage.type === "BAWWLING") {
              setShoutData(receivedMessage);
              // isShoutMessageShow || setIsShoutMessageShow();
            } else if (receivedMessage.type === "NORMAL") {
              setMessageData(receivedMessage);
            } else {
              setVoteData(receivedMessage);
            }
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
        stompClient.publish({
          destination: "/pub/chat/message",
          body: messageDetails,
          headers: headers,
        });
      }
    },
    [roomId, stompClient],
  );

  //미니투표 만들기
  const createVote = useCallback(
    (props: CreateVoteDetailProps) => {
      if (stompClient && stompClient.connected) {
        const voteDetails = JSON.stringify({
          gameId: `${roomId}`,
          question: `${props.question}`,
          option1: `${props.option1}`,
          option2: `${props.option2}`,
        });
        stompClient.publish({
          destination: "/pub/chat/createVote",
          body: voteDetails,
          headers: headers,
        });
      }
    },
    [roomId, stompClient],
  );

  const sendVote = useCallback(
    (props: SendVoteDetailProps) => {
      if (stompClient && stompClient.connected) {
        const voteDetails = JSON.stringify({
          miniGameId: `${props.miniGameId}`,
          option: `${props.option}`,
        });
        stompClient.publish({
          destination: "/pub/chat/vote",
          body: voteDetails,
          headers: headers,
        });
      }
    },
    [roomId, stompClient],
  );

  return { connectSocket, sendMessage, createVote, sendVote };
};
