"use client";

import "@/components/comment/month/Comment.scss";
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
import Pagination from "react-js-pagination";
import { FcPrevious, FcNext } from "react-icons/fc";
import { getMonthComment, postMonthComment } from "@/lib/api/monthAPI";
import { CommentData } from "@/lib/types/comment/comment";

function Comment() {
  // state
  const [value, setValue] = useState("");
  const [page, setPage] = useState(1);

  const item = 15;

  const { data: commentData, refetch } = useQuery<CommentData>(
    ["monthComment", page],
    () => getMonthComment(page, item),
    {
      staleTime: 1000 * 60,
      cacheTime: 1000 * 60 * 5,
    },
  );

  console.warn(commentData);

  const { mutate: postComment } = useMutation(() => postMonthComment(value), {
    onSuccess: () => {
      console.warn(`댓글 입력 완료: ${value}`);
      queryClient.invalidateQueries({ queryKey: ["monthComment"] });
    },
    onError: () => {
      console.warn(`댓글 입력 실패`);
    },
  });

  const commentRef = useRef<HTMLTextAreaElement>(null);

  const queryClient = useQueryClient();

  const onChange = useCallback(
    (event: ChangeEvent) => {
      event.preventDefault();
      const { value } = event.target as HTMLInputElement;
      setValue(value);
    },
    [setValue],
  );

  const onPageChange = useCallback(() => {
    setPage(page);
  }, [page]);

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
    [postComment, value],
  );

  const onRefresh = useCallback(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    if (commentRef) {
      autosize(commentRef.current as HTMLTextAreaElement);
    }
  }, []);

  return (
    <>
      <div className="comment-block">
        <form className="comment-block__content" onSubmit={onSubmit}>
          <div className="comment-header">
            <Title medium>댓글 {commentData?.totalElements}개</Title>
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
        activePage={commentData?.pageable?.pageNumber as number}
        totalItemsCount={commentData?.totalElements as number}
        itemsCountPerPage={15}
        pageRangeDisplayed={5}
        onChange={onPageChange}
        hideFirstLastPages={true}
        prevPageText={<FcPrevious />}
        nextPageText={<FcNext />}
      />
      <div className="space" />
    </>
  );
}

export default Comment;
