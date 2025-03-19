import React from "react";
import Chat from "./_components/chat/Chat";
import List from "./_components/list/List";
import Details from "./_components/details/Details";
import WrapperComponent from "./_components/ui/WrapperComponent";

function page() {
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
