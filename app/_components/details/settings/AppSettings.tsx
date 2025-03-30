import CurrUserData from "./CurrUserData";
import FontSize from "./FontSize";
import UpdateProfile from "./UpdateProfile";

function AppSettings() {
  return (
    <div className="flex flex-col items-center justify-center py-4">
      <CurrUserData />
      <UpdateProfile />
      <div className="mt-2 flex flex-col items-center justify-center gap-8">
        <hr className="mt-5 w-full" />
        <FontSize />
      </div>
    </div>
  );
}

export default AppSettings;
