"use client";

import { useCallback, useState } from "react";
import Text from "../common/Text";
import "./ScoreListItem.scss";
import classNames from "classnames";
import Image from "next/image";
import Title from "../common/Title";

interface ScoreListItemProps {
  home: string;
  away: string;
  homeImg: string;
  awayImg: string;
}

// 서버에서 크롤링한 날짜를 받아옴!
// pc에서 받아온 날짜는 동기화가 안될 수 있음
const today = new Date();
const month = today.getMonth() + 1;
const date = today.getDate();
const week = ["일", "월", "화", "수", "목", "금", "토"];
// time은 실제 경기시간 데이터를 불러올 예정(목 데이터)
const time = "17:00";
const matchDay = `${month}월 ${date}일 (${week[today.getDay()]}) ${time}`;

function ScoreListItem({ home, away, homeImg, awayImg }: ScoreListItemProps) {
  const [selectHome, setSelectHome] = useState(false);
  const [selectAway, setSelectAway] = useState(false);

  const onClickLeft = useCallback(() => {
    setSelectHome(!selectHome);
    setSelectAway(false);
  }, [selectHome]);

  const onClickRight = useCallback(() => {
    setSelectAway(!selectAway);
    setSelectHome(false);
  }, [selectAway]);

  return (
    <>
      <Title className="match-day" small>
        {matchDay}
      </Title>
      <li className="score-item-block">
        <div
          className={classNames(
            `score-item-block__left ${selectHome ? "active-left" : ""}`,
          )}
          onClick={onClickLeft}
        >
          <div className="team-img">
            <Image src={homeImg} alt="lions" width={55} height={55} />
          </div>
          <div className="team-info-left">
            {selectHome ? <Text large>{home}</Text> : <Text large>{home}</Text>}
            <Title medium>50%</Title>
          </div>
        </div>
        <div
          className={classNames(
            `score-item-block__right ${selectAway ? "active-right" : ""}`,
          )}
          onClick={onClickRight}
        >
          <div className="team-img">
            <Image src={awayImg} alt="lions" width={55} height={55} />
          </div>
          <div className="team-info-right">
            {selectAway ? <Text small>{away}</Text> : <Text large>{away}</Text>}
            <Title medium>50%</Title>
          </div>
        </div>
      </li>
    </>
  );
}

export default ScoreListItem;
