import MyPageSection from "@/components/mypage/MypageSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "플레이닷 | 마이페이지",
};

function MyPage() {
  return (
    <>
      <MyPageSection />
    </>
  );
}

export default MyPage;
