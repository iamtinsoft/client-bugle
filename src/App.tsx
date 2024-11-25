import { BrowserRouter } from "react-router-dom";
import Router from "./routes/routes";
//import { useAuth } from "./context/AuthContext";
function App() {
  // const { authUser, setAuthUser, isLoggedIn, setIsLoggedIn } = useAuth();
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}

export default App;
