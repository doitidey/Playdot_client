"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

import Text from "../common/Text";
import Title from "../common/Title";
import Button from "../common/Button";

import "@/components/mypage/MypageProfile.scss";
import { getProfileDetails } from "@/lib/api/mypageAPI";

type ProfileData = {
  comment: string;
  level: number;
  nickname: string;
  profileImageUrl: string;
  teamName: string;
  token: number;
};
function MypageProfile() {
  const [profileData, setProfileData] = useState<ProfileData>();
  const [isEditing, setIsEditing] = useState<boolean>(false);

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
    console.log("수정");
    setIsEditing(true);
  };

  const onClickCancle = () => {
    console.log("수정안할게");
    setIsEditing(false);
  };

  const onClickSubmit = () => {
    console.log("등록할께");
    setIsEditing(false);
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
              variant="disactive"
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
        <div className="profile-box__content detail-box">
          <div className="detail-box__block">
            <div className="detail-box__img">
              {profileData && (
                <Image
                  src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${profileData.profileImageUrl}`}
                  alt="프로필사진"
                  fill={true}
                />
              )}
            </div>
            <ol className="detail-box__list">
              <li className="detail-box__item">
                <div className="detail-box__title">닉네임</div>
                <div className="detail-box__desc">{profileData?.nickname}</div>
              </li>
              <li className="detail-box__item">
                <div className="detail-box__title">구단</div>
                <div className="detail-box__desc"> {profileData?.teamName}</div>
              </li>
              <li className="detail-box__item">
                <div className="detail-box__title">보유토큰</div>
                <div className="detail-box__desc"> {profileData?.token}</div>
              </li>
            </ol>
          </div>
          <div className=" detail-box__line">{profileData?.comment}</div>
        </div>
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
