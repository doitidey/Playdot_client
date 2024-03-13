"use client";
import { useState } from "react";
import MypageFairyRecord from "./MypageFairyRecord";
import MypagePresentRecord from "./MypagePresentRecord";
import "@/components/mypage/MypageMenu.scss";

function MypageMenu() {
  const [clickedMenu, setClickedMenu] = useState<string>("1");

  const onClickMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClickedMenu(e.currentTarget.value);
  };

  return (
    <div className="mypage-menu">
      <div className="mypage-nav">
        <button
          value="1"
          className={`mypage-nav__item ${
            clickedMenu === "1" && "mypage-nav__item--active"
          }`}
          onClick={onClickMenu}
        >
          요정기록
        </button>
        <button
          value="2"
          className={`mypage-nav__item ${
            clickedMenu === "2" && "mypage-nav__item--active"
          }`}
          onClick={onClickMenu}
        >
          선물내역
        </button>
      </div>
      {clickedMenu === "1" ? <MypageFairyRecord /> : <MypagePresentRecord />}
    </div>
  );
}

export default MypageMenu;
