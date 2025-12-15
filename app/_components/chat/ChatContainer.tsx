"use client";

import useChatting from "@/app/_context/useChatting";
import { useSettings } from "@/app/_context/useSettings";
import { MessageTypes } from "@/app/_types/messageTypes";
import Cookie from "js-cookie";
import { useEffect } from "react";
import OtherMessage from "./OtherMessage";
import SelfMessage from "./SelfMessage";

function ChatContainer({ messages }: { messages: MessageTypes[] }) {
  const { friend } = useChatting();
  const { fontSize, dispatch } = useSettings();

  useEffect(
    function () {
      dispatch({
        type: "changeFontSize",
        payload: Cookie.get("fontSize") || "md",
      });
    },
    [dispatch],
  );

  return (
    <div
      className={`scrollbar ${fontSize ? `text-${fontSize}` : "text-md"} relative flex flex-1 flex-col-reverse gap-5 overflow-auto px-3 py-4 leading-6`}
    >
      {messages?.map((message, index) => {
        if (message.sender._id === friend.friendId)
          return (
            <OtherMessage time={message.createdAt} key={index}>
              {message.content}
            </OtherMessage>
          );
        else
          return (
            <SelfMessage time={message.createdAt} key={index}>
              {message.content}
            </SelfMessage>
          );
      })}
    </div>
  );
}

export default ChatContainer;
