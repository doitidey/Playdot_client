"use client";

import "@/components/chat/chatlog/ShoutBubble.scss";
import { useEffect, useState } from "react";

function ShoutBubble({ onEnd }: { onEnd: () => void }) {
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(Math.floor(Math.random() * 90) + 1);
    const timer = setTimeout(() => {
      onEnd();
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="shout">
      <div className="shout__block" style={{ top: `${top}%` }}>
        <span>
          📢 기아기아 : 기아기dddddfsd기아기dddddfsdfs아기아기ㅏfs아기아기ㅏ~~~
        </span>
      </div>
    </div>
  );
}

export default ShoutBubble;
