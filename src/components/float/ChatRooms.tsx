"use client";

import "@/components/float/ChatRooms.scss";
import { TodayMatchData } from "../today/Today";
import ChatRoomItem from "./ChatRoomItem";

interface ChatRoomsProps {
  game: TodayMatchData[];
  visibleFloat: boolean;
}

function ChatRooms({ game, visibleFloat }: ChatRoomsProps) {
  return (
    <ul className="chat-rooms-block">
      {game.map((item) => (
        <ChatRoomItem
          key={item.gameId}
          visibleFloat={visibleFloat}
          home={item.homeTeam.teamName}
          away={item.awayTeam.teamName}
          gameId={item.gameId as number}
          status={item.status as string}
        />
      ))}
    </ul>
  );
}

export default ChatRooms;
