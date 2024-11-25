import React from "react";
//import { User } from "../types/user-type";

const UserContext = React.createContext<any>(null);
UserContext.displayName = "UserContext";
export default UserContext;
