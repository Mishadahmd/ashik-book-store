import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function AdminRoute({ children }) {
    const token = localStorage.getItem("token");
    if (!token) {
        return <Navigate to="/admin" />;
    }

    // If there’s no specific children passed, it uses <Outlet /> to render whatever page is set up inside this route.
    return children ? children : <Outlet />;
}

export default AdminRoute;
