"use client";
import "@/components/previous/TeamInfo.scss";
import { getHomeLogo } from "@/lib/util/getLogo";
import Image from "next/image";
import { PreviousData } from "./Previous";
import Title from "../common/Title";
import Text from "../common/Text";

interface TeamInfoProps {
  previousData: PreviousData[];
}

function TeamInfo({ previousData }: TeamInfoProps) {
  return (
    <ul className="team-info-block">
      {previousData.map((item) => (
        <li key={item.gameId} className="team-info-block__item">
          <div className="awayTeam">
            <Image
              src={getHomeLogo(item.awayTeam.teamName)}
              alt={item.awayTeam.teamName}
              width={0}
              height={0}
              draggable={false}
            />
            <div className="away">
              <Title>{item.awayTeam.teamName}</Title>
              <Text>{item.awayTeam.voteRatio}</Text>
            </div>
          </div>
          <div className="homeTeam">
            <Image
              src={getHomeLogo(item.homeTeam.teamName)}
              alt={item.homeTeam.teamName}
              width={0}
              height={0}
              draggable={false}
            />
            <div className="home">
              <Title>{item.homeTeam.teamName}</Title>
              <Text>{item.homeTeam.voteRatio}</Text>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TeamInfo;
