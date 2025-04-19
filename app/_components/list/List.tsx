import { Suspense } from "react";
import ChatList from "./ChatList";
import ListHead from "./ListHead";
import Spinner from "../ui/Spinner";
import { getFriends } from "@/app/_lib/api";

async function List() {
  const friends = await getFriends();
  return (
    <div className="flex flex-1 flex-col justify-center border-gray-300/30 py-4 sm:border-r-1">
      <ListHead />
      <Suspense fallback={<Spinner className="mx-auto mb-[80%]" />}>
        <ChatList friends={friends} />
      </Suspense>
    </div>
  );
}

export default List;
