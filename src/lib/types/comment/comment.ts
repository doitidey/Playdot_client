// 댓글 조회
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

interface Sort {
  sorted?: boolean; // 정렬 사용 여부
  unsorted?: boolean; // 정렬 미사용 여부
  empty?: boolean; // 리스트가 비어있는 지 여부
}

interface Pageable {
  pageNumber?: number; // 현재 페이지 번호
  pageSize?: number; // 한 페이지당 보여줄 데이터 개수
  sort?: Sort; // 정렬
  offset?: number; // 데이터 시작 위치
  paged?: boolean; // 페이지네이션 사용 여부
  unpaged?: boolean; // 페이지네이션 비사용 여부
}

export interface CommentData {
  content: Content[]; // 실제 데이터
  pageable?: Pageable; // 페이지네이션
  totalElements: number; // 전체 데이터 수
  totalPages?: number; // 총 페이지 수
  last?: boolean; // 마지막 페이지인지 여부
  size?: number; // 한 페이지 당 보여줄 데이터 개수
  number?: number; // 현재 페이지 번호
  sort?: Sort; // 정렬
  numberOfElements?: number; // 현재 페이지 데이터 수
  first?: boolean; // 첫번째 페이지 여부
  empty?: boolean; // 데이터가 비어있는지 여부
}
