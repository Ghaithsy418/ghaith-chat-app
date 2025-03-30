"use client";
import React from "react";
import InputField from "../../ui/InputField";
import SubmitButton from "../../ui/SubmitButton";
import { useCurrUser } from "@/app/_context/useCurrUser";
import { updateProfile } from "@/app/_lib/actions";

function UpdateForm() {
  const { email, display_name } = useCurrUser();
  const newUpdate = updateProfile.bind(null, email);
  return (
    <form
      action={newUpdate}
      className="mb-4 flex flex-col items-center justify-center gap-9 px-5"
    >
      <h2 className="bg-gradient-to-r from-indigo-300 via-indigo-100 to-indigo-50 bg-clip-text p-2 text-3xl font-bold text-transparent">
        Updating Profile
      </h2>
      <InputField
        label="Email"
        name="Email"
        disabled={true}
        defaultValue={email}
      />
      <InputField
        label="Full Name"
        name="name"
        defaultValue={display_name}
        required={true}
      />
      <InputField label="Status" name="status" required={true} />
      <SubmitButton loadingText="Updating...">Update</SubmitButton>
    </form>
  );
}

export default UpdateForm;
