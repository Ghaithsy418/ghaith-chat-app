"use client";
import { RoomTypes } from "@/app/_types/roomTypes";
import ChatItem from "./ChatItem";
import useChatting from "@/app/_context/useChatting";

function ChatList({ rooms }: { rooms: RoomTypes[] }) {
  const { search } = useChatting();

  const newArr =
    search === ""
      ? rooms
      : rooms.filter((room) =>
          room.otherUser.fullName
            .toLocaleLowerCase()
            .includes(search.toLowerCase()),
        );
  return (
    <div className="flex-4/5">
      {newArr?.map((room) => (
        <ChatItem key={room._id} room={room} />
      ))}
    </div>
  );
}

export default ChatList;
