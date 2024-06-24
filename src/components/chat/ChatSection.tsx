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
import useChatErrorStore from "@/lib/store/chat/chatErrorStore";
import ErroorModal from "@/components/chat/modals/ErrorModal";
import { useModal } from "@/lib/hooks/useModal";

function ChatSection({ pid }: { pid: string }) {
  const { connectSocket, deactivateSocket } = useSocket();
  const { menuModalState } = useMenuModalState();
  const { shoutData } = useStompShoutData();
  const { voteData } = useStompVoteData();
  const { setRoomId } = useStompClient();
  const { errorMessage } = useChatErrorStore();
  const { openModal } = useModal();

  const ROOMNUM = pid;

  useEffect(() => {
    deactivateSocket();
    setRoomId(ROOMNUM);
    connectSocket(ROOMNUM);
    return () => {
      deactivateSocket();
    };
  }, []);

  useEffect(() => {
    if (errorMessage.length > 1)
      openModal({
        content: <ErroorModal />,
      });
  }, [errorMessage]);

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
      <div className="chat__shout">
        {shoutData.map((data, index) => (
          <ShoutBubble key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default ChatSection;
