"use client";

import { useChatting } from "@/app/_context/useChatting";
import { useSettings } from "@/app/_context/useSettings";
import { useLocale } from "next-intl";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";

function BackArrow() {
  const { setFriend, friend } = useChatting();
  const { currRightWindow, dispatch } = useSettings();
  const locale = useLocale();

  function handleClick() {
    setFriend({
      friendId: "",
      friendName: "",
      friendStatus: friend.friendStatus,
      friendAvatar: friend.friendAvatar,
      isBlocked: friend.isBlocked,
    });
    if (currRightWindow === "infos")
      dispatch({ type: "currWindowIs", payload: "" });
  }

  return (
    <span onClick={handleClick} className="rounded-full text-2xl">
      {locale === "ar" ? (
        <HiMiniArrowLongRight className="durtion-300 cursor-pointer transition-all hover:text-indigo-400" />
      ) : (
        <HiMiniArrowLongLeft className="durtion-300 cursor-pointer transition-all hover:text-indigo-400" />
      )}
    </span>
  );
}

export default BackArrow;
