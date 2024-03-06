"use client";

import "@/components/comment/Comment.scss";
import { ChangeEvent, FormEvent, useCallback, useState } from "react";
import { MdRefresh } from "react-icons/md";
import Title from "@/components/common/Title";
import CommentList from "@/components/comment/CommentList";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { postTodayComment, todayGamesComment } from "@/lib/api/todayAPI";

export interface CommentData {
  profileImageUrl?: null;
  nickname: string;
  teamName: string;
  replyId?: number;
  content: string;
  likeCount?: number;
  createdAt?: string;
}

export interface Team {
  img: string;
  name: string;
  color: string;
}

function Comment() {
  const queryClient = useQueryClient();
  const [comments, setComments] = useState<CommentData[]>([]);
  const [value, setValue] = useState("");

  // const { value, setValue, comment, setComment } = useCommentStore();

  const { data: commentData = comments, refetch } = useQuery({
    queryKey: ["todayComment"],
    queryFn: () =>
      todayGamesComment()?.then((res) => {
        setComments(res.data.content);
        console.warn(res.data.content);
      }),
    refetchOnWindowFocus: false,
  });

  const { mutate: post } = useMutation(async () => postTodayComment(value), {
    onMutate: () => {
      setComments([
        ...comments,
        {
          teamName: localStorage.getItem("teamName") as string,
          nickname: localStorage.getItem("nickname") as string,
          content: value,
        },
      ]);
      setValue("");
    },
    onSettled: () => {
      queryClient.invalidateQueries("todayComment");
    },
  });

  const onRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  const onChange = useCallback(
    (event: ChangeEvent) => {
      event.preventDefault();
      const { value } = event.target as HTMLInputElement;
      setValue(value);
    },
    [setValue],
  );

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
          <div onClick={onRefresh}>
            <MdRefresh />
          </div>
        </div>
        <input
          className="comment-input"
          type="text"
          value={value}
          onChange={onChange}
          placeholder="댓글을 입력해주세요."
        />
        <CommentList
          comment={commentData}
          setComments={setComments}
          queryClient={queryClient}
        />
      </form>
    </section>
  );
}

export default Comment;
