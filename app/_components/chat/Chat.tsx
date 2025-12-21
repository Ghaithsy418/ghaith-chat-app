"use client";

import { useGetMessages } from "@/app/_hooks/clientHooks/useGetMessages";
import { socket } from "@/app/_lib/connectSocket";
import useChatting from "@/app/_store/useChatting";
import { useEffect } from "react";
import Spinner from "../ui/Spinner";
import ChatContainer from "./ChatContainer";
import ChatHead from "./ChatHead";
import ChatSender from "./ChatSender";

function Chat({ userId }: { userId: string }) {
  const { friend, roomId } = useChatting();
  const { data: messages, isLoading } = useGetMessages(roomId);

  useEffect(
    function () {
      if (!socket || !roomId) return;

      socket.emit("join_room", roomId);

      return () => {
        socket?.emit("leave_room", roomId);
      };
    },
    [roomId],
  );

  if (!roomId || !socket) return;

  return (
    <div className="flex h-full w-full flex-2 flex-col">
      {!friend && (
        <div className="my-auto flex flex-col items-center justify-center gap-4 bg-linear-to-br from-indigo-50/80 via-indigo-100/80 to-indigo-200/80 bg-clip-text text-3xl font-bold tracking-wide text-transparent">
          <h2>
            Start Chatting By adding someone first{" "}
            <span className="bg-transparent text-indigo-50">🫶</span>
          </h2>
          <p>
            Enjoy This nice app
            <span className="bg-transparent text-indigo-50">😊</span>
          </p>
        </div>
      )}
      {friend.friendName !== "" && (
        <>
          <ChatHead />

          {isLoading ? (
            <Spinner className="mx-auto my-auto" />
          ) : (
            <ChatContainer messages={messages} roomId={roomId} />
          )}
          <ChatSender userId={userId} />
        </>
      )}
    </div>
  );
}

export default Chat;
