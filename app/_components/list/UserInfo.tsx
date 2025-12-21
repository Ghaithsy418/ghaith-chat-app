"use client";

import { iconClassName } from "@/app/_helpers/classNames";
import { useSettings } from "@/app/_store/useSettings";
import { useUserStore } from "@/app/_store/useUser";
import { CgLogOut } from "react-icons/cg";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import GeneralMenu from "../ui/GeneralMenu";
import InitialAvatar from "../ui/InitialAvatar";
import ReusableImage from "../ui/ReusableAvatar";
import Logout from "./Logout";

const UserInfo = function () {
  const { currRightWindow, dispatch } = useSettings();
  const { image, fullName } = useUserStore((state) => state.user!);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center gap-4">
        {image && (
          <ReusableImage
            fullName={fullName}
            image={image}
            className="h-10 w-10 rounded-full object-cover"
          />
        )}
        {!image && (
          <InitialAvatar
            name={fullName.split(" ")?.[0]}
            className="h-10 w-10 p-2 text-lg"
          />
        )}
        <h3>{fullName}</h3>
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
          className={`${iconClassName} hover:-rotate-180`}
        />
        <Logout />
      </div>
    </div>
  );
};

export default UserInfo;
