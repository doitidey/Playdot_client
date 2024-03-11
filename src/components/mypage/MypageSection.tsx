import "@/components/mypage/MypageSection.scss";
import Button from "../common/Button";
import MypageProfile from "./MypageProfile";
import MypageMenu from "./MypageMenu";

function MyPageSection() {
  return (
    <section className="mypage">
      <Button label="수정" size="small" variant="primary" />
      <MypageProfile />
      <MypageMenu />
    </section>
  );
}

export default MyPageSection;
