"use client";

import { useChatting } from "@/app/_context/useChatting";
import InitialAvatar from "../ui/InitialAvatar";

interface chatTypes {
  name: string;
  id: string;
}

function ChatItem(props: chatTypes) {
  const { setFriend } = useChatting();

  return (
    <div
      onClick={() => setFriend({ friendId: props.id, friendName: props.name })}
      className={`flex cursor-pointer items-center gap-5 border-b-1 border-indigo-100/30 p-4 transition-all duration-300 hover:border-indigo-100/0 hover:bg-indigo-50/20`}
    >
      <div>
        <InitialAvatar name={props.name} className="h-10 w-10 p-2 text-lg" />
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-md font-semibold">{props.name}</h2>
        <p className="text-sm">Hello There!</p>
      </div>
    </div>
  );
}

export default ChatItem;
