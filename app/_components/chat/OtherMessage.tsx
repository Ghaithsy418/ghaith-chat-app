/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from "react";

interface MessageTypes {
  image?: string;
  children: ReactNode;
}

const OtherMessage: React.FC<MessageTypes> = function ({ children, image }) {
  return (
    <div className="flex max-w-[70%] gap-2">
      <img src="./avatar.png" alt="avatar" className="h-8 w-8 rounded-full" />
      <div className="flex flex-col gap-2">
        {image && (
          <img
            className="h-76 w-full rounded-lg object-cover"
            src={image}
            alt="image"
          />
        )}
        <p className="bg-slate-950/60 p-2 rounded-lg ">{children}</p>
        <span className="place-self-end mr-2 text-xs font-bold">1 min ago</span>
      </div>
    </div>
  );
};

export default OtherMessage;
