"use client";

import { iconClassName } from "@/app/_helpers/classNames";
import { logout } from "@/app/_lib/actions";
import avatar from "@/public/avatar.png";
import Image from "next/image";
import { CgLogOut } from "react-icons/cg";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import GeneralMenu from "../ui/GeneralMenu";
import toast from "react-hot-toast";
import { useSettings } from "@/app/_context/useSettings";

async function handleLogout() {
  await logout();
  toast.success("Logged out successfully");
}

const UserInfo: React.FC<{ name: string }> = function ({ name }) {
  const { currRightWindow, dispatch } = useSettings();
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
        <h3>{name}</h3>
      </div>
      <div className="flex items-center justify-center gap-4">
        <GeneralMenu />
        <HiOutlineCog6Tooth
          onClick={() =>
            dispatch({
              type: "currWindowIs",
              payload: currRightWindow === "settings" ? "" : "settings",
            })
          }
          className={`${iconClassName} hover:rotate-[-180deg]`}
        />
        <CgLogOut
          onClick={handleLogout}
          className={`${iconClassName} hover:border-b-2 hover:border-b-red-500 hover:text-red-500`}
        />
      </div>
    </div>
  );
};

export default UserInfo;
