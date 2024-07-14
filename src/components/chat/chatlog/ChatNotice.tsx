import "@/components/chat/chatlog/ChatNotice.scss";
import { useStompVoteNoticeData } from "@/lib/store/chat/stompclientStore";

function ChatNotice() {
  const { voteNoticeData } = useStompVoteNoticeData();

  return (
    <div className="chatnotice">
      <span className="chatnotice__text">
        📢
        {voteNoticeData[0].message}
      </span>
    </div>
  );
}

export default ChatNotice;
