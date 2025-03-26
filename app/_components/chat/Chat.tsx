"use client";

import { useChatting } from "@/app/_context/useChatting";
import ChatContainer from "./ChatContainer";
import ChatHead from "./ChatHead";
import ChatSender from "./ChatSender";
import { Suspense } from "react";
import Spinner from "../ui/Spinner";

function Chat() {
  const { friend } = useChatting();
  return (
    <div className="flex h-full flex-2 flex-col border-r-1 border-l-1 border-gray-300/30">
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
      {friend !== "" && (
        <>
          <ChatHead />
          <Suspense fallback={<Spinner className="" />}>
            <ChatContainer />
          </Suspense>
          <ChatSender />
        </>
      )}
    </div>
  );
}

export default Chat;
