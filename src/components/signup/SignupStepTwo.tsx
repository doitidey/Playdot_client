import React, { useState, useRef, ChangeEvent } from "react";
import Image from "next/image";

import "@/components/signup/SignupStepTwo.scss";
import Title from "@/components/common/Title";

import TeamCards from "@/components/common/TeamCards";
import { nicknameCheck, putProfile, putTeam } from "@/lib/api/signupAPI";
import useclickedCardStore from "@/lib/store/signup/clickedCardStore";
import useTeamsStore from "@/lib/store/signup/teamsStore";
import Button from "../common/Button";
import useStepsStore from "@/lib/store/signup/stepsStore";
import { rInputRegexs } from "@/lib/util/signupValid";

interface InputValue {
  nickname: string;
  validNickname: boolean;
  noneDuplicationNickname: boolean;
  comment: string;
  validComment: boolean;
}

function SignupStepTwo() {
  const { clickedCardStore } = useclickedCardStore();
  const { teamStore } = useTeamsStore();
  const { decreaseStep } = useStepsStore();

  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>();
  const [validMessage, setValidMessage] = useState({
    validNickname: "",
    validComment: "",
  });
  const [inputValue, setInputValue] = useState<InputValue>({
    nickname: "",
    validNickname: false,
    noneDuplicationNickname: false,
    comment: "",
    validComment: false,
  });

  const onClickUpload = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };

  const onFileChange = () => {
    const file = imageInputRef.current?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
    }
  };

  const onClickNicknameCheck = async () => {
    try {
      if (inputValue.validNickname) {
        const res = await nicknameCheck(inputValue.nickname);
        if (res.data.exist) {
          setValidMessage((prev) => ({
            ...prev,
            validNickname: "중복된 닉네임이야!",
          }));
        } else {
          setInputValue((prev) => ({ ...prev, noneDuplicationNickname: true }));
          setValidMessage((prev) => ({
            ...prev,
            validNickname: "사용 가능한 닉네임이야!",
          }));
        }
      }
    } catch {
      console.error("닉네임 체크 APi 오류");
    }
  };

  const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    const nickname = e.target.value;
    setInputValue((prevData) => ({
      ...prevData,
      noneDuplicationNickname: false,
      validNickname: false,
      nickname,
    }));
    if (rInputRegexs.nicknameRegex.test(nickname)) {
      setValidMessage((prevData) => ({
        ...prevData,
        validNickname: "",
      }));
      setInputValue((prevData) => ({
        ...prevData,
        validNickname: true,
      }));
    } else {
      setValidMessage((prevData) => ({
        ...prevData,
        validNickname: "닉네임은 문자나 숫자로 2자에서 7자 이내로 설정해줘!",
      }));
    }
  };

  const onChangeWords = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const comment = e.target.value;
    setInputValue((prevData) => ({
      ...prevData,
      comment,
    }));
    rInputRegexs.commentRegex.test(comment) ||
      setValidMessage((prevData) => ({
        ...prevData,
        validComment: "한마디는 90자 이내로 작성해줘!",
      }));
  };

  const onClickPreviousButton = () => {
    decreaseStep();
  };

  const isSubmitRequired =
    inputValue.nickname &&
    inputValue.validNickname &&
    inputValue.noneDuplicationNickname &&
    inputValue.comment;

  const onSubmit = () => {
    if (isSubmitRequired) {
      try {
        // 팀 설정 api
        putTeam(clickedCardStore);

        // 폼 데이터 만들기
        const formData = new FormData();
        formData.append(
          "profileImage",
          imageInputRef.current?.files?.[0] || "",
        );
        formData.append(
          "data",
          JSON.stringify({
            nickname: inputValue.nickname,
            comment: inputValue.comment,
          }),
        );

        // formData 확인용 console
        // formData.forEach((value, key) => {
        //   console.log(key, value);
        // });

        // 프로필 설정 api
        putProfile(formData);
      } catch {
        alert("api 오류");
      }
    }
  };

  return (
    <div className="steptwo">
      <div className="steptwo__btn">
        <Button
          label="이전"
          variant="primary"
          size="x-medium"
          onClick={onClickPreviousButton}
        />
        <Button
          label="다음"
          variant={`${isSubmitRequired ? "active" : "disactive"}`}
          size="x-medium"
          onClick={onSubmit}
        />
      </div>
      <Title largest className="steptwo__title">
        프로필 설정하기
      </Title>
      <Title small className="steptwo__desc">
        나만의 프로필을 만들어봐!
      </Title>
      <div className="steptwo__content">
        <div className="steptwo__content__cards">
          <TeamCards
            team={
              teamStore.find((item) => item.teamId === clickedCardStore) ??
              teamStore[0]
            }
            singleCard={true}
          />
          <div className="cards__upload">
            {previewUrl ? (
              <Image
                className="uploadedImage"
                onClick={onClickUpload}
                src={previewUrl}
                alt="previewImage"
                width={0}
                height={0}
              />
            ) : (
              <div className="uploadButton" onClick={onClickUpload} />
            )}
            <input
              type="file"
              accept="image/*"
              className="cards__input"
              ref={imageInputRef}
              onChange={onFileChange}
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
                  onChange={onChangeNickname}
                />

                <span
                  className={`nickname__validation ${
                    inputValue.noneDuplicationNickname
                      ? "nickname__validation--pass"
                      : "nickname__validation--alert"
                  }`}
                >
                  {validMessage.validNickname}
                </span>
              </div>
              <Button
                label="중복확인"
                size="x-medium"
                variant="primary"
                onClick={onClickNicknameCheck}
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
              onChange={onChangeWords}
              maxLength={90}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupStepTwo;
