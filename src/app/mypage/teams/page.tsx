import MypageChangeTeam from "@/components/mypage/MypageChangeTeam";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "플레이닷 | 마이페이지 팀 변경",
};

function MyPage() {
  return (
    <>
      <MypageChangeTeam />
    </>
  );
}

export default MyPage;
