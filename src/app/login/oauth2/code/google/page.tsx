"use client";
import { oauthLogin } from "@/lib/api/authAPI";
import { useEffect } from "react";

function Oauth() {
  const code = window.location.search;
  useEffect(() => {
    try {
      const res = oauthLogin("google", code);
      console.log(code);
      console.log(res);
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
