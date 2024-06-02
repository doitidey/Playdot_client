"use client";

import "@/components/chat/ChatSection.scss";

import { useEffect } from "react";

import ChatHeader from "@/components/chat/ChatHeader";
import ChatLog from "@/components/chat/chatlog/ChatLog";
import MenuModal from "@/components/chat/modals/MenuModal";
import ChatInput from "@/components/chat/ChatInput";
import useMenuModalState from "@/lib/store/chat/menuModalState";
import VoteModal from "@/components/chat/modals/VoteModal";
import { useSocket } from "@/lib/hooks/useSocket";
import {
  useStompClient,
  useStompShoutData,
} from "@/lib/store/chat/stompclientStore";
import ShoutBubble from "@/components/chat/chatlog/ShoutBubble";

function ChatSection() {
  const ROOMNUM = 1; //TODO: NextJS url praram

  const { stompClient } = useStompClient();
  const { connectSocket } = useSocket();
  const { menuModalState } = useMenuModalState();
  const { shoutData } = useStompShoutData();
  const today = new Date();

  useEffect(() => {
    connectSocket(ROOMNUM);

    return () => {
      if (stompClient) {
        stompClient.deactivate();
      }
    };
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
          <ChatInput />
        </div>
        <ChatLog />
      </div>
      {shoutData.map((data) => (
        <ShoutBubble
          key={data.profile.nickname + today.getHours + today.getMinutes}
          data={data}
        />
      ))}
    </div>
  );
}

export default ChatSection;
