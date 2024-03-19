"use client";

import "@/components/chat/ChatSection.scss";

import ChatHeader from "@/components/chat/ChatHeader";
import ChatLog from "@/components/chat/chatlog/ChatLog";
import MenuModal from "@/components/chat/modals/MenuModal";
import ChatInput from "@/components/chat/ChatInput";
import useMenuModalState from "@/lib/store/chat/menuModalState";
import VoteModal from "@/components/chat/modals/VoteModal";
import ShoutBubble from "./chatlog/ShoutBubble";
import { useEffect, useState } from "react";
// import { Stomp } from "@stomp/stompjs";
// import SockJS from "sockjs-client";
import { configureStompClient } from "@/lib/api/chatAPI";

function ChatSection() {
  const { menuModalState } = useMenuModalState();
  const [showShoutBubble, setShowShoutBubble] = useState(true);

  useEffect(() => {
    // const connect = () => {
    //   const token = localStorage.getItem("authToken");
    //   const serverUrl = `${process.env.NEXT_PUBLIC_BASE_URL}chat`;
    //   const sock = new SockJS(serverUrl);
    //   const stompClient = Stomp.over(sock);

    //   stompClient.connect({ Authorization: `${token}`, gameId: `1` }, () => {
    //     stompClient.subscribe(`/sub/chat/room/1`, (message) => {
    //       try {
    //         const receivedMessage = JSON.parse(message.body);
    //         console.log(receivedMessage);
    //       } catch (error) {
    //         console.error("Error parsing message", error);
    //       }
    //     });
    //   });

    const socket = configureStompClient(1);
    socket.onConnect = function (frame) {
      console.log("connected", frame);
      socket.subscribe(`/sub/chat/room/1`, (message) => {
        try {
          const receivedMessage = JSON.parse(message.body);
          console.log(receivedMessage);
        } catch (error) {
          console.error("Error parsing message", error);
        }
      });
    };

    socket.onStompError = function (frame) {
      console.log("Broker reported error: " + frame.headers["message"]);
      console.log("Additional details: " + frame.body);
    };

    socket.activate();

    return () => {
      if (socket) {
        socket.deactivate();
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
      {showShoutBubble && (
        <ShoutBubble onEnd={() => setShowShoutBubble(false)} />
      )}
    </div>
  );
}

export default ChatSection;
