"use client";

import { iconClassName } from "@/app/utils/classNames";
import {
  HiOutlineCamera,
  HiOutlineMicrophone,
  HiOutlinePhoto,
} from "react-icons/hi2";
import { RiSendPlaneFill } from "react-icons/ri";
import EmojisPicker from "./EmojisPicker";
import { useState } from "react";
import { motion } from "framer-motion";

function ChatSender() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  return (
    <div className="flex h-16 items-center gap-5 border-t-1 border-indigo-100/30 bg-slate-950/30 px-2 transition-all duration-300">
      <EmojisPicker setText={setText} open={open} setOpen={setOpen} />
      <input
        type="text"
        placeholder="type a message..."
        className="h-full flex-1 border-0 p-2 text-lg focus:border-0 focus:outline-0"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onClick={() => setOpen(false)}
      />
      <div className="flex items-center justify-center gap-5">
        <HiOutlineCamera className={iconClassName} />
        <HiOutlinePhoto className={iconClassName} />
        <HiOutlineMicrophone className={iconClassName} />
      </div>
      {text && (
        <motion.span
          initial={{ opacity: 0}}
          animate={{ opacity: 1, transition: {duration: 1} }}
          className="flex cursor-pointer items-center rounded-full bg-indigo-500 p-2 transition-all duration-300 hover:bg-indigo-50 hover:text-indigo-500"
        >
          <RiSendPlaneFill className="h-7 w-7" />
        </motion.span>
      )}
    </div>
  );
}

export default ChatSender;
