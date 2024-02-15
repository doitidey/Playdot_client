import React from "react";
import Image from "next/image";

import "@/components/chat/modals/MenuModal.scss";

function MenuModal() {
  return (
    <div className="menu-container">
      <div className="menu-container__box">
        <Image
          src={"/images/chatvote.svg"}
          alt={"chatvote"}
          width={37}
          height={37}
        />
        <p>미니투표</p>
      </div>
      <div className="menu-container__box">
        <Image
          src={"/images/chatspeaker.svg"}
          alt={"chatspeaker"}
          width={37}
          height={37}
        />
        <p>외치기</p>
      </div>
      <div className="menu-container__box">
        <Image
          src={"/images/chatgift.svg"}
          alt={"chatgift"}
          width={32}
          height={32}
        />
        <p>선물하기</p>
      </div>
    </div>
  );
}

export default MenuModal;
