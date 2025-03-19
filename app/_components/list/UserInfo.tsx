import Image from "next/image";
import React from "react";
import avatar from "@/public/avatar.png";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { HiDotsHorizontal, HiOutlinePencilAlt } from "react-icons/hi";
import { iconClassName } from "@/app/utils/classNames";


function UserInfo() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center gap-4">
        <Image
          src={avatar}
          alt="avatar"
          width="42"
          height="42"
          placeholder="blur"
          className="rounded-full object-cover"
        />
        <h3>Ghaith Shabakji</h3>
      </div>
      <div className="flex items-center justify-center gap-4">
        <HiDotsHorizontal className={iconClassName} />
        <HiOutlineVideoCamera className={iconClassName} />
        <HiOutlinePencilAlt className={iconClassName} />
      </div>
    </div>
  );
}

export default UserInfo;
