"use client";

import supabase from "@/app/_lib/supabase";
import { Dispatch, SetStateAction, useEffect } from "react";
import OtherMessage from "./OtherMessage";
import SelfMessage from "./SelfMessage";
import { useChatting } from "@/app/_context/useChatting";
import { useSettings } from "@/app/_context/useSettings";
import Cookie from "js-cookie";

function ChatContainer({
  messages,
  setMessages,
}: {
  messages: messagesType[];
  setMessages: Dispatch<SetStateAction<messagesType[]>>;
}) {
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

  useEffect(
    function () {
      const channel = supabase
        .channel("messages")
        .on(
          "postgres_changes",
          { event: "INSERT", schema: "public", table: "messages" },
          (payload) => {
            setMessages((prev) => [payload.new as messagesType, ...prev]);
          },
        )
        .subscribe();

      return () => {
        supabase.removeChannel(channel);
      };
    },
    [setMessages],
  );

  return (
    <div
      className={`scrollbar ${fontSize ? `text-${fontSize}` : "text-md"} relative flex flex-1 flex-col-reverse gap-5 overflow-scroll px-3 py-4 leading-6`}
    >
      {messages?.map((message, index) => {
        if (message.send_by === friend.friendId)
          return (
            <OtherMessage time={message.created_at} key={index}>
              {message.text}
            </OtherMessage>
          );
        else
          return (
            <SelfMessage time={message.created_at} key={index}>
              {message.text}
            </SelfMessage>
          );
      })}
    </div>
  );
}

interface messagesType {
  created_at: string;
  text: string;
  send_by: string;
  send_to: string;
  is_edit: boolean;
}

export default ChatContainer;
