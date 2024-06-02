import { useEffect, useState } from "react";

import "@/components/chat/chatlog/ShoutBubble.scss";
import { MessageType } from "@/lib/types/chat/chatTypes";

function ShoutBubble({ data }: { data: MessageType }) {
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(Math.floor(Math.random() * 90) + 1);
  }, []);

  return (
    <div className="shout">
      <div className="shout__content" style={{ top: `${top}%` }}>
        <span>
          📢 {data.profile.nickname} : {data.message}
        </span>
      </div>
    </div>
  );
}

export default ShoutBubble;
