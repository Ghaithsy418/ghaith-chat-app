import ReactQueryProvider from "./_components/ui/ReactQueryProvider";
import WrapperComponent from "./_components/ui/WrapperComponent";
import { getUserProfile } from "./_lib/userApi";

async function page() {
  const currUserData = await getUserProfile();

  if (!currUserData) return null;

  return (
    <main>
      <ReactQueryProvider>
        <WrapperComponent
          user={currUserData}
          className="bg-main flex h-[99vh] w-screen border-0 sm:h-[90vh] sm:w-[90vw] sm:rounded-lg sm:border-2 sm:border-indigo-300/20"
        />
      </ReactQueryProvider>
    </main>
  );
}

export default page;
