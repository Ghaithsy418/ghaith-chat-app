/* eslint-disable @next/next/no-img-element */
"use client";

import useChatting from "@/app/_store/useChatting";
import { useSettings } from "@/app/_store/useSettings";
import { RoomTypes } from "@/app/_types/roomTypes";
import InitialAvatar from "../ui/InitialAvatar";

function ChatItem({ room }: { room: RoomTypes }) {
  const { setFriend, friend, setRoomId } = useChatting();
  const { dispatch } = useSettings();

  const { fullName, image, _id } = room.otherUser;

  return (
    <div
      onClick={() => {
        setFriend({
          friendId: _id,
          friendImage: image || "",
          friendName: fullName,
          friendBio: "",
        });
        setRoomId(room._id);
        dispatch({ type: "currWindowIs", payload: "" });
      }}
      className={`flex cursor-pointer items-center gap-5 ${friend.friendId === _id ? "bg-indigo-200/20" : ""} border-b border-indigo-100/20 p-4 transition-all duration-300 first:border-t first:border-indigo-100/20 hover:border-indigo-100/0 hover:bg-indigo-50/20`}
    >
      <div>
        {/* {props.friend.avatar_url &&
          !props.friend.isBlocked &&
          !props.friend.gotBlocked && (
            <img
              src={
                process.env.NEXT_PUBLIC_SUPABASE_URL +
                "/storage/v1/object/public/avatars//" +
                props.friend.avatar_url
              }
              alt={`avatar for ${props.friend.display_name}`}
              className="h-10 w-10 rounded-full object-cover"
            />
          )} */}
        {!room.otherUser.image && (
          <InitialAvatar
            name={room.otherUser.fullName}
            className="h-10 w-10 p-2 text-lg"
          />
        )}
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-md font-semibold">{room.otherUser.fullName}</h2>
      </div>
    </div>
  );
}

export default ChatItem;
