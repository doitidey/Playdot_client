import "@/components/chat/ChatHeader.scss";
import Image from "next/image";
import { getTeamLogo } from "@/lib/util/TeamTagLogo";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getGameData } from "@/lib/api/chatAPI";
import { GameData } from "@/lib/types/chat/chatTypes";

function ChatHeader({ pid }: { pid: string }) {
  const [gameData, setGameData] = useState<GameData>({
    gameId: 0,
    homeTeam: {
      teamName: "",
      teamShortName: "",
      score: 0,
      voteRatio: 0,
      id: 0,
      hasVote: false,
    },
    awayTeam: {
      teamName: "",
      teamShortName: "",
      score: 0,
      voteRatio: 0,
      id: 0,
      hasVote: false,
    },
    gameTime: "",
    status: "",
  });

  const router = useRouter();

  useEffect(() => {
    const getData = async () => {
      const res = await getGameData(pid);
      setGameData(res.data);
    };
    getData();
  }, []);

  const onClickPrevRoom = () => {
    router.push("/match/chat/" + (gameData.gameId - 1));
  };
  const onClickNextRoom = () => {
    router.push("/match/chat/" + (gameData.gameId + 1));
  };

  return (
    <div className="chat-header">
      <div className="chat-header__button" onClick={onClickPrevRoom}>
        <Image
          src={"/images/chatheaderarrow1.svg"}
          alt={"chatheaderarrow1"}
          width={16}
          height={30}
        />
      </div>
      <div className="chat-header__score">{gameData.homeTeam.score}</div>
      <div className="chat-header__info">
        <div className="teams">
          <div className="teams__name">
            <Image
              src={getTeamLogo(gameData.homeTeam.teamName)}
              alt={"hometeam logo"}
              width={50}
              height={40}
            />
            {gameData.homeTeam.teamName}
          </div>
          <div className="teams__desc">
            <div className="date">{gameData.gameTime.split(" ")[0]}</div>
            <div className="vs">VS</div>
          </div>
          <div className="teams__name">
            <Image
              src={getTeamLogo(gameData.awayTeam.teamName)}
              alt={"awayTeam logo"}
              width={50}
              height={40}
            />
            {gameData.awayTeam.teamName}
          </div>
        </div>
      </div>
      <div className="chat-header__score">{gameData.awayTeam.score}</div>
      <div className="chat-header__button" onClick={onClickNextRoom}>
        <Image
          src={"/images/chatheaderarrow2.svg"}
          alt={"chatheaderarrow2"}
          width={16}
          height={30}
        />
      </div>
    </div>
  );
}

export default ChatHeader;
