import ChatBubble from "@/components/chat/chatlog/ChatBubble";
import "@/components/chat/chatlog/ChatLog.scss";

type MessageType = {
  gameId: number;
  message: string;
  profile: {
    nickname: string;
    profileImageUrl: string;
    teamName: string;
  };
  type: string;
};

type ChatLogProps = {
  chatList: MessageType[] | [];
};

function ChatLog({ chatList }: ChatLogProps) {
  return (
    <div className="chatlog">
      {chatList.map((messageData) => (
        <ChatBubble key={messageData.gameId} data={messageData} />
      ))}
    </div>
  );
}

export default ChatLog;
