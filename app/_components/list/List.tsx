import { Suspense } from "react";
import ChatList from "./ChatList";
import ListHead from "./ListHead";
import Spinner from "../ui/Spinner";

function List() {
  return (
    <div className="flex flex-1 flex-col justify-center py-4">
      <ListHead />
      <Suspense fallback={<Spinner className="mx-auto mb-[80%]" />}>
        <ChatList />
      </Suspense>
    </div>
  );
}

export default List;
