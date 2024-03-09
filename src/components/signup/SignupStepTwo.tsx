import React, { useState, useRef, ChangeEvent, useEffect } from "react";
import Image from "next/image";

import "@/components/signup/SignupStepTwo.scss";
import Title from "@/components/common/Title";

import TeamCards from "@/components/common/TeamCards";
import { nicknameCheck } from "@/lib/api/signupAPI";
import useSignupStore from "@/lib/store/signup/signupStore";
import useclickedCardStore from "@/lib/store/signup/clickedCardStore";
import useTeamsStore from "@/lib/store/signup/teamsStore";
import Button from "../common/Button";
import useStepsStore from "@/lib/store/signup/stepsStore";

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
  const { decreaseStep } = useStepsStore();

  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const [nicknameValid, setNicknameValid] = useState<number>(0);
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

  const getNickNameValid = () => {
    switch (nicknameValid) {
      default:
        return;
      case 0:
        return;
      case 1:
        return "중복된 닉네임이야!";
      case 2:
        return "사용 가능한 닉네임이야!";
    }
  };

  const getNickNameClass = () => {
    switch (nicknameValid) {
      default:
        return;
      case 0:
        return;
      case 1:
        return "nickname__validation--duplication";
      case 2:
        return "nickname__validation--avaliable";
    }
  };

  const handleClickNicknameCheck = async () => {
    try {
      if (formDraftData.data.nickname) {
        const res = await nicknameCheck(formDraftData.data.nickname);
        res.data.exist ? setNicknameValid(1) : setNicknameValid(2);
      }
    } catch {
      console.error("닉네임 체크 APi 오류");
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

  const onClickPreviousButton = () => {
    decreaseStep();
  };

  return (
    <section className="steptwo">
      <div>
        <Button
          label="이전"
          variant="primary"
          size="small"
          onClick={onClickPreviousButton}
        />
        <Button label="다음" variant="primary" size="small" />
      </div>
      <Title largest className="steptwo__title">
        프로필 설정하기
      </Title>
      <Title small className="steptwo__desc">
        나만의 프로필을 만들어봐!
      </Title>
      <div className="steptwo__content">
        <div className="steptwo__content__cards">
          <TeamCards team={teamStore[clickedCardStore]} singleCard={true} />
          <div className="cards__upload">
            {previewUrl ? (
              <Image
                className="uploadedImage"
                onClick={handleClickUpload}
                src={previewUrl}
                alt="previewImage"
              />
            ) : (
              <Image
                className="uploadButton"
                onClick={handleClickUpload}
                src="/images/signupIcon.svg"
                alt="plusIcon"
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
        <div className="steptwo__content__info">
          <div className="info__block">
            <Title small className="steptwo__content__title">
              닉네임
            </Title>
            <div className="info__nickname">
              <div className="nickname">
                <input
                  type="text"
                  className="nickname__input"
                  placeholder="닉네임을 입력해줘!"
                  onChange={handleChangeNickname}
                />
                {nicknameValid !== 0 && (
                  <span
                    className={`nickname__validation ${getNickNameClass()}`}
                  >
                    {getNickNameValid()}
                  </span>
                )}
              </div>
              <Button
                label="중복확인"
                size="small"
                variant="primary"
                onClick={handleClickNicknameCheck}
              />
            </div>
          </div>
          <div className="info__block">
            <Title small className="steptwo__content__title">
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
    </section>
  );
}

export default SignupStepTwo;
