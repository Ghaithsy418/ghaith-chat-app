import { logout } from "@/app/_actions/authActions";
import { iconClassName } from "@/app/_helpers/classNames";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { CgLogOut } from "react-icons/cg";

function Logout() {
  function handleLogout() {
    toast.promise(logout(), {
      loading: "Logging out...",
      success: () => {
        return redirect("/login");
      },
      error: (err) => `Error: ${err.message}`,
    });
  }

  return (
    <button onClick={handleLogout}>
      <CgLogOut
        className={`${iconClassName} hover:border-b-2 hover:border-b-red-500 hover:text-red-500`}
      />
    </button>
  );
}

export default Logout;
