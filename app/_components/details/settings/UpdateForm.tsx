"use client";

import { useUserStore } from "@/app/_store/useUser";
import { updateProfile } from "@/app/_actions/userActions";
import { useTranslations } from "next-intl";
import { useTransition } from "react";
import InputField from "../../ui/InputField";
import SubmitButton from "../../ui/SubmitButton";

function UpdateForm({ close }: { close?: () => void }) {
  const { email, fullName, bio, phoneNumber } = useUserStore(
    (state) => state.user!,
  );
  const [isLoading, startTransition] = useTransition();
  const t = useTranslations("updateWindow");

  const nameParts = fullName ? fullName.split(" ") : [];
  const firstName = nameParts[0] || "";

  let middleName = "";
  let lastName = "";

  if (nameParts[2]) {
    middleName = nameParts[1];
    lastName = nameParts.slice(2).join(" ");
  } else {
    lastName = nameParts[1] || "";
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      firstName: formData.get("firstName") as string,
      middleName: formData.get("middleName") as string,
      lastName: formData.get("lastName") as string,
      phoneNumber: formData.get("phoneNumber") as string,
      password: formData.get("password") as string,
      bio: formData.get("bio") as string,
    };

    await updateProfile(data);

    close?.();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 flex w-full max-w-4xl flex-col items-center justify-center gap-6 px-4 sm:gap-9 sm:px-6"
    >
      <h2 className="bg-linear-to-r from-indigo-300 via-indigo-100 to-indigo-50 bg-clip-text p-2 text-2xl font-bold text-transparent sm:text-3xl">
        {t("updateTitle")}
      </h2>

      <div className="flex w-full flex-col gap-10">
        <InputField
          label={t("email")}
          name="email"
          disabled={true}
          defaultValue={email}
        />

        <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-2">
          <div className="flex-1">
            <InputField
              label={t("firstName") || "First Name"}
              name="firstName"
              defaultValue={firstName}
              required={true}
            />
          </div>
          <div className="flex-1">
            <InputField
              label={t("middleName") || "Middle Name"}
              name="middleName"
              defaultValue={middleName}
            />
          </div>
          <div className="flex-1">
            <InputField
              label={t("lastName") || "Last Name"}
              name="lastName"
              defaultValue={lastName}
              required={true}
            />
          </div>
        </div>

        <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-2">
          <div className="flex-1">
            <InputField
              label={t("phoneNumber") || "Phone Number"}
              name="phoneNumber"
              defaultValue={phoneNumber}
              type="tel"
            />
          </div>
          <div className="flex-1">
            <InputField
              label={t("bio")}
              name="bio"
              required={true}
              defaultValue={bio}
            />
          </div>
        </div>

        <InputField
          label={t("password") || "Password"}
          name="password"
          type="password"
        />
      </div>

      <SubmitButton loadingText="Updating...">{t("updateButton")}</SubmitButton>
    </form>
  );
}

export default UpdateForm;
