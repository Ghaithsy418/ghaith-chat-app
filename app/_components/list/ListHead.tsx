import Search from "./Search";
import SearchAndAdd from "./SearchAndAdd";
import UserInfo from "./UserInfo";

function ListHead() {
  return (
    <div className="flex flex-1/5 flex-col gap-5 px-4">
      <UserInfo />
      <SearchAndAdd>
        <Search />
      </SearchAndAdd>
    </div>
  );
}

export default ListHead;
