import "@/components/comment/CommentList.scss";
import CommentListItem from "@/components/comment/CommentListItem";
import { CommentData } from "@/components/comment/Comment";
import { Dispatch, SetStateAction } from "react";
import { QueryClient } from "react-query";

interface CommentListProps {
  comment: CommentData[];
  setComments: Dispatch<SetStateAction<CommentData[]>>;
  queryClient: QueryClient;
}

function CommentList({
  comment,
  setComments,
  queryClient,
}: CommentListProps) {
  return (
    <ul className="comment-list-block">
      {comment.map((item, index) => (
        <CommentListItem
          key={index}
          nickname={item.nickname}
          teamName={item.teamName}
          comment={item.content}
          createdAt={item.createdAt}
          likeCount={item.likeCount}
          replyId={item.replyId}
          setComments={setComments}
          queryClient={queryClient}
        />
      ))}
    </ul>
  );
}

export default CommentList;
