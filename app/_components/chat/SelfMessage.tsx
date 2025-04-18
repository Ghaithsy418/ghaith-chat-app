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
    <div className="flex max-w-[40vw] flex-col gap-1 place-self-end">
      {image && (
        <img
          src={image}
          alt="image"
          className="h-76 w-full rounded-lg object-cover"
        />
      )}
      <p className="rounded-lg bg-indigo-400/80 p-3 break-words">{children}</p>
      <span className="text-[11px] font-bold ltr:ml-2 rtl:mr-2">
        {format(time, "p")}
      </span>
    </div>
  );
};

export default SelfMessage;
