import { useContext } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";

export default function RouteGuard({children}){
    const { isAdmin  } = useContext(AuthContext);
    const location = useLocation();

    if(!isAdmin){
        console.log(location.pathname);
        location.state = { url: location.pathname};
        return <Navigate to="/login" replace />
    }
  
    return children ? children : <Outlet/>
}