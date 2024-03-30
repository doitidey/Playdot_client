"use client";

import "@/components/chat/ChatSection.scss";

import { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";

import ChatHeader from "@/components/chat/ChatHeader";
import ChatLog from "@/components/chat/chatlog/ChatLog";
import MenuModal from "@/components/chat/modals/MenuModal";
import ChatInput from "@/components/chat/ChatInput";
import useMenuModalState from "@/lib/store/chat/menuModalState";
import VoteModal from "@/components/chat/modals/VoteModal";
import ShoutBubble from "@/components/chat/chatlog/ShoutBubble";
import { configureStompClient } from "@/lib/api/chatAPI";

function ChatSection() {
  const ROOMNUM = 1; //TODO: NextJS url praram

  const { menuModalState } = useMenuModalState();
  const [showShoutBubble, setShowShoutBubble] = useState(true);
  const [stompClient, setStompClient] = useState<Client | null>(null);

  useEffect(() => {
    const socket = configureStompClient(ROOMNUM);

    socket.onConnect = (frame: frame) => {
      console.log("connected", frame);
      setStompClient(socket);
      socket.subscribe(
        `/sub/chat/room/${ROOMNUM}`,
        (frame) => {
          try {
            console.log("구독요청");
            // const receivedMessage = JSON.parse(frame.body);
            console.log(frame);
          } catch (error) {
            console.error("stomp 구독에 오류가 발생했습니다:", error);
          }
        },
        {
          gameId: `${ROOMNUM}`,
          Authorization: `${localStorage.getItem("authToken")}`,
        },
      );
    };

    socket.onStompError = (frame) => {
      console.log("Broker reported error: " + frame.headers["message"]);
      console.log("Additional details: " + frame.body);
    };

    socket.activate();
  }, []);

  const sendMessage = (msg: any) => {
    if (stompClient && stompClient.connected) {
      const messageDetails = JSON.stringify({
        gameId: `${ROOMNUM}`,
        type: "NORMAL",
        content: msg,
      });

      stompClient.publish({
        destination: "/pub/chat/message",
        body: messageDetails,
        headers: {
          gameId: `${ROOMNUM}`,
          Authorization: `${localStorage.getItem("authToken")}`,
        },
      });
    }
  };

  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__inside">
        <div className="float">
          <div className="float__contents">
            {menuModalState.isOpen && <MenuModal />}
            <VoteModal />
          </div>
          <ChatInput sendMessage={sendMessage} />
        </div>
        <ChatLog />
      </div>
      {showShoutBubble && (
        <ShoutBubble onEnd={() => setShowShoutBubble(false)} />
      )}
    </div>
  );
}

export default ChatSection;
