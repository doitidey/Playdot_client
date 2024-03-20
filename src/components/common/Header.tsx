"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SubMenu from "./SubMenu";
import "./Header.scss";
import usePath from "@/lib/hooks/usePath";
import Image from "next/image";
import { useEffect, useState } from "react";

function Header() {
  const pathname = usePathname();
  const [localNick, setLocalNick] = useState<String | null>("");
  const [localURL, setLocalURL] = useState<String | null>("");

  useEffect(() => {
    setLocalNick(localStorage.getItem("nickname"));
    setLocalURL(localStorage.getItem("profileImageUrl"));
  }, []);

  const {
    ACTIVE_MATCH_CLASSNAME,
    ACTIVE_COMMUNITY_CLASSNAME,
    UNDERBAR_COMMUNITY_CLASSNAME,
    UNDERBAR_MATCH_CLASSNAME,
    PATH,
  } = usePath();

  const isSubMenuRequired =
    pathname === "/match/today" ||
    pathname === "/match/month" ||
    pathname === "/match/previous";

  return (
    <>
      <header className="header">
        <div className="header__block">
          <h1>
            <Link href={PATH.today}>
              <Image
                src="/images/logo.svg"
                width={150}
                height={45}
                alt="logo"
                priority={true}
              />
            </Link>
          </h1>
          <nav className="navigation">
            <ol className="navigation__list">
              <li className="navigation__item">
                {isSubMenuRequired && <SubMenu />}
                <Link
                  href={PATH.today}
                  className={`pagelink ${ACTIVE_MATCH_CLASSNAME}`}
                >
                  승부예측
                  <div className={`underbar ${UNDERBAR_MATCH_CLASSNAME}`} />
                </Link>
              </li>
              <li className="navigation__item">
                <Link
                  href={PATH.community}
                  className={`pagelink ${ACTIVE_COMMUNITY_CLASSNAME}`}
                >
                  커뮤니티
                  <div
                    className={`underbar ${UNDERBAR_COMMUNITY_CLASSNAME}`}
                  ></div>
                </Link>
              </li>
            </ol>
          </nav>
          {localNick ? (
            <Link href={PATH.mypage} className="profile">
              <div className="profile__logo">
                {localURL === "null" ? (
                  <Image
                    className="profile__logo__basictitle"
                    src="/images/logo.svg"
                    alt="프로필이미지 로고"
                    width={24}
                    height={24}
                  />
                ) : (
                  <Image
                    alt="profileimg"
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}${localURL}`}
                    fill={true}
                  />
                )}
              </div>
              <span className="profile__myname">{localNick}</span>
            </Link>
          ) : (
            <Link href={PATH.login} className="profile">
              <div className="profile__logo">
                <Image
                  className="profile__logo__basictitle"
                  src="/images/logo.svg"
                  alt="프로필이미지 로고"
                  width={20}
                  height={5}
                />
              </div>
              <span className="profile__login">로그인</span>
            </Link>
          )}
        </div>
      </header>
      <div className="space" />
    </>
  );
}

export default Header;
