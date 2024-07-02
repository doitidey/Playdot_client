import "@/components/chat/modals/ProfileModal.scss";
import Button from "@/components/common/Button";
import PresentModal from "./PresentModal";
import { getProfile, putToken } from "@/lib/api/chatAPI";
import { useEffect, useState } from "react";
import Image from "next/image";
import Title from "@/components/common/Title";
import useTokenNumberStore from "@/lib/store/chat/tokenStore";
import { useModal } from "@/lib/hooks/useModal";

type ProfileModal = {
  comment: string;
  nickname: string;
  profileImageUrl: string | null;
  winFairyCount: number;
  teamName: string;
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
  const { closeModal } = useModal();

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
      closeModal();
    }
    return;
  };

  const onChangeMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const comment = e.target.value;
    setTokenBody((prev) => ({
      ...prev,
      comment: comment,
    }));
  };

  const onChangeTokenNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        <div className="profilemodal__img">
          <Image
            width={32}
            height={32}
            alt="profileImage"
            src={
              profileData?.profileImageUrl
                ? `${process.env.NEXT_PUBLIC_IMAGE_URL}${profileData.profileImageUrl}`
                : "/images/logo.svg"
            }
          />
        </div>
        <Title small className="profilemodal__title">
          {profileData && profileData.nickname}
        </Title>
      </div>
      {isClickPresent ? (
        <PresentModal
          onChangeMessage={onChangeMessage}
          onChangeTokenNumber={onChangeTokenNumber}
        />
      ) : (
        <div>
          <div className="profiledetail__box">
            <h5>구단</h5>
            <div>{profileData?.teamName}</div>
          </div>
          <div className="profiledetail__box">
            <h5>한마디</h5>
            <div>{profileData?.comment}</div>
          </div>
        </div>
      )}

      <div className="profilemodal__button">
        <Button
          size={isClickPresent ? "large" : "medium"}
          variant={isButtonActive() ? "active" : "disactive"}
          label="선물하기"
          onClick={isClickPresent ? onClickTokenPresent : onClickPresent}
        />
      </div>
    </section>
  );
}

export default ProfileModal;
