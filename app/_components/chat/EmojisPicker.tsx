"use client";
import { useChatting } from "@/app/_context/useChatting";
import { iconClassName } from "@/app/_helpers/classNames";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import React, { Dispatch, SetStateAction } from "react";
import { LuSticker } from "react-icons/lu";

const EmojisPicker: React.FC<EmojiTypes> = function ({
  setText,
  open,
  setOpen,
}) {
  const { friend } = useChatting();

  function handlePick(emoji: EmojiClickData) {
    if (!friend.isBlocked) setText((text) => text + emoji.emoji);
  }

  return (
    <div className="relative">
      {open && (
        <div className="absolute bottom-14 ltr:left-0 rtl:right-0">
          <EmojiPicker
            height={400}
            lazyLoadEmojis={true}
            onEmojiClick={handlePick}
          />
        </div>
      )}
      <LuSticker
        onClick={() => setOpen((open) => !open)}
        className={`${iconClassName} h-7 w-7`}
      />
    </div>
  );
};

interface EmojiTypes {
  setText: Dispatch<SetStateAction<string>>;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default EmojisPicker;
