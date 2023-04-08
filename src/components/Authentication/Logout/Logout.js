import { useContext, useEffect} from "react";
import { Navigate } from "react-router-dom";

import { logout } from "../../../services/authService";
import { AuthContext } from "../../../contexts/AuthContext";

export default function Logout() {
  const { setUser, token } = useContext(AuthContext);
  
  useEffect(() => {
    logout(token)
    .then(setUser({}))
    .catch((error) => console.log(error));
  }, [token, setUser]);



  return <Navigate to="/" />;
}
