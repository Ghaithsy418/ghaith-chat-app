"use client";

import { useCurrUser } from "@/app/_context/useCurrUser";
import { useSettings } from "@/app/_context/useSettings";
import { iconClassName } from "@/app/_helpers/classNames";
import { CgLogOut } from "react-icons/cg";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import GeneralMenu from "../ui/GeneralMenu";
import InitialAvatar from "../ui/InitialAvatar";
import ReusableImage from "../ui/ReusableAvatar";

const UserInfo = function () {
  const { currRightWindow, dispatch } = useSettings();
  const { image, fullName } = useCurrUser();

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
        <CgLogOut
          className={`${iconClassName} hover:border-b-2 hover:border-b-red-500 hover:text-red-500`}
        />
      </div>
    </div>
  );
};

export default UserInfo;
