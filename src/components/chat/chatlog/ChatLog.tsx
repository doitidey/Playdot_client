import ChatBubble from "@/components/chat/chatlog/ChatBubble";
import "@/components/chat/chatlog/ChatLog.scss";
import { useStompMessageData } from "@/lib/store/chat/stompclientStore";

function ChatLog() {
  const { messageData } = useStompMessageData();
  const today = new Date();

  return (
    <div className="chatlog">
      {messageData.length > 0 &&
        messageData.map(
          (data) =>
            data.type === "NORMAL" && (
              <ChatBubble
                key={data.profile.nickname + today.getHours + today.getMinutes}
                data={data}
              />
            ),
        )}
    </div>
  );
}

export default ChatLog;
