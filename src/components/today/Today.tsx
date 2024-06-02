"use client";

import DateSection from "@/components/today/DateSection";
import ScoreList from "@/components/today/ScoreList";
import Comment from "@/components/comment/Comment";
import "@/components/today/Today.scss";
import { useState } from "react";
import { todayGames } from "@/lib/api/todayAPI";
import { useQuery } from "react-query";
import FloatButton from "../float/FloatButton";
import Float from "../float/Float";
import Image from "next/image";
import Text from "../common/Text";
import ChatRooms from "../float/ChatRooms";

export interface TodayMatchData {
  gameId?: number;
  gameTime: string;
  homeTeam: {
    id: number;
    score: number;
    teamName: string;
    teamShortName: string;
    voteRatio: number;
  };
  awayTeam: {
    id: number;
    score: number;
    teamName: string;
    teamShortName: string;
    voteRatio: number;
  };
  status?: string;
}

function Today() {
  const [visibleFloat, setVisibleFloat] = useState(false);
  const [game, setGame] = useState<TodayMatchData[]>([]);
  const { data: todayData = game } = useQuery({
    queryKey: ["today"],
    queryFn: () =>
      todayGames()?.then((res) => {
        setGame(res.data);
      }),
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    // refetchInterval: 60000,
  });

  console.warn(todayData);

  const onVisibleFloat = () => {
    setVisibleFloat(!visibleFloat);
  };

  // const onRefresh = useCallback(() => {
  //   refetch();
  // }, [refetch]);

  // useEffect(() => {
  //   refetch();
  // }, [refetch]);

  return (
    <>
      <div className="today-block">
        <DateSection />
        <ScoreList game={todayData} />
        <Comment />
      </div>
      {visibleFloat && (
        <>
          <Float />
          <ChatRooms game={todayData} visibleFloat={visibleFloat} />
        </>
      )}
      <div className="main-float-button">
        <FloatButton
          onClick={onVisibleFloat}
          chat={<Image src="/images/chat.svg" alt="" width={40} height={40} />}
          chatButtonTitle={<Text small>채팅방</Text>}
          buttonStyle="floating"
        />
      </div>
    </>
  );
}

export default Today;
