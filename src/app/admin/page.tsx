"use client";

import { AuthContext } from "@/components/Contexts/authContext";
import { useUserData } from "@/components/Hooks/useUserData";
import { AdminHeader } from "@/components/Layout/AdminHeader";
import { signInWithGoogle, signOut } from "@/lib/firebase/auth";
import { User } from "firebase/auth";

const SignOutButton = () => {
  return <button onClick={() => signOut()}>Sign Out</button>;
};

const SignInButton = () => {
  return (
    <button className="btn-google" onClick={signInWithGoogle}>
      <img src={"/google.png"} /> Sign in with Google
    </button>
  );
};

const Admin = () => {
  const { user, username } = useUserData();

  return (
    <AuthContext.Provider value={{ user: {} as User, username: "null" }}>
      <AdminHeader />
      {user ? <SignOutButton /> : <SignInButton />}
    </AuthContext.Provider>
  );
};
export default Admin;
