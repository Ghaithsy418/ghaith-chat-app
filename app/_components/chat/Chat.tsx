"use client";

import useChatting from "@/app/_context/useChatting";
import { useGetMessages } from "@/app/_hooks/clientHooks/useGetMessages";
import Spinner from "../ui/Spinner";
import ChatContainer from "./ChatContainer";
import ChatHead from "./ChatHead";

function Chat({ userId }: { userId: string }) {
  const { friend, roomId } = useChatting();
  const { data: messages, isLoading, error } = useGetMessages(roomId);

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
            <ChatContainer messages={messages} />
          )}
          {/* <ChatSender addMessage={addMessage} userId={userId} /> */}
        </>
      )}
    </div>
  );
}

export default Chat;
