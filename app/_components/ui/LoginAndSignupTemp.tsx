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
    <main className="bg-main scrollbar flex h-screen w-screen flex-col items-center justify-center gap-8 overflow-auto rounded-lg border-2 border-indigo-300/20 py-5 sm:h-[80vh] sm:w-[35rem] sm:gap-5 rtl:tracking-wider">
      <div className="flex flex-col items-center justify-center gap-1">
        <WelcomeText>{welcome}</WelcomeText>
        <p className="text-md mb-4 rtl:mb-5">{message}</p>
      </div>
      {children}
    </main>
  );
};

export default LoginAndSignupTemp;
