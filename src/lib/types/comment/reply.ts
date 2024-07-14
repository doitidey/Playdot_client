export interface Content {
  profileImageUrl?: string; // 프로필 이미지
  nickname?: string; // 닉네임
  teamName?: string; // 팀 이름
  replyId?: number; // id 값
  content?: string; // 댓글 내용
  likeCount?: number; // 좋아요 수
  createdAt?: string; // 작성 시간
  isLiked?: boolean; // 좋아요 여부
}

export interface ReplyData {
  content: Content[]; // 실제 데이터
}