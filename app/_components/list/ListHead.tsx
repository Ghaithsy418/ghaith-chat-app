import React from "react";
import UserInfo from "./UserInfo";
import SearchAndAdd from "./SearchAndAdd";
import { getCurrUser } from "@/app/_helpers/getCurrUser";
import Search from "./Search";

async function ListHead() {
  const user = await getCurrUser();
  return (
    <div className="flex flex-1/5 flex-col gap-5 px-4">
      <UserInfo name={user.user_metadata.display_name as string} />
      <SearchAndAdd>
        <Search />
      </SearchAndAdd>
    </div>
  );
}

export default ListHead;
