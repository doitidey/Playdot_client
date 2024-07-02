import React from "react";
import useChatErrorStore from "@/lib/store/chat/chatErrorStore";
import Button from "@/components/common/Button";
import "@/components/chat/modals/ErrorModal.scss";
import { useRouter } from "next/navigation";
import { useModal } from "@/lib/hooks/useModal";

function ErrorModal() {
  const { errorMessage } = useChatErrorStore();
  const { closeModal } = useModal();
  const router = useRouter();

  const onClickBack = () => {
    router.push("/");
    closeModal();
  };

  return (
    <div className="errormodal">
      <span>{errorMessage}</span>
      <Button
        size="medium"
        label="뒤로가기"
        variant="active"
        onClick={onClickBack}
      />
    </div>
  );
}

export default ErrorModal;
