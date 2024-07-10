import "@/components/month/MonthItem.scss";
import Title from "../common/Title";
import Text from "../common/Text";
import Image from "next/image";
import { MonthData } from "@/lib/types/month/month";
import { getLogo } from "@/lib/util/getLogo";
import Profile from "../common/Profile";

interface WinnerMonthItemProps {
  monthData: MonthData;
}

function WinnerMonthItem({ monthData }: WinnerMonthItemProps) {
  // 글자 수 제한 함수
  const truncateNickname = (str: string, n: number) => {
    return str && str.length > n ? str.substring(0, n - 1) + "..." : str;
  };

  // 등수 별 아이콘 경로 함수
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

  // Render
  return (
    <div className="block">
      <div className="month-title">
        <Image src="/images/wing.svg" alt="wing" width={29} height={29} />
        <Title medium>패배요정</Title>
        <Image src="/images/wing.svg" alt="wing" width={29} height={29} />
      </div>
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
        <div className="image-percentage">
          <Title largest>승률 {monthData?.loseMembers[0].voteRatio}%</Title>
        </div>
        <div className="title-area">
          <Title medium>{monthData?.loseMembers[0].title}</Title>
        </div>
        <div className="text-logo">
          {/* 추후 Image 컴포넌트로 변경 */}
          <Profile imageUrl="" nickname="" size={60} />
          <div className="text">
            <Title large>
              {truncateNickname(monthData?.loseMembers[0].nickname, 6)}
            </Title>
            <Text caption>
              승리요정 {monthData?.loseMembers[0].winFairyCount}회 / 패배요정{" "}
              {monthData?.loseMembers[0].loseFairyCount}회
            </Text>
          </div>
          <Image
            src={getLogo(monthData?.loseMembers[0].teamName)}
            alt=""
            width={60}
            height={60}
          />
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
  );
}

export default WinnerMonthItem;
