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
        <div className="bubble__profile__img">
          <Image
            width={32}
            height={32}
            alt="profileImage"
            src={
              data.profile?.profileImageUrl
                ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${data.profile.profileImageUrl}`
                : "/images/logo.svg"
            }
          />
        </div>

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
