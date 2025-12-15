import { useState } from "react";
import { z } from "zod";

export function useFormValidation<T extends z.ZodTypeAny>(schema: T) {
  type FormData = z.infer<T>;

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );

  const validateForm = (data: unknown) => {
    const result = schema.safeParse(data);

    if (!result.success) {
      const formattedErrors: Partial<Record<keyof FormData, string>> = {};

      result.error.issues.forEach((issue) => {
        const fieldName = issue.path[0] as keyof FormData;
 
        if (fieldName && !formattedErrors[fieldName]) {
          formattedErrors[fieldName] = issue.message;
        }
      });

      setErrors(formattedErrors);
      return { success: false, errors: formattedErrors };
    }

    return { success: true, data: result.data as FormData };
  };

  return { errors, validateForm, setErrors };
}
