/* eslint-disable @next/next/no-img-element */
"use client";

import { useChatting } from "@/app/_context/useChatting";
import InitialAvatar from "../ui/InitialAvatar";
import { useSettings } from "@/app/_context/useSettings";
interface chatTypes {
  friend: {
    id: string;
    avatar_url: string;
    status: string;
    display_name: string;
    isBlocked: boolean;
    gotBlocked: boolean;
  };
}

function ChatItem(props: chatTypes) {
  const { setFriend, friend } = useChatting();
  const { dispatch } = useSettings();

  return (
    <div
      onClick={() => {
        setFriend({
          friendId: props.friend.id,
          friendAvatar: props.friend.avatar_url,
          friendName: props.friend.display_name,
          friendStatus: props.friend.status,
          isBlocked: props.friend.isBlocked,
          gotBlocked: props.friend.gotBlocked,
        });
        dispatch({ type: "currWindowIs", payload: "" });
      }}
      className={`flex cursor-pointer items-center gap-5 p-4 transition-all duration-300 not-last:border-b-1 not-last:border-indigo-100/30 hover:border-indigo-100/0 hover:bg-indigo-50/20 ${friend.friendId === props.friend.id ? "bg-indigo-200/20" : ""} `}
    >
      <div>
        {props.friend.avatar_url &&
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
          )}
        {(!props.friend.avatar_url ||
          props.friend.isBlocked ||
          props.friend.gotBlocked) && (
          <InitialAvatar
            name={props.friend.display_name}
            className="h-10 w-10 p-2 text-lg"
          />
        )}
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-md font-semibold">{props.friend.display_name}</h2>
      </div>
    </div>
  );
}

export default ChatItem;
