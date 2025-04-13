import { useUserData } from "../Hooks/useUserData";

export const AdminHeader = ({}: {}) => {
  const { user } = useUserData();
  return JSON.stringify(user);
};
