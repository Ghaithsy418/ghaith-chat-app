"use client";

import React, { ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface ButtonTypes {
  children: ReactNode;
  loadingText: string;
}

const SubmitButton: React.FC<ButtonTypes> = function ({
  children,
  loadingText,
}) {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className="w-[80vw] cursor-pointer rounded-sm bg-sky-500/80 px-4 py-2 font-semibold transition-all duration-300 hover:bg-sky-500/50 disabled:cursor-not-allowed disabled:bg-gray-700 sm:w-full"
    >
      {pending ? loadingText : children}
    </button>
  );
};

export default SubmitButton;
