"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";

import Text from "../common/Text";
import Title from "../common/Title";
import Button from "../common/Button";

import "@/components/mypage/MypageProfile.scss";
import { getProfileDetails } from "@/lib/api/mypageAPI";
import { nicknameCheck, putProfile } from "@/lib/api/signupAPI";
import { rInputRegexs } from "@/lib/util/signupValid";

type ProfileData = {
  comment: string;
  level: number;
  nickname: string;
  profileImageUrl: string;
  teamName: string;
  token: number;
};
interface InputValue {
  nickname: string;
  validNickname: boolean;
  comment: string;
  validComment: boolean;
}
function MypageProfile() {
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | undefined>();
  const [profileData, setProfileData] = useState<ProfileData>();
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const [inputValue, setInputValue] = useState<InputValue>({
    nickname: "",
    validNickname: false,
    comment: "",
    validComment: false,
  });

  const [validMessage, setValidMessage] = useState({
    validNickname: "",
    validComment: "",
  });

  const router = useRouter();

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const res = await getProfileDetails();
        setProfileData(res.data);
        setInputValue({
          nickname: res.data.nickname,
          validNickname: true,
          comment: res.data.comment,
          validComment: true,
        });
      } catch (error) {
        console.error(error);
      }
    };

    getUserProfile();
  }, []);

  const onClickEdit = () => {
    setIsEditing(true);
  };

  const onChangeNicknameInput = (e: ChangeEvent<HTMLInputElement>) => {
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

  const onClickUpload = () => {
    if (imageInputRef) {
      imageInputRef.current?.click();
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

  const onChangeCommentInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
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

  const onClickChangeTeam = () => {
    if (!isEditing) return;
    router.push("/mypage/teams");
  };

  const onClickCancle = () => {
    setIsEditing(false);
  };

  const putSubmit = async () => {
    try {
      // 폼 데이터 만들기
      const formData = new FormData();
      formData.append("profileImage", imageInputRef.current?.files?.[0] || "");
      const blob = new Blob(
        [
          JSON.stringify({
            nickname: inputValue.nickname,
            comment: inputValue.comment,
          }),
        ],
        {
          type: "application/json",
        },
      );
      formData.append("data", blob);

      // formData 확인용 console
      // formData.forEach((value, key) => {
      //   console.log(key, value);
      // });

      // 프로필 설정 api
      putProfile(formData);
    } catch {
      alert("api 오류");
    }
  };

  const onClickSubmit = async () => {
    if (inputValue.nickname) {
      try {
        if (inputValue.validNickname) {
          const res = await nicknameCheck(inputValue.nickname);
          if (res.data.exist) {
            setValidMessage((prev) => ({
              ...prev,
              validNickname: "중복된 닉네임이야!",
            }));
          } else {
            setInputValue((prev) => ({
              ...prev,
              noneDuplicationNickname: true,
            }));
            setValidMessage((prev) => ({
              ...prev,
              validNickname: "사용 가능한 닉네임이야!",
            }));
            putSubmit();
            location.reload();
          }
        }
      } catch {
        console.error("닉네임 체크 APi 오류");
      }
      return;
    }
    putSubmit();
    location.reload();
  };

  const isCanSubmit =
    inputValue.nickname !== profileData?.nickname ||
    inputValue.comment !== profileData?.comment ||
    previewUrl;

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
              variant={isCanSubmit ? "active" : "disactive"}
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
                <div className="img__upload" onClick={onClickUpload}>
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
                onChange={onFileChange}
              />
            </div>
            <ol className="detail-box__list">
              {validMessage.validNickname && (
                <span className="detail-box__valid">
                  {validMessage.validNickname}
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
                  onChange={onChangeNicknameInput}
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
            onChange={onChangeCommentInput}
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
            // TODO: 레벨값 연동 src={`images/levelicon_${profileData?.level}.svg`}
            src={`images/levelicon_1.svg`}
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
