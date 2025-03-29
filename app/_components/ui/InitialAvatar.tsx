import React from "react";

function InitialAvatar({ className = "", name = "A" }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full bg-slate-900 text-slate-300/80 ${className}`}
    >
      <span>{name?.at(0)?.toUpperCase()}</span>
    </div>
  );
}

export default InitialAvatar;
