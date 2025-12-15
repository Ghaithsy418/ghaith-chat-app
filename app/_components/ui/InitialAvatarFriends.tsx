"use client";

import useChatting from "@/app/_context/useChatting";

function InitialAvatarFriends({ className = "" }) {
  const { friend } = useChatting();
  return (
    <div
      className={`${className} flex items-center justify-center rounded-full bg-slate-900 text-slate-300/80`}
    >
      <span>{friend?.friendName?.at(0)?.toUpperCase()}</span>
    </div>
  );
}

export default InitialAvatarFriends;
