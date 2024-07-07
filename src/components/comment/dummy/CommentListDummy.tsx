import "@/components/comment/today/CommentList.scss";
import CommentItem from "./CommentItemDummy";
import { Content } from "@/lib/types/comment/comment";
import { Dispatch, SetStateAction } from "react";

interface CommentListProps {
  commentData: Content[];
  setIsLiked: Dispatch<SetStateAction<boolean>>;
  setLikeCount: Dispatch<SetStateAction<number>>;
  isLiked: boolean;
  likeCount: number;
  onDeleteComment: (id: number) => void;
}

function CommentListDummy({
  commentData,
  setIsLiked,
  setLikeCount,
  isLiked,
  likeCount,
  onDeleteComment,
}: CommentListProps) {
  return (
    <ul className="comment-list-block">
      {commentData?.map((item, index) => (
        <CommentItem
          key={index}
          content={item.content}
          createdAt={item.createdAt}
          nickname={item.nickname}
          isLiked={isLiked}
          likeCount={likeCount}
          profileImageUrl={item.profileImageUrl}
          replyId={item.replyId}
          teamName={item.teamName}
          setLikeCount={setLikeCount}
          setIsLiked={setIsLiked}
          onDeleteComment={onDeleteComment}
        />
      ))}
    </ul>
  );
}

export default CommentListDummy;
