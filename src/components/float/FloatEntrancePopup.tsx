import { useRouter } from "next/navigation";

import "@/components/float/FloatEntrancePopup.scss";
import Text from "@/components/common/Text";
import usePopupStore from "@/lib/store/today/popupStore";

function FloatEntrancePopup({ gameId }: { gameId: number }) {
  const router = useRouter();
  const { setClosePopup } = usePopupStore();

  const onEntrance = () => {
    router.push(`/match/chat/${gameId}`);
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
