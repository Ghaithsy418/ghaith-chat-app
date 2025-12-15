import React, { ReactNode } from "react";
import WelcomeText from "./WelcomeText";

interface TempTypes {
  children: ReactNode;
  welcome: string;
  message: string;
}

const LoginAndSignupTemp: React.FC<TempTypes> = function ({
  children,
  welcome,
  message,
}) {
  return (
    <main className="bg-main scrollbar /* Layout & Sizing */ /* Prevents card from getting too wide on desktop */ /* Margin for mobile edges vs centered on desktop */ /* Spacing & Padding */ /* Mobile: comfortable but compact */ /* Desktop: original spacious feel */ /* Styling */ mx-4 flex w-full max-w-lg flex-col items-center justify-center gap-6 overflow-hidden rounded-lg border-2 border-indigo-300/20 px-6 py-10 sm:mx-auto sm:gap-8 sm:px-16 sm:py-14 rtl:tracking-wider">
      <div className="flex flex-col items-center justify-center gap-2 text-center">
        <WelcomeText>{welcome}</WelcomeText>

        <p className="text-base font-light text-white/90 sm:text-xl">
          {message}
        </p>
      </div>

      <div className="flex w-full flex-col gap-5">{children}</div>
    </main>
  );
};

export default LoginAndSignupTemp;
