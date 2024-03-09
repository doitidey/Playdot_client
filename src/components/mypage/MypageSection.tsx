import "@/components/mypage/MypageSection.scss";
import Button from "../common/Button";
import MypageProfile from "./MypageProfile";
import MypageMenu from "./MypageMenu";

function MyPageSection() {
  return (
    <>
      <Button label="수정" size="small" variant="primary" />
      <MypageProfile />
      <MypageMenu />
    </>
  );
}

export default MyPageSection;
