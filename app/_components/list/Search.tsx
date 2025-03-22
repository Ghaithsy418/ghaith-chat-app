"use client";

import { HiSearch } from "react-icons/hi";
import { HiPlus } from "react-icons/hi2";
import Modal from "../ui/Modal";

function Search() {
  return (
    <div className="flex gap-5">
      <div className="flex flex-1 items-center gap-2 rounded-md bg-slate-950/30 px-2 py-1 transition-all duration-300 hover:bg-slate-950/60">
        <HiSearch className="h-5 w-5" />
        <input
          type="text"
          placeholder="search"
          className="flex-1 border-0 pb-1 focus:border-0 focus:outline-0"
        />
      </div>
      <Modal>
        <Modal.Open name="addFriend">
          <span className="cursor-pointer rounded-xl bg-slate-950/30 p-2 transition-all duration-300 hover:bg-slate-950/60">
            <HiPlus className="h-5 w-5" />
          </span>
        </Modal.Open>
        <Modal.Window name="addFriend">
          <p>Hello World!</p>
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default Search;
