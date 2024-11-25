import axios from "axios";
import { apiBaseUrl } from "../constants";

export default axios.create({
  baseURL: apiBaseUrl,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "x-auth-token":
      "eyJhbGciOiJIUzI1NiJ9.eC1hdXRoLXRva2Vu.X2rZNmW02e6kDlMXodNe5M41lsU4HDLllqkRcJI2MVE",
  },
});
