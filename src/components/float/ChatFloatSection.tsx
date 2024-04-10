import { useState } from "react";

import "@/components/float/ChatFloatSection.scss";
import ChatRooms from "@/components/float/ChatRooms";
import Float from "@/components/float/Float";
import FloatButton from "@/components/float/FloatButton";
import { TodayMatchData } from "@/components/today/Today";

function ChatFloatSection({ game }: { game: TodayMatchData[] }) {
  const [visibleFloat, setVisibleFloat] = useState(false);

  const onClickChatFloatButton = () => {
    setVisibleFloat(!visibleFloat);
  };

  return (
    <div className="floatbutton">
      {visibleFloat && (
        <>
          <Float />
          <ChatRooms game={game} visiblefloat={visibleFloat} />
        </>
      )}
      <FloatButton
        onClick={onClickChatFloatButton}
        visiblefloat={visibleFloat}
        buttonstyle="floating"
      />
    </div>
  );
}

export default ChatFloatSection;
