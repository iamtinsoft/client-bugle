import jwtDecode from "jwt-decode";
import { DefaultLoginTime, ExtendedLoginTime, TokenKey } from "../constants";
import { User } from "../types/user-type";
import { setWithExpiry } from "../utils/token";

export const AuthLogin = (jwtToken: string, keep_logged: boolean) => {
  keep_logged === true
    ? setWithExpiry(TokenKey, jwtToken, ExtendedLoginTime)
    : setWithExpiry(TokenKey, jwtToken, DefaultLoginTime);
  return GetCurrentUser();
};

export const AuthLogout = () => {
  localStorage.removeItem(TokenKey);
  window.location.href = "/";
};

export function DecodeToken(TokenKey: string) {
  try {
    const jwtToken = TokenKey;
    return jwtDecode<User>(jwtToken ? jwtToken : "");
  } catch (ex) {
    return null;
  }
}

export function GetCurrentUser() {
  try {
    const jwtToken = localStorage.getItem(TokenKey);
    return jwtDecode<User>(jwtToken ? jwtToken : "");
  } catch (ex) {
    return null;
  }
}

// export function SetCurrentUser() {
//   try {
//     const jwtToken = localStorage.getItem(TokenKey);
//     return jwtDecode<User>(jwtToken ? jwtToken : "");
//   } catch (ex) {
//     return null;
//   }
// }
