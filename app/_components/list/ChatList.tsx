import React from "react";
import ChatItem from "./ChatItem";

function ChatList() {
  return (
    <div className="flex-4/5 scrollbar overflow-auto">
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatItem />
    </div>
  );
}

export default ChatList;
