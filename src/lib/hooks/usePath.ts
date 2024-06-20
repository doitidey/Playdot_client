import { usePathname } from "next/navigation";

export default function usePath() {
  const pathname = usePathname();

  const PATH = {
    today: "/match/today",
    month: "/match/month",
    previous: "/match/previous",
    community: "/community",
    login: "/login",
    mypage: "/mypage",
  };

  const ACTIVE_PAGE = "pagelink--active";

  const UNDER_BAR = "underbar--active";

  const ACTIVE_MATCH_CLASSNAME = `${
    pathname === PATH.today ? ACTIVE_PAGE : ""
  } ${pathname === PATH.month ? ACTIVE_PAGE : ""} ${
    pathname === PATH.previous ? ACTIVE_PAGE : ""
  }`;

  const ACTIVE_MYPAGE_CLASSNAME = `${
    pathname === PATH.mypage ? ACTIVE_PAGE : ""
  }`;

  const UNDERBAR_MATCH_CLASSNAME = `${
    pathname === PATH.today ? UNDER_BAR : ""
  } ${pathname === PATH.month ? UNDER_BAR : ""} ${
    pathname === PATH.previous ? UNDER_BAR : ""
  }`;

  const UNDERBAR_MYPAGE_CLASSNAME = `${
    pathname === PATH.mypage ? UNDER_BAR : ""
  }`;

  return {
    ACTIVE_MATCH_CLASSNAME,
    ACTIVE_MYPAGE_CLASSNAME,
    UNDERBAR_MYPAGE_CLASSNAME,
    UNDERBAR_MATCH_CLASSNAME,
    PATH,
  };
}
