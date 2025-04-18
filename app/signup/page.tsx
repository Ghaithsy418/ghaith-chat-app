import Link from "next/link";
import LoginAndSignupTemp from "../_components/ui/LoginAndSignupTemp";
import SignupForm from "./SignupForm";
import GoogleLogin from "../_components/ui/GoogleLogin";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "Sign up",
};

async function page() {
  const t = await getTranslations("signup");
  return (
    <LoginAndSignupTemp welcome={t("title")} message={t("subTitle")}>
      <SignupForm />
      <span className="text-sm tracking-wide rtl:tracking-wider">
        {t("haveAcc")}{" "}
        <Link
          className="text-sky-300 transition-all duration-300 hover:text-sky-50"
          href="/login"
        >
          {t("login")}
        </Link>
      </span>
      <div className="flex flex-col gap-5">
        <div className="grid w-full grid-cols-[1fr_15px_1fr] items-end gap-5">
          <hr className="mb-2 w-[30vw] sm:w-44" />
          <span>{t("or")}</span>
          <hr className="mb-2 w-[30vw] sm:w-44" />
        </div>
        <GoogleLogin />
      </div>
    </LoginAndSignupTemp>
  );
}

export default page;
