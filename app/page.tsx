import { Suspense } from "react";
import ReactQueryProvider from "./_components/ui/ReactQueryProvider";
import Spinner from "./_components/ui/Spinner";
import UserProfileContent from "./_components/UserProfileContent";

function page() {
  return (
    <main>
      <ReactQueryProvider>
        <Suspense fallback={<Spinner className="mx-auto my-auto" />}>
          <UserProfileContent />
        </Suspense>
      </ReactQueryProvider>
    </main>
  );
}

export default page;
