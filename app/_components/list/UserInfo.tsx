"use client";

import { useSettings } from "@/app/_context/useSettings";
import { iconClassName } from "@/app/_helpers/classNames";
import { logout } from "@/app/_lib/actions";
import toast from "react-hot-toast";
import { CgLogOut } from "react-icons/cg";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import GeneralMenu from "../ui/GeneralMenu";
import InitialAvatar from "../ui/InitialAvatar";
import { useCurrUser } from "@/app/_context/useCurrUser";
import ReusableImage from "../ui/ReusableAvatar";

async function handleLogout() {
  await logout();
  toast.success("Logged out successfully");
}

const UserInfo: React.FC<{ name: string }> = function ({ name }) {
  const { currRightWindow, dispatch } = useSettings();
  const { avatar_url, display_name } = useCurrUser();
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center gap-4">
        {avatar_url && (
          <ReusableImage
            display_name={display_name}
            avatar_url={avatar_url}
            className="h-10 w-10 rounded-full object-cover"
          />
        )}
        {!avatar_url && (
          <InitialAvatar name={name} className="h-10 w-10 p-2 text-lg" />
        )}
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
