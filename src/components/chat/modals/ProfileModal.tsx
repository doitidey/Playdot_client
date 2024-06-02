import "@/components/chat/modals/ProfileModal.scss";
import Button from "@/components/common/Button";
import PresentModal from "./PresentModal";
import { getProfile, putToken } from "@/lib/api/chatAPI";
import { useEffect, useState } from "react";
import Image from "next/image";
import Title from "@/components/common/Title";
import useTokenNumberStore from "@/lib/store/chat/tokenStore";

type ProfileModal = {
  nickname: string;
  profileImageUrl: string;
  winFairyCount: number;
  loseFairyCount: number;
};

function ProfileModal({ nickname }: { nickname: string }) {
  const [profileData, setProfileData] = useState<ProfileModal>();
  const [isClickPresent, setIsClickPresent] = useState<boolean>(false);
  const [tokenBody, setTokenBody] = useState({
    recipientNickName: nickname,
    token: 0,
    comment: "",
  });
  const { totalStore } = useTokenNumberStore();

  useEffect(() => {
    const getProfileData = async () => {
      const res = await getProfile(nickname);
      setProfileData(res.data);
    };
    getProfileData();
  }, []);

  const onClickPresent = () => {
    setIsClickPresent(true);
  };
  const onClickTokenPresent = () => {
    if (isButtonActive()) {
      putToken(tokenBody);
    }
    return;
  };

  const onChangeMessage = (e) => {
    const comment = e.target.value;
    setTokenBody((prev) => ({
      ...prev,
      comment: comment,
    }));
  };

  const onChangeTokenNumber = (e) => {
    const tokenNumber = Number(e.target.value);
    setTokenBody((prev) => ({
      ...prev,
      token: tokenNumber,
    }));
  };

  const isTokenEnough = () => {
    if (totalStore >= tokenBody.token && totalStore > 0) {
      return true;
    }
    return false;
  };

  const isButtonActive = () => {
    if (!isClickPresent) {
      return true;
    } else if (isClickPresent && isTokenEnough() && isTokenBodyReady()) {
      return true;
    } else return false;
  };

  const isTokenBodyReady = () => {
    if (tokenBody.token && tokenBody.token > 0) return true;
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
      {isClickPresent && (
        <PresentModal
          onChangeMessage={onChangeMessage}
          onChangeTokenNumber={onChangeTokenNumber}
        />
      )}
      <Button
        size={isClickPresent ? "large" : "medium"}
        variant={isButtonActive() ? "active" : "disactive"}
        label="선물하기"
        onClick={isClickPresent ? onClickTokenPresent : onClickPresent}
      />
    </section>
  );
}

export default ProfileModal;
