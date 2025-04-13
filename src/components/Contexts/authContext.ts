import { User } from "firebase/auth";
import { createContext, useContext } from "react";

interface UserContext {
  user: User | null;
  username: string | null;
}
export const AuthContext = createContext<UserContext>({
  user: null,
  username: null,
});

export const useUser = () => {
  return useContext(AuthContext);
};
