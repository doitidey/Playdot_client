"use client";
import Image from "next/image";
import "@/components/chat/modals/VoteModal.scss";
import { useState } from "react";
import classNames from "classnames";

function VoteModal() {
  const [voteActive, setVoteActive] = useState(false);

  const onVote = (e) => {
    // console.log(e.target.value);
    // todo: api 연동
    setVoteActive(true);
  };

  return (
    <div className="vote__block">
      <div className="vote__title">🔔 20:12 종료</div>
      <div className="vote__content-detail">
        <div className="vote__content-detail__nickname">
          [djkdfjk]님의 미니투표
        </div>
        <div className="vote__content-detail__title">안타 가능?</div>
      </div>
      <div className="vote__content-button">
        <button
          className="vote__content-button__item"
          value={1}
          onClick={onVote}
        >
          <h3>O</h3>
          <div
            className={classNames(
              "vote__content-button__item__bg",
              voteActive && "vote__content-button__item__bg--active",
            )}
            style={voteActive ? { height: "27%" } : { height: "100%" }} //api 연동
          ></div>
        </button>
        <button
          className="vote__content-button__item"
          value={0}
          onClick={onVote}
        >
          <h3>X</h3>
          <div
            className={classNames(
              "vote__content-button__item__bg",
              voteActive && "vote__content-button__item__bg--active",
            )}
            style={voteActive ? { height: "85%" } : { height: "100%" }}
          ></div>
        </button>
      </div>
      <Image
        src={"/images/voteellipse.svg"}
        alt={"vote bg icon"}
        width={390}
        height={233}
        className="vote__content-bg"
      />
    </div>
  );
}

export default VoteModal;
