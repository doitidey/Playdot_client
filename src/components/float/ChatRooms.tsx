"use client";
import { useState } from "react";

import "@/components/float/ChatRooms.scss";
import FloatButton from "@/components/float/FloatButton";
import FloatEntrancePopup from "@/components/float/FloatEntrancePopup";
import { TodayMatchData } from "@/components/today/Today";

interface ChatRoomsProps {
  game: TodayMatchData[];
  visiblefloat: boolean;
}

function ChatRooms({ game, visiblefloat }: ChatRoomsProps) {
  const [clickedId, setClickedId] = useState(0);
  const onClickRooms = (gameId: number) => {
    setClickedId(gameId);
  };
  return (
    <ul className="chatrooms">
      {game.map((item) => (
        <li className="chatrooms__item" key={item.gameId}>
          {clickedId === item.gameId && (
            <FloatEntrancePopup gameId={item.gameId} />
          )}
          <FloatButton
            home={item.homeTeam.teamName}
            away={item.awayTeam.teamName}
            visiblefloat={visiblefloat.toString()}
            buttonstyle="chatting"
            disabled={item.status === "END" || item.status === "CANCEL"}
            onClick={() => onClickRooms(item.gameId)}
          />
        </li>
      ))}
    </ul>
  );
}

export default ChatRooms;
