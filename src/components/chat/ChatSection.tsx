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

type MessageType = {
  gameId: number;
  message: string;
  profile: {
    nickname: string;
    profileImageUrl: string;
    teamName: string;
  };
  type: string;
};

function ChatSection() {
  const ROOMNUM = 1; //TODO: NextJS url praram

  const { menuModalState } = useMenuModalState();
  const [showShoutBubble, setShowShoutBubble] = useState(true);
  const [stompClient, setStompClient] = useState<Client>();
  const [chatList, setChatList] = useState<MessageType[]>([]);

  useEffect(() => {
    const socket = configureStompClient(ROOMNUM);

    socket.onConnect = () => {
      setStompClient(socket);
      socket.subscribe(
        `/sub/chat/${ROOMNUM}`,
        (frame) => {
          try {
            const receivedMessage = JSON.parse(frame.body);
            console.log(receivedMessage);
            setChatList((prev) => [receivedMessage, ...prev]);
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

    socket.activate();
  }, []);

  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__inside">
        <div className="float">
          <div className="float__contents">
            {menuModalState.isOpen && <MenuModal />}
            <VoteModal />
          </div>
          <ChatInput stompClient={stompClient} />
        </div>
        <ChatLog chatList={chatList} />
      </div>
      {showShoutBubble && (
        <ShoutBubble onEnd={() => setShowShoutBubble(false)} />
      )}
    </div>
  );
}

export default ChatSection;
