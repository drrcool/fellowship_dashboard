import { onIdTokenChanged } from "@/lib/firebase/auth";
import { User } from "firebase/auth";
import { useEffect } from "react";
import { setCookie, deleteCookie } from "cookies-next";

const useUserSession = (initialUser: User | null) => {
  useEffect(() => {
    return onIdTokenChanged(async (user: User | null) => {
      if (user) {
        const idToken = await user.getIdToken();
        await setCookie("__session", idToken);
      } else {
        await deleteCookie("__session");
      }
      if (initialUser?.uid === user?.uid) {
        return;
      }
      window.location.reload();
    });
  }, [initialUser]);

  return initialUser;
};
