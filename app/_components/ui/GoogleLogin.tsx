/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

function GoogleLogin() {
  return (
    <button className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-sm bg-slate-900/50 px-4 py-2.5 transition-all duration-300 hover:bg-slate-700/50">
      <img
        src="https://authjs.dev/img/providers/google.svg"
        alt="google logo"
        className="h-6"
      />
      <span>Sign in with Google</span>
    </button>
  );
}

export default GoogleLogin;
