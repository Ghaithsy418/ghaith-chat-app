"use client";

import { ReactNode } from "react";
import { HiPlus } from "react-icons/hi2";
import Modal from "../ui/Modal";
import AddUser from "./AddUser";

function SearchAndAdd({ children }: { children: ReactNode }) {
  return (
    <div className="flex gap-5">
      {children}
      <Modal>
        <Modal.Open name="addFriend">
          <span className="cursor-pointer rounded-xl bg-slate-950/30 p-2 transition-all duration-300 hover:bg-slate-950/60">
            <HiPlus className="h-5 w-5" />
          </span>
        </Modal.Open>
        <Modal.Window name="addFriend">
          <AddUser />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default SearchAndAdd;
