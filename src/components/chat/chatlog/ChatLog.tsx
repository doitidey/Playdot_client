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
          (data, index) =>
            data.type === "NORMAL" && (
              <ChatBubble
                key={index + today.getMinutes() + today.getMilliseconds()}
                data={data}
              />
            ),
        )}
    </div>
  );
}

export default ChatLog;
