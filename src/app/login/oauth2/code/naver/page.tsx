"use client";
import { oauthLogin } from "@/lib/api/authAPI";
import { useUserDataStore } from "@/lib/store/userDataStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Oauth() {
  const code = window.location.search;
  const router = useRouter();

  const { userData, setUserData } = useUserDataStore();
  useEffect(() => {
    const getOathLogin = async () => {
      try {
        const res = await oauthLogin("naver", code);
        const userProfile = {
          profileImageUrl: res.data.profileImageUrl,
          nickname: res.data.nickname,
          teamName: res.data.teamName,
          newMember: res.data.newMember,
        };
        setUserData(userProfile);
      } catch (error) {
        console.error("로그인 실패:", error);
      } finally {
        if (!userData.newMember && userData.teamName) {
          router.push("/signup");
        } else {
          router.push("/match/today");
        }
      }
    };
    getOathLogin();
  }, []);

  return (
    <>
      <div>로그인중...</div>
    </>
  );
}

export default Oauth;
