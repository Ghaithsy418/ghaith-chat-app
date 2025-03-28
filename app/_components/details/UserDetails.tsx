"use client";
import { useChatting } from "@/app/_context/useChatting";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import InitialAvatar from "../ui/InitialAvatar";

function UserDetails() {
  const { friend } = useChatting();

  return (
    <div className="flex flex-col items-center justify-center gap-3 border-b-1 border-indigo-100/30">
      <div>
        <InitialAvatar
          name={friend?.friendName}
          className="h-14 w-14 text-2xl"
        />
      </div>
      <h2 className="text-lg font-semibold">{friend.friendName}</h2>
      <p className="mb-6 text-sm">Lorem ipsum dolor sit amet consectetur,</p>
    </div>
  );
}

export default UserDetails;
