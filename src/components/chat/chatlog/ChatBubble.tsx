import "@/components/chat/chatlog/ChatBubble.scss";
import { useModal } from "@/lib/hooks/useModal";
import ProfileModal from "../modals/ProfileModal";
import Image from "next/image";
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
function ChatBubble({ data }: { data: MessageType }) {
  const { openModal } = useModal();

  const onClickNickname = () => {
    openModal({
      content: <ProfileModal />,
    });
  };

  return (
    <div className="bubble">
      <div className="bubble__profile" onClick={onClickNickname}>
        <Image
          className="bubble__img"
          width={36}
          height={36}
          alt="profileImage"
          src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${data.profile.profileImageUrl}`}
        />
        <div className="bubble__name">{data.profile.nickname}</div>
      </div>
      <div className="bubble__text">{data.message}</div>
    </div>
  );
}

export default ChatBubble;
