"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { TbMoodLookDown, TbMoodLookLeft } from "react-icons/tb";
import { z } from "zod";
import { signUp } from "../_actions/authActions";
import InputField from "../_components/ui/InputField";
import SubmitButton from "../_components/ui/SubmitButton";
import { useFormValidation } from "../_hooks/useFormValidation";

function SignupForm() {
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const t = useTranslations("signup");

  const signupSchema = z
    .object({
      firstName: z.string().min(2, t("firstNameVal")),
      middleName: z.string().optional(),
      lastName: z.string().min(2, t("lastNameVal")),
      email: z.string().email(t("emailVal")),
      password: z.string().min(8, t("passwordVal")),
      passwordConfirm: z.string(),
    })
    .refine((data) => data.password === data.passwordConfirm, {
      message: t("passwordConfirmVal"),
      path: ["passwordConfirm"],
    });

  const { errors, validateForm } = useFormValidation(signupSchema);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const data = {
      firstName: formData.get("firstName") as string,
      middleName: formData.get("middleName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      passwordConfirm: formData.get("passwordConfirm") as string,
    };

    const result = validateForm(data);

    if (!result.success) return;

    const response = await signUp(data);

    if (!response?.success) toast.error(response?.message as string);
  };

  return (
    <motion.form
      variants={variants}
      animate="visible"
      initial="hidden"
      onSubmit={handleSubmit}
      className="flex w-full flex-col items-center justify-center gap-5 sm:gap-8"
    >
      <InputField label={t("email")} name="email" error={errors.email} />

      <div className="grid w-full grid-cols-2 gap-4 sm:gap-6">
        <InputField
          label={t("firstName")}
          name="firstName"
          error={errors.firstName}
        />
        <InputField
          label={t("middleName")}
          name="middleName"
          error={errors.middleName}
        />
      </div>

      <InputField
        label={t("lastName")}
        name="lastName"
        error={errors.lastName}
      />

      <div className="relative w-full">
        <InputField
          label={t("password")}
          name="password"
          autoComplete="new-password"
          type={showPassword ? "password" : "text"}
          error={errors.password}
        />
        <span
          onClick={() => setShowPassword((show) => !show)}
          className="absolute top-3.5 cursor-pointer text-2xl text-indigo-50 transition-all duration-300 hover:text-indigo-500 ltr:right-4 rtl:left-4"
        >
          {!showPassword ? <TbMoodLookDown /> : <TbMoodLookLeft />}
        </span>
      </div>

      <div className="relative w-full">
        <InputField
          label={t("confirmPassword")}
          name="passwordConfirm"
          autoComplete="new-password"
          type={showConfirmPassword ? "password" : "text"}
          error={errors.passwordConfirm}
        />
        <span
          onClick={() => setShowConfirmPassword((show) => !show)}
          className="absolute top-3.5 cursor-pointer text-2xl text-indigo-50 transition-all duration-300 hover:text-indigo-500 ltr:right-4 rtl:left-4"
        >
          {!showConfirmPassword ? <TbMoodLookDown /> : <TbMoodLookLeft />}
        </span>
      </div>

      <SubmitButton loadingText={t("signupLoading")}>
        {t("signup")}
      </SubmitButton>
    </motion.form>
  );
}

const variants = {
  hidden: {
    opacity: 0,
    y: "-20%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

export default SignupForm;
