import { useTranslations } from "next-intl";
import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function SharedFiles() {
  const t = useTranslations("userInfos");
  return (
    <div className="flex items-center justify-between">
      <span>{t("files")}</span>
      <span className="tranisiton-all cursor-pointer rounded-full bg-slate-950/30 p-2 duration-300 hover:bg-slate-50/60 hover:text-slate-950">
        <MdOutlineKeyboardArrowDown />
      </span>
    </div>
  );
}

export default SharedFiles;
