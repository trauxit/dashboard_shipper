import React, { useContext } from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from './AuthContext';
import { useSelector } from 'react-redux';
const Protect = () => {
    const { token } = useSelector((state) => state.user);
    return (
        <>
            {token ? <Outlet /> : <Navigate to="/login" />}

        </>
    )
}

export default Protect
