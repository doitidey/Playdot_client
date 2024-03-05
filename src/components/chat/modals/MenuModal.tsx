import React from "react";
import Image from "next/image";

import "@/components/chat/modals/MenuModal.scss";
import useMenuModalState from "@/lib/store/chat/menuModalState";

function MenuModal() {
  const { menuModalState } = useMenuModalState();

  return (
    <div
      className={`menu__block ${
        menuModalState.isClicked
          ? "menu__block--active"
          : "menu__block--disactive"
      }`}
    >
      <div className="menu__content">
        <Image
          src={"/images/chatvote.svg"}
          alt={"chatvote"}
          width={37}
          height={37}
        />
        <p>미니투표</p>
      </div>
      <div className="menu__content">
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
