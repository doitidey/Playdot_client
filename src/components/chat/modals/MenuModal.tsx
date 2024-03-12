import React from "react";
import Image from "next/image";

import "@/components/chat/modals/MenuModal.scss";
import { useModal } from "@/lib/hooks/useModal";
import PostVoteModal from "./PostVoteModal";
import PostShoutModal from "./PostShoutModal";
import useMenuModalState from "@/lib/store/chat/menuModalState";

function MenuModal() {
  const { menuModalState } = useMenuModalState();
  const { openModal } = useModal();

  const onClickVote = () => {
    openModal({
      content: <PostVoteModal />,
    });
  };
  const onClickShout = () => {
    openModal({
      content: <PostShoutModal />,
    });
  };

  return (
    <div
      className={`menu__block ${
        menuModalState.isClicked
          ? "menu__block--active"
          : "menu__block--disactive"
      }`}
    >
      <div className="menu__content" onClick={onClickVote}>
        <Image
          src={"/images/chatvote.svg"}
          alt={"chatvote"}
          width={37}
          height={37}
        />
        <p>미니투표</p>
      </div>
      <div className="menu__content" onClick={onClickShout}>
        <Image
          src={"/images/chatspeaker.svg"}
          alt={"chatspeaker"}
          width={37}
          height={37}
        />
        <p>외치기</p>
      </div>
    </div>
  );
}

export default MenuModal;
