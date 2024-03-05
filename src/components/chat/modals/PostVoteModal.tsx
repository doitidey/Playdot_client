import TokenButton from "./TokenButton";

function PostVoteModal() {
  return (
    <>
      <input placeholder="투표 내용을 입력해봐" />
      <div>
        <div>
          <div>1</div>
          <input placeholder="옵션1" />
        </div>
        <div>
          <div>2</div>
          <input placeholder="옵션2" />
        </div>
      </div>
      <TokenButton />
    </>
  );
}
export default PostVoteModal;
