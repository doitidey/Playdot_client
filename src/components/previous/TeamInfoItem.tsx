import Image from "next/image";
import Text from "../common/Text";
import Title from "../common/Title";
import { PreviousData } from "@/lib/types/previous/previous";
import { getHomeLogo } from "@/lib/util/getLogo";

function TeamInfoItem({ awayTeam, gameDate, homeTeam }: PreviousData) {
  return (
    <>
      <Text large>{gameDate}</Text>
      <li className="team-info-block__item">
        <div className="awayTeam">
          <Image
            src={getHomeLogo(awayTeam.teamName)}
            alt=""
            width={60}
            height={60}
            draggable={false}
          />
          <div className="away">
            <Text large>{awayTeam.teamName}</Text>
            <Title medium>{awayTeam.voteRatio}%</Title>
          </div>
        </div>
        <div className="homeTeam">
          <Image
            src={getHomeLogo(homeTeam.teamName)}
            alt=""
            width={60}
            height={60}
            draggable={false}
          />
          <div className="home">
            <Text large>{homeTeam.teamName}</Text>
            <Title medium>{homeTeam.voteRatio}%</Title>
          </div>
        </div>
      </li>
      <hr />
    </>
  );
}

export default TeamInfoItem;
