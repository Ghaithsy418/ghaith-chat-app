import React from "react";

function InitialAvatar({ className = "", name = "A" }) {
  return (
    <div
      className={`${className} flex items-center justify-center rounded-full bg-slate-900 text-slate-300/80`}
    >
      <span>{name?.at(0)?.toUpperCase()}</span>
    </div>
  );
}

export default InitialAvatar;
