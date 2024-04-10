import ChatBubble from "@/components/chat/chatlog/ChatBubble";
import "@/components/chat/chatlog/ChatLog.scss";
import { useStompMessageData } from "@/lib/store/chat/stompclientStore";

function ChatLog() {
  const { messageData } = useStompMessageData();

  return (
    <div className="chatlog">
      {messageData.length > 0 &&
        messageData.map((data, index) => (
          <ChatBubble key={index} data={data} />
        ))}
    </div>
  );
}

export default ChatLog;
