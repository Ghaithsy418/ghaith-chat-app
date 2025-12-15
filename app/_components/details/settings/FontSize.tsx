"use client";

import { useSettings } from "@/app/_context/useSettings";
import Cookie from "js-cookie";
import { useTranslations } from "next-intl";

function FontSize() {
  const { dispatch, fontSize } = useSettings();
  const t = useTranslations("settings");
  Cookie.set("fontSize", fontSize, { expires: 30 });

  const options = [
    { value: "", label: t("initialFont") },
    { value: "sm", label: t("smallFont") },
    { value: "md", label: t("mediumFont") },
    { value: "lg", label: t("largeFont") },
    { value: "xl", label: t("veryLargeFont") },
    { value: "2xl", label: t("extremeLargeFont") },
  ];

  return (
    <div className="flex w-full items-center justify-between tracking-wider">
      <h4 className="text-lg text-indigo-100">{t("fontSize")}</h4>
      <select
        value={fontSize}
        onChange={(e) =>
          dispatch({ type: "changeFontSize", payload: e.target.value })
        }
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

export default FontSize;
