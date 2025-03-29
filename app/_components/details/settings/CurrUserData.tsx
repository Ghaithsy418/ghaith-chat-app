import { useCurrUser } from "@/app/_context/useCurrUser";
import UserAvatar from "./UserAvatar";

function CurrUserData() {
  const { display_name, email } = useCurrUser();
  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="flex items-center justify-center gap-7 rounded-lg bg-slate-50/10 px-8 py-4 shadow-md shadow-slate-950/10 transition-all duration-300 hover:rounded-sm hover:shadow-xl">
        <UserAvatar />
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">{display_name}</h2>
          <p className="text-xs tracking-wider text-slate-300/80">{email}</p>
        </div>
      </div>
      <div>
        <p>GG for now</p>
      </div>
    </div>
  );
}

export default CurrUserData;
