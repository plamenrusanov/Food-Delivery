import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { logout } from '../../../services/authService';
import { AuthContext } from '../../../contexts/AuthContext';

export default function Logout () {
    const { setUser, token } = useContext(AuthContext);

    useEffect(() => {
        let authToken = token;
        setUser({});
        logout(authToken);
    }, [setUser, token]);

    return <Navigate to="/" />;
};