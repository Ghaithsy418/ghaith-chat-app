/* eslint-disable @next/next/no-img-element */
import React from "react";

function UserDetails() {
  return (
    <div className="flex items-center justify-center flex-col gap-3 border-b-1 border-indigo-100/30">
      <div>
        <img className="h-20 w-20 rounded-full object-cover" src="./avatar.png" alt="avatar" />
      </div>
      <h2 className="font-semibold text-lg">Ghaith Shabakji</h2>
      <p className="text-sm mb-6">Lorem ipsum dolor sit amet consectetur,</p>
    </div>
  );
}

export default UserDetails;
