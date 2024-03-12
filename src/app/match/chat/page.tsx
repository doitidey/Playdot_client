import { Metadata } from "next";
import ChatSection from "@/components/chat/ChatSection";

export const metadata: Metadata = {
  title: "플레이닷 | 채팅",
};

function ChatPage() {
  return (
    <div className="chat">
      <ChatSection />
    </div>
  );
}

export default ChatPage;
