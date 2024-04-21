"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import Text from "../common/Text";
import Title from "../common/Title";
import Button from "../common/Button";

import "@/components/mypage/MypageProfile.scss";
import { getProfileDetails } from "@/lib/api/mypageAPI";
import { useProfile } from "@/lib/hooks/useProfile";

type ProfileData = {
  comment: string;
  level: number;
  nickname: string;
  profileImageUrl: string;
  teamName: string;
  token: number;
};
function MypageProfile() {
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const {
    previewUrl,
    validStore,
    onSubmit,
    onClickUpload,
    onFileChange,
    resetProfile,
    onChangeNickname,
    isSubmitRequired,
    onChangeComment,
    inputStore,
  } = useProfile();

  const [profileData, setProfileData] = useState<ProfileData>();
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const router = useRouter();
  console.log(inputStore);

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const res = await getProfileDetails();
        setProfileData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    getUserProfile();
  }, []);

  const onClickEdit = () => {
    setIsEditing(true);
  };

  const onClickChangeTeam = () => {
    if (!isEditing) return;
    router.push("/mypage/teams");
  };

  const onClickCancle = () => {
    setIsEditing(false);
    resetProfile();
  };

  const onClickSubmit = () => {
    console.log("Submit");
    onSubmit(imageInputRef);
  };

  return (
    <section className="profile-box">
      <div className="profile-box__bg"></div>
      <div className="profile-box__btn">
        {isEditing ? (
          <>
            <Button
              label="취소"
              size="x-medium"
              variant="primary"
              onClick={onClickCancle}
            />
            <Button
              label="완료"
              size="x-medium"
              variant={isSubmitRequired() ? "active" : "disactive"}
              onClick={onClickSubmit}
            />
          </>
        ) : (
          <Button
            label="수정"
            size="x-medium"
            variant="primary"
            onClick={onClickEdit}
          />
        )}
      </div>
      <div className="profile-box__title">
        <Title large>프로필</Title>
      </div>
      <div className="profile-box__block">
        <form className="profile-box__content detail-box">
          <div className="detail-box__block">
            <div className="detail-box__img">
              {isEditing && (
                <div
                  className="img__upload"
                  onClick={() => onClickUpload(imageInputRef)}
                >
                  +
                </div>
              )}
              {profileData && (
                <Image
                  src={
                    previewUrl
                      ? `${previewUrl}`
                      : `${process.env.NEXT_PUBLIC_IMAGE_URL}${profileData.profileImageUrl}`
                  }
                  alt="프로필사진"
                  fill={true}
                />
              )}
              <input
                type="file"
                accept="image/*"
                className="img__input"
                ref={imageInputRef}
                onChange={() => onFileChange(imageInputRef)}
              />
            </div>
            <ol className="detail-box__list">
              {validStore.validNickname && (
                <span className="detail-box__valid">
                  {validStore.validNickname}
                </span>
              )}
              <li className="detail-box__item">
                <div className="detail-box__title">닉네임</div>
                <input
                  className={
                    isEditing
                      ? `detail-box__desc detail-box__desc--active`
                      : `detail-box__desc`
                  }
                  placeholder={`${profileData?.nickname}`}
                  readOnly={!isEditing && true}
                  onChange={(e) => onChangeNickname(e)}
                />
              </li>
              <li className="detail-box__item">
                <div className="detail-box__title">구단</div>
                <div
                  className={
                    isEditing
                      ? `detail-box__desc detail-box__desc--active`
                      : `detail-box__desc`
                  }
                  onClick={onClickChangeTeam}
                >
                  {profileData?.teamName}
                </div>
              </li>
              <li className="detail-box__item">
                <div className="detail-box__title">보유토큰</div>
                <div className="detail-box__desc"> {profileData?.token}</div>
              </li>
            </ol>
          </div>
          <textarea
            className={
              isEditing
                ? `detail-box__item detail-box__comment detail-box__desc--active`
                : `detail-box__item detail-box__comment`
            }
            placeholder={`${profileData?.comment}`}
            readOnly={!isEditing && true}
            onChange={(e) => onChangeComment(e)}
          />
        </form>
        <div className="profile-box__content level-box">
          <Title large className="level-box__title">
            야구고수
          </Title>
          <Text medium className="level-box__desc">
            당신은 진정한 야구러버!
          </Text>
          <Image
            src={`images/levelicon_${profileData?.level}.svg`}
            alt="레벨 아이콘"
            width={220}
            height={227}
          />
          <div className="level-box__block">
            <div className="graph">
              <div
                className="graph__content graph__content--detail"
                style={{ width: "70%" }}
              ></div>
              <div className="graph__content"></div>
            </div>
            <Text medium className="graph__desc">
              lv5까지 2회 남음
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MypageProfile;
