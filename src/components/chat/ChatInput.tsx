import Image from "next/image";
import classNames from "classnames";
import { useState } from "react";
import { Client } from "@stomp/stompjs";

import "@/components/chat/ChatInput.scss";
import useMenuModalState from "@/lib/store/chat/menuModalState";

interface ChatInputProps {
  stompClient: Client | undefined;
}

function ChatInput({ stompClient }: ChatInputProps) {
  const [message, setMessage] = useState("");

  const {
    menuModalState,
    setMenuModalClicked,
    setMenuModalStateOpen,
    setMenuModalStateClose,
  } = useMenuModalState();

  let closeModalTimer: ReturnType<typeof setTimeout>;

  const CloseModal = () => {
    closeModalTimer = setTimeout(() => {
      setMenuModalStateClose();
    }, 200);
  };

  const OpenModal = () => {
    clearTimeout(closeModalTimer);
    setMenuModalStateOpen();
  };

  const onClickMenu = () => {
    setMenuModalClicked();
    menuModalState.isOpen ? CloseModal() : OpenModal();
  };

  const sendMessage = (msg: string) => {
    const ROOMNUM = 1;
    if (stompClient && stompClient.connected) {
      const messageDetails = JSON.stringify({
        gameId: `${ROOMNUM}`,
        type: "NORMAL",
        message: `${msg}`,
      });

      stompClient.publish({
        destination: "/pub/chat/message",
        body: messageDetails,
        headers: {
          gameId: `${ROOMNUM}`,
          Authorization: `${localStorage.getItem("authToken")}`,
        },
      });
    }
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    sendMessage(message);
    setMessage("");
  };

  return (
    <form className="input-container" onSubmit={handleSendMessage}>
      <div
        className={classNames(
          menuModalState.isClicked && "input-container__button--active",
          "input-container__button",
        )}
        onClick={onClickMenu}
      >
        <Image
          src={"/images/inputmodalbutton.svg"}
          alt={"inputmodalbutton"}
          width={26}
          height={26}
        />
      </div>
      <div className="input-container__line"></div>
      <input
        className="input-container__input"
        type="text"
        value={message}
        placeholder="대화를 입력해 주세요."
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className="input-container__button" type="submit">
        <Image
          src={"/images/inputbutton.svg"}
          alt={"inputbutton"}
          width={56}
          height={56}
        />
      </button>
    </form>
  );
}

export default ChatInput;
