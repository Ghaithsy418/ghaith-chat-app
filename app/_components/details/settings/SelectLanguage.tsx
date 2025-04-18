"use client";

import { useLocale, useTranslations } from "next-intl";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

function SelectLanguage() {
  const locale = useLocale();
  const router = useRouter();
  const [language, setLanguage] = useState(locale);
  const t = useTranslations("settings");

  const options = [
    { value: "ar", label: t("arabic") },
    { value: "en", label: t("english") },
  ];

  return (
    <div className="flex w-full items-center justify-between tracking-wider">
      <h4 className="text-lg text-indigo-100">{t("language")}</h4>
      <select
        value={language}
        onChange={(e) => {
          setLanguage(e.target.value);
          Cookies.set("lang", e.target.value, { expires: 30 });
          router.refresh();
        }}
        className="rounded-sm bg-slate-100/10 p-2"
      >
        {options.map((option, index) => (
          <option className="text-slate-950" key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SelectLanguage;
