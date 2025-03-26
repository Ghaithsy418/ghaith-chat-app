"use server";
import { redirect } from "next/navigation";
import supabase from "./supabase";
import { getFriends, getUser } from "./api";
import { cookies } from "next/headers";
import { getCurrUser } from "../_helpers/getCurrUser";
import { revalidatePath } from "next/cache";

export async function signup(formData: FormData) {
  const { name, email, password } = Object.fromEntries(formData);

  const { error } = await supabase.auth.signUp({
    email: String(email),
    password: String(password),
    options: {
      data: {
        display_name: name,
      },
    },
  });

  if (error) throw new Error(error.message);

  const user = await getUser();
  const { error: error2 } = await supabase
    .from("users")
    .insert({display_name: String(name), email: String(email), id: user?.id})
    .select();

  if (error2) throw new Error(error2.message);

  redirect("/login");
}

export async function login(formData: FormData) {
  const { email, password } = Object.fromEntries(formData);

  const { error } = await supabase.auth.signInWithPassword({
    email: String(email),
    password: String(password),
  });

  if (error) {
    throw new Error(error.message);
  }

  const user = await getUser();

  if (user) {
    const cookieStore = await cookies();

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 30);
    cookieStore.set("user", JSON.stringify(user), {
      secure: true,
      expires: expirationDate,
      path: "/",
    });
  }

  redirect("/");
}

export async function logout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }

  const cookieStore = await cookies();
  cookieStore.delete("user");
}

export async function sendMessage(text: string, friendId: string){
  const user = await getCurrUser();
  const {error} = await supabase.from("messages").insert({text, send_by: user?.id, send_to: friendId})
  if(error) throw new Error(error.message)
}

export async function addFriend(id: string){
  const user = await getCurrUser();
  const friends = await getFriends();
  const isAFriend = friends.some((friend)=> friend.id === id );
  if(isAFriend) {return false;}
  const {error} = await supabase.from("friends").insert([{user_id: user?.id, friend_id: id}])
  if(error) throw new Error(error.message)

  revalidatePath("/");
}

export async function getMessages(friend: string){
  const user = await getCurrUser();
  
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .or(`and(send_by.eq.${user.id},send_to.eq.${friend}),and(send_by.eq.${friend},send_to.eq.${user.id})`)
    .order("created_at", { ascending: false });
  
  if(error) throw new Error(error.message);
  
  return data || [];
}
