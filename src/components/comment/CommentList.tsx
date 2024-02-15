import { CommentData } from "./Comment";
import "@/components/comment/CommentList.scss";
import CommentListItem from "@/components/comment/CommentListItem";

interface CommentListProps {
  comment: CommentData[];
}

function CommentList({ comment }: CommentListProps) {
  return (
    <ul className="comment-list-block">
      {comment.map((item, index) => (
        <CommentListItem
          key={index}
          nickname={item.profile.nickname}
          teamName={item.profile.teamName}
          comment={item.reply.content}
          createdAt={item.reply.createdAt}
        />
      ))}
    </ul>
  );
}

export default CommentList;
