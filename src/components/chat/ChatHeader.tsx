import "@/components/chat/ChatHeader.scss";
import Image from "next/image";

function ChatHeader() {
  return (
    <div className="chat-header">
      <div className="chat-header__button">
        <Image
          src={"/images/chatheaderarrow1.svg"}
          alt={"chatheaderarrow1"}
          width={16}
          height={30}
        />
      </div>
      <div className="chat-header__score">3</div>
      <div className="chat-header__info">
        <div className="date">23.11.23</div>
        <div className="teams">
          <div className="teams__name">기아</div>
          <div className="teams__vs">VS</div>
          <div className="teams__name">키움</div>
        </div>
      </div>
      <div className="chat-header__score">5</div>
      <div className="chat-header__button">
        <Image
          src={"/images/chatheaderarrow2.svg"}
          alt={"chatheaderarrow2"}
          width={16}
          height={30}
        />
      </div>
    </div>
  );
}

export default ChatHeader;
