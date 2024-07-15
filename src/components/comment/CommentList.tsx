import "@/components/comment/CommentList.scss";
import CommentItem from "./CommentItem";
import { CommentData } from "@/lib/types/comment/comment";
import { CommentType } from "./Comment";

interface CommentListProps {
  commentData: CommentData;
  commentType: CommentType;
  commentQuery: CommentType;
}

function CommentList({
  commentData,
  commentType,
  commentQuery,
}: CommentListProps) {
  return (
    <ul className="comment-list-block">
      {commentData?.content.map((item, index) => (
        <CommentItem
          key={index}
          content={item.content}
          createdAt={item.createdAt}
          nickname={item.nickname}
          isLiked={item.isLiked}
          likeCount={item.likeCount}
          profileImageUrl={item.profileImageUrl}
          replyId={item.replyId}
          teamName={item.teamName}
          commentType={commentType}
          commentQuery={commentQuery}
        />
      ))}
    </ul>
  );
}

export default CommentList;
