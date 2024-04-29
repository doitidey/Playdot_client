"use client";
import { oauthLogin } from "@/lib/api/authAPI";
import { useUserDataStore } from "@/lib/store/userDataStore";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

function Oauth() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get("code");
  const { userData, setUserData } = useUserDataStore();
  useEffect(() => {
    const getOathLogin = async () => {
      try {
        const res = code && (await oauthLogin("google", code));
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
