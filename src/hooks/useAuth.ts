import { useEffect } from "react";
import { useCurrentUser } from "./useCurrentUser";
import { useLocalStorage } from "./useLocalStorage";
import { User } from "../types/user-type";

export const useAuth = () => {
  const { user, addUser, removeUser } = useCurrentUser();
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const user = getItem("user");
    if (user) {
      addUser(JSON.parse(user));
    }
  }, []);

  const login = (user: User) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout, addUser };
};
