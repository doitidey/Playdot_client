"use client";

import "@/components/comment/today/CommentItem.scss";
import Text from "@/components/common/Text";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { useCallback, useState } from "react";
import classNames from "classnames";
import TeamTag from "@/components/tag/TeamTag";
import { commentDate } from "@/lib/util/getGameTime";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {
  cancelCommentLike,
  deleteTodayComment,
  getTodayReply,
  postCommentLike,
} from "@/lib/api/todayAPI";
import Reply from "@/components/reply/today/Reply";
import { Content } from "@/lib/types/comment/comment";
import Report from "./Report";
import Profile from "@/components/common/Profile";

function CommentItem({
  content,
  createdAt,
  isLiked,
  likeCount,
  nickname,
  profileImageUrl,
  replyId,
  teamName,
}: Content) {
  // Hooks
  const [visibleBalloon, setVisibleBalloon] = useState(false);
  const [visibleReply, setVisibleReply] = useState(false);
  const [visibleReport, setVisibleReport] = useState(false);
  const queryClient = useQueryClient();

  // 대댓글 조회 API 함수
  const { data: todayReply } = useQuery<Content[]>(
    ["todayReply", replyId],
    () => getTodayReply(replyId as number),
  );

  // 댓글 삭제 API 함수
  const { mutate: deleteComment } = useMutation(
    () => deleteTodayComment(replyId as number),
    {
      onSuccess: () => {
        console.warn(`댓글 삭제 완료: ${replyId}`);
        queryClient.invalidateQueries({ queryKey: ["todayComment"] });
      },
    },
  );

  // 댓글 좋아요 API 함수
  const { mutate: postLike } = useMutation(
    () => postCommentLike(replyId as number),
    {
      onSuccess: () => {
        console.warn(`댓글 좋아요 완료: ${replyId}`);
        queryClient.invalidateQueries({ queryKey: ["todayComment"] });
      },
    },
  );

  // 댓글 좋아요 취소 API
  const { mutate: cancelLike } = useMutation(
    () => cancelCommentLike(replyId as number),
    {
      onSuccess: () => {
        console.warn(`댓글 좋아요 취소 완료: ${replyId}`);
        queryClient.invalidateQueries({ queryKey: ["todayComment"] });
      },
    },
  );

  // Event Function
  const onVisibleBalloon = useCallback(() => {
    setVisibleBalloon(!visibleBalloon);
  }, [visibleBalloon]);

  const onDeleteComment = useCallback(() => {
    deleteComment();
    setVisibleBalloon(false);
  }, [deleteComment]);

  const onLikeComment = useCallback(() => {
    if (isLiked === false) {
      postLike();
    } else if (isLiked === true) {
      cancelLike();
    }
  }, [postLike, isLiked, cancelLike]);

  const onVisibleReply = useCallback(() => {
    setVisibleReply(!visibleReply);
  }, [visibleReply]);

  const onVisibleReport = useCallback(() => {
    setVisibleReport(true);
  }, []);

  const onCloseReport = useCallback(() => {
    setVisibleReport(false);
  }, []);

  return (
    <>
      <li className="item-block">
        <div className="item-block__comment">
          <Profile
            imageUrl={profileImageUrl as string}
            nickname={nickname as string}
            size={50}
          />
          <div className="content">
            <div className="content__profile">
              <Text medium>{nickname}</Text>
              <TeamTag teamName={teamName as string} />
            </div>
            {content?.split("\n").map((text, index) => (
              <Text key={index} medium>
                {text}
              </Text>
            ))}
            <div className="content__reply">
              <span onClick={onVisibleReply}>답글 {todayReply?.length}</span>
              <span onClick={onVisibleReply}>답글 쓰기</span>
            </div>
          </div>
        </div>
        <div className="item-block__button">
          <div className="item-block__button__date">
            {visibleBalloon && (
              <div className="balloon">
                <Text small>삭제하시겠습니까?</Text>
                <div className="balloon__button">
                  <span onClick={onDeleteComment}>삭제</span>
                  <span onClick={onVisibleBalloon}>취소</span>
                </div>
              </div>
            )}
            <span>{commentDate(createdAt)}</span>
            <span onClick={onVisibleReport}>신고</span>
            <span onClick={onVisibleBalloon}>삭제</span>
          </div>
          <div className="item-block__button__like">
            <Text>좋아요</Text>
            <span>{likeCount}</span>
            <div
              className={classNames(
                `${isLiked ? "active-like-btn" : "inactive-like-btn"}`,
              )}
              onClick={onLikeComment}
            >
              {isLiked ? <FaThumbsUp /> : <FaRegThumbsUp />}
            </div>
          </div>
        </div>
      </li>
      {visibleReply && (
        <Reply
          replyData={todayReply as Content[]}
          replyId={replyId as number}
          setVisibleReply={setVisibleReply}
        />
      )}
      {visibleReport && <Report onCloseReport={onCloseReport} />}
    </>
  );
}

export default CommentItem;
