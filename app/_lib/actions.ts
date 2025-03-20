"use server";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase";
import { doc, setDoc } from "firebase/firestore";


export async function signup(formData: FormData) {
  const { name, email, password } = Object.fromEntries(formData);

  const res = await createUserWithEmailAndPassword(
    auth,
    email as string,
    password as string,
  );

  await setDoc(doc(db, "users", res.user.uid), {
    name,
    email,
    id: res.user.uid,
    blocked: [],
  });

  await setDoc(doc(db, "userChats", res.user.uid), {
    chats: [],
  });
}

export async function login(formData: FormData) {
    const { email, password } = Object.fromEntries(formData);
    await signInWithEmailAndPassword(auth, email as string, password as string);
}
