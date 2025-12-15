"use client";
import React from "react";
import InputField from "../../ui/InputField";
import SubmitButton from "../../ui/SubmitButton";
import { useCurrUser } from "@/app/_context/useCurrUser";
import { updateProfile } from "@/app/_lib/actions";
import { useTranslations } from "next-intl";

function UpdateForm({ close }: { close?: () => void }) {
  const { email, display_name, status } = useCurrUser();
  const t = useTranslations("updateWindow");
  const newUpdate = updateProfile.bind(null, email);
  return (
    <form
      action={(formData) => {
        newUpdate(formData);
        close?.();
      }}
      className="mb-4 flex flex-col items-center justify-center gap-9 px-5"
    >
      <h2 className="bg-gradient-to-r from-indigo-300 via-indigo-100 to-indigo-50 bg-clip-text p-2 text-3xl font-bold text-transparent">
        {t("updateTitle")}
      </h2>
      <InputField
        label={t("email")}
        name="Email"
        disabled={true}
        defaultValue={email}
      />
      <InputField
        label={t("fullName")}
        name="name"
        defaultValue={display_name}
        required={true}
      />
      <InputField
        label={t("status")}
        name="status"
        required={true}
        defaultValue={status}
      />
      <SubmitButton loadingText="Updating...">{t("updateButton")}</SubmitButton>
    </form>
  );
}

export default UpdateForm;
