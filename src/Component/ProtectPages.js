import React, { useContext } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from './AuthContext';

const Protect = () => {
    const authContext = useContext(AuthContext);
    return (
        <>
            {authContext.auth.token ? <Outlet /> : <Navigate to="/" />}

        </>
    )
}

export default Protect
