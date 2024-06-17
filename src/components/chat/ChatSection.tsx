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
  useStompVoteData,
} from "@/lib/store/chat/stompclientStore";
import ShoutBubble from "@/components/chat/chatlog/ShoutBubble";

function ChatSection({ pid }: { pid: string }) {
  const { connectSocket, deactivateSocket } = useSocket();
  const { menuModalState } = useMenuModalState();
  const { shoutData } = useStompShoutData();
  const { voteData } = useStompVoteData();
  const { setRoomId } = useStompClient();

  const today = new Date();
  const ROOMNUM = Number(pid);

  useEffect(() => {
    deactivateSocket();
    setRoomId(ROOMNUM);
    connectSocket(ROOMNUM);
    return () => {
      deactivateSocket();
    };
  }, []);

  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat__inside">
        <div className="float">
          <div className="float__contents">
            {menuModalState.isOpen && <MenuModal />}
            {voteData[0] && <VoteModal />}
            {/* <VoteModal /> */}
          </div>
          <ChatInput />
        </div>
        <ChatLog />
      </div>
      {shoutData.map((data, index) => (
        <ShoutBubble
          key={
            index +
            data.profile.nickname +
            today.getMinutes() +
            today.getMilliseconds()
          }
          data={data}
        />
      ))}
    </div>
  );
}

export default ChatSection;
