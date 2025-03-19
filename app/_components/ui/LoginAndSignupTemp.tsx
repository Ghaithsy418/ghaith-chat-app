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
    <main className="bg-main scrollbar flex py-5 h-[80vh] w-[35rem] flex-col items-center justify-center gap-5 overflow-auto rounded-lg border-2 border-indigo-300/20">
      <WelcomeText>{welcome}</WelcomeText>
      <p className="text-md mb-4">{message}</p>
      {children}
    </main>
  );
};

export default LoginAndSignupTemp;
