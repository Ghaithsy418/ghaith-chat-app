"use client";

import { useSettings } from "@/app/_context/useSettings";
import Cookie from "js-cookie";

function FontSize() {
  const { dispatch, fontSize } = useSettings();
  Cookie.set("fontSize", fontSize);

  return (
    <div className="flex items-center justify-center gap-16 tracking-wider">
      <h4 className="text-lg text-indigo-100">Font Size:</h4>
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

const options = [
  { value: "", label: "Chats Font Size" },
  { value: "sm", label: "small" },
  { value: "md", label: "medium" },
  { value: "lg", label: "large" },
  { value: "xl", label: "very large" },
  { value: "2xl", label: "extreme large" },
];

export default FontSize;
