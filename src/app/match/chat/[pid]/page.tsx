"use client";

import ChatSection from "@/components/chat/ChatSection";
import { useEffect, useState } from "react";

function ChatPage({ params }: { params: { pid: string } }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div className="chat">
      <ChatSection pid={params.pid} />
    </div>
  );
}

export default ChatPage;
