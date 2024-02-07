"use client";

import { useCallback, useEffect } from "react";
import "./ScoreList.scss";
import ScoreListItem from "./ScoreListItem";
import { todayGames } from "@/lib/api/todayAPI";

const match = [
  {
    id: 1,
    home: "삼성 라이온즈",
    away: "기아 타이거즈",
    homeImg: "/images/lions.svg",
    awayImg: "/images/tigers.svg",
  },
  {
    id: 2,
    home: "LG 트윈스",
    away: "두산 베어스",
    homeImg: "/images/twins.svg",
    awayImg: "/images/bears.svg",
  },
  {
    id: 3,
    home: "롯데 자이언츠",
    away: "NC 다이노스",
    homeImg: "/images/giants.svg",
    awayImg: "/images/dinos.svg",
  },
  {
    id: 4,
    home: "SSG 랜더스",
    away: "KT 위즈",
    homeImg: "/images/landers.svg",
    awayImg: "/images/wiz.svg",
  },
  {
    id: 5,
    home: "한화 이글스",
    away: "키움 히어로즈",
    homeImg: "/images/eagles.svg",
    awayImg: "/images/heroes.svg",
  },
];

function ScoreList() {
  const getTodayGames = useCallback(() => {
    todayGames()?.then((res) => console.log(res.data));
  }, []);

  useEffect(() => {
    getTodayGames();
    return () => {
      getTodayGames();
    };
  }, [getTodayGames]);

  return (
    <section className="score-block">
      <ul className="score-block__content">
        {match.map((item) => (
          <ScoreListItem
            key={item.id}
            home={item.home}
            away={item.away}
            homeImg={item.homeImg}
            awayImg={item.awayImg}
          />
        ))}
      </ul>
    </section>
  );
}

export default ScoreList;
