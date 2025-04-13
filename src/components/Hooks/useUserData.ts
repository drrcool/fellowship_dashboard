import { auth, firestore } from "@/lib/firebase/clientApp";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

export const useUserData = () => {
  const [user] = useAuthState(auth);
  const [username, setUserName] = useState<string | null>(null);

  useEffect(() => {
    let unsubscribe;

    if (user) {
      const ref = doc(firestore, "users", user.uid);
      unsubscribe = onSnapshot(ref, (doc) => setUserName(doc.data()?.username));
    } else {
      setUserName(null);
    }
  }, [user]);
  return { user, username };
};
