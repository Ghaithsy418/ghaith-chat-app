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
        className="bg-main flex h-[90vh] w-[90vw] rounded-lg border-2 border-indigo-300/20"
      >
        <List />
      </WrapperComponent>
    </main>
  );
}

export default page;
