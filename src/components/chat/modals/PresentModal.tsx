import "@/components/chat/modals/PresentModal.scss";
import Button from "@/components/common/Button";
import TokenButton from "./TokenButton";

function PresentModal() {
  return (
    <>
      <div>모달선물</div>
      <input type="text" />
      <TokenButton />
      <Button label="선물하기" size="large" variant="active" />
    </>
  );
}

export default PresentModal;
