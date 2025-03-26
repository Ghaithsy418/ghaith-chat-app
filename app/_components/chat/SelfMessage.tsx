/* eslint-disable @next/next/no-img-element */
import React, { ReactNode } from "react";
import { format } from "date-fns";
interface MessageTypes {
  image?: string;
  children: ReactNode;
  time: string;
}

const SelfMessage: React.FC<MessageTypes> = function ({
  image,
  children,
  time,
}) {
  return (
    <div className="flex max-w-[70%] flex-col gap-1 place-self-end">
      {image && (
        <img
          src={image}
          alt="image"
          className="h-76 w-full rounded-lg object-cover"
        />
      )}
      <p className="rounded-lg bg-indigo-400/80 p-3">{children}</p>
      <span className="ml-2 text-[11px] font-bold">{format(time, "p")}</span>
    </div>
  );
};

export default SelfMessage;
