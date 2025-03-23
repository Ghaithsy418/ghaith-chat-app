"use client";

import { useOpenChat } from "@/app/_hooks/useOpenChat";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

function BackArrow() {
  const handleChangeUrl = useOpenChat();
  return (
    <span onClick={() => handleChangeUrl("")} className="rounded-full text-2xl">
      <MdOutlineKeyboardBackspace className="durtion-300 cursor-pointer transition-all hover:text-indigo-400" />
    </span>
  );
}

export default BackArrow;
