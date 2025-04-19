"use client";

import { useSettings } from "@/app/_context/useSettings";
import AppSettings from "./settings/AppSettings";
import FriendDetails from "./FriendDetails";
import BackArrow from "../chat/BackArrow";

function Details({ widthSize = 0 }: { widthSize?: number }) {
  const { currRightWindow } = useSettings();

  if (currRightWindow === "") return null;

  return (
    <div
      className={`${widthSize ? "flex-2" : "flex-1"} border-gray-300/30 py-5 sm:border-l-1`}
    >
      {widthSize === 875 && (
        <span className="ml-5 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-slate-800/80 p-2">
          <BackArrow />
        </span>
      )}
      {currRightWindow === "infos" && <FriendDetails />}
      {currRightWindow === "settings" && <AppSettings />}
    </div>
  );
}

export default Details;
