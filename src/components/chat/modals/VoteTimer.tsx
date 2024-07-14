import { useStompVoteData } from "@/lib/store/chat/stompclientStore";
import { useState, useEffect } from "react";

interface TimeLeft {
  minutes: number;
  seconds: number;
}

const VoteTimer = ({ targetTime }: { targetTime: string }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    minutes: 3,
    seconds: 60,
  });
  const { setVoteDataEmpty } = useStompVoteData();

  useEffect(() => {
    const timer = setInterval(() => {
      const calculatedTime = calculateTimeLeft();
      setTimeLeft(calculatedTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [targetTime]);

  useEffect(() => {
    if (timeLeft.minutes === 0 && timeLeft.minutes === 0) {
      setVoteDataEmpty();
    }
  }, [timeLeft]);

  const calculateTimeLeft = (): TimeLeft => {
    const endTime = new Date(targetTime).getTime() + 3 * 60 * 1000; // 3분 추가
    const now = new Date().getTime();
    const difference = endTime - now;

    let timeLeft = { minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      timeLeft = {
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  return (
    <div>
      {timeLeft.minutes !== undefined && (
        <h1>
          🔔 {timeLeft.minutes}분 {String(timeLeft.seconds).padStart(2, "0")}초
          남았습니다.
        </h1>
      )}
    </div>
  );
};

export default VoteTimer;
