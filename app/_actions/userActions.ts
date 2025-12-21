"use server";

import { revalidatePath } from "next/cache";
import { updateUserProfile } from "../_lib/userApi";
import { UpdateProfileType } from "../_types/userTypes";

export const updateProfile = async (data: UpdateProfileType) => {
  try {
    await updateUserProfile(data);

    revalidatePath("/");
  } catch (err) {
    console.error(err);
  }
};
