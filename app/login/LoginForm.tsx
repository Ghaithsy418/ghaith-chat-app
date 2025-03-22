"use client";

import React, { useState } from "react";
import { z } from "zod";
import InputField from "../_components/ui/InputField";
import SubmitButton from "../_components/ui/SubmitButton";
import { useFormValidation } from "../_hooks/useFormValidation";
import { TbMoodLookDown, TbMoodLookLeft } from "react-icons/tb";
import { motion } from "framer-motion";
import { login } from "../_lib/actions";

const signinSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

function SigninForm() {
  const [showPassword, setShowPassword] = useState(true);
  const { errors, validateForm } = useFormValidation(signinSchema);

  const handleSubmit = async (formData: FormData) => {
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const result = validateForm(data);
    if (result.success) {
      await login(formData);
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
      <InputField label="Email" name="email" error={errors.email} />
      <div className="relative w-full">
        <InputField
          label="Password"
          name="password"
          autoComplete="off"
          type={!showPassword ? "text" : "password"}
          error={errors.password}
        />
        <span
          onClick={() => setShowPassword((show) => !show)}
          className="absolute top-2 right-4 cursor-pointer text-2xl text-indigo-50 transition-all duration-300 hover:text-indigo-500"
        >
          {showPassword ? <TbMoodLookDown /> : <TbMoodLookLeft />}
        </span>
      </div>
      <SubmitButton loadingText="Signing in...">Sign in</SubmitButton>
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

export default SigninForm;
