import Image from "next/image";

import "@/components/common/Profile.scss";
import ProfileModal from "@/components/chat/modals/ProfileModal";
import { useModal } from "@/lib/hooks/useModal";

type ProfileProps = {
  /** 프로필 사진 url를 받아옵니다. */
  imageUrl: string;
  /** 모달 팝업에 필요한 닉네임 정보를 받아옵니다. */
  nickname: string;
  /** 사이즈 값을 숫자 형태로 받아옵니다. */
  size: number;
};

function Profile(props: ProfileProps) {
  const { openModal } = useModal();

  const onClickNickname = () => {
    openModal({
      content: <ProfileModal nickname={props.nickname} />,
    });
  };

  return (
    <div
      className="profilepic"
      onClick={onClickNickname}
      style={{ width: props.size, height: props.size }}
    >
      <Image
        width={props.size}
        height={props.size}
        alt="profileImage"
        src={
          props.imageUrl
            ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${props.imageUrl}`
            : "/images/emptyProfile.svg"
        }
      />
    </div>
  );
}

export default Profile;
