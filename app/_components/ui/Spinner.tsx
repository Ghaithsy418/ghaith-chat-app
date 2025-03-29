import React from "react";

function Spinner({ className = "" }: { className?: string }) {
  return <div className={`loader ${className}`}></div>;
}

export default Spinner;
