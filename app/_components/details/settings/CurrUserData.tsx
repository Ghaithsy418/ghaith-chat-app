"use clinet";

import { useUserStore } from "@/app/_store/useUser";
import { AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { LuSquareMousePointer } from "react-icons/lu";
import UserAvatar from "./UserAvatar";
import UserStatus from "./UserStatus";

function CurrUserData() {
  const { fullName, email, bio } = useUserStore((state) => state.user!);
  const [isHover, setIsHover] = useState(false);
  const t = useTranslations("settings");
  return (
    <div className="mb-4 flex flex-col items-center justify-center">
      <div
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        className="z-30 flex items-center justify-center gap-7 rounded-lg bg-slate-100/10 px-8 py-4 shadow-md shadow-slate-950/10 transition-all duration-300 hover:rounded-sm hover:shadow-xl"
      >
        <UserAvatar />
        <div className="flex flex-col gap-1 rtl:text-end">
          <h2 className="text-lg font-bold">{fullName}</h2>
          <p className="text-xs tracking-wider text-slate-300/80">{email}</p>
        </div>
      </div>
      <div>
        <AnimatePresence mode="wait">
          {isHover && bio && <UserStatus />}
        </AnimatePresence>
        {bio && (
          <p className="mt-6 flex items-center justify-center gap-2 transition-all duration-300">
            <LuSquareMousePointer className="text-2xl text-rose-400" />
            <span className="font-bold text-rose-400">{t("hoverColored")}</span>
            {t("hoverText")}
          </p>
        )}
      </div>
    </div>
  );
}

export default CurrUserData;
