import { useState } from "react";

import "@/components/chat/modals/PostShoutModal.scss";
import Button from "@/components/common/Button";
import TokenButton from "@/components/chat/modals/TokenButton";
import { useSocket } from "@/lib/hooks/useSocket";
import { useModal } from "@/lib/hooks/useModal";

function PostShoutModal() {
  const { sendMessage } = useSocket();
  const { closeModal } = useModal();
  const [message, setMessage] = useState("");

  const onClickShout = () => {
    const messageDetail = {
      message: message,
      type: "BAWWLING",
    };
    sendMessage(messageDetail);
    closeModal();
  };

  return (
    <section className="post-shout">
      <input
        className="post-shout__input"
        placeholder="외치기 내용을 입력해봐"
        onChange={(e) => setMessage(e.target.value)}
      />
      <TokenButton />
      <Button
        label="토큰 5개 사용"
        size="large"
        variant={`${message ? "active" : "disactive"}`}
        onClick={onClickShout}
      />
    </section>
  );
}
export default PostShoutModal;
