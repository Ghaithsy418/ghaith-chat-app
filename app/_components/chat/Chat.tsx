"use client";

import { useChatting } from "@/app/_context/useChatting";
import ChatContainer from "./ChatContainer";
import ChatHead from "./ChatHead";
import ChatSender from "./ChatSender";
import { useEffect, useOptimistic, useState, useTransition } from "react";
import Spinner from "../ui/Spinner";
import { getMessages } from "@/app/_lib/actions";

interface messagesType {
  created_at: string;
  text: string;
  send_by: string;
  send_to: string;
  is_edit: boolean;
}

function Chat({ userId }: { userId: string }) {
  const { friend } = useChatting();
  const [messages, setMessages] = useState<messagesType[]>([]);
  const [isPending, startTransition] = useTransition();
  const [messagesOptimistic, addMessage] = useOptimistic(
    messages,
    (currMessages, newMessage) => [newMessage as messagesType, ...currMessages],
  );
  useEffect(
    function () {
      async function getTheMessages() {
        startTransition(async () => {
          const data = await getMessages(friend.friendId);
          setMessages(data.reverse());
        });
      }
      getTheMessages();
    },
    [friend],
  );
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

          {isPending ? (
            <Spinner className="mx-auto my-auto" />
          ) : (
            <ChatContainer
              setMessages={setMessages}
              messages={messagesOptimistic}
            />
          )}
          <ChatSender addMessage={addMessage} userId={userId} />
        </>
      )}
    </div>
  );
}

export default Chat;
