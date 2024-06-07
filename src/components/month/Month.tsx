"use client";

import "@/components/month/Month.scss";
// import Comment from "@/components/comment/Comment";
import WinnerMonthItem from "./WinnerMonthItem";
import LoserMonthItem from "./LoserMonthItem";

function Month() {
  return (
    <>
      <section className="month-block">
        <div className="month-content">
          <WinnerMonthItem />
          <LoserMonthItem />
        </div>
      </section>
      {/* <Comment /> */}
    </>
  );
}

export default Month;
