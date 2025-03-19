import React from "react";
import UserDetails from "./UserDetails";
import ChatSettings from "./ChatSettings";
import PrivacyAndHelp from "./PrivacyAndHelp";
import SharedPhotos from "./SharedPhotos";
import SharedFiles from "./SharedFiles";

function Details() {
  return (
    <div className="scrollbar h-full py-5 flex-1 overflow-auto">
      <div className="flex h-full flex-col gap-5 px-4">
        <UserDetails />
        <ChatSettings />
        <PrivacyAndHelp />
        <SharedPhotos />
        <SharedFiles />
        <div>
          <button className="mt-auto mb-10 h-9 w-full cursor-pointer rounded-md bg-gradient-to-br from-red-500/80 via-rose-600/80 to-rose-700/80 shadow-sm shadow-slate-950/30 transition-all duration-300 hover:bg-red-700/80 hover:shadow-md hover:shadow-slate-950/40 focus:border-0 focus:ring-red-500/30 focus:outline-4 focus:outline-offset-1 focus:outline-red-500/50 active:shadow-xs active:shadow-slate-950/30">
            Block User
          </button>
        </div>
      </div>
    </div>
  );
}

export default Details;
