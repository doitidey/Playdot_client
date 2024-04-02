"use client";

import "@/components/float/ChatRoomItem.scss";
import Text from "../common/Text";
import FloatButton from "./FloatButton";
import { useState } from "react";

interface ChatRoomItemProps {
  home: string;
  away: string;
  visibleFloat: boolean;
  gameId: number;
  status?: string;
}

function ChatRoomItem({ visibleFloat, home, away, status }: ChatRoomItemProps) {
  const [entrance, setEntrance] = useState(false);
  const onEntrance = () => {
    setEntrance(true);
    // 여기에 로직 작성해주시면 됩니다.
  };

  const onCancel = () => {
    setEntrance(false);
  };

  return (
    <li className="item-block">
      {entrance && (
        <div className="entrance">
          <Text small>채팅방에 입장할래요?</Text>
          <div className="entrance__button">
            <span>네</span>
            <span onClick={onCancel}>취소</span>
          </div>
        </div>
      )}
      <FloatButton
        home={home}
        away={away}
        visibleFloat={visibleFloat}
        onClick={onEntrance}
        buttonStyle="chatting"
        disabled={status === "PROGRESS" || status === "END"}
      />
    </li>
  );
}

export default ChatRoomItem;
