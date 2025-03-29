"use client";

import { useSettings } from "@/app/_context/useSettings";
import AppSettings from "./settings/AppSettings";
import FriendDetails from "./FriendDetails";

function Details() {
  const { currRightWindow } = useSettings();

  if (currRightWindow === "") return null;

  return (
    <div className="scrollbar h-full flex-1 overflow-auto py-5">
      {currRightWindow === "infos" && <FriendDetails />}
      {currRightWindow === "settings" && <AppSettings />}
    </div>
  );
}

export default Details;
