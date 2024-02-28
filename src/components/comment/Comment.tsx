"use client";

import "./Comment.scss";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { MdRefresh } from "react-icons/md";
import Title from "../common/Title";
import CommentList from "./CommentList";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { postTodayComment, todayGamesComment } from "@/lib/api/todayAPI";

export interface CommentData {
  profile: {
    profileImageUrl?: null;
    nickname: string;
    teamName: string;
  };
  reply: {
    replyId?: number;
    content: string;
    count?: number;
    createdAt?: string;
  };
}

export interface Team {
  img: string;
  name: string;
  color: string;
}

function Comment() {
  const queryClient = useQueryClient();
  const [value, setValue] = useState("");
  const [comment, setComment] = useState<CommentData[]>([]);

  const { data: commentData = comment } = useQuery({
    queryKey: ["todayComment"],
    queryFn: () =>
      todayGamesComment()?.then((res) => {
        setComment(res.data.content);
        console.warn(res.data.content);
      }),
    refetchOnWindowFocus: false,
  });

  const { mutate: post } = useMutation(async () => postTodayComment(value), {
    onMutate: () => {
      setComment([
        ...comment,
        {
          profile: {
            teamName: localStorage.getItem("teamName") as string,
            nickname: localStorage.getItem("nickname") as string,
          },
          reply: {
            content: value,
          },
        },
      ]);
      setValue("");
    },
    onSuccess: (result, variables, context) => {
    onError: (error) => {
      console.log(`오류: ${error}`);
      console.warn(`성공: ${result}`);
      console.warn(`변수: ${variables}`);
      console.warn(`반환 값: ${context}`);
    },
    onError: (error) => {
      console.warn(`오류: ${error}`);
    },
    onSettled: () => {
      queryClient.invalidateQueries("todayComment");
    },
  });

  const onChange = useCallback((event: ChangeEvent) => {
    event.preventDefault();
    const { value } = event.target as HTMLInputElement;
    setValue(value);
    console.warn(value);
  }, []);

  const onSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();
      post();
    },
    [post],
  );

  return (
    <section className="comment-block">
      <form className="comment-block__content" onSubmit={onSubmit}>
        <div className="comment-header">
          <Title medium>댓글 {commentData.length}개</Title>
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
        <CommentList comment={commentData} />
      </form>
    </section>
  );
}

export default Comment;
