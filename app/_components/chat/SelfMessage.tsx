/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from "react";

interface MessageTypes {
  image?: string;
  children: ReactNode;
}

const SelfMessage: React.FC<MessageTypes> = function ({ image, children }) {
  return (
    <div className="flex max-w-[70%] flex-col gap-2 place-self-end">
      {image && (
        <img
          src={image}
          alt="image"
          className="h-76 w-full rounded-lg object-cover"
        />
      )}
      <p className="rounded-lg bg-indigo-400/80 p-3">{children}</p>
      <span className="ml-2 text-xs font-bold">1 min ago</span>
    </div>
  );
};

export default SelfMessage;
