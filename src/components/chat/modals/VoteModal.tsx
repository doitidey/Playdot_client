"use client";
import Image from "next/image";
import "@/components/chat/modals/VoteModal.scss";
import { useEffect, useState } from "react";
import classNames from "classnames";
import {
  useStompVoteData,
  useStompVoteRatiosData,
} from "@/lib/store/chat/stompclientStore";
// import { VOTE_DATA } from "../dummy";
import { useSocket } from "@/lib/hooks/useSocket";
import VoteTimer from "./VoteTimer";

function VoteModal() {
  const { voteData } = useStompVoteData();
  const { sendVote, voteRatioSubscribe } = useSocket();
  const { voteRatioData } = useStompVoteRatiosData();
  const [voteActive, setVoteActive] = useState(false);
  const [selected, setSelected] = useState("");
  // const voteData = VOTE_DATA;

  const onVote = (e: React.MouseEvent<HTMLButtonElement>) => {
    // console.log(e.target.value);
    // todo: api 연동
    voteRatioSubscribe(voteData[0].miniGameId);
    const value = e.currentTarget.value;
    setVoteActive(true);
    setSelected(value);
    const voteBody = {
      miniGameId: Number(voteData[0].miniGameId),
      option: Number(value),
    };
    !voteActive && sendVote(voteBody);
  };

  const profileData = voteData[0] && voteData[0].profile;
  const voteDescData = voteData[0] && voteData[0].miniGames;
  const voteStartedAt = voteData[0] && voteData[0].startedAt;

  return (
    <div className="vote__block">
      <div className="vote__title">
        <VoteTimer targetTime={voteStartedAt} />
      </div>
      <div className="vote__content-detail">
        <div className="vote__content-detail__nickname">
          [ {profileData.nickname} ]님의 미니투표
        </div>
        <div className="vote__content-detail__title">
          {voteDescData.question}
        </div>
      </div>
      <div className="vote__content-button">
        <button
          className="vote__content-button__item"
          value={1}
          onClick={onVote}
        >
          <h3>{voteDescData.option1}</h3>
          <div
            className={classNames(
              "vote__content-button__item__bg",
              voteActive && "vote__content-button__item__bg--active",
              selected !== "1" && "vote__content-button__item__bg--selected",
            )}
            style={
              voteActive && voteRatioData[0]
                ? { height: `${voteRatioData[0].voteRatio.option1VoteRatio}%` }
                : { height: "100%" }
            }
          ></div>
        </button>
        <button
          className="vote__content-button__item"
          value={2}
          onClick={onVote}
        >
          <h3>{voteDescData.option2}</h3>
          <div
            className={classNames(
              "vote__content-button__item__bg",
              voteActive && "vote__content-button__item__bg--active",
              selected !== "2" && "vote__content-button__item__bg--selected",
            )}
            style={
              voteActive && voteRatioData[0]
                ? { height: `${voteRatioData[0].voteRatio.option2VoteRatio}%` }
                : { height: "100%" }
            }
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
