import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLogged, redirectPath = '/', children }: any) => {
    if (!isLogged) {
        return <Navigate to={redirectPath} replace />;
    }

    return children;
};

export  { ProtectedRoute };