import "@/components/previous/TeamInfoItem.scss";
import Image from "next/image";
import Text from "../common/Text";
import Title from "../common/Title";
import { PreviousData } from "@/lib/types/previous/previous";
import { getHomeLogo } from "@/lib/util/getLogo";
import classNames from "classnames";

function TeamInfoItem({
  awayTeam,
  gameDate,
  homeTeam,
  voteTeamId,
}: PreviousData) {
  // varient
  const awayVoteRatio =
    (voteTeamId === null && awayTeam.voteRatio < homeTeam.voteRatio) ||
    (awayTeam.voteRatio === 0 && "not-vote");
  const homeVoteRatio =
    (voteTeamId === null && homeTeam.voteRatio < awayTeam.voteRatio) ||
    (homeTeam.voteRatio === 0 && "not-vote");

  const awayOneHundred = awayTeam.voteRatio === 100 && "one-hundred";
  const awaySeventy = awayTeam.voteRatio >= 70 && "seventy";
  const awayFifty = awayTeam.voteRatio >= 50 && "fifty";

  const homeOneHundred = homeTeam.voteRatio === 100 && "one-hundred";
  const homeSeventy = homeTeam.voteRatio >= 70 && "seventy";
  const homeFifty = homeTeam.voteRatio >= 50 && "fifty";

  // render
  return (
    <>
      <Text medium>{gameDate}</Text>
      <li className="team-info-block__item">
        <div
          className={classNames(
            `awayTeam ${awayVoteRatio} ${
              awayOneHundred || awaySeventy || awayFifty
            }`,
          )}
        >
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
        <div
          className={classNames(
            "homeTeam",
            `${homeVoteRatio} ${homeOneHundred || homeSeventy || homeFifty}`,
          )}
        >
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
    </>
  );
}

export default TeamInfoItem;
