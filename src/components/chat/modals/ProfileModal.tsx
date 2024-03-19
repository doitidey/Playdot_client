import "@/components/chat/modals/ProfileModal.scss";
import Button from "@/components/common/Button";
import { useModal } from "@/lib/hooks/useModal";
import PresentModal from "./PresentModal";

function ProfileModal() {
  const { openModal } = useModal();
  const onClickPresent = () => {
    openModal({
      content: <PresentModal />,
    });
  };
  return (
    <>
      <div>프로필 클릭</div>
      <Button
        size="medium"
        variant="active"
        label="선물하기"
        onClick={onClickPresent}
      />
    </>
  );
}

export default ProfileModal;
