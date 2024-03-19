import "@/components/chat/chatlog/ChatBubble.scss";
import { useModal } from "@/lib/hooks/useModal";
import ProfileModal from "../modals/ProfileModal";

function ChatBubble() {
  const { openModal } = useModal();

  const onClickNickname = () => {
    openModal({
      content: <ProfileModal />,
    });
  };

  return (
    <div className="bubble">
      <div className="bubble__profile" onClick={onClickNickname}>
        <div className="bubble__img"></div>
        <div className="bubble__name">닉네임</div>
      </div>
      <div className="bubble__text">야구시작합니다야구끝났습니다</div>
    </div>
  );
}

export default ChatBubble;
