import React, { useState, useRef, ChangeEvent, useEffect } from "react";
import Image from "next/image";

import "@/components/signup/SignupStepTwo.scss";
import Title from "@/components/common/Title";

import SignupTeamCards from "@/components/common/TeamCards";
import { nicknameCheck } from "@/lib/api/signupAPI";
import useSignupStore from "@/lib/store/signup/signupStore";
import useclickedCardStore from "@/lib/store/signup/clickedCardStore";
import useTeamsStore from "@/lib/store/signup/teamsStore";

interface FormData {
  profileImage?: File;
  data: {
    nickname: string;
    comment: string;
  };
}

function SignupStepTwo() {
  const { setFormData } = useSignupStore();
  const { clickedCardStore } = useclickedCardStore();
  const { teamStore } = useTeamsStore();

  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>();
  const [formDraftData, setFormDraftData] = useState<FormData>({
    data: {
      nickname: "",
      comment: "",
    },
  });

  const handleClickUpload = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const handleFileChange = () => {
    const file = imageInputRef.current?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      setFormDraftData((prevData) => ({
        profileImage: file,
        ...prevData,
      }));
    }
  };

  const handleClickNicknameCheck = async () => {
    if (formDraftData.data.nickname) {
      await nicknameCheck(formDraftData.data.nickname);
    }
  };

  const handleChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    const nickname = e.target.value;
    setFormDraftData((prevData) => ({
      ...prevData,
      data: {
        ...prevData.data,
        nickname,
      },
    }));
  };

  const handleChangeWords = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const comment = e.target.value;
    setFormDraftData((prevData) => ({
      ...prevData,
      data: {
        ...prevData.data,
        comment,
      },
    }));
  };

  useEffect(() => {
    setFormData(formDraftData);
  }, [formDraftData]);

  return (
    <div className="stepTwo-block">
      <Title largest className="stepTwo-block__title">
        프로필 설정하기
      </Title>
      <Title small className="stepTwo-block__text">
        나만의 프로필을 만들어봐!
      </Title>
      <div className="stepTwo-content">
        <div className="stepTwo-content__cards">
          <SignupTeamCards
            team={teamStore[clickedCardStore]}
            singleCard={true}
          />
          <div className="cards__upload">
            {previewUrl ? (
              <Image
                className="uploadedImage"
                src={previewUrl}
                alt="previewImage"
                width={0}
                height={0}
              />
            ) : (
              <Image
                className="uploadButton"
                onClick={handleClickUpload}
                src="/images/signupIcon.svg"
                alt="plusIcon"
                width={0}
                height={0}
              />
            )}
            <input
              type="file"
              accept="image/*"
              className="cards__input"
              ref={imageInputRef}
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="stepTwo-content__info">
          <div className="info-content">
            <Title small className="stepTwo-content__title">
              닉네임
            </Title>
            <div className="info-content__nickname">
              <input
                type="text"
                className="nickname__input"
                placeholder="닉네임을 입력해줘!"
                onChange={handleChangeNickname}
              />
              <button
                className="nickname__button"
                onClick={handleClickNicknameCheck}
              >
                중복확인
              </button>
            </div>
          </div>
          <div className="info-content">
            <Title small className="stepTwo-content__title">
              한마디
            </Title>
            <textarea
              className="words__input"
              placeholder="한마디를 입력해줘!"
              onChange={handleChangeWords}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupStepTwo;
