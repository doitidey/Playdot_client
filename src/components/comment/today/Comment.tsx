"use client";

import "@/components/comment/today/Comment.scss";
import Button from "@/components/common/Button";
import Text from "@/components/common/Text";
import Title from "@/components/common/Title";
import autosize from "autosize";
import {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { MdRefresh } from "react-icons/md";
import CommentList from "./CommentList";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTodayComment, postTodayComment } from "@/lib/api/todayAPI";
import Pagination from "react-js-pagination";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { CommentData } from "@/lib/types/comment/comment";

// component
function Comment() {
  // hooks
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);
  const queryClient = useQueryClient();
  const commentRef = useRef<HTMLTextAreaElement>(null);

  // variable
  const item = 15;

  // 댓글 조회 API
  const { data: commentData, refetch } = useQuery<CommentData>(
    ["todayComment", page],
    () => getTodayComment(page, item),
    {
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
    },
  );

  // 댓글 입력 API
  const { mutate: postComment } = useMutation(() => postTodayComment(value), {
    onSuccess: () => {
      console.warn(`댓글 입력 완료: ${value}`);
      queryClient.invalidateQueries({ queryKey: ["todayComment"] });
    },
    onError: () => {
      console.warn(`댓글 입력 실패`);
    },
  });

  // 댓글 입력 이벤트 함수
  const onChange = useCallback(
    (event: ChangeEvent) => {
      event.preventDefault();
      const { value } = event.target as HTMLInputElement;
      setValue(value);
    },
    [setValue],
  );

  // 댓글 페이지 변경 이벤트 함수
  const onPageChange = useCallback((page: number) => {
    setPage(page);
  }, []);

  // 댓글 Submit 이벤트 함수
  const onSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      if (value === "") {
        window.alert("댓글을 입력하세요!");
      } else {
        postComment();
      }
      setValue("");
    },
    [value, postComment],
  );

  // 댓글 새로고침 이벤트 함수
  const onRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (commentRef) {
      autosize(commentRef.current as HTMLTextAreaElement);
    }
  }, []);

  // render
  return (
    <>
      <div className="comment-block">
        <form className="comment-block__content" onSubmit={onSubmit}>
          <div className="comment-header">
            <Title medium>댓글 {commentData?.content.length}개</Title>
            <div className="comment-header__refresh" onClick={onRefresh}>
              <MdRefresh />
            </div>
          </div>
          <div className="comment-input-area">
            <textarea
              className="comment-input"
              placeholder="댓글을 입력하세요."
              rows={1}
              maxLength={300}
              spellCheck={false}
              value={value}
              onChange={onChange}
            />
            <Button size="submit" variant="active" type="submit" label="등록" />
          </div>
          <Text medium className="value-length">
            {value.length} / 300
          </Text>
        </form>
      </div>
      <CommentList commentData={commentData as CommentData} />
      <Pagination
        activePage={(commentData?.pageable?.pageNumber as number) + 1}
        totalItemsCount={commentData?.totalElements as number}
        itemsCountPerPage={15}
        pageRangeDisplayed={5}
        onChange={onPageChange}
        hideFirstLastPages={true}
        prevPageText={<MdNavigateBefore />}
        nextPageText={<MdNavigateNext />}
      />
      <div className="space" />
    </>
  );
}

export default Comment;
