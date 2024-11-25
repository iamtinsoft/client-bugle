import { useEffect, useState } from "react";
import UserContext from "./userContext";
import { User } from "../types/user-type";
//import { GetCurrentUser } from "../services/authService";

export const UserProvider = ({ children, currentUser }: any) => {
  // let currentUser = GetCurrentUser();
  let [user, setUser] = useState<User>();
  useEffect(() => {
    setUser(currentUser ?? ({} as User));
  }, [currentUser]);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
