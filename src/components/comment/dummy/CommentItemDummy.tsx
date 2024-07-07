"use client";

import "@/components/comment/today/CommentItem.scss";
import Text from "@/components/common/Text";
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { Dispatch, SetStateAction, useCallback, useState } from "react";
import classNames from "classnames";
import TeamTag from "@/components/tag/TeamTag";
import { commentDate } from "@/lib/util/getGameTime";
import { Content } from "@/lib/types/comment/comment";
import Report from "./ReportDummy";
import ReplyDummy from "@/components/reply/dummy/ReplyDummy";
import Profile from "@/components/common/Profile";

interface CommentItemProps extends Content {
  setLikeCount: Dispatch<SetStateAction<number>>;
  setIsLiked: Dispatch<SetStateAction<boolean>>;
  onDeleteComment: (id: number) => void;
}

function CommentItemDummy({
  content,
  createdAt,
  isLiked,
  likeCount,
  nickname,
  profileImageUrl,
  replyId,
  teamName,
  setIsLiked,
  setLikeCount,
  onDeleteComment,
}: CommentItemProps) {
  // Hooks
  const [visibleBalloon, setVisibleBalloon] = useState(false);
  const [visibleReply, setVisibleReply] = useState(false);
  const [visibleReport, setVisibleReport] = useState(false);

  // Event Function
  const onVisibleBalloon = useCallback(() => {
    setVisibleBalloon(!visibleBalloon);
  }, [visibleBalloon]);

  const onLikeComment = useCallback(() => {
    if (isLiked === false) {
      setIsLiked(true);
      setLikeCount((likeCount as number) + 1);
    } else if (isLiked === true) {
      setIsLiked(false);
      setLikeCount((likeCount as number) - 1);
    }
  }, [isLiked, setIsLiked, likeCount, setLikeCount]);

  const onVisibleReply = useCallback(() => {
    setVisibleReply(!visibleReply);
  }, [visibleReply]);

  const onVisibleReport = useCallback(() => {
    setVisibleReport(true);
  }, []);

  const onCloseReport = useCallback(() => {
    setVisibleReport(false);
  }, []);

  const onRemove = () => {
    onDeleteComment(replyId as number);
    setVisibleBalloon(false);
  };

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
              <span onClick={onVisibleReply}>답글 0개</span>
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
                  <span onClick={onRemove}>삭제</span>
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
      {visibleReply && <ReplyDummy onVisibleReply={onVisibleReply} />}
      {visibleReport && <Report onCloseReport={onCloseReport} />}
    </>
  );
}

export default CommentItemDummy;
