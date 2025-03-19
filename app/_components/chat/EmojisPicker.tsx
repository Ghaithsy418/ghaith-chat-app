"use client";
import { iconClassName } from "@/app/utils/classNames";
import EmojiPicker, { EmojiClickData } from "emoji-picker-react";
import React, { Dispatch, SetStateAction } from "react";
import { LuSticker } from "react-icons/lu";

const EmojisPicker: React.FC<EmojiTypes> = function ({
  setText,
  open,
  setOpen,
}) {
  function handlePick(emoji: EmojiClickData) {
    setText((text) => text + emoji.emoji);
  }

  return (
    <div className="relative">
      {open && (
        <div className="absolute bottom-14 left-0">
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
