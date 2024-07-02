"use client";

import { memo, useCallback } from "react";
import Text from "../common/Text";
import "./ScoreListItem.scss";
import classNames from "classnames";
import Image from "next/image";
import Title from "../common/Title";
import { getAwayLogo, getHomeLogo } from "@/lib/util/getLogo";
import { gameDate } from "@/lib/util/getGameTime";
import { useMutation, useQueryClient } from "react-query";
import {
  deleteTodayGames,
  updateTodayGames,
  voteTodayGames,
} from "@/lib/api/todayAPI";
import { TodayMatchData } from "@/lib/types/today/today";

// Interface
interface ScoreListItemProps extends TodayMatchData {
  status: string;
}

// Component
function ScoreListItem({
  homeTeam,
  awayTeam,
  gameTime,
  gameId,
  status,
}: ScoreListItemProps) {
  const queryClient = useQueryClient();

  // 원정 팀 선택
  const { mutate: awayVote } = useMutation(
    () => voteTodayGames(gameId, awayTeam.id),
    {
      onSuccess: () => {
        console.warn("원정 팀 선택 완료");
        queryClient.invalidateQueries({ queryKey: ["today"] });
      },
      onError: () => {
        console.error("선택 오류");
      },
    },
  );

  // 원정 팀 취소
  const { mutate: deleteAwayVote } = useMutation(
    () => deleteTodayGames(gameId),
    {
      onSuccess: () => {
        console.warn("원정 팀 투표 취소 완료");
        queryClient.invalidateQueries({ queryKey: ["today"] });
      },
      onError: () => {
        console.error("선택 오류");
      },
    },
  );

  // 원정 팀 변경
  const { mutate: updateAway } = useMutation(
    () => updateTodayGames(gameId, awayTeam.id),
    {
      onSuccess: () => {
        console.warn("팀 변경 완료");
        queryClient.invalidateQueries({ queryKey: ["today"] });
      },
    },
  );

  // 홈 팀 선택
  const { mutate: homeVote } = useMutation(
    () => voteTodayGames(gameId, homeTeam.id),
    {
      onSuccess: () => {
        console.warn("홈 팀 선택 완료");
        queryClient.invalidateQueries({ queryKey: ["today"] });
      },
      onError: () => {
        console.error("선택 오류");
      },
    },
  );

  // 홈 팀 취소
  const { mutate: deleteHomeVote } = useMutation(
    () => deleteTodayGames(gameId),
    {
      onSuccess: () => {
        console.warn("원정 팀 투표 취소 완료");
        queryClient.invalidateQueries({ queryKey: ["today"] });
      },
      onError: () => {
        console.error("선택 오류");
      },
    },
  );

  // 홈 팀 변경
  const { mutate: updateHome } = useMutation(
    () => updateTodayGames(gameId, homeTeam.id),
    {
      onSuccess: () => {
        console.warn("팀 변경 완료");
        queryClient.invalidateQueries({ queryKey: ["today"] });
      },
    },
  );

  // 원정 팀 선택 이벤트 함수
  const onClickAway = useCallback(() => {
    if (awayTeam.hasVote === false) {
      awayVote();
      updateAway();
    } else if (awayTeam.hasVote === true) {
      deleteAwayVote();
    }
  }, [awayVote, awayTeam.hasVote, deleteAwayVote, updateAway]);

  // 홈 팀 선택 이벤트 함수
  const onClickHome = useCallback(() => {
    if (homeTeam.hasVote === false) {
      homeVote();
      updateHome();
    } else if (homeTeam.hasVote === true) {
      deleteHomeVote();
    }
  }, [homeVote, homeTeam.hasVote, deleteHomeVote, updateHome]);

  return (
    <>
      <div className="match-date-block">
        <Title className="match-day" small>
          {gameDate(gameTime)}
        </Title>
      </div>
      <li className="score-item-block">
        {status === "READY" || (
          <div className="vote-end">
            {status === "PROGRESS" && <Title small>예측 마감</Title>}
            {status === "CANCEL" && <Title small>경기 취소</Title>}
            {status === "END" && <Title small>경기 종료</Title>}
          </div>
        )}
        <div
          className={classNames(
            `score-item-block__left ${awayTeam.hasVote ? "active-left" : ""}`,
          )}
          onClick={onClickAway}
        >
          <div className="team-img">
            <Image
              src={getAwayLogo(awayTeam.teamName)}
              alt={awayTeam.teamName}
              width={0}
              height={0}
              draggable={false}
            />
          </div>
          <div className="team-info-left">
            {awayTeam.hasVote ? (
              <Text large>{awayTeam.teamName}</Text>
            ) : (
              <Text large>{awayTeam.teamName}</Text>
            )}
            <Title medium>{awayTeam.voteRatio}%</Title>
          </div>
        </div>
        <div
          className={classNames(
            `score-item-block__right ${homeTeam.hasVote ? "active-right" : ""}`,
          )}
          onClick={onClickHome}
        >
          <div className="team-img">
            <Image
              src={getHomeLogo(homeTeam.teamName)}
              alt={homeTeam.teamName}
              width={0}
              height={0}
              draggable={false}
            />
          </div>
          <div className="team-info-right">
            {homeTeam.hasVote ? (
              <Text large>{homeTeam.teamName}</Text>
            ) : (
              <Text large>{homeTeam.teamName}</Text>
            )}
            <Title medium>{homeTeam.voteRatio}%</Title>
          </div>
        </div>
      </li>
    </>
  );
}

export default memo(ScoreListItem);
