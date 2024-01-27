import Image from "next/image";

import "@/components/signup/SignupStepTwo.scss";
import Title from "@/components/common/Title";

import SignupTeamCards from "@/components/signup/SignupTeamCards";
import { TEAMS_INFO } from "./TeamsInfo";

function SignupStepTwo() {
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
          <SignupTeamCards {...TEAMS_INFO[1]} />
          <div className="cards__upload">
            <Image
              src={"/images/signupIcon.svg"}
              alt={"plusIcon"}
              width={0}
              height={0}
            />
            <input type="file" accept="image/*" className="cards__input" />
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
              />
              <button className="nickname__button">중복확인</button>
            </div>
          </div>
          <div className="info-content">
            <Title small className="stepTwo-content__title">
              한마디
            </Title>
            <textarea
              className="words__input"
              placeholder="한마디를 입력해줘!"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupStepTwo;
