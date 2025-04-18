"use client";

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useTranslations } from "next-intl";

function ChangeBackground() {
  const [bg, setBg] = useState(Cookies.get("background") || "");
  const t = useTranslations("settings");
  useEffect(
    function () {
      document.querySelector("body")!.style.backgroundImage =
        `url(./background${bg}.jpg)`;
      Cookies.set("background", bg, { expires: 30 });
    },
    [bg],
  );

  const options = [
    { value: "", label: t("snowBackground") },
    { value: "1", label: t("seaBackground") },
    { value: "2", label: t("mapBackground") },
    { value: "3", label: t("spaceBackground") },
  ];

  return (
    <div className="flex w-full items-center justify-between tracking-wider">
      <h4 className="text-lg text-indigo-100">{t("appBackground")}</h4>
      <select
        value={bg}
        onChange={(e) => setBg(e.target.value)}
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

export default ChangeBackground;
