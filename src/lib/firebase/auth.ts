import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged as _onAuthStateChanged,
  onIdTokenChanged as _onIdTokenChanged,
  NextOrObserver,
  User,
} from "firebase/auth";

import { auth } from "./clientApp";

export const onAuthStateChanged = (cb: NextOrObserver<User>) => {
  return _onAuthStateChanged(auth, cb);
};

export const onIdTokenChanged = (cb: NextOrObserver<User>) => {
  return _onIdTokenChanged(auth, cb);
};

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
};

export const signOut = () => {
  try {
    return auth.signOut();
  } catch (error) {
    console.error("Error signing out with google:", error);
  }
};
