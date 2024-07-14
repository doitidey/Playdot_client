import { useCallback, useState, useEffect } from "react";
import useChatErrorStore from "@/lib/store/chat/chatErrorStore";
import { configureStompClient } from "@/lib/api/chatAPI";
import {
  useStompClient,
  useStompMessageData,
  useStompShoutData,
  useStompVoteData,
  useStompVoteNoticeData,
  useStompVoteRatiosData,
} from "@/lib/store/chat/stompclientStore";
import {
  CreateVoteDetailProps,
  Headers,
  MessageDetailProps,
  SendVoteDetailProps,
} from "@/lib/types/hooks/useSocketTypes";
import { useUserDataStore } from "../store/userDataStore";

export const useSocket = () => {
  const { stompClient, setStompClient, roomId } = useStompClient();
  const { setMessageData, setMessageDataEmpty } = useStompMessageData();
  const { setShoutData, setEmptyShoutData } = useStompShoutData();
  const { setVoteData } = useStompVoteData();
  const { setErrorMessage } = useChatErrorStore();
  const { userData } = useUserDataStore();
  const { setVoteNoticeData } = useStompVoteNoticeData();
  const { setVoteRatioData } = useStompVoteRatiosData();

  const [headers, setHeaders] = useState<Headers>();

  useEffect(() => {
    if (roomId !== undefined) {
      const newHeaders = {
        gameId: `${roomId}`,
        Authorization: `${localStorage.getItem("authToken")}`,
      };
      setHeaders(newHeaders);
    }
  }, [roomId]);

  // 소켓 연결하기
  const connectSocket = (roomNumber: string) => {
    const socket = configureStompClient(roomNumber, setErrorMessage);
    // 소켓 연결 후 바로 구독
    socket.onConnect = () => {
      setStompClient(socket);
      socket.subscribe(
        `/sub/chat/${roomNumber}`,
        (frame: { body: string }) => {
          try {
            const receivedMessage = JSON.parse(frame.body);
            if (receivedMessage.type === "BAWWLING") {
              setShoutData(receivedMessage);
            } else if (receivedMessage.type === "NORMAL") {
              setMessageData(receivedMessage);
            } else {
              setVoteData(receivedMessage);
            }
          } catch (error) {
            console.error("stomp 구독에 오류가 발생했습니다:", error);
          }
        },
        headers,
      );
      const nickname = userData.nickname;
      socket.subscribe(
        ` /user/${nickname}/chat/${roomNumber}`,
        (frame: { body: string }) => {
          try {
            const receivedMessage = JSON.parse(frame.body);
            setVoteNoticeData(receivedMessage);
          } catch (error) {
            console.error("stomp 구독에 오류가 발생했습니다:", error);
          }
        },
      );
    };
    socket.activate();
  };

  // 메시지 보내기
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
    [roomId, stompClient, headers],
  );

  // 미니투표 만들기
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
    [roomId, stompClient, headers],
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
    [stompClient, headers],
  );

  const deactivateSocket = () => {
    if (stompClient === null) {
      return;
    }
    stompClient.deactivate();
    setMessageDataEmpty();
    setEmptyShoutData();
  };

  const voteRatioSubscribe = (miniGameId: number) => {
    const nickname = userData.nickname;
    stompClient &&
      (stompClient.onConnect = () => {
        stompClient.subscribe(
          `/user/${nickname}/voteRatioResults/${miniGameId}`,
          (frame: { body: string }) => {
            try {
              const receivedMessage = JSON.parse(frame.body);
              setVoteRatioData(receivedMessage);
            } catch (error) {
              console.error("stomp 구독에 오류가 발생했습니다:", error);
            }
          },
          headers,
        );
      });
  };

  return {
    connectSocket,
    sendMessage,
    createVote,
    sendVote,
    deactivateSocket,
    voteRatioSubscribe,
  };
};
