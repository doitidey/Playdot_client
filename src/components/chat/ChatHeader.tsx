import "@/components/chat/ChatHeader.scss";
import Image from "next/image";
import { GAME_DATA } from "./dummy";
import { getTeamLogo } from "@/lib/util/TeamTagLogo";

function ChatHeader() {
  return (
    <div className="chat-header">
      <div className="chat-header__button">
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
              width={0}
              height={41}
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
              width={0}
              height={41}
            />
            {GAME_DATA.awayTeam.teamName}
          </div>
        </div>
      </div>
      <div className="chat-header__score">{GAME_DATA.awayTeam.score}</div>
      <div className="chat-header__button">
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
