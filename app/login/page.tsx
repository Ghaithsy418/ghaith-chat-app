import { getTranslations } from "next-intl/server";
import Link from "next/link";
import GoogleLogin from "../_components/ui/GoogleLogin";
import LoginAndSignupTemp from "../_components/ui/LoginAndSignupTemp";
import LoginForm from "./LoginForm";

export const metadata = {
  title: "Login",
};

async function page() {
  const t = await getTranslations("login");

  return (
    <LoginAndSignupTemp welcome={t("title")} message={t("subTitle")}>
      <LoginForm />

      <span className="text-center text-sm tracking-wide rtl:tracking-wider">
        {t("dontHave")}{" "}
        <Link
          className="text-sky-300 transition-all duration-300 hover:text-sky-50"
          href="/signup"
        >
          {t("signup")}
        </Link>
      </span>

      <div className="flex w-full flex-col gap-5">
        <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-5">
          <hr className="w-full border-gray-300/30" />
          <span className="text-gray-400">{t("or")}</span>
          <hr className="w-full border-gray-300/30" />
        </div>

        <GoogleLogin />
      </div>
    </LoginAndSignupTemp>
  );
}

export default page;
