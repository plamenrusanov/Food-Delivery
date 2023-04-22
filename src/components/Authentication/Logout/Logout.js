import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthContext";

export default function Logout() {
  const { onLogout } = useContext(AuthContext);

  useEffect(() => {
    onLogout();
  }, [onLogout]);

  return <Navigate to="/" />;
}
