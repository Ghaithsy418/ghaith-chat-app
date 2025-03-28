"use client";

import React, { useState } from "react";
import { z } from "zod";
import InputField from "../_components/ui/InputField";
import SubmitButton from "../_components/ui/SubmitButton";
import { useFormValidation } from "../_hooks/useFormValidation";
import { TbMoodLookDown, TbMoodLookLeft } from "react-icons/tb";
import { motion } from "framer-motion";
import { signup } from "../_lib/actions";
import { useTranslations } from "next-intl";

const signupSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

function SignupForm() {
  const [showPassword, setShowPassword] = useState(true);
  const { errors, validateForm } = useFormValidation(signupSchema);
  const t = useTranslations("signup");

  const handleSubmit = async (formData: FormData) => {
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const result = validateForm(data);
    if (result.success) {
      await signup(formData);
    }
  };

  return (
    <motion.form
      variants={variants}
      animate="visible"
      initial="hidden"
      action={handleSubmit}
      className="flex flex-col items-center justify-center gap-8"
    >
      <InputField label={t("name")} name="name" error={errors.name} />
      <InputField label={t("email")} name="email" error={errors.email} />
      <div className="relative w-full">
        <InputField
          label={t("password")}
          name="password"
          autoComplete="off"
          type={showPassword ? "password" : "text"}
          error={errors.password}
        />
        <span
          onClick={() => setShowPassword((show) => !show)}
          className="absolute top-2 cursor-pointer text-2xl text-indigo-50 transition-all duration-300 hover:text-indigo-500 ltr:right-4 rtl:left-4"
        >
          {showPassword ? <TbMoodLookDown /> : <TbMoodLookLeft />}
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
