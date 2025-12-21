"use client";

import { iconClassName } from "@/app/_helpers/classNames";
import { useSendMutation } from "@/app/_hooks/clientHooks/useSendMutation";
import { socket } from "@/app/_lib/connectSocket";
import useChatting from "@/app/_store/useChatting";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { FormEvent, useRef, useState } from "react";
import {
  HiOutlineCamera,
  HiOutlineMicrophone,
  HiOutlinePaperClip,
  HiOutlinePhoto,
} from "react-icons/hi2";
import { RiSendPlaneFill } from "react-icons/ri";
import EmojisPicker from "./EmojisPicker";

interface ChatSenderProps {
  userId: string;
}

function ChatSender({ userId }: ChatSenderProps) {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const { roomId } = useChatting();
  const { sendMessageMutation } = useSendMutation(roomId, userId);
  const t = useTranslations("sendingMessages");
  const inputFocus = useRef<HTMLInputElement>(null);

  function handleSend(e: FormEvent<HTMLFormElement>) {
    if (!socket || !roomId) return;
    e.preventDefault();
    sendMessageMutation({
      content: text,
      sender: userId,
      chatRoomId: roomId,
    });
    setText("");
  }

  return (
    <form onSubmit={handleSend}>
      <div className="flex h-16 items-center gap-3 border-t border-indigo-100/30 bg-slate-950/30 px-5 transition-all duration-300 sm:gap-5">
        <EmojisPicker setText={setText} open={open} setOpen={setOpen} />
        <input
          type="text"
          ref={inputFocus}
          placeholder={t("placeholder")}
          className="h-full flex-1 border-0 p-2 text-lg focus:border-0 focus:outline-0 disabled:cursor-not-allowed rtl:placeholder:tracking-wider"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onClick={() => setOpen(false)}
        />
        <div className="flex items-center justify-center gap-5">
          <HiOutlineCamera className={`${iconClassName} hidden sm:block`} />
          <HiOutlinePhoto className={`${iconClassName} hidden sm:block`} />
          <HiOutlineMicrophone className={`${iconClassName} hidden sm:block`} />
          <HiOutlinePaperClip className={`${iconClassName} block sm:hidden`} />
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
