type ButtonInfo = Array<{
  name: string;
  text: string;
  img: string;
}>;
export const BUTTON_INFO: ButtonInfo = [
  { name: "naver", text: "네이버 로그인", img: "/images/naver.svg" },
  { name: "kakao", text: "카카오톡 로그인", img: "/images/kakao.svg" },
  { name: "google", text: "구글 로그인", img: "/images/google.svg" },
];

type LoginLinks = { [naver: string]: string; kakao: string; google: string };
export const LOGIN_LINKS: LoginLinks = {
  naver: ``,
  kakao: `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI}&response_type=code`,
  google: `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_REST_API_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI}&response_type=code&scope=email profile`,
};
