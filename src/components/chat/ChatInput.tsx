import "@/components/chat/ChatInput.scss";
import Image from "next/image";

function ChatInput() {
  return (
    <div className="input-container">
      <div className="input-container__button">
        {" "}
        <Image
          src={"/images/inputmodalbutton.svg"}
          alt={"inputmodalbutton"}
          width={26}
          height={26}
        />
      </div>
      <div className="input-container__line"></div>
      <input
        className="input-container__input"
        type="text"
        placeholder="대화를 입력해 주세요."
      />
      <Image
        className="input-container__button"
        src={"/images/inputbutton.svg"}
        alt={"inputbutton"}
        width={56}
        height={56}
      />
    </div>
  );
}

export default ChatInput;
