"use client";

import { useChatting } from "@/app/_context/useChatting";
import { iconClassName } from "@/app/_helpers/classNames";
import { sendMessage } from "@/app/_lib/actions";
import { motion } from "framer-motion";
import { useRef, useState, useTransition } from "react";
import {
  HiOutlineCamera,
  HiOutlineMicrophone,
  HiOutlinePhoto,
} from "react-icons/hi2";
import { RiSendPlaneFill } from "react-icons/ri";
import EmojisPicker from "./EmojisPicker";
import { useTranslations } from "next-intl";

function ChatSender({
  addMessage,
  userId,
}: {
  addMessage: (action: unknown) => void;
  userId: string;
}) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const [isPending, startTransition] = useTransition();
  const { friend } = useChatting();
  const inputFocus = useRef<HTMLInputElement>(null);
  const t = useTranslations("sendingMessages");

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (text !== "") {
          startTransition(async () => {
            setText("");
            setOpen(false);
            addMessage({
              text,
              created_at: Date.now(),
              send_by: userId,
              send_to: friend,
              isEdit: false,
            });
            await sendMessage(text, friend.friendId);
          });
        }
      }}
    >
      <div className="flex h-16 items-center gap-5 border-t-1 border-indigo-100/30 bg-slate-950/30 px-5 transition-all duration-300">
        <EmojisPicker setText={setText} open={open} setOpen={setOpen} />
        <input
          type="text"
          ref={inputFocus}
          placeholder={t("placeholder")}
          className="h-full flex-1 border-0 p-2 text-lg focus:border-0 focus:outline-0 rtl:placeholder:tracking-wider"
          value={text}
          disabled={isPending}
          onChange={(e) => setText(e.target.value)}
          onClick={() => setOpen(false)}
        />
        <div className="flex items-center justify-center gap-5">
          <HiOutlineCamera className={iconClassName} />
          <HiOutlinePhoto className={iconClassName} />
          <HiOutlineMicrophone className={iconClassName} />
        </div>
        {text && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            type="submit"
            className="flex cursor-pointer items-center rounded-full bg-indigo-500 p-2 transition-all duration-300 hover:bg-indigo-50 hover:text-indigo-500"
          >
            <RiSendPlaneFill className="h-7 w-7" />
          </motion.button>
        )}
      </div>
    </form>
  );
}

export default ChatSender;
