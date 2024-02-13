import "@/components/chat/ChatSection.scss";

import ChatHeader from "@/components/chat/ChatHeader";
import ChatLog from "@/components/chat/chatlog/ChatLog";
import MenuModal from "@/components/chat/modals/MenuModal";
import ChatInput from "@/components/chat/ChatInput";

function ChatSection() {
  return (
    <div className="chat">
      <ChatInput />
      {/* <MenuModal /> */}
      <ChatHeader />
      <ChatLog />
    </div>
  );
}

export default ChatSection;
