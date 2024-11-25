import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { GetCurrentUser } from "../services/authService";
//import UserContext from "../context/userContext";
interface Props {
  children?: ReactNode;
}
const AdminProtectedRoute = ({ children }: Props) => {
  //const { user } = useContext(UserContext);
  if (!GetCurrentUser()) {
    return <Navigate to="/" replace />;
  }
  //  else if (GetCurrentUser()) {
  //   return <Navigate to="/" replace />;
  // }
  return <div>{children}</div>;
};
export default AdminProtectedRoute;
