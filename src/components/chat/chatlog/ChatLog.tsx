import ChatBubble from "@/components/chat/chatlog/ChatBubble";
import "@/components/chat/chatlog/ChatLog.scss";
import { useEffect, useRef } from "react";

function ChatLog() {
  const messageEndRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className="chatlog">
      <ChatBubble />
      <div id="chatlog__end" ref={messageEndRef} />
    </div>
  );
}

export default ChatLog;
