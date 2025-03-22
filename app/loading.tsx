import React from "react";

function loading() {
  return (
    <main className="bg-main scrollbar flex h-[30vh] w-[20rem] flex-col items-center justify-center gap-5 overflow-auto rounded-lg border-2 border-indigo-300/20 py-5">
      <div className="loader"></div>
    </main>
  );
}

export default loading;
