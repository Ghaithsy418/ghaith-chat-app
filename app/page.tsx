import { redirect } from "next/navigation";
import List from "./_components/list/List";
import WrapperComponent from "./_components/ui/WrapperComponent";
import { getCurrUser } from "./_helpers/getCurrUser";
import { getUserByEmail } from "./_lib/actions";

async function page() {
  const user = await getCurrUser();
  if (!user) redirect("/login");
  const currUserData = await getUserByEmail(user.email);
  return (
    <main>
      <WrapperComponent
        user={currUserData[0]}
        className="bg-main flex h-[99vh] w-screen border-0 sm:h-[90vh] sm:w-[90vw] sm:rounded-lg sm:border-2 sm:border-indigo-300/20"
      >
        <List />
      </WrapperComponent>
    </main>
  );
}

export default page;
