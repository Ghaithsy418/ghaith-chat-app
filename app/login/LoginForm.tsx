"use client";

import { motion, Variants } from "framer-motion";
import { useTranslations } from "next-intl";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { TbMoodLookDown, TbMoodLookLeft } from "react-icons/tb";
import { z } from "zod";
import { signIn } from "../_actions/authActions";
import InputField from "../_components/ui/InputField";
import SubmitButton from "../_components/ui/SubmitButton";
import { useFormValidation } from "../_hooks/useFormValidation";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(true);
  const t = useTranslations("login");

  const signinSchema = z.object({
    email: z.string().email(t("emailVal")),
    password: z.string().min(8, t("passwordVal")),
  });

  const { errors, validateForm } = useFormValidation(signinSchema);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const result = validateForm(data);

    if (!result.success) return;

    const response = await signIn(data);

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

      <div className="relative w-full">
        <InputField
          label={t("password")}
          name="password"
          autoComplete="off"
          type={!showPassword ? "text" : "password"}
          error={errors.password}
        />
        <span
          onClick={() => setShowPassword((show) => !show)}
          className="absolute top-3.5 cursor-pointer text-2xl text-indigo-50 transition-all duration-300 hover:text-indigo-500 ltr:right-4 rtl:left-4"
        >
          {!showPassword ? <TbMoodLookDown /> : <TbMoodLookLeft />}
        </span>
      </div>

      <SubmitButton loadingText={t("loginLoading")}>{t("login")}</SubmitButton>
    </motion.form>
  );
}

const variants: Variants = {
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

export default LoginForm;
