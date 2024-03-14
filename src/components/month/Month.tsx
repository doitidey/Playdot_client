"use client";

import "@/components/month/Month.scss";
import Comment from "@/components/comment/Comment";
import Winner from "@/components/month/Winner";
import Loser from "@/components/month/Loser";

function Month() {
  return (
    <>
      <section className="month-block">
        <div className="month-container">
          <Winner />
          <Loser />
        </div>
      </section>
      <Comment />
    </>
  );
}

export default Month;
