"use client";
import { useChatting } from "@/app/_context/useChatting";
import React from "react";
import InitialAvatar from "../ui/InitialAvatar";
import ReusableImage from "../ui/ReusableAvatar";

function UserDetails() {
  const { friend } = useChatting();

  return (
    <div className="flex flex-col items-center justify-center gap-3 border-b-1 border-indigo-100/30">
      <div>
        {friend.friendAvatar && !friend.isBlocked && !friend.gotBlocked && (
          <ReusableImage
            className="h-14 w-14"
            avatar_url={friend.friendAvatar}
            display_name={friend.friendName}
          />
        )}
        {(!friend.friendAvatar || friend.isBlocked || friend.gotBlocked) && (
          <InitialAvatar
            name={friend?.friendName}
            className="h-14 w-14 text-2xl"
          />
        )}
      </div>
      <h2 className="text-lg font-semibold">{friend.friendName}</h2>
      <p className="mb-5 text-sm text-slate-300">{friend.friendStatus}</p>
    </div>
  );
}

export default UserDetails;
