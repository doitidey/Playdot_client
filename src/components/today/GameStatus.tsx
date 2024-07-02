"use client";

import Text from "@/components/common/Text";

interface GameStatusProps {
  status: string;
  gameTime: string;
}

function GameStatus({ status }: GameStatusProps) {
  return (
    <>
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
