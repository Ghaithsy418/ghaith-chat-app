/* eslint-disable @next/next/no-img-element */
"use client";

import { useChatting } from "@/app/_context/useChatting";
import InitialAvatar from "../ui/InitialAvatar";
import { useSettings } from "@/app/_context/useSettings";
interface chatTypes {
  id: string;
  avatar: string;
  status: string;
  name: string;
  isBlocked: boolean;
  gotBlocked: boolean;
}

function ChatItem(props: chatTypes) {
  const { setFriend, friend } = useChatting();
  const { dispatch } = useSettings();

  return (
    <div
      onClick={() => {
        setFriend({
          friendId: props.id,
          friendAvatar: props.avatar,
          friendName: props.name,
          friendStatus: props.status,
          isBlocked: props.isBlocked,
          gotBlocked: props.gotBlocked,
        });
        dispatch({ type: "currWindowIs", payload: "" });
      }}
      className={`flex cursor-pointer items-center gap-5 border-b-1 border-indigo-100/30 p-4 transition-all duration-300 hover:border-indigo-100/0 hover:bg-indigo-50/20 ${friend.friendId === props.id ? "bg-indigo-200/20" : ""} `}
    >
      <div>
        {props.avatar && !props.isBlocked && !props.gotBlocked && (
          <img
            src={
              process.env.NEXT_PUBLIC_SUPABASE_URL +
              "/storage/v1/object/public/avatars//" +
              props.avatar
            }
            alt={`avatar for ${props.name}`}
            className="h-10 w-10 rounded-full object-cover"
          />
        )}
        {(!props.avatar || props.isBlocked || props.gotBlocked) && (
          <InitialAvatar name={props.name} className="h-10 w-10 p-2 text-lg" />
        )}
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-md font-semibold">{props.name}</h2>
        <p className="text-sm">Hello There!</p>
      </div>
    </div>
  );
}

export default ChatItem;
