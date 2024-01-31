"use client";

import "./Comment.scss";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { MdRefresh } from "react-icons/md";
import Title from "../common/Title";
import CommentList from "./CommentList";

export interface CommentData {
  id?: number;
  username?: string;
  team: {
    img: string;
    name: string;
    color: string;
  };
  comment?: string;
}

function Comment() {
  const [value, setValue] = useState("");
  const [comment, setComment] = useState<CommentData[]>([
    {
      id: 1,
      username: "최강삼성",
      team: {
        img: "/images/lions.svg",
        name: "삼성 라이온즈",
        color: "lions",
      },
      comment: "삼성 이겨라!",
    },
    {
      id: 2,
      username: "무적엘지",
      team: {
        img: "/images/twins.svg",
        name: "LG 트윈스",
        color: "twins",
      },
      comment: "엘지 이겨라!",
    },
    {
      id: 3,
      username: "최강기아",
      team: {
        img: "/images/tigers.svg",
        name: "기아 타이거즈",
        color: "tigers",
      },
      comment: "기아 이겨라!",
    },
    {
      id: 4,
      username: "최강두산",
      team: {
        img: "/images/bears.svg",
        name: "두산 베어스",
        color: "bears",
      },
      comment: "두산 이겨라!",
    },
    {
      id: 5,
      username: "최강롯데",
      team: {
        img: "/images/giants.svg",
        name: "롯데 자이언츠",
        color: "giants",
      },
      comment: "롯데 이겨라!",
    },
    {
      id: 6,
      username: "최강NC",
      team: {
        img: "/images/dinos.svg",
        name: "NC 다이노스",
        color: "dinos",
      },
      comment: "NC 이겨라!",
    },
    {
      id: 7,
      username: "최강랜더스",
      team: {
        img: "/images/landers.svg",
        name: "SSG 랜더스",
        color: "landers",
      },
      comment: "SSG 이겨라!",
    },
    {
      id: 8,
      username: "최강KT",
      team: {
        img: "/images/wiz.svg",
        name: "KT 위즈",
        color: "wiz",
      },
      comment: "KT 이겨라!",
    },
    {
      id: 9,
      username: "최강한화",
      team: {
        img: "/images/eagles.svg",
        name: "한화 이글스",
        color: "eagles",
      },
      comment: "한화 이겨라!",
    },
    {
      id: 10,
      username: "최강키움",
      team: {
        img: "/images/heroes.svg",
        name: "키움 히어로즈",
        color: "heroes",
      },
      comment: "키움 이겨라!",
    },
  ]);

  const onChange = useCallback((event: ChangeEvent) => {
    event.preventDefault();
    const { value } = event.target as HTMLInputElement;
    setValue(value);
    console.log(value);
  }, []);

  const onSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
  }, []);

  return (
    <section className="comment-block">
      <form className="comment-block__content" onSubmit={onSubmit}>
        <div className="comment-header">
          <Title medium>댓글 {comment.length}개</Title>
          <button type="submit">
            <MdRefresh />
          </button>
        </div>
        <input
          className="comment-input"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="댓글을 입력해주세요."
        />
        <CommentList comment={comment} />
      </form>
    </section>
  );
}

export default Comment;
