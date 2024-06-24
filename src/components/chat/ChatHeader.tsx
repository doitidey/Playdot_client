import "@/components/chat/ChatHeader.scss";
import Image from "next/image";
import { getTeamLogo } from "@/lib/util/TeamTagLogo";
import useSelectedGameDataStore from "@/lib/store/today/selectedGameStore";
import { useRouter } from "next/navigation";
// import { GAME_DATA } from "./dummy";
// import { TODAY_DATA } from "../today/dummy";

function ChatHeader({ pid }: { pid: string }) {
  const { gameData } = useSelectedGameDataStore();

  const router = useRouter();
  // setGameData(TODAY_DATA);
  // const gameData = TODAY_DATA;

  const chatRoomGameData = gameData.filter(
    (game) => game.gameId === Number(pid),
  )[0];
  const GAME_DATA = chatRoomGameData;

  const onClickPrevRoom = () => {
    router.push("/match/chat/" + (GAME_DATA.gameId - 1));
  };
  const onClickNextRoom = () => {
    router.push("/match/chat/" + (GAME_DATA.gameId + 1));
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
      <div className="chat-header__score">{GAME_DATA.homeTeam.score}</div>
      <div className="chat-header__info">
        <div className="teams">
          <div className="teams__name">
            <Image
              src={getTeamLogo(GAME_DATA.homeTeam.teamName)}
              alt={"hometeam logo"}
              width={50}
              height={40}
            />
            {GAME_DATA.homeTeam.teamName}
          </div>
          <div className="teams__desc">
            <div className="date">{GAME_DATA.gameTime.split(" ")[0]}</div>
            <div className="vs">VS</div>
          </div>
          <div className="teams__name">
            <Image
              src={getTeamLogo(GAME_DATA.awayTeam.teamName)}
              alt={"awayTeam logo"}
              width={50}
              height={40}
            />
            {GAME_DATA.awayTeam.teamName}
          </div>
        </div>
      </div>
      <div className="chat-header__score">{GAME_DATA.awayTeam.score}</div>
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
