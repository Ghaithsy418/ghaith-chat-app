import { redirect } from "next/navigation";
import Chat from "./_components/chat/Chat";
import Details from "./_components/details/Details";
import List from "./_components/list/List";
import WrapperComponent from "./_components/ui/WrapperComponent";
import { getCurrUser } from "./_helpers/getCurrUser";

async function page() {
  const user = await getCurrUser();
  if (!user) redirect("/login");

  return (
    <main>
      <WrapperComponent className="bg-main flex h-[90vh] w-[90vw] rounded-lg border-2 border-indigo-300/20">
        <List />
        <Chat />
        <Details />
      </WrapperComponent>
    </main>
  );
}

export default page;
