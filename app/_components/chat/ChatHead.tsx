import Image from "next/image";
import React from "react";
import avatar from "@/public/avatar.png";
import { iconClassName } from "@/app/utils/classNames";
import {
  HiMiniPhone,
  HiMiniVideoCamera,
  HiOutlineInformationCircle,
} from "react-icons/hi2";

function ChatHead() {
  return (
    <div className="flex h-20 items-center justify-between border-b-1 border-indigo-100/30 px-4">
      <div className="flex gap-5">
        <div>
          <Image
            src={avatar}
            width="52"
            height="52"
            className="rounded-full object-cover"
            alt="avatar"
          />
        </div>
        <div>
          <h2 className="text-md font-semibold">Ghaith Shabakji</h2>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur
          </p>
        </div>
      </div>
      <div className="flex gap-5 items-center justify-center">
        <HiMiniPhone className={iconClassName} />
        <HiMiniVideoCamera className={iconClassName} />
        <HiOutlineInformationCircle className={iconClassName} />
      </div>
    </div>
  );
}

export default ChatHead;
