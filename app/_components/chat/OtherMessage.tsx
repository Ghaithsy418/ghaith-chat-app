"use client";
/* eslint-disable @next/next/no-img-element */
import useChatting from "@/app/_context/useChatting";
import { format } from "date-fns";
import React, { ReactNode } from "react";
import InitialAvatarFriends from "../ui/InitialAvatarFriends";
import ReusableImage from "../ui/ReusableAvatar";

interface MessageTypes {
  image?: string;
  children: ReactNode;
  time: string;
}

const OtherMessage: React.FC<MessageTypes> = function ({
  children,
  image,
  time,
}) {
  const { friend } = useChatting();

  return (
    <div className="flex max-w-[40vw] gap-2">
      {friend.friendImage && (
        <ReusableImage
          className="h-8 w-8"
          image={friend.friendImage}
          fullName={friend.friendName}
        />
      )}
      {!friend.friendImage && (
        <InitialAvatarFriends className="h-8 w-8 p-4 text-sm" />
      )}
      <div className="flex flex-col gap-1">
        {image && (
          <img
            className="h-76 w-full rounded-lg object-cover"
            src={image}
            alt="image"
          />
        )}
        <p className="rounded-lg bg-slate-950/60 p-3 wrap-break-word">
          {children}
        </p>
        <span className="place-self-end text-[11px] font-bold ltr:mr-2 rtl:ml-2">
          {format(time, "p")}
        </span>
      </div>
    </div>
  );
};

export default OtherMessage;
