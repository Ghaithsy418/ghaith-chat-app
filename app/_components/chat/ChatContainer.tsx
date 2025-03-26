"use client";

import { useChatting } from "@/app/_context/useChatting";
import OtherMessage from "./OtherMessage";
import SelfMessage from "./SelfMessage";
import { useEffect, useState } from "react";
import { getMessages } from "@/app/_lib/actions";
import supabase from "@/app/_lib/supabase";

interface messagesType {
  created_at: string;
  id: string;
  text: string;
  send_by: string;
  send_to: string;
  isEdit: boolean;
}

function ChatContainer() {
  const { friend } = useChatting();
  const [messages, setMessages] = useState<messagesType[]>([]);
  useEffect(
    function () {
      async function getTheMessages() {
        const data = await getMessages(friend);
        setMessages(data || []);
      }
      getTheMessages();
    },
    [friend],
  );

  useEffect(function () {
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
  }, []);

  return (
    <div className="scrollbar relative flex flex-1 flex-col-reverse gap-5 overflow-scroll px-3 py-4 text-sm leading-6">
      {messages?.map((message) => {
        if (message.send_by === friend)
          return (
            <OtherMessage time={message.created_at} key={message.id}>
              {message.text}
            </OtherMessage>
          );
        else
          return (
            <SelfMessage time={message.created_at} key={message.id}>
              {message.text}
            </SelfMessage>
          );
      })}
    </div>
  );
}

export default ChatContainer;
