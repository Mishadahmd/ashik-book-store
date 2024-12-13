import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { currentUser, loading } = useAuth();
    // console.log("Protected Route, currentUser: ", currentUser);
    if (loading) {
        return <div>Loading....</div>;
    }
    if (currentUser) {
        return children;
    }
    return <Navigate to="/login" replace />;
};

export default PrivateRoute;

// const location = useLocation();
// state={{ from: location }} is used to redirect the user back to the page they were trying to access after they log in.

/*
// Alternative

if (!currentUser){
    return <Navigate to="/login" replace />;
}

return children;

*/
