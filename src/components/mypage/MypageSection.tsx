import "@/components/mypage/MypageSection.scss";
import MypageProfile from "./MypageProfile";
import MypageMenu from "./MypageMenu";

function MyPageSection() {
  return (
    <section className="mypage">
      <MypageProfile />
      <MypageMenu />
    </section>
  );
}

export default MyPageSection;
