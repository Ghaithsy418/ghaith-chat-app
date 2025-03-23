"use client";

import { useOpenChat } from "@/app/_hooks/useOpenChat";
import avatar from "@/public/avatar.png";
import Image from "next/image";

interface chatTypes {
  name: string;
  id: string;
}

function ChatItem(props: chatTypes) {
  const handleChangeUrl = useOpenChat();
  return (
    <div
      onClick={() => handleChangeUrl(props.id)}
      className="flex cursor-pointer items-center gap-5 border-b-1 border-indigo-100/30 p-4 transition-all duration-300 hover:border-indigo-100/0 hover:bg-indigo-50/20"
    >
      <div>
        <Image
          src={avatar}
          width="42"
          height="42"
          className="rounded-full object-cover"
          alt="avatar"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-md font-semibold">{props.name}</h2>
        <p className="text-sm">Hello There!</p>
      </div>
    </div>
  );
}

export default ChatItem;
