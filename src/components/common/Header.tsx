"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SubMenu from "./SubMenu";
import "./Header.scss";
import usePath from "@/lib/hooks/usePath";
import Image from "next/image";
import { FaUser } from "react-icons/fa6";

function Header() {
  const pathname = usePathname();

  const {
    ACTIVE_MATCH_CLASSNAME,
    ACTIVE_COMMUNITY_CLASSNAME,
    UNDERBAR_COMMUNITY_CLASSNAME,
    UNDERBAR_MATCH_CLASSNAME,
    PATH,
  } = usePath();

  return (
    <>
      <header className="header-block">
        <div className="header-block__content">
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
          <nav className="header-block__navigation">
            <div>
              <Link href={PATH.today} className={ACTIVE_MATCH_CLASSNAME}>
                승부예측
                <div className={UNDERBAR_MATCH_CLASSNAME} />
              </Link>
              <Link
                href={PATH.community}
                className={ACTIVE_COMMUNITY_CLASSNAME}
              >
                커뮤니티
                <div className={UNDERBAR_COMMUNITY_CLASSNAME}></div>
              </Link>
            </div>
          </nav>
          <Link href={PATH.login} className="login">
            <div className="login__logo">
              <FaUser />
            </div>
            <span>로그인</span>
          </Link>
        </div>
        {pathname === "/community" ||
          pathname === "/match/chat" ||
          pathname === "/login" || <SubMenu />}
      </header>
      <div className="space" />
    </>
  );
}

export default Header;
