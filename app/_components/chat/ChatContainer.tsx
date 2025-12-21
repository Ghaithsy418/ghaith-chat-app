"use client";

import { socket } from "@/app/_lib/connectSocket";
import useChatting from "@/app/_store/useChatting";
import { useSettings } from "@/app/_store/useSettings";
import { useUserStore } from "@/app/_store/useUser";
import { MessageTypes } from "@/app/_types/messageTypes";
import { useQueryClient } from "@tanstack/react-query";
import Cookie from "js-cookie";
import { useEffect } from "react";
import OtherMessage from "./OtherMessage";
import SelfMessage from "./SelfMessage";

interface ChatContainerProps {
  messages: MessageTypes[];
  roomId: string;
}

function ChatContainer({ messages, roomId }: ChatContainerProps) {
  const { friend } = useChatting();
  const { id: userId } = useUserStore((state) => state.user!);
  const { fontSize, dispatch } = useSettings();
  const queryClient = useQueryClient();

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
      if (!socket || !roomId) return;

      const handleNewMessage = (newMessage: MessageTypes) => {
        if (newMessage.sender._id === userId) return;

        queryClient.setQueryData(
          ["messages", roomId],
          (oldData: MessageTypes[]) => {
            const existingMessages = oldData || [];
            return [...existingMessages, newMessage];
          },
        );
      };

      socket.on("receive_message", handleNewMessage);

      return () => {
        socket?.off("receive_message", handleNewMessage);
      };
    },
    [roomId, queryClient, socket],
  );

  return (
    <div
      className={`scrollbar ${fontSize ? `text-${fontSize}` : "text-md"} relative flex flex-1 flex-col gap-5 overflow-auto px-3 py-4 leading-6`}
    >
      {messages?.map((message, index) => {
        if (message.sender._id === userId)
          return (
            <SelfMessage time={message.createdAt} key={index}>
              {message.content}
            </SelfMessage>
          );
        else
          return (
            <OtherMessage time={message.createdAt} key={index}>
              {message.content}
            </OtherMessage>
          );
      })}
    </div>
  );
}

export default ChatContainer;
