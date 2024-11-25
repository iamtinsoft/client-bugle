export const DefaultLoginTime = 60000 * 60 * 24; // login for a day
export const ExtendedLoginTime = 60000 * 60 * 24 * 30; // login for 30 days
const env: string = "live";
export const TokenKey = "token";
const localServer = "http://localhost:4000/";
//const liveServer = "https://bugle.ng/api/";
const liveServer = "https://server-bugle.tinsoft.tech/";
export const ServerUrl = env == "local" ? localServer : liveServer;
export const SocketUrl =
  env == "local" ? localServer : "https://server-bugle.tinsoft.tech/";
export const apiBaseUrl =
  env == "local" ? `${localServer}api` : `${liveServer}api`;
export const darkColor = "#0B2318";
export const lightColor = "#F9FCF5";
export const accentColor = "#73A400";
export const midColor = "#EDF5F0";
export const greenColor = "#40C138";
export const yellowColor = "#F5C515";
export const redColor = "#FF5757";
export const hoverColor = "#FFEEC1";
export const linkColor = "#4F5564";
export const greyColor = "#F5F8FA";
export const AppName = "Bugle";
