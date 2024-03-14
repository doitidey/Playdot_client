import Link from "next/link";
import { usePathname } from "next/navigation";
import "./SubMenu.scss";
import { useCallback, useEffect, useState } from "react";

function SubMenu() {
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  const pathname = usePathname();

  const onScroll = useCallback(() => {
    const move = window.scrollY;
    setVisible(position > move);
    setPosition(move);
  }, [position]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [onScroll]);

  return (
    <div className="submenu">
      <div className={`submenu__bg ${visible && "submenu__bg--active"}`}></div>
      <div className="submenu__block">
        <ul className={`submenu__list ${visible ? "scrolldown" : "scrollup"}`}>
          <li className={"submenu__item"}>
            <Link
              href="/match/previous"
              className={` ${pathname === "/match/previous" && "active"}`}
            >
              지난예측
            </Link>
          </li>
          <li className={"submenu__item"}>
            <Link
              href="/match/month"
              className={` ${pathname === "/match/month" && "active"}`}
            >
              월간 승리요정
            </Link>
          </li>
          <li className={"submenu__item"}>
            <Link
              href="/match/today"
              className={` ${pathname === "/match/today" && "active"}`}
            >
              오늘의 승부예측
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SubMenu;
