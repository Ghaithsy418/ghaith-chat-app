import React from "react";
import UserInfo from "./UserInfo";
import Search from "./Search";
import { getCurrUser } from "@/app/_helpers/getCurrUser";

async function ListHead() {
  const user = await getCurrUser();
  return (
    <div className="flex flex-1/5 flex-col gap-5 px-4">
      <UserInfo name={user.user_metadata.display_name as string} />
      <Search />
    </div>
  );
}

export default ListHead;
