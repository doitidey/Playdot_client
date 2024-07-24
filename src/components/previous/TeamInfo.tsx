"use client";

import "@/components/previous/TeamInfo.scss";
import TeamInfoItem from "./TeamInfoItem";
import { PreviousData } from "@/lib/types/previous/previous";
import Text from "../common/Text";

interface TeamInfoProps {
  activeTab: number;
  firstData: PreviousData[];
  secondData: PreviousData[];
  thirdData: PreviousData[];
  fourthData: PreviousData[];
  fifthData: PreviousData[];
}

function TeamInfo({
  activeTab,
  firstData,
  secondData,
  thirdData,
  fourthData,
  fifthData,
}: TeamInfoProps) {
  switch (activeTab) {
    case 0: {
      return (
        <ul className="team-info-block">
          <Text medium>
            {firstData && firstData[0]?.games?.find((item) => item)?.gameDate}
          </Text>
          {firstData &&
            firstData[0]?.games?.map((item) => (
              <>
                <TeamInfoItem
                  key={item.gameId}
                  awayTeam={item.awayTeam}
                  homeTeam={item.homeTeam}
                  voteTeamId={item.voteTeamId}
                />
              </>
            ))}
          <hr />
          <Text medium>
            {firstData && firstData[1]?.games?.find((item) => item)?.gameDate}
          </Text>
          {firstData &&
            firstData[1]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          <hr />
          <Text medium>
            {firstData && firstData[2]?.games?.find((item) => item)?.gameDate}
          </Text>
          {firstData &&
            firstData[2].games.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          <hr />
          <Text medium>
            {firstData && firstData[3]?.games?.find((item) => item)?.gameDate}
          </Text>
          {firstData &&
            firstData[3]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          <hr />
          <Text medium>
            {firstData && firstData[4]?.games?.find((item) => item)?.gameDate}
          </Text>
          {firstData &&
            firstData[4]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          <hr />
          <Text medium>
            {firstData && firstData[5]?.games?.find((item) => item)?.gameDate}
          </Text>
          {firstData &&
            firstData[5]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
        </ul>
      );
    }
    case 1: {
      return (
        <ul className="team-info-block">
          <Text medium>
            {secondData && secondData[0]?.games?.find((item) => item)?.gameDate}
          </Text>
          {secondData &&
            secondData[0]?.games?.map((item) => (
              <>
                <TeamInfoItem
                  key={item.gameId}
                  awayTeam={item.awayTeam}
                  homeTeam={item.homeTeam}
                  voteTeamId={item.voteTeamId}
                />
              </>
            ))}
          <hr />
          <Text medium>
            {secondData && secondData[1]?.games?.find((item) => item)?.gameDate}
          </Text>
          {secondData &&
            secondData[1]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          <hr />
          <Text medium>
            {secondData && secondData[2]?.games?.find((item) => item)?.gameDate}
          </Text>
          {secondData &&
            secondData[2]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          <hr />
          <Text medium>
            {secondData && secondData[3]?.games?.find((item) => item)?.gameDate}
          </Text>
          {secondData &&
            secondData[3]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          <hr />
          <Text medium>
            {secondData && secondData[4]?.games?.find((item) => item)?.gameDate}
          </Text>
          {secondData &&
            secondData[4]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          <hr />
          <Text medium>
            {secondData && secondData[5]?.games?.find((item) => item)?.gameDate}
          </Text>
          {secondData &&
            secondData[5]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
        </ul>
      );
    }
    case 2: {
      return (
        <ul className="team-info-block">
          <Text medium>
            {thirdData && thirdData[0]?.games?.find((item) => item)?.gameDate}
          </Text>
          {thirdData &&
            thirdData[0]?.games?.map((item) => (
              <>
                <TeamInfoItem
                  key={item.gameId}
                  awayTeam={item.awayTeam}
                  homeTeam={item.homeTeam}
                  voteTeamId={item.voteTeamId}
                />
              </>
            ))}
          <hr />
          <Text medium>
            {thirdData && thirdData[1]?.games?.find((item) => item)?.gameDate}
          </Text>
          {thirdData &&
            thirdData[1]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          <hr />
          <Text medium>
            {thirdData && thirdData[2]?.games?.find((item) => item)?.gameDate}
          </Text>
          {thirdData &&
            thirdData[2]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          <hr />
          <Text medium>
            {thirdData && thirdData[3]?.games?.find((item) => item)?.gameDate}
          </Text>
          {thirdData &&
            thirdData[3]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          <hr />
          <Text medium>
            {thirdData && thirdData[4]?.games?.find((item) => item)?.gameDate}
          </Text>
          {thirdData &&
            thirdData[4]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          <hr />
          <Text medium>
            {thirdData && thirdData[5]?.games?.find((item) => item)?.gameDate}
          </Text>
          {thirdData &&
            thirdData[5]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
        </ul>
      );
    }
    case 3: {
      return (
        <ul className="team-info-block">
          <Text medium>
            {fourthData && fourthData[0]?.games?.find((item) => item)?.gameDate}
          </Text>
          {fourthData &&
            fourthData[0]?.games?.map((item) => (
              <>
                <TeamInfoItem
                  key={item.gameId}
                  awayTeam={item.awayTeam}
                  homeTeam={item.homeTeam}
                  voteTeamId={item.voteTeamId}
                />
              </>
            ))}
          <hr />
          <Text medium>
            {fourthData && fourthData[1]?.games?.find((item) => item)?.gameDate}
          </Text>
          {fourthData &&
            fourthData[1]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          <hr />
          <Text medium>
            {fourthData && fourthData[2]?.games?.find((item) => item)?.gameDate}
          </Text>
          {fourthData &&
            fourthData[2]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          <hr />
          <Text medium>
            {fourthData && fourthData[3]?.games?.find((item) => item)?.gameDate}
          </Text>
          {fourthData &&
            fourthData[3]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          <hr />
          <Text medium>
            {fourthData && fourthData[4]?.games?.find((item) => item)?.gameDate}
          </Text>
          {fourthData &&
            fourthData[4]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          <hr />
          <Text medium>
            {fourthData && fourthData[5]?.games?.find((item) => item)?.gameDate}
          </Text>
          {fourthData &&
            fourthData[5]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
        </ul>
      );
    }
    case 4: {
      return (
        <ul className="team-info-block">
          <Text medium>
            {fifthData && fifthData[0]?.games?.find((item) => item)?.gameDate}
          </Text>
          {fifthData &&
            fifthData[0]?.games?.map((item) => (
              <>
                <TeamInfoItem
                  key={item.gameId}
                  awayTeam={item.awayTeam}
                  homeTeam={item.homeTeam}
                  voteTeamId={item.voteTeamId}
                />
              </>
            ))}
          <hr />
          <Text medium>
            {fifthData && fifthData[1]?.games?.find((item) => item)?.gameDate}
          </Text>
          {fifthData &&
            fifthData[1]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          <hr />
          <Text medium>
            {fifthData && fifthData[2]?.games?.find((item) => item)?.gameDate}
          </Text>
          {fifthData &&
            fifthData[2]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          {fifthData[3] === undefined || <hr />}
          <Text medium>
            {fifthData && fifthData[3]?.games?.find((item) => item)?.gameDate}
          </Text>
          {fifthData &&
            fifthData[3]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          {fifthData[4] === undefined || <hr />}
          <Text medium>
            {fifthData && fifthData[4]?.games?.find((item) => item)?.gameDate}
          </Text>
          {fifthData &&
            fifthData[4]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
          {fifthData[5] === undefined || <hr />}
          <Text medium>
            {fifthData && fifthData[5]?.games?.find((item) => item)?.gameDate}
          </Text>
          {fifthData &&
            fifthData[5]?.games?.map((item) => (
              <TeamInfoItem
                key={item.gameId}
                awayTeam={item.awayTeam}
                homeTeam={item.homeTeam}
                voteTeamId={item.voteTeamId}
              />
            ))}
        </ul>
      );
    }
  }
}

export default TeamInfo;
