// "use client";

// import "@/components/comment/Comment.scss";
// import {
//   ChangeEvent,
//   FormEvent,
//   useCallback,
//   useEffect,
//   useRef,
//   useState,
// } from "react";
// import { MdRefresh } from "react-icons/md";
// import Title from "@/components/common/Title";
// import CommentList from "@/components/comment/CommentList";
// import { useMutation, useQuery } from "react-query";
// import autosize from "autosize";
// import Button from "@/components/common/Button";
// import Text from "@/components/common/Text";
// import { getTodayComment, postTodayComment } from "@/lib/api/todayAPI";
// import { queryClient } from "../common/Layout";

// interface Sort {
//   sorted: boolean;
//   empty: boolean;
//   unsorted: boolean;
// }

// export interface CommentData {
//   profileImageUrl?: null;
//   nickname: string;
//   teamName: string;
//   replyId?: number;
//   content: string;
//   likeCount?: number;
//   createdAt?: string;
//   isLiked?: boolean;
// }

// interface Pageable {
//   pageNumber: number;
//   pageSize: number;
//   sort: Sort;
//   offset: number;
//   paged: boolean;
//   unpaged: boolean;
// }

// export interface Comment {
//   content: CommentData[];
//   pageable?: Pageable;
//   totalElements?: number;
//   totalPages?: number;
//   last?: boolean;
//   size?: number;
//   number?: number;
//   sort?: Sort;
//   numberOfElements?: number;
//   first?: boolean;
//   empty?: boolean;
// }

// export interface Team {
//   img: string;
//   name: string;
//   color: string;
// }

// function Comment() {
//   const [value, setValue] = useState("");
//   const commentRef = useRef<HTMLTextAreaElement>(null);

//   const { data: comment, refetch } = useQuery<CommentData[]>("comment", () =>
//     getTodayComment(),
//   );

//   const { mutate: postComment } = useMutation(() => postTodayComment(value), {
//     onSuccess: () => {
//       console.warn(`댓글 작성 완료: ${value}`);
//       queryClient.invalidateQueries({ queryKey: ["comment"] });
//     },
//   });

//   const onRefresh = useCallback(() => {
//     refetch();
//   }, [refetch]);

//   const onChange = useCallback(
//     (event: ChangeEvent) => {
//       event.preventDefault();
//       const { value } = event.target as HTMLInputElement;
//       setValue(value);
//     },
//     [setValue],
//   );

//   const onSubmit = useCallback(
//     async (event: FormEvent) => {
//       event.preventDefault();
//       if (value === "") {
//         // 추후 팝업 창으로 개선 예정
//         window.alert("댓글을 입력하세요!");
//       } else {
//         postComment();
//       }
//     },
//     [postComment, value],
//   );

//   useEffect(() => {
//     if (commentRef) {
//       autosize(commentRef.current as HTMLTextAreaElement);
//     }
//   }, []);

//   return (
//     <section className="comment-block">
//       <form className="comment-block__content" onSubmit={onSubmit}>
//         <div className="comment-header">
//           <Title medium>댓글 0개</Title>
//           <div onClick={onRefresh}>
//             <MdRefresh />
//           </div>
//         </div>
//         <div className="comment-input-area">
//           <textarea
//             className="comment-input"
//             value={value}
//             onChange={onChange}
//             placeholder="댓글을 입력하세요."
//             rows={1}
//             maxLength={300}
//             spellCheck={false}
//             ref={commentRef}
//           />
//           <Button size="submit" variant="active" type="submit" label="등록" />
//         </div>
//         <Text medium className="value-length">
//           {value.length} / 300
//         </Text>
//         {/* <CommentList content={comment?.content} /> */}
//       </form>
//     </section>
//   );
// }

// export default Comment;
