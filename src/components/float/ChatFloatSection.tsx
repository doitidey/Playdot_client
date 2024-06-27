import { useState } from "react";

import "@/components/float/ChatFloatSection.scss";
import ChatRooms from "@/components/float/ChatRooms";
import Float from "@/components/float/Float";
import FloatButton from "@/components/float/FloatButton";
import { TodayMatchData } from "@/lib/types/today/today";
import useSelectedGameDataStore from "@/lib/store/today/selectedGameStore";

function ChatFloatSection({ game }: { game: TodayMatchData[] }) {
  const [visibleFloat, setVisibleFloat] = useState<boolean>(false);
  const { setGameData } = useSelectedGameDataStore();
  const onClickChatFloatButton = () => {
    setVisibleFloat(!visibleFloat);
    if (game) {
      setGameData(game);
    }
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
        visiblefloat={visibleFloat.toString()}
        buttonstyle="floating"
      />
    </div>
  );
}

export default ChatFloatSection;
