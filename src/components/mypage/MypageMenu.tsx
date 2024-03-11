import Title from "../common/Title";
import MypageFairyRecord from "./MypageFairyRecord";
import MypagePresentRecord from "./MypagePresentRecord";
import "@/components/mypage/MypageMenu.scss";

function MypageMenu() {
  return (
    <div className="mypage-menu">
      <div className="mypage-nav">
        <div className="mypage-nav__item">
          <Title medium className="mypage-nav__title ">
            요정기록
          </Title>
        </div>
        <div className="mypage-nav__item mypage-nav__item--active">
          <Title medium className="mypage-nav__title mypage-nav__title--active">
            선물내역
          </Title>
        </div>
      </div>
      <MypageFairyRecord />
      <MypagePresentRecord />
    </div>
  );
}

export default MypageMenu;
