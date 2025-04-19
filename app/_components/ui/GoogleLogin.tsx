/* eslint-disable @next/next/no-img-element */
"use client";

import { useTranslations } from "next-intl";
import React from "react";

function GoogleLogin() {
  const t = useTranslations("login");
  return (
    <button className="flex w-[80vw] cursor-pointer items-center justify-center gap-3 place-self-center rounded-sm bg-slate-900/50 px-4 py-2.5 transition-all duration-300 hover:bg-slate-700/50 sm:w-full">
      <img
        src="https://authjs.dev/img/providers/google.svg"
        alt="google logo"
        className="h-6"
      />
      <span>{t("loginGoogle")}</span>
    </button>
  );
}

export default GoogleLogin;
