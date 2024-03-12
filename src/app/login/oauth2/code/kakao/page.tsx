"use client";
import { oauthLogin } from "@/lib/api/authAPI";
import { useEffect } from "react";

function Oauth() {
  const code = new URL(window.location.href).searchParams.get("code");
  useEffect(() => {
    try {
      const res = oauthLogin("kakao", String(code));
      console.log(code);
      console.log(res.data);
    } catch (error) {
      console.error("로그인 실패:", error);
    }
  }, []);

  return (
    <>
      <div>로그인</div>
    </>
  );
}

export default Oauth;
