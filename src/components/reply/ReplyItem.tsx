"use client";

import "@/components/reply/ReplyItem.scss";

import Text from "@/components/common/Text";
import classNames from "classnames";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { Content } from "@/lib/types/comment/reply";
import TeamTag from "@/components/tag/TeamTag";
import { commentDate } from "@/lib/util/getGameTime";
import { useMutation, useQueryClient } from "react-query";
import { cancelCommentLike, postCommentLike } from "@/lib/api/monthAPI";
import { useCallback, useState } from "react";
import Report from "@/components/comment/Report";
import Profile from "../common/Profile";

interface ReplyItemProps extends Content {}

function ReplyItem({
  content,
  createdAt,
  isLiked,
  likeCount,
  nickname,
  profileImageUrl,
  replyId,
  teamName,
}: ReplyItemProps) {
  const [visibleReport, setVisibleReport] = useState(false);
  const queryClient = useQueryClient();
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

  const onVisibleReport = useCallback(() => {
    setVisibleReport(true);
  }, []);

  const onLikeComment = useCallback(() => {
    if (isLiked === false) {
      postLike();
    } else if (isLiked === true) {
      cancelLike();
    }
  }, [postLike, isLiked, cancelLike]);

  const onCloseReport = useCallback(() => {
    setVisibleReport(false);
  }, []);

  return (
    <>
      <li className="reply-item-block">
        <Profile
          imageUrl={profileImageUrl as string}
          nickname={nickname as string}
          size={50}
        />
        <div className="reply-item-block__content">
          <div className="reply-item-block__content__info">
            <Text medium>{nickname}</Text>
            <TeamTag teamName={teamName as string} />
          </div>
          {content?.split("\n").map((text, index) => (
            <Text key={index} medium>
              {text}
            </Text>
          ))}
          <div className="reply-item-block__content__reply">
            <span>답글쓰기</span>
          </div>
        </div>
        <div className="reply-item-block__etc">
          <div className="reply-item-block__etc__date">
            <span>{commentDate(createdAt)}</span>
            <span onClick={onVisibleReport}>신고</span>
          </div>
          <div className="reply-item-block__etc__like">
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
      {visibleReport && <Report onCloseReport={onCloseReport} />}
    </>
  );
}

export default ReplyItem;
