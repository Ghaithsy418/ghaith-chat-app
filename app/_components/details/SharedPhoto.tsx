/* eslint-disable @next/next/no-img-element */
import React from "react";
import { HiDownload } from "react-icons/hi";

function SharedPhoto() {
  return (
    <div className="flex h-8 w-full items-center justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src="./photoBG.jpg" alt="photo" className="h-10 rounded-lg" />
        <p className="font-medium">./photoBG.jpg</p>
      </div>
      <span className="tranisiton-all cursor-pointer rounded-full bg-slate-950/30 p-2 duration-300 hover:bg-slate-50/60 hover:text-slate-950">
        <HiDownload />
      </span>
    </div>
  );
}

export default SharedPhoto;
