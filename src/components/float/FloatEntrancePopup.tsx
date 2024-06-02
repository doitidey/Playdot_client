import { useRouter } from "next/navigation";

import "@/components/float/FloatEntrancePopup.scss";
import Text from "@/components/common/Text";
import usePopupStore from "@/lib/store/today/popupStore";
import useSelectedGameDataStore from "@/lib/store/today/selectedGameStore";

function FloatEntrancePopup({ item }: { item: any }) {
  const router = useRouter();
  const { setClosePopup } = usePopupStore();
  const { setGameData } = useSelectedGameDataStore();

  const onEntrance = () => {
    setGameData(item);
    router.push(`/match/chat/${item.gameId}`);
  };

  const onCancel = () => {
    setClosePopup();
  };

  return (
    <div className="entrancepopup">
      <Text small>채팅방에 입장할래요?</Text>
      <div className="button">
        <span onClick={onEntrance}>네</span>
        <span onClick={onCancel}>취소</span>
      </div>
    </div>
  );
}

export default FloatEntrancePopup;
