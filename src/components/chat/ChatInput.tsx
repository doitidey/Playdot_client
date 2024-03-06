import Image from "next/image";
import classNames from "classnames";

import "@/components/chat/ChatInput.scss";
import useMenuModalState from "@/lib/store/chat/menuModalState";

function ChatInput() {
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

  return (
    <div className="input-container">
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
        placeholder="대화를 입력해 주세요."
      />
      <Image
        className="input-container__button"
        src={"/images/inputbutton.svg"}
        alt={"inputbutton"}
        width={56}
        height={56}
      />
    </div>
  );
}

export default ChatInput;
