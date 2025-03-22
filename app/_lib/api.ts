import supabase from "./supabse";

export async function getUser() {
  try {
    const {
      data: {user},
    } = await supabase.auth.getUser();
    return user;
  } catch (error) {
    const err = error as Error;
    throw new Error(err.message);
  }
}
