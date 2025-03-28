/* eslint-disable @next/next/no-img-element */
import { format } from "date-fns";
import React, { ReactNode } from "react";
import InitialAvatarFriends from "../ui/InitialAvatarFriends";

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
  return (
    <div className="flex max-w-[70%] gap-2">
      <InitialAvatarFriends className="h-6 w-6 p-4 text-sm" />
      <div className="flex flex-col gap-1">
        {image && (
          <img
            className="h-76 w-full rounded-lg object-cover"
            src={image}
            alt="image"
          />
        )}
        <p className="rounded-lg bg-slate-950/60 p-2">{children}</p>
        <span className="place-self-end text-[11px] font-bold ltr:mr-2 rtl:ml-2">
          {format(time, "p")}
        </span>
      </div>
    </div>
  );
};

export default OtherMessage;
