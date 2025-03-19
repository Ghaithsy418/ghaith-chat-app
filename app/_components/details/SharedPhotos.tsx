"use client";

import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SharedPhoto from "./SharedPhoto";

function SharedPhotos() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between">
        <span>Shared Photos</span>
        <span
          onClick={() => setOpen((open) => !open)}
          className="tranisiton-all cursor-pointer rounded-full bg-slate-950/30 p-2 duration-300 hover:bg-slate-50/60 hover:text-slate-950"
        >
          <MdOutlineKeyboardArrowDown
            className={`${open ? "rotate-180" : ""} transition-all`}
          />
        </span>
      </div>
      {open && (
        <div className="flex flex-col gap-5 bg-indigo-300/30 p-4 rounded-lg">
          <SharedPhoto />
          <SharedPhoto />
          <SharedPhoto />
          <SharedPhoto />
          <SharedPhoto />
        </div>
      )}
    </>
  );
}

export default SharedPhotos;
