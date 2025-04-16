import { useTranslations } from "next-intl";
import ChangeBackground from "./ChangeBackground";
import CurrUserData from "./CurrUserData";
import FontSize from "./FontSize";
import SelectLanguage from "./SelectLanguage";
import UpdateProfile from "./UpdateProfile";

function AppSettings() {
  const t = useTranslations("copyright");
  return (
    <div className="flex h-full flex-col items-center justify-between pb-2">
      <div className="flex flex-col items-center py-4">
        <CurrUserData />
        <UpdateProfile />
        <div className="mt-2 flex flex-col items-center justify-center gap-8">
          <hr className="mt-5 w-full" />
          <FontSize />
          <ChangeBackground />
          <SelectLanguage />
        </div>
      </div>
      <p className="flex items-center justify-center gap-1">
        <span>&copy; {t("text")}</span>
        <span>{new Date().getFullYear()}</span>
        <span>{t("saves")}</span>
        <span className="text-lg text-rose-500">{t("name")}</span>
      </p>
    </div>
  );
}

export default AppSettings;
