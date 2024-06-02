import "@/components/chat/modals/ProfileModal.scss";
import Button from "@/components/common/Button";
import { useModal } from "@/lib/hooks/useModal";
import PresentModal from "./PresentModal";
import { getProfile } from "@/lib/api/chatAPI";
import { useEffect, useState } from "react";
import Image from "next/image";
import Title from "@/components/common/Title";

type ProfileModal = {
  nickname: string;
  profileImageUrl: string;
  winFairyCount: number;
  loseFairyCount: number;
};

function ProfileModal({ nickname }: { nickname: string }) {
  const { openModal } = useModal();
  const [profileData, setProfileData] = useState<ProfileModal>();

  useEffect(() => {
    const getProfileData = async () => {
      const res = await getProfile(nickname);
      setProfileData(res.data);
    };
    getProfileData();
  }, []);

  const onClickPresent = () => {
    openModal({
      content: <PresentModal />,
    });
  };
  return (
    <section className="profilemodal">
      <div className="profilemodal__contents">
        <Image
          className="profilemodal__img"
          width={40}
          height={40}
          alt="profileImage"
          src={
            profileData
              ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${profileData.profileImageUrl}`
              : "/images/logo.svg"
          }
        />
        <Title small className="profilemodal__title">
          {profileData && profileData.nickname}
        </Title>
      </div>
      <Button
        size={"medium"}
        variant="active"
        label="선물하기"
        onClick={onClickPresent}
      />
    </section>
  );
}

export default ProfileModal;
