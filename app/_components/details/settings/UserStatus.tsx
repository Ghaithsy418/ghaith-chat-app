"use client";

import { useUserStore } from "@/app/_store/useUser";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { HiOutlineInformationCircle } from "react-icons/hi2";

function UserStatus() {
  const { bio } = useUserStore((state) => state.user!);
  return createPortal(
    <motion.div
      initial={{ opacity: 0, y: "-50%" }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 120, mass: 0.9, damping: 7 },
      }}
      exit={{ opacity: 0, y: "-50%" }}
      className="absolute top-2 right-[50%] flex max-w-120 translate-x-[50%] items-center justify-center rounded-lg bg-slate-900/40 px-6 py-4 shadow-md shadow-slate-950/40 sm:top-15"
    >
      <p className="flex flex-wrap items-center justify-center gap-3 leading-7 capitalize">
        <span>
          <HiOutlineInformationCircle className="text-2xl font-bold text-rose-400" />
        </span>
        {bio}
      </p>
    </motion.div>,
    document.body,
  );
}

export default UserStatus;
