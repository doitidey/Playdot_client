import "@/components/mypage/MypageSection.scss";
import Button from "../common/Button";
import MypageProfile from "./MypageProfile";
import MypageMenu from "./MypageMenu";

function MyPageSection() {
  return (
    <section className="mypage">
      <div className="mypage__btn">
        <Button label="수정" size="small" variant="primary" />
      </div>
      <MypageProfile />
      <MypageMenu />
    </section>
  );
}

export default MyPageSection;
