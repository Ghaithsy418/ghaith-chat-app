/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import LoginAndSignupTemp from "../_components/ui/LoginAndSignupTemp";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Login",
};

function page() {
  return (
    <LoginAndSignupTemp
      welcome="Welcome Back!"
      message="Please Login to start using the application"
    >
      <LoginForm />
      <span className="text-sm tracking-wide">
        Don&apos;t have an account?{" "}
        <Link
          className="text-sky-300 transition-all duration-300 hover:text-sky-50"
          href="/signup"
        >
          Signup
        </Link>
      </span>
      <div className="flex flex-col gap-5">
        <div className="grid w-full grid-cols-[1fr_15px_1fr] items-end gap-5">
          <hr className="mb-2 w-44" />
          <span>or</span>
          <hr className="mb-2 w-44" />
        </div>
        <button className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-sm bg-slate-900/50 px-4 py-2.5 transition-all duration-300 hover:bg-slate-700/50">
          <img
            src="https://authjs.dev/img/providers/google.svg"
            alt="google logo"
            className="h-6"
          />
          <span>Sign in with Google</span>
        </button>
      </div>
    </LoginAndSignupTemp>
  );
}

export default page;
