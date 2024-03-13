"use client";

import "@/components/chat/ChatSection.scss";

import ChatHeader from "@/components/chat/ChatHeader";
import ChatLog from "@/components/chat/chatlog/ChatLog";
import MenuModal from "@/components/chat/modals/MenuModal";
import ChatInput from "@/components/chat/ChatInput";
import useMenuModalState from "@/lib/store/chat/menuModalState";
import VoteModal from "@/components/chat/modals/VoteModal";
import ShoutBubble from "./chatlog/ShoutBubble";
import { useState } from "react";

function ChatSection() {
  const { menuModalState } = useMenuModalState();
  const [showShoutBubble, setShowShoutBubble] = useState(true);

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
      {showShoutBubble && (
        <ShoutBubble onEnd={() => setShowShoutBubble(false)} />
      )}
    </div>
  );
}

export default ChatSection;
