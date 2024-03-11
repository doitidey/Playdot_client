import Image from "next/image";
import Text from "../common/Text";
import Title from "../common/Title";
import "@/components/mypage/MypageProfile.scss";

function MypageProfile() {
  return (
    <section className="profile-box">
      <div className="profile-box__bg"></div>
      <Title large className="profile-box__title">
        프로필
      </Title>
      <div className="profile-box__block">
        <div className="profile-box__content detail-box">
          <div className="detail-box__block">
            <div className="detail-box__img">이미지</div>
            <ol className="detail-box__list">
              <li className="detail-box__item">
                <div className="detail-box__title">닉네임</div>
                <div className="detail-box__desc"> 기아탱고라니</div>
              </li>
              <li className="detail-box__item">
                <div className="detail-box__title">구단</div>
                <div className="detail-box__desc"> 기아 타이거스</div>
              </li>
              <li className="detail-box__item">
                <div className="detail-box__title">보유토큰</div>
                <div className="detail-box__desc"> 12tk</div>
              </li>
            </ol>
          </div>
          <div className=" detail-box__line">호돌이는 어디가서 지지 않아@!</div>
        </div>
        <div className="profile-box__content level-box">
          <Title large className="level-box__title">
            야구고수
          </Title>
          <Text medium className="level-box__desc">
            당신은 진정한 야구러버!
          </Text>
          <Image
            src={"images/levelicon_one.svg"}
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
