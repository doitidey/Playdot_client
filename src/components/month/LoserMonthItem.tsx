import "@/components/month/MonthItem.scss";
import Title from "../common/Title";
import Text from "../common/Text";
import Image from "next/image";
import { MonthData } from "./Month";

interface LoserMonthItemProps {
  monthData: MonthData;
}

function LoserMonthItem({ monthData }: LoserMonthItemProps) {
  const truncateNickname = (str: string, n: number) => {
    return str && str.length > n ? str.substring(0, n - 1) + "..." : str;
  };
  const renderRankImg = (rank: number) => {
    switch (rank) {
      case (rank = 2):
        return "/images/second.svg";
      case (rank = 3):
        return "/images/third.svg";
      case (rank = 4):
        return "/images/fourth.svg";
      case (rank = 5):
        return "/images/fourth.svg";
    }
  };
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
            <Title largest>{monthData?.loseMembers[0].voteRatio}%</Title>
          </div>
          <div className="text-logo">
            <div className="text">
              <Title large>
                {truncateNickname(monthData?.loseMembers[0].nickname, 5)}
              </Title>
              <Text large>
                승리요정 {monthData?.loseMembers[0].winFairyCount}회 / 패배요정{" "}
                {monthData?.loseMembers[0].loseFairyCount}회
              </Text>
              <Title medium>{monthData?.loseMembers[0].title}</Title>
            </div>
            <Image src="/images/lions.svg" alt="" width={60} height={60} />
          </div>
        </div>
        {monthData?.loseMembers.slice(1, 5).map((item) => (
          <div key={item.memberId} className="secondary">
            <div className="icon-container">
              <Image
                className="first-icon"
                src={renderRankImg(item.rank) as string}
                alt=""
                width={100}
                height={100}
              />
              <Text large>{item.rank}nd</Text>
            </div>
            <div className="user-icon">
              <Title small>{truncateNickname(item.nickname, 6)}</Title>
              <Image src="/images/lions.svg" alt="" width={60} height={60} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LoserMonthItem;
