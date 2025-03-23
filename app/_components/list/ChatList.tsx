import { getFriends } from "@/app/_lib/api";
import ChatItem from "./ChatItem";

async function ChatList() {
  const friends = await getFriends();
  return (
    <div className="scrollbar flex-4/5 overflow-auto">
      {friends.map((friend) => (
        <ChatItem key={friend.id} id={friend.id} name={friend.display_name} />
      ))}
    </div>
  );
}

export default ChatList;
