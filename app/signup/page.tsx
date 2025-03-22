/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import LoginAndSignupTemp from "../_components/ui/LoginAndSignupTemp";
import SignupForm from "./SignupForm";
import GoogleLogin from "../_components/ui/GoogleLogin";

export const metadata = {
  title: "Sign up",
};

function page() {
  return (
    <LoginAndSignupTemp
      welcome="Sign Up"
      message="Your Journey will start here!"
    >
      <SignupForm />
      <span className="text-sm tracking-wide">
        You have an account?{" "}
        <Link
          className="text-sky-300 transition-all duration-300 hover:text-sky-50"
          href="/login"
        >
          Login
        </Link>
      </span>
      <div className="flex flex-col gap-5">
        <div className="grid w-full grid-cols-[1fr_15px_1fr] items-end gap-5">
          <hr className="mb-2 w-44" />
          <span>or</span>
          <hr className="mb-2 w-44" />
        </div>
        <GoogleLogin />
      </div>
    </LoginAndSignupTemp>
  );
}

export default page;
