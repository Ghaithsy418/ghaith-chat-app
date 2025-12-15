"use client";

import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="bg-main flex h-[40vh] w-120 flex-col items-center justify-center gap-10 rounded-lg border-2 border-indigo-300/20">
      <h2 className="text-3xl font-bold text-slate-900">Page Not Found :(</h2>
      <button
        className="cursor-pointer rounded-md bg-indigo-200/30 px-6 py-3 transition-all duration-300 hover:bg-indigo-50/60"
        onClick={router.back}
      >
        Go Back Home
      </button>
    </div>
  );
}
