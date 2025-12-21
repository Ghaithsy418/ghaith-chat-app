"use client";

import useChatting from "@/app/_store/useChatting";
import { useSettings } from "@/app/_store/useSettings";
import { useLocale } from "next-intl";
import { HiMiniArrowLongLeft, HiMiniArrowLongRight } from "react-icons/hi2";

function BackArrow() {
  const { setFriend, friend } = useChatting();
  const { dispatch } = useSettings();
  const locale = useLocale();

  function handleClick() {
    setFriend({
      friendId: "",
      friendName: "",
      friendBio: "",
      friendImage: "",
    });
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
