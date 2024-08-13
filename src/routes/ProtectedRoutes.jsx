/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";


const ProtectedRoutes = () => {

    const token = localStorage.getItem('token')

    if (!token) {
        <Navigate to="/login" />
    }
    return <Outlet />;
}

export default ProtectedRoutes