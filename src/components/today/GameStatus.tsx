"use client";

import Text from "@/components/common/Text";
import { useEffect, useState } from "react";
import Title from "@/components/common/Title";

interface GameStatusProps {
  status: string;
  gameTime: string;
}

function GameStatus({ status, gameTime }: GameStatusProps) {
  const [hour, setHour] = useState(23 - new Date().getHours());
  const [minute, setMinute] = useState(59 - new Date().getMinutes());
  const [second, setSecond] = useState(59 - new Date().getSeconds());

  const count = `${hour < 10 ? "0" + hour : hour} : ${
    minute < 10 ? "0" + minute : minute
  } : ${second < 10 ? "0" + second : second}`;

  const getHour = (data: string) => {
    const rDataFormat = /[12][0-9]{3}-[0-9]{2}-[0-9]{2}/;
    if (data.search(rDataFormat) === -1) {
      return data;
    }
    const time = data.substring(11, 13);
    return `${time}`;
  };

  const getMinute = (data: string) => {
    const rDataFormat = /[12][0-9]{3}-[0-9]{2}-[0-9]{2}/;
    if (data.search(rDataFormat) === -1) {
      return data;
    }
    const time = data.substring(14, 16);
    return `${time}`;
  };

  useEffect(() => {
    const id = setInterval(() => {
      setHour(Number(getHour(gameTime)) - new Date().getHours());
      // bug : 현재시간이 39분이면 1분 남아야 함
      setMinute(new Date().getMinutes() - Number(getMinute(gameTime)));
      setSecond(59 - new Date().getSeconds());
    }, 1000);
    return () => clearInterval(id);
  }, [gameTime]);

  return (
    <>
      {status === "READY" && (
        <div className="match-date-block__left-time">
          <>
            <Title className="time" small>
              {count}
            </Title>
            <Text className="left" medium>
              남았습니다.
            </Text>
          </>
        </div>
      )}
      {status === "PROGRESS" && (
        <div className="match-date-block__left-time">
          <Text className="left" medium>
            경기 중
          </Text>
        </div>
      )}
      {status === "END" && (
        <div className="match-date-block__left-time">
          <Text className="left" medium>
            경기 종료
          </Text>
        </div>
      )}
      {status === "CANCEL" && (
        <div className="match-date-block__left-time">
          <Text className="left" medium>
            경기 취소
          </Text>
        </div>
      )}
    </>
  );
}

export default GameStatus;
