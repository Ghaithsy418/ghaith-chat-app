"use server"
import { getCurrUser } from "../_helpers/getCurrUser";
import supabase from "./supabase";

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
export async function fetchUsers(email: string){
  const { data: users, error } = await supabase
    .from('users')
    .select("*")
    .eq("email", email)

  if (error) throw new Error(error.message);

  const user = await getCurrUser();
  const filteredUsers = users?.filter((data)=> data.email !== user.email)

  return filteredUsers;
}

export async function getFriends(){
  const user = await getCurrUser();

  const { data: friends, error } = await supabase
    .from('friends')
    .select("*, friend:friend_id(id, display_name, email, avatar_url,status)")
    .eq("user_id", user.id);

  if(error) throw new Error(error.message);

  const { data: friendsOf, error: error2 } = await supabase
    .from('friends')
    .select("*, user:user_id(id, display_name, email, avatar_url,status)")
    .eq("friend_id", user.id);

  if(error2) throw new Error(error2.message);
  
  const allFriends = [
    ...(friends?.map(f => ({
      id: f.friend.id,
      display_name: f.friend.display_name,
      email: f.friend.email,
      avatar_url: f.friend.avatar_url,
      status: f.friend.status,
      isBlocked: f.is_blocked,
      gotBlocked: f.got_blocked,
    })) || []),
    ...(friendsOf?.map(f => ({
      id: f.user.id,
      display_name: f.user.display_name,
      email: f.user.email,
      avatar_url: f.user.avatar_url,
      status: f.user.status,
      isBlocked: f.got_blocked,
      gotBlocked: f.is_blocked,
    })) || [])
  ];

  return allFriends;
}

