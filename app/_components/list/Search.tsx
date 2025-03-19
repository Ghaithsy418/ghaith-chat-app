"use client";

import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import { HiMinus, HiPlus } from "react-icons/hi2";

function Search() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex gap-5">
      <div className="flex flex-1 items-center gap-2 rounded-md bg-slate-950/30 px-2 py-1 transition-all duration-300 hover:bg-slate-950/60">
        <HiSearch className="h-5 w-5" />
        <input type="text" placeholder="search" className="flex-1 pb-1 border-0 focus:border-0 focus:outline-0" />
      </div>
      <span
        onClick={() => setIsOpen((open) => !open)}
        className="cursor-pointer rounded-xl bg-slate-950/30 p-2 transition-all duration-300 hover:bg-slate-950/60"
      >
        {isOpen ? (
          <HiMinus className="h-5 w-5" />
        ) : (
          <HiPlus className="h-5 w-5" />
        )}
      </span>
    </div>
  );
}

export default Search;
