"use client";

import { useChatting } from "@/app/_context/useChatting";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function BackArrow() {
  const { setFriend } = useChatting();
  return (
    <span
      onClick={() => setFriend({ friendId: "", friendName: "" })}
      className="rounded-full text-2xl"
    >
      <MdOutlineKeyboardBackspace className="durtion-300 cursor-pointer transition-all hover:text-indigo-400" />
    </span>
  );
}

export default BackArrow;
