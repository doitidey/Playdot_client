import Image from "next/image";

import "@/components/chat/chatlog/ChatBubble.scss";
import { useModal } from "@/lib/hooks/useModal";
import ProfileModal from "@/components/chat/modals/ProfileModal";
import { MessageType } from "@/lib/types/chat/chatTypes";

function ChatBubble({ data }: { data: MessageType }) {
  const { openModal } = useModal();

  const onClickNickname = () => {
    openModal({
      content: <ProfileModal nickname={data.profile.nickname} />,
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
        <div
          className={
            data.teamType === "home"
              ? "bubble__name bubble__name--home"
              : "bubble__name bubble__name--away"
          }
        >
          {data.profile.nickname}
        </div>
      </div>
      <div className="bubble__text">{data.message}</div>
    </div>
  );
}

export default ChatBubble;
