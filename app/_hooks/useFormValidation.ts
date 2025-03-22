"use client";

import { useState } from "react";
import { z } from "zod";

export function useFormValidation<T extends z.ZodType>(schema: T) {
  type FormData = z.infer<typeof schema>;
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const validateForm = (data: Record<string, unknown>) => {
    try {
      schema.parse(data);
      setErrors({});
      return { success: true, data };
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors: Partial<Record<keyof FormData, string>> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            formattedErrors[err.path[0] as keyof FormData] = err.message;
          }
        });
        setErrors(formattedErrors);
      }
      return { success: false, errors };
    }
  };

  return { errors, validateForm, setErrors };
}