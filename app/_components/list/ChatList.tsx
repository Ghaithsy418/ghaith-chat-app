"use client";
import { useChatting } from "@/app/_context/useChatting";
import ChatItem from "./ChatItem";

interface Friends {
  id: string;
  display_name: string;
}

function ChatList({ friends }: { friends: Friends[] }) {
  const { search } = useChatting();

  const newArr =
    search === ""
      ? friends
      : friends.filter((friend) =>
          friend.display_name
            .toLocaleLowerCase()
            .includes(search.toLowerCase()),
        );

  return (
    <div className="scrollbar flex-4/5 overflow-auto">
      {newArr?.map((friend) => (
        <ChatItem key={friend.id} id={friend.id} name={friend.display_name} />
      ))}
    </div>
  );
}

export default ChatList;
