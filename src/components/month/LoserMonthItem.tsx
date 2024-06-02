import "@/components/month/MonthItem.scss";
import Title from "../common/Title";
import Text from "../common/Text";
import Image from "next/image";

function LoserMonthItem() {
  return (
    <>
      <div className="block">
        <Title medium>패배요정</Title>
        <div className="primary">
          <div className="icon-container">
            <Image
              className="first-icon"
              src="/images/first.svg"
              alt=""
              width={100}
              height={100}
            />
            <Text large>1st</Text>
          </div>
          {/* 추후 Image 컴포넌트로 변경 */}
          <div className="image-percentage">
            <div className="user-image" />
            <Title largest>90%</Title>
          </div>
          <div className="text-logo">
            <div className="text">
              <Title large>닉네임</Title>
              <Text large>승리요정 1회 / 패배요정 2회</Text>
              <Title medium>승리요정 1회 / 패배요정 2회</Title>
            </div>
            <Image src="/images/lions.svg" alt="" width={60} height={60} />
          </div>
        </div>
        <div className="secondary">
          <div className="icon-container">
            <Image
              className="first-icon"
              src="/images/second.svg"
              alt=""
              width={100}
              height={100}
            />
            <Text large>2nd</Text>
          </div>
          <div className="user-icon">
            <Title small>닉네임</Title>
            <Image src="/images/lions.svg" alt="" width={60} height={60} />
          </div>
        </div>
        <div className="secondary">
          <div className="icon-container">
            <Image
              className="first-icon"
              src="/images/third.svg"
              alt=""
              width={100}
              height={100}
            />
            <Text large>3rd</Text>
          </div>
          <div className="user-icon">
            <Title small>닉네임</Title>
            <Image src="/images/lions.svg" alt="" width={60} height={60} />
          </div>
        </div>
        <div className="secondary">
          <div className="icon-container">
            <Image
              className="first-icon"
              src="/images/fourth.svg"
              alt=""
              width={100}
              height={100}
            />
            <Text large>4th</Text>
          </div>
          <div className="user-icon">
            <Title small>닉네임</Title>
            <Image src="/images/lions.svg" alt="" width={60} height={60} />
          </div>
        </div>
        <div className="secondary">
          <div className="icon-container">
            <Image
              className="first-icon"
              src="/images/fourth.svg"
              alt=""
              width={100}
              height={100}
            />
            <Text large>5th</Text>
          </div>
          <div className="user-icon">
            <Title small>닉네임</Title>
            <Image src="/images/lions.svg" alt="" width={60} height={60} />
          </div>
        </div>
      </div>
    </>
  );
}

export default LoserMonthItem;
