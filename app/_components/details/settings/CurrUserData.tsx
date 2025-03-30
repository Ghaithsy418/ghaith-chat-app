import { useCurrUser } from "@/app/_context/useCurrUser";
import UserAvatar from "./UserAvatar";
import UserStatus from "./UserStatus";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { LuSquareMousePointer } from "react-icons/lu";

function CurrUserData() {
  const { display_name, email } = useCurrUser();
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="mb-4 flex flex-col items-center justify-center gap-5">
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="z-30 flex items-center justify-center gap-7 rounded-lg bg-slate-100/10 px-8 py-4 shadow-md shadow-slate-950/10 transition-all duration-300 hover:rounded-sm hover:shadow-xl"
      >
        <UserAvatar />
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">{display_name}</h2>
          <p className="text-xs tracking-wider text-slate-300/80">{email}</p>
        </div>
      </div>
      <div>
        <AnimatePresence mode="wait">
          {isHover && <UserStatus />}
        </AnimatePresence>
        <p className="mt-3 flex items-center justify-center gap-2 transition-all duration-300">
          <LuSquareMousePointer className="text-2xl text-rose-400" />
          <span className="font-bold text-rose-400">Hover the Card</span> to
          read your Status
        </p>
      </div>
    </div>
  );
}

export default CurrUserData;
